import pytest
from reco import ChefRecommendationEngine

# unit testing
class TestUnit():
    def test_compute_one(self):
        pass

    def test_compute_two(self):
        pass

'''
normal reco control flow:
1. given dataset of {user_id, chef_id, rating}
2. compute similarity matrix
3. find top K similar users for each user
4. from these similar users, return list top N rated chef_ids
'''

# functional testing
class TestReco():
    def test_one(self):
        reco = ChefRecommendationEngine()
        similar = reco.get_top_similar_users(20, 2)
        top = reco.get_top_recs(20, similar, 2)

        print(top)