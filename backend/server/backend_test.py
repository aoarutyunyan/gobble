import unittest
from pymongo import MongoClient
import requests

endpoint = "http://localhost:4000"

uri = 'db:27017';
username = 'root';
password = 'example';
url = "mongodb://{}:{}@{}".format(username, password, uri);
client = MongoClient(url)

db = client['gobble']

class TestUserMethods(unittest.TestCase):

    def test_register(self):
        data = {'Name': 'testUser1',
                'Password': 'somePassword',
                'PasswordConf': 'somePassword',
                }
        r = requests.post(endpoint+"/register", data)
        self.assertEqual(r.status_code, 200)

    def test_getUsers(self):
        r = requests.get(endpoint+"/users")
        foundUser = False
        for user in r.json():
            if user.name == 'testUser1':
                foundUser = True
        self.assertTrue(foundUser)

if __name__ == '__main__':
    unittest.main()
