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

class TestUserMethods(unittest.TestCase):

    def test_register(self):
        data = {'Name': 'testUser1',
                'Password': 'somePassword',
                'PasswordConf': 'somePassword',
                }
        r = requests.post(endpoint+"/register", data)
        self.assertEqual(r.status_code, 200)
        db.users.remove({})

    def test_getUsers(self):
        data = {'Name': 'testUser1',
                'Password': 'somePassword',
                'PasswordConf': 'somePassword',
                }
        r = requests.post(endpoint+"/register", data)
        self.assertEqual(r.status_code, 200)
        r = requests.get(endpoint+"/users")
        foundUser = False
        for user in r.json():
            if user['name'] == 'testUser1':
                foundUser = True
        self.assertTrue(foundUser)
        db.users.remove({})

if __name__ == '__main__':
    unittest.main()
