var mongoose = require('mongoose');
mongoose.set('debug', true);
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

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

/**
 * PUT: Update a user's password
 */
router.put('/password/:id', function(req, res, next) {
    // var user_id = parseInt(req.params.id);
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            throw err;
        } else {
            User.updateUser(parseInt(req.params.id), { password: hash });
        }
    });
});

module.exports = router;
