var mongoose = require('mongoose');
mongoose.set('debug', true);
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

var express = require('express');
var router = express.Router();

/**
 * GET list of all users.
 */
router.get('/', function(req, res, next) {
    User.find({chef : false}).then(eachOne => {
    res.json(eachOne);
    })
});

/**
 * GET events a user is hosting
 */

router.get('/events/:id', function (req, res, next) {
    User.findById( parseInt(req.params.id), function (err, user) {
       if (err) throw err;
       res.json(user.events);
   });
});

/**
 * GET all the reviews a user wrote
 */
router.get('/reviews/:id', function (req, res, next) {
    User.findById( parseInt(req.params.id), function (err, user) {
        if (err) throw err;
        res.json(user.outgoingReviews);
    });
});

/**
 * PUT: Update a user's password
 */
router.put('/password/:id', function(req, res, next) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            throw err;
        } else {
            User.findOneAndUpdate({ id: parseInt(req.params.id) }, { password: hash }, function (err, user) {
                if (err) res.status(400).send();
                res.json(user);
            });
        }
    });
});

/**
 * PUT: Update a user's events
 */
router.put('/events/:id', function(req, res, next) {
    User.findOneAndUpdate({ id: parseInt(req.params.id) }, { events: req.body.events }, function (err, user) {
        if (err) res.status(400).send();
        res.json(user);
    });
});

/**
 * PUT: Update a user's reviews
 */
router.put('/reviews/:id', function(req, res, next) {
    User.findOneAndUpdate({ id: parseInt(req.params.id) }, { outgoingReviews: req.body.reviews }, function (err, user) {
        if (err) res.status(400).send();
        res.json(user);
    });
});

/**
 * PUT: Update a user's zipcode
 */
router.put('/zipcode/:id', function(req, res, next) {
    User.findOneAndUpdate( { id: parseInt(req.params.id) }, { zipcode: req.body.zipcode }, function (err, user) {
        if (err) res.status(400).send();
        res.json(user);
    });
});

module.exports = router;
