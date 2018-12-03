var mongoose = require('mongoose');
mongoose.set('debug', true);
var request = require('request');
var Review = require('../models/Review.js');
var User = require('../models/User.js');
var kafka = require('kafka-node');

var express = require('express');
var router = express.Router();

/* GET reviews listing. */
router.get('/', function(req, res, next) {
    Review.find({}).then(eachOne => {
      res.json(eachOne);
    })
});

/* POST new review. */
router.post('/', function(req, res) {
    givenReview = new Review({
      rating: req.body.Rating,
      //reviewer: req.body.Reviewer,
      reviewee: req.body.Reviewee
    });

      givenReview.save(function(err, review) {
        if (err) return res.send(err); //throw err;

        User.getUserByID(review.reviewer).then((reviewer) => {
          reviewer.writeReview(review);

          User.getUserByID(review.reviewee).then((reviewee) => {
            //reviewee.receiveReview(review);

            Producer = kafka.Producer,
            client = new kafka.Client(),
            producer = new Producer(client);

            userId = new kafka.KeyedMessage('userId', reviewer.id),
            chefId = new kafka.KeyedMessage('chefId', reviewee.id)
            ratingMessage = new kafka.KeyedMessage('rating', req.body.Rating)

            producer.send([{ topic: 'rating',
                      userId,
                      chefId,
                      ratingMessage
                    }], function (err, data) {
              console.log(data);

              // GET to flask server to receive the rating
              request.get({url: 'http://localhost:5000'
              }, (err, response, data) => {
                console.log("Updated recommendation engine");
              });
            });
          })
        })

        res.json(givenReview);
    });
});

module.exports = router;
