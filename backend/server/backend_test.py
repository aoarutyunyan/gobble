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

def registerUser(registerData):
    return requests.post(endpoint+"/register", registerData)

def getUsers():
    return requests.get(endpoint+"/users").json()

def removeUser(userData):
    for user in db.users.find(userData):
        db.users.remove(user['_id'])

regData1 = {'Name': 'testUser1',
        'Password': 'somePassword',
        'PasswordConf': 'somePassword'}
userData1 = {'name': 'testUser1'}

class TestUserMethods(unittest.TestCase):

    def test_register(self):
        r = requests.post(endpoint+"/register", regData1)
        self.assertEqual(r.status_code, 200)
        removeUser(userData1)

    def test_getUsers(self):
        r = registerUser(regData1)
        self.assertEqual(r.status_code, 200)
        foundUser = False
        for user in getUsers():
            if user['name'] == 'testUser1':
                foundUser = True
        self.assertTrue(foundUser)
        removeUser(userData1)

if __name__ == '__main__':
    unittest.main()
