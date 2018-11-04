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
        
        User.findById(review.reviewer, function(err, reviewer) {
            if (err) throw(err);
            reviewer.writeReview(review);
        });

        User.findById(review.reviewee, function(err, reviewee) {
            if (err) throw(err);
            reviewee.receiveReview(reviewee);
        });
        
        res.json(review);
    });
});

module.exports = router;
