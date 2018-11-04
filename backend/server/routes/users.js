var mongoose = require('mongoose');
mongoose.set('debug', true);
const User = require('../models/User.js')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({}).then(eachOne => {
    res.json(eachOne);
    })
});

/* POST new user. */
router.post('/', function(req, res) {
    givenUser = new User({
      name: req.body.Name,
      events: req.body.Events,
      incomingReviews: req.body.IncomingReviews,
      outgoingReviews: req.body.OutgoingReviews,  
    });
    
    User.create(givenUser).then(user => {
      res.json(user)
    });
});

module.exports = router;
