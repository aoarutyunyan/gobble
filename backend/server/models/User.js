// server/models/User.js
const mongoose = require('mongoose')
const mongooseTypes = mongoose.Schema.Types
const Review = require('./Review.js')

let UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        events: [{ type: mongooseTypes.ObjectId }],
        incomingReviews: [{ type: mongooseTypes.ObjectId }],
        outgoingReviews: [{ type: mongooseTypes.ObjectId }],
        chef: Boolean
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
    id = _review._id
    if (!this.outgoingReviews.includes(id)) {
        this.outgoingReviews.push(id)
    }
    this.save(function(err, user) { if (err) throw err; });
};

UserSchema.methods.receiveReview = function (_review) {
    id = _review._id
    if (!this.incomingReviews.includes(id)) {
        this.incomingReviews.push(id)
    }
    this.save(function(err, user) { if (err) throw err; });
};


var User = mongoose.model('User', UserSchema)
module.exports = User
