import sys
import numpy as np
import pandas as pd
import scipy.sparse as sp
from sklearn.metrics.pairwise import cosine_similarity
from sortedcontainers import SortedList
import time
import json

class KeyValPair:
  def __init__(self, key, val):
    self.key = key
    self.val = val

  def __lt__(self, other):
    '''
    Sort by self.val.
    '''
    return self.val < other.val

  def __eq__(self, other):
    '''
    Define builtin equality to be equal self.vals.
    '''
    return self.val == other.val
  
  def is_equal_to(self, some_id):
    '''
    Return whether current KeyValPair has same key as supplied argument.
    
    @param int some_id key to use to see if current instance has the same key
    @returns boolean whether some_id is same value as calling instance's key
    '''
    return self.key == some_id

  def __repr__(self):
    return '(id: {} val: {})'.format(self.key, self.val)

class ChefRecommendationEngine:

  def __init__(self, r, d):
    '''
    Initialize recommendation engine. Load cold start dataset. Preprocess and create similarity matrix and ratings matrix.

    @param r redis cache instance
    @param d initial dataset name
    @returns void 
    '''

    self.redis_cache = r
    df_ratings = pd.read_csv(d)

    self.user_id_set = set(df_ratings['user_id'].unique().tolist())
    self.max_user_id = df_ratings['user_id'].max() + 10000

    self.chef_id_set = set(df_ratings['chef_id'].unique().tolist())
    self.max_chef_id = df_ratings['chef_id'].max() + 10000

    
    self.ratings_matrix = sp.dok_matrix((self.max_user_id+1, self.max_chef_id+1), dtype=np.int8)

    for index, row in df_ratings.iterrows():
      self.ratings_matrix[row['user_id'], row['chef_id']] = row['rating']

    self.sparse_ratings_matrix = self.ratings_matrix.tocsr()

    self.similarity_cache = {}
    self.similarity_matrix = {} # pairwise cosine similarity, {user_id: SortedList([KeyValPair(user_id, similarity)])}
    self.compute_similarity()

    self.recs = {} # {user_id: [chef_id1, chef_id2, ..., chef_id20]}
    self.update_recs()

  def compute_similarity(self):
    '''
    Compute pairwise cosine similarity matrix for users. Updates member variables.
    Similarity matrix will be in the form of: { user_id: SortedList([KeyValPair(sim_user_id, similarity), ...]) }

    @returns void
    '''

    for user_i in self.user_id_set:
      for user_j in (self.user_id_set - set([user_i])):
        sim = cosine_similarity(self.sparse_ratings_matrix[user_i], self.sparse_ratings_matrix[user_j])[0][0]
        if user_i in self.similarity_cache:
          self.similarity_cache[user_i].update({user_j: sim})
        else:
          self.similarity_cache[user_i] = {user_j: sim}

        if user_i in self.similarity_matrix:
          self.similarity_matrix[user_i].add(KeyValPair(user_j, sim))
        else:
          self.similarity_matrix[user_i] = SortedList([KeyValPair(user_j, sim)])
          
    
  def recompute_similarity(self, user_id, chef_id, rating):
    '''
    Efficiently recompute the similarity matrix by only updating the relevant user_id/chef_id pairs.

    @param int user_id the user ID associated with the new rating
    @param int chef_id the chef ID associated with the new rating
    @param int rating the rating of the chef by the user
    @returns void, just has a side effect where it updates the similarity matrices
    '''
    is_old_user = user_id in self.similarity_matrix
    self.similarity_matrix[user_id] = SortedList([])

    for user_j in (self.user_id_set - set([user_id])):
      sim = cosine_similarity(self.sparse_ratings_matrix[user_id], self.sparse_ratings_matrix[user_j])[0][0]
      if is_old_user:
        prev_sim = self.similarity_cache[user_j][user_id]
        init_index = self.similarity_matrix[user_j].index(KeyValPair(user_id, prev_sim))
        count = self.similarity_matrix[user_j].count(KeyValPair(user_id, prev_sim))

        index = 0
        for sim_pair in self.similarity_matrix[user_j].islice(init_index, init_index+count):
          if sim_pair.is_equal_to(user_id):
            index += init_index
            break
          index += 1
        
        self.similarity_matrix[user_j].pop(index)
        self.similarity_matrix[user_j].add(KeyValPair(user_id, sim))
        self.similarity_matrix[user_id].add(KeyValPair(user_j, sim))
        self.similarity_cache[user_j][user_id] = sim
        self.similarity_cache[user_id][user_j] = sim
      else:
        self.similarity_matrix[user_j].add(KeyValPair(user_id, sim))
        self.similarity_cache[user_j].update({user_id: sim})
        self.similarity_matrix[user_id].add(KeyValPair(user_j, sim))

        if user_id in self.similarity_cache:
          self.similarity_cache[user_id].update({user_j: sim})
        else:
          self.similarity_cache[user_id] = {user_j: sim}

  def get_top_similar_users(self, user_id, k):
    '''
    Compute top k similar users for given user_id.

    @param int user_id the ID of the user to find k similar users for
    @param int k the number of similar users that will be returned
    @returns list top_users a list of length k with the user IDs of the similar users
    '''
    top_users = list(map(lambda x: x.key, list(self.similarity_matrix[user_id].islice(0, k, reverse=True))))
    return top_users

  def receive_new_rating(self, user_id, chef_id, rating):
    unseen_entry = False
    if user_id > self.max_user_id or chef_id > self.max_chef_id:
      self.max_user_id = max(self.max_user_id, user_id) + 10000
      self.max_chef_id = max(self.max_chef_id, chef_id) + 10000
      self.user_id_set.add(user_id)
      self.chef_id_set.add(chef_id)

      self.ratings_matrix.resize((self.max_user_id+1, self.max_chef_id+1))
      self.ratings_matrix[user_id, chef_id] = rating
      unseen_entry = True
    else:
      self.ratings_matrix[user_id, chef_id] = rating

    if user_id not in self.user_id_set:
      self.user_id_set.add(user_id)
      self.chef_id_set.add(chef_id)
      self.ratings_matrix[user_id, chef_id] = rating
    
    self.sparse_ratings_matrix = self.ratings_matrix.tocsr()

    self.recompute_similarity(user_id, chef_id, rating)
    self.update_recs()

  def update_recs(self):
    '''
    Update chef recommendations for each user. Will update in redis and in memory.
    Format: {user_id: [chef_ids], ..., }

    @returns void
    '''
    for user_id in self.user_id_set:
      sim_users = self.get_top_similar_users(user_id, 10)
      top_recs = self.get_top_recs(user_id, sim_users, 10)
      
      self.redis_cache.set(str(user_id), json.dumps(list(map(int, top_recs))))
      self.recs[user_id] = top_recs


  def get_top_recs(self, user_id, sim_users, n):
    '''
    Given user_id with its top k similar users, return top n
    chefs with highest predicted ratings. Does not filter out
    chefs that the user has already rated.

    @param int user_id user to get n chef recommendations for
    @param int sim_users the list of similar users for user_id
    @param int n number of chef recommendations to return
    @returns list top_chefs top n predicted rated chefs for user_id
    '''
    
    summation = None
    for s_user in sim_users:
      if summation == None:
        summation = self.sparse_ratings_matrix[s_user]
      else:
        summation += self.sparse_ratings_matrix[s_user]

    length = len(sim_users)
    summation = summation/length

    rated_chefs = summation[0].nonzero()[1] # list of chef ids with non-zero ratings

    sorted_chefs = SortedList([])
    for rated_chef_id in rated_chefs:
      sorted_chefs.add(KeyValPair(rated_chef_id, summation[0, rated_chef_id]))

    # give predicted rating, too, maybe
    top_chefs = list(map(lambda x: x.key, list(sorted_chefs.islice(0, n, reverse=True))))
    return top_chefs


# start = time.time()
# x = ChefRecommendationEngine()
# end = time.time()
# print(end - start)
# print(x.recs)

# start = time.time()
# x.receive_new_rating(32, 22, 2)
# end = time.time()
# print(end - start)
# print(x.recs)