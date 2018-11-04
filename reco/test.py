import numpy as np
import pandas as pd
import scipy.sparse as sp
from sklearn.metrics.pairwise import cosine_similarity


df_ratings = pd.read_csv('./ratings.csv')

user_id_set = set(df_ratings['user_id'].unique().tolist())
max_user_id = df_ratings['user_id'].max()

chef_id_set = set(df_ratings['chef_id'].unique().tolist())
max_chef_id = df_ratings['chef_id'].max()


ratings_matrix = sp.dok_matrix((max_user_id+1, max_chef_id+1), dtype=np.int8)

for index, row in df_ratings.iterrows():
  ratings_matrix[row['user_id'], row['chef_id']] = row['rating']

sparse_ratings_matrix = ratings_matrix.tocsr()
# print(sparse_ratings_matrix.shape)
# print( cosine_similarity(sparse_ratings_matrix[2], sparse_ratings_matrix[1])[0][0] )


test = (sparse_ratings_matrix[2] + sparse_ratings_matrix[1])/2

print(test[0].nonzero()[1])

# print(test)