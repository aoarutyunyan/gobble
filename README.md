# CS 130 Project: Gobble
Discussion 1B

## Docker Setup
1. Download Docker and Docker Compose (if you're on a Mac it's included)
```bash
cd gobble
docker-compose build
docker-compose up

# if you're having trouble
docker-compose build --no-cache
docker-compose up

# or you get the bcrypt ELF error
docker ps # get <backend_id>
docker exec -it <backend_id> bash
npm uninstall bcrypt
npm install bcrypt
```

React frontend will be open on `localhost:3000` and includes hot-reloading.

Node.js Express backend will be open on `localhost:4000` and also includes hot-reloading.

### Some Tips
ctrl+c will close all the containers.
```bash
# list running containers, and find their container ids
docker ps
# run this to start an interactive Bash session to run commands inside the container
docker exec -it <container-id> bash
```

## Backend Setup
To start the backend server, first make sure there is an instance of MongoDB running on port 27017 (default mongo port).

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

## Frontend Setup
Run

```bash
cd frontend
npm install
npm install react-bootstrap
npm install react-router-dom
npm install react-router-bootstrap
npm start
```
React-router-bootstrap:
* Implemented to allow React Router to route page to required link without refreshing the browser

Will be running on localhost:3000.

