var mongoose = require('mongoose');
mongoose.set('debug', true);
const Review = require('../models/Review.js')

var express = require('express');
var router = express.Router();

/* GET events listing. */
router.get('/', function(req, res, next) {
    Review.find({}).then(eachOne => {
    res.json(eachOne);
    })
});

module.exports = router;
