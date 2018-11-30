// server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const mongooseTypes = mongoose.Schema.Types;
const Review = require('./Review.js');

let UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        password: { type: String, required: true},
        events: [{ type: mongooseTypes.ObjectId }],
        incomingReviews: [{ type: mongooseTypes.ObjectId }],
        outgoingReviews: [{ type: mongooseTypes.ObjectId }],
        chef: { type: Boolean, default: false, required: true },
        zipcode: Number,
        id: Number
    }
);

UserSchema.statics.getUser = function (_name) {
    this.find({'name': _name}).then((user) => {
        return user
    })
};

UserSchema.statics.getUserByID = function (id) {
  return (User.findById(id, function(err, user) {
    if (err) throw err;
    return user
  }))
};

UserSchema.methods.updateUser = function (id, change) {
    this.findByIdAndUpdate(id, change, function(err, user) {
      if (err) throw err;
    })
};

UserSchema.methods.writeReview = function (_review) {
    id = _review._id;
    if (!this.outgoingReviews.includes(id)) {
        this.outgoingReviews.push(id)
    }
    this.save(function(err, user) { if (err) throw err; });
};

UserSchema.methods.receiveReview = function (_review) {
    id = _review._id;
    if (!this.incomingReviews.includes(id)) {
        this.incomingReviews.push(id)
    }
    this.save(function(err, user) { if (err) throw err; });
};

/**
 * Hash password before saving to the database.
 */
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

/**
 * Authenticate input against database
 */
UserSchema.statics.authenticate = function (name, password, callback) {
  User.findOne({ name: name })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
};

var User = mongoose.model('User', UserSchema);
module.exports = User;
