var mongoose = require('mongoose');
mongoose.set('debug', true);
const User = require('../models/User.js');

var express = require('express');
var router = express.Router();

/**
 * GET users listing.
 */
router.get('/', function(req, res, next) {
    User.find({chef : false}).then(eachOne => {
    res.json(eachOne);
    })
});

/**
 * POST new user.
 */
router.post('/', function(req, res) {
    givenUser = new User({
      name: req.body.Name,
      events: req.body.Events,
      incomingReviews: req.body.IncomingReviews,
      outgoingReviews: req.body.OutgoingReviews,
      chef: false,
      zipcode: req.body.ZipCode
    });

    givenUser.save(function(err, user) {
        if (err) throw err;
        res.json(user);
    });
});

module.exports = router;
