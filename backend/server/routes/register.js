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

    if (req.body.name &&
        req.body.password &&
        req.body.passwordConf) {

        if (!req.body.chef) {
            User.count({ chef: false }, function (err, count) {
                if (err) throw err;

                var userData = {
                    name: req.body.name,
                    password: req.body.password,
                    id: count,
                    chef: false,
                    _id: {id: count, chef: false },
                    objectId: new ObjectID()
                };

                User.create(userData, function (error, user) {
                    if (error) throw error;
                    else {
                        req.session.userId = user.objectId;
                        return json(user);
                    }
                });
            });
        } else {
            User.count({ chef: false }, function (err, count) {
                if (err) throw err;

                var userData = {
                    name: req.body.name,
                    password: req.body.password,
                    id: count,
                    chef: true,
                    _id: { id: count, chef: true }
                };

                User.create(userData, function (error, user) {
                    if (error) throw error;
                    else {
                        req.session.userId = user.objectId;
                        return json(user);
                    }
                });
            });
        }

        // User.count({}, function(err, count) {
        //     if (err) { return err; }
        //
        //     var userData = {
        //         name: req.body.Name,
        //         password: req.body.Password,
        //         id: count,
        //         chef: req.body.chef,
        //     };
        //
        //     User.create(userData, function (error, user) {
        //         if (error) {
        //             return next(error);
        //         } else {
        //             req.session.userId = user._id;
        //             return res.json(user);
        //         }
        //     });
        // })
    }
});

module.exports = router;