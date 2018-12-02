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
    request.cls.reco = ChefRecommendationEngine({}, "./test_ratings_1.csv")

@pytest.fixture
def reco_comp(request):
    request.cls.reco = ChefRecommendationEngine({}, "./test_ratings_2.csv")

def check_correct_sim_users(reco, correct, n):
        for user in sorted(list(reco.user_id_set)):
            assert(reco.get_top_similar_users(user, n) == correct[user - 1])

@pytest.mark.usefixtures('reco')
class TestReco():
    def print_top_users(self):
        for user in self.reco.user_id_set:
            print(user, self.reco.get_top_similar_users(user, 4))

    def test_initial_top_users(self):
        correct_output = [[2, 3, 5, 4],
                          [5, 1, 4, 3],
                          [5, 1, 4, 2],
                          [5, 2, 3, 1],
                          [4, 2, 3, 1]]

        # each user has correct top 4 similar users
        check_correct_sim_users(self.reco, correct_output, 4)

    def test_new_rating(self):
        self.reco.receive_new_rating(1, 5, 10)
        correct_output = [[2, 3, 5, 4],
                          [5, 1, 4, 3],
                          [5, 1, 4, 2],
                          [5, 2, 3, 1],
                          [4, 2, 3, 1]]

        # each user has correct top 4 similar users
        check_correct_sim_users(self.reco, correct_output, 4)

    def test_top_recs(self):
        correct_output = [[1, 4, 3, 2],
                          [1, 4, 3, 2],
                          [1, 3, 2, 4],
                          [1, 4, 3, 2],
                          [1, 3, 4, 2]]

        for user in self.reco.user_id_set:
            top_sim = self.reco.get_top_similar_users(user, 4)
            assert(self.reco.get_top_recs(user, top_sim, 4) == correct_output[user - 1])

@pytest.mark.usefixtures('reco_comp')
class TestRecomputationUnit():
    def print_top_users(self):
        for user in self.reco.user_id_set:
            print(self.reco.get_top_similar_users(user, 6))

    def test_init(self):
        correct_output = [[6, 7, 3, 2, 4],
                          [1, 7, 6, 4, 3],
                          [6, 7, 1, 4, 2],
                          [7, 6, 3, 2, 1],
                          [7, 3, 1, 4, 2],
                          [6, 3, 1, 4, 2]]
        print("this one")
        self.print_top_users()

        check_correct_sim_users(self.reco, correct_output, 6)

    def test_new_user_new_chef(self):
        self.reco.receive_new_rating(5,2,6)

        correct_output = [[6, 7, 3, 2, 5, 4],
                          [1, 5, 7, 6, 4, 3],
                          [6, 7, 1, 5, 4, 2],
                          [5, 7, 6, 3, 2, 1],
                          [7, 3, 1, 5, 4, 2],
                          [6, 3, 1, 5, 4, 2]]

        check_correct_sim_users(self.reco, correct_output, 6)

    def test_new_user_old_chef(self):
        self.reco.receive_new_rating(5,3,5)

        correct_output = [[6, 7, 3, 5, 2, 4],
                          [5, 1, 7, 6, 4, 3],
                          [6, 7, 1, 5, 4, 2],
                          [5, 7, 6, 3, 2, 1],
                          [7, 3, 1, 5, 4, 2],
                          [6, 3, 1, 5, 4, 2]]

        check_correct_sim_users(self.reco, correct_output, 6)
        
    def test_old_user_new_chef(self):   
        self.reco.receive_new_rating(3,2,2)

        correct_output = [[6, 7, 2, 3, 4],
                          [1, 3, 7, 6, 4],
                          [6, 7, 1, 4, 2],
                          [3, 7, 6, 2, 1],
                          [7, 3, 1, 4, 2],
                          [6, 3, 1, 4, 2]]

        check_correct_sim_users(self.reco, correct_output, 6)

    def test_old_user_old_chef(self):
        self.reco.receive_new_rating(1,4,2)

        correct_output = [[2, 6, 7, 3, 4],
                          [1, 7, 6, 4, 3],
                          [6, 7, 1, 4, 2],
                          [1, 7, 6, 3, 2],
                          [7, 3, 1, 4, 2],
                          [6, 3, 1, 4, 2]]
        
        check_correct_sim_users(self.reco, correct_output, 6)