import pytest
from reco import ChefRecommendationEngine


class TestReco():
    def test_one(self):
        x = ChefRecommendationEngine()
        similar = x.get_top_similar_users(20, 2)
        top = x.get_top_recs(20, similar, 2)

        print(top)