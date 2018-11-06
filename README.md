# CS 130 Project: Gobble
Discussion 1B

## Backend Setup
To start the backend server, first make sure there is an instance of MongoDB running on port 27127 (default mongo port).

Then, run

```bash
cd backend/server
npm install
npm install mongoose
npm start
```

The server will be running on localhost:4000/.

## Recommendation Engine
To recommend chefs to users, we will use a simple user-based collaborative filtering algorithm.

Given a stream of ratings in the form of `userId, chefId, rating`, output `userId: [recommendedChefIds]` for each user.

The process at a high level is:
* compute sorted pairwise cosine similarity matrix between users
* get top K similar users for each user
* get top N rated chefs from those K similar users
* recommend those chefs

We cache the pariwise similarities so each time a new rating is added, instead of recomputing the entire matrix (a very expensive operation), we update the similarities that only need updating.

We also use sparse matrices for our calculations because user-based collaborative filtering is bound to be a sparse problem.

### Setup
TODO: set up `docker-compose.yml` for Python, Kafka, and Redis containers

Or you can install Kafka, Redis, and Python 3.6 and `pip install -r requirements.txt` and run it locally.