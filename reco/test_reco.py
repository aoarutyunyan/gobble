import pytest
import pytest_cov
from reco import ChefRecommendationEngine

'''
normal reco control flow:
1. given dataset of {user_id, chef_id, rating}
2. compute similarity matrix
3. find top K similar users for each user
4. from these similar users, return list top N rated chef_ids
'''
class TestReco():
    def test_initialization(self):
        reco = ChefRecommendationEngine("./testratings.csv")
        # compute cosine similarity matrices, assert that they're correct

    # gonna add new rating with new user, assert that matrix changes correctly
    def test_recomputation(self):
        pass

    def test_top_users(self):
        pass

    def test_top_recs(self):
        pass