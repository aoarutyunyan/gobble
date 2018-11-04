// server/models/User.js
const mongoose = require('mongoose')
let UserSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        events: {
            type: [{
                event: mongoose.Schema.Types.ObjectId
            }],
            required: true,
        },
        incomingReviews: {
            type: [{
                review: mongoose.Schema.Types.ObjectId
            }],
            required: true,
        },
        outgoingReviews: {
            type: [{
                review: mongoose.Schema.Types.ObjectId
            }],
            required: true,
        }
    }
);

UserSchema.methods.getUser = function (_name) {
    User.find({'name': _name}).then((user) => {
        return user
    })
};

module.exports = mongoose.model('User', UserSchema)
