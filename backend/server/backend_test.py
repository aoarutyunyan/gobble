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
eventData1 = {'title': 'testEvent1',
        'host': None}
userData1 = {'name': 'testUser1'}

class TestUserMethods(unittest.TestCase):

    def test_register(self):
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

if __name__ == '__main__':
    unittest.main()
