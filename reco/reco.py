import numpy as np
import pandas as pd
import scipy.sparse as sp
from sklearn.metrics.pairwise import cosine_similarity
from sortedcontainers import SortedList

# sort by val
class KeyValPair:
  def __init__(self, key, val):
    self.key = key
    self.val = val

  def __lt__(self, other):
    return self.val < other.val

  def __repr__(self):
    return '(id: {} val: {})'.format(self.key, self.val)

class ChefRecommendationEngine:

  def __init__(self):
    df_ratings = pd.read_csv('./ratings.csv')

    self.user_id_set = set(df_ratings['user_id'].unique().tolist())
    self.max_user_id = df_ratings['user_id'].max()

    self.chef_id_set = set(df_ratings['chef_id'].unique().tolist())
    self.max_chef_id = df_ratings['chef_id'].max()

    
    self.ratings_matrix = sp.dok_matrix((self.max_user_id+1, self.max_chef_id+1), dtype=np.int8)

    for index, row in df_ratings.iterrows():
      self.ratings_matrix[row['user_id'], row['chef_id']] = row['rating']

    self.sparse_ratings_matrix = self.ratings_matrix.tocsr()

    self.similarity_matrix = {} # pairwise cosine similarity, {user_id: SortedList([KeyValPair(user_id, similarity)])}
    self.compute_similarity()

    self.recs = {} # {user_id: [chef_id1, chef_id2, ..., chef_id20]}
    self.update_recs()
    print(self.recs)

  def compute_similarity(self):
    '''
    Compute pairwise cosine similarity matrix.
    { user_id: SortedList([KeyValPair(sim_user_id, similarity), ...]) }
    '''

    for user_i in self.user_id_set:
      for user_j in (self.user_id_set - set([user_i])):
        sim = cosine_similarity(self.sparse_ratings_matrix[user_i], self.sparse_ratings_matrix[user_j])[0][0]

        if user_i in self.similarity_matrix:
          self.similarity_matrix[user_i].add(KeyValPair(user_j, sim))
        else:
          self.similarity_matrix[user_i] = SortedList([KeyValPair(user_j, sim)])

  def get_top_similar_users(self, user_id, k):
    '''
    Get top k similar users for given user_id.
    '''
    i = 0
    top_users = []

    for user_sim_pair in self.similarity_matrix[user_id].irange(reverse=True):
      if i == k:
        break
      i += 1
      top_users.append(user_sim_pair.key)

    return top_users

  def receive_new_rating(self, user_id, chef_id, rating):
    print(5) # TODO placeholder

  def update_recs(self):
    '''
    Update chef recommendations for each user.
    '''
    for user_id in self.user_id_set:
      sim_users = self.get_top_similar_users(user_id, 10)
      top_recs = self.get_top_recs(user_id, sim_users, 10)

      self.recs[user_id] = top_recs


  def get_top_recs(self, user_id, sim_users, n):
    '''
    Given user_id with its top k similar users, return top n
    chefs with highest predicted rating.
    '''
    
    summation = None
    for s_user in sim_users:
      if summation == None:
        summation = self.sparse_ratings_matrix[s_user]
      else:
        summation += self.sparse_ratings_matrix[s_user]

    length = len(sim_users)
    summation = summation/length

    # TODO: remove chefs that our user has already rated
    rated_chefs = summation[0].nonzero()[1] # list of chef ids with non-zero ratings

    sorted_chefs = SortedList([])
    for rated_chef_id in rated_chefs:
      sorted_chefs.add(KeyValPair(rated_chef_id, summation[0, rated_chef_id]))

    i = 0
    top_chefs = []

    for chef_rating_pair in sorted_chefs.irange(reverse=True):
      if i == n:
        break
      i += 1
      top_chefs.append(chef_rating_pair.key)    

    return top_chefs

x = ChefRecommendationEngine()