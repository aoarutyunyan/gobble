import unittest
from pymongo import MongoClient
import requests

endpoint = "http://localhost:4000"

uri = 'db:27017';
username = 'root';
password = 'example';
url = "mongodb://{}:{}@{}".format(username, password, uri);
client = MongoClient(url)

db = client.admin

def getEndpoint(ep):
    return requests.get(endpoint+ep).json()

def postEndpoint(ep, data):
    return requests.post(endpoint+ep, data)

def removeData(collection, data):
    for dataInstance in collection.find(data):
        collection.remove(dataInstance['_id'])

regData1 = {'Name': 'testUser1',
        'Password': 'somePassword',
        'PasswordConf': 'somePassword'}
regData2 = {'Name': 'testUser2',
        'Password': 'somePassword2',
        'PasswordConf': 'somePassword2'}

chefRegData1 = {'Name': 'testChef1',
        'Password': 'chefPass1',
        'PasswordConf': 'chefPass1', 
        'Chef': 1}

reviewData1 = {'rating': 4}
eventData1 = {'title': 'testEvent1',
        'host': None}
userData1 = {'name': 'testUser1'}
userData2 = {'name': 'testUser2'}
chefData1 = {'name': 'testChef1'}


class TestUserMethods(unittest.TestCase):

    def test_registerUser(self):
        r = postEndpoint("/register", regData1)
        self.assertEqual(r.status_code, 200)
        removeData(db.users, userData1)

    def test_getUsers(self):
        r = postEndpoint("/register", regData1)
        self.assertEqual(r.status_code, 200)
        foundUser = False
        for user in getEndpoint("/users"):
            if user['name'] == regData1['Name']:
                foundUser = True
        self.assertTrue(foundUser)

        removeData(db.users, userData1)


class TestChefMethods(unittest.TestCase):

    def test_registerChef(self):
        r = postEndpoint("/register", chefRegData1)
        self.assertEqual(r.status_code, 200)
        removeData(db.users, chefData1)

    def test_getChefs(self):
        r = postEndpoint("/register", chefRegData1)
        self.assertEqual(r.status_code, 200)
        foundChef = False
        for chef in getEndpoint("/chefs"):
            if chef['name'] == chefRegData1['Name']:
                foundChef = True

        self.assertTrue(foundChef)
        removeData(db.users, chefData1)


class TestEventMethods(unittest.TestCase):

    def test_createEvent(self):
        r = postEndpoint("/register", regData1)
        self.assertEqual(r.status_code, 200)
        eventData1['host'] = r.json()['_id']
        r = postEndpoint("/events", eventData1)
        self.assertEqual(r.status_code, 200)

        removeData(db.users, userData1)
        removeData(db.events, eventData1)

    def test_getEvents(self):
        r = postEndpoint("/register", regData1)
        self.assertEqual(r.status_code, 200)
        eventData1['host'] = r.json()['_id']
        r = postEndpoint("/events", eventData1)
        self.assertEqual(r.status_code, 200)

        foundEvent = False
        for event in getEndpoint("/events"):
            if event['title'] == 'testEvent1':
                foundEvent = True
        self.assertTrue(foundEvent)

        removeData(db.users, userData1)
        removeData(db.events, eventData1)

class TestReviewMethods(unittest.TestCase):

    def test_createReview(self):
        r = postEndpoint("/register", regData1)
        self.assertEqual(r.status_code, 200)
        reviewData1['Reviewee'] = r.json()['_id']

        r = postEndpoint("/register", regData2)
        self.assertEqual(r.status_code, 200)
        reviewData1['Reviewer'] = r.json()['_id']
        eventData1['host'] = r.json()['_id']

        r = postEndpoint("/events", eventData1)
        self.assertEqual(r.status_code, 200)
        reviewData1['Event'] = r.json()['_id']

        r = postEndpoint("/reviews", reviewData1)
        self.assertEqual(r.status_code, 200)

        removeData(db.users, userData1)
        removeData(db.users, userData2)
        removeData(db.events, eventData1)
        removeData(db.reviews, reviewData1)
        

if __name__ == '__main__':
    unittest.main(verbosity=2)
