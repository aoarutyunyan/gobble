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

@pytest.fixture(scope='class')
def reco(request):
    request.cls.reco = ChefRecommendationEngine({}, "./testratings.csv")

@pytest.mark.usefixtures('reco')
class TestReco():
    def print_top_users(self):
        for user in range(1,6):
            print(user, self.reco.get_top_similar_users(user, 4))

    def test_initial_top_users(self):
        correct_output = [[2, 3, 5, 4],
                          [5, 1, 4, 3],
                          [5, 1, 4, 2],
                          [5, 2, 3, 1],
                          [4, 2, 3, 1]]

        # each user has correct top 4 similar users
        for user in range(1,6):
            assert(self.reco.get_top_similar_users(user, 4) == correct_output[user - 1])

    def test_recomputation(self):
        self.reco.receive_new_rating(1, 5, 10)
        correct_output = [[2, 3, 5, 4],
                          [5, 1, 4, 3],
                          [5, 1, 4, 2],
                          [5, 2, 3, 1],
                          [4, 2, 3, 1]]

        # each user has correct top 4 similar users
        for user in range(1,6):
            assert(self.reco.get_top_similar_users(user, 4) == correct_output[user - 1])

    def test_top_users(self):
        pass

    def test_top_recs(self):
        pass