var mongoose = require('mongoose');
mongoose.set('debug', true);
const User = require('../models/User.js');

var express = require('express');
var router = express.Router();

/**
 * GET chefs listing.
 */
router.get('/', function(req, res, next) {
    User.find({chef : true}).then(eachOne => {
        res.json(eachOne);
    })
});

/**
 * POST new chef.
 */
router.post('/', function(req, res) {
    givenUser = new User({
        name: req.body.Name,
        password: req.body.Password,
        events: req.body.Events,
        incomingReviews: req.body.IncomingReviews,
        outgoingReviews: req.body.OutgoingReviews,
        chef: true,
        zipcode: req.body.ZipCode
    });

    givenUser.save(function(err, user) {
        if (err) throw err;
        res.json(user);
    });
});

module.exports = router;