var mongoose = require('mongoose');
mongoose.set('debug', true);
const Event = require('../models/Event.js')

var express = require('express');
var router = express.Router();

/* GET events listing. */
router.get('/', function(req, res, next) {
    Event.find({}).then(eachOne => {
    res.json(eachOne);
    })
});

module.exports = router;
