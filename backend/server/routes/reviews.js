var mongoose = require('mongoose');
mongoose.set('debug', true);
var Review = require('../models/Review.js')
var User = require('../models/User.js')

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
      event: req.body.Event,
      reviewer: req.body.Reviewer,
      reviewee: req.body.Reviewee,
    });

    givenReview.save(function(err, review) {
        if (err) throw err;

        User.getUserByID(review.reviewer).then((reviewer) => {
          reviewer.writeReview(review);
        })

        User.getUserByID(review.reviewee).then((reviewee) => {
          reviewee.receiveReview(reviewee);
        });

        res.json(review);
    });
});

module.exports = router;
