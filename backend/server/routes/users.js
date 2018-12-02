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
    const id = { id: parseInt(req.params.id), chef: false };
    User.findById( id, function (err, user) {
       if (err) throw err;
       res.json(user.events);
   });
});

/**
 * GET all the reviews a user wrote
 */
router.get('/reviews/:id', function (req, res, next) {
    const id = { id: parseInt(req.params.id), chef: false };
    User.findById( id, function (err, user) {
        if (err) throw err;
        res.json(user.outgoingReviews);
    });
});

/**
 * POST new user.
 */
router.post('/', function(req, res) {
    givenUser = new User({
        name: req.body.name,
        email: req.body.email,
        chef: false,
        zipcode: req.body.zipcode,
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
    const id_num = parseInt(req.params.id);
    const user_id = { id: id_num, chef: false };
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            throw err;
        } else {
            let user = User.updateUser(user_id, { password: hash });
            res.json(user);
        }
    });
});

/**
 * PUT: Update a user's events
 */
router.put('/events/:id', function(req, res, next) {
    const user_id = { id: parseInt(req.params.id), chef: false };
   let user = User.updateUser(user_id, { events: req.body.events });
   res.json(user);
});

/*
**
 * PUT: Update a user's incoming reviews
 *
router.put('/reviews_in/:id', function(req, res, next) {
    let user = User.updateUser(parseInt(req.params.id), { incomingReviews: req.body.reviews });
    res.json(user);
});
*/

/**
 * PUT: Update a user's outgoing reviews
 */
router.put('/reviews_out/:id', function(req, res, next) {
    const user_id = { id: parseInt(req.params.id), chef: false };
    let user = User.updateUser(user_id, { outgoingReviews: req.body.reviews });
    res.json(user);
});

/**
 * PUT: Update a user's zipcode
 */
router.put('/zipcode/:id', function(req, res, next) {
    const user_id = { id: parseInt(req.params.id), chef: false };
    let user = User.updateUser(user_id, { zipcode: req.body.zipcode });
    res.json(user);
});

module.exports = router;
