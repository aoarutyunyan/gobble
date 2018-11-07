var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

//POST route for updating data
router.post('/', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.Password !== req.body.PasswordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    return res.json({passwordsMatch: false});
  }

  if (req.body.Name &&
    req.body.Password &&
    req.body.PasswordConf) {

    var userData = {
      name: req.body.Name,
      password: req.body.Password,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.json(user);
      }
    });

  }
})

module.exports = router;
