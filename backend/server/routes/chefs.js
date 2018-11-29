var mongoose = require('mongoose');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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

router.get('/nearby', function(req, res, next) {
    var url =
        "https://www.searchbug.com/tools/zip-radius.aspx?TYPE=zipradius&ZIP=" +
        req.query.zipcode +
        "&DIST=" +
        req.query.radius +
        "&submit=Search";
    var xhttpRequest = new XMLHttpRequest();
    var httpResponse;
    xhttpRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200)
        {
            httpResponse = xhttpRequest.responseText;
            // console.log(httpResponse);

            // Cut the string to get the table we want
            var pos = httpResponse.indexOf('a href=\'/tools/zip-code-lookup.aspx?TYPE=zip2city&ZIP=');
            var zipcodeHTML = "";
            if (pos !== -1)
            {
                zipcodeHTML = httpResponse.substring(pos, httpResponse.length - 1);
                zipcodeHTML = zipcodeHTML.substring(0, zipcodeHTML.indexOf('</table>'));
            }

            // index 55, length 5

            // console.log(zipcodeHTML);
            var zipcodes = [];
            while (pos !== -1)
            {
                var zipcode = parseInt(zipcodeHTML.substr(54, 5));
                zipcodes.push(zipcode);
                zipcodeHTML = zipcodeHTML.substring(55, zipcodeHTML.length - 1);
                pos = zipcodeHTML.indexOf('a href=\'/tools/zip-code-lookup.aspx?TYPE=zip2city&ZIP=');
                zipcodeHTML = zipcodeHTML.substring(pos, zipcodeHTML.length - 1);
            }
            // console.log(zipcodes);

            // Get the appropriate chefs
            for (var zc of zipcodes)
            {
                User.find({zipcode: zc}).then(eachOne => {
                    res.json(eachOne);
                }).catch((error) => {
                    console.log('No chef(s) found in this zipcode');
                });
            }
        }
    };
    xhttpRequest.open('GET', url, true);
    xhttpRequest.send();
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