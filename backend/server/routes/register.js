var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

//POST route for updating data
router.post('/', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.Password !== req.body.PasswordConf) {
    res.status(400);
    return res.send("Passwords do not match.");
  }

  if (req.body.Name &&
    req.body.Password &&
    req.body.PasswordConf) {

    User.count({}, function(err, count) {
      if (err) { return err; }

      var userData = {
        name: req.body.Name,
        password: req.body.Password,
        id: count,
        chef: req.body.Chef,
      }

      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          req.session.userId = user._id;
          return res.json(user);
        }
      });
    })
  }
});

module.exports = router;
