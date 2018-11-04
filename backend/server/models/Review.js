// server/models/Review.js
const mongoose = require('mongoose')
let ReviewSchema = new mongoose.Schema(
    {
        rating: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
        event: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        reviewer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        reviewee: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    }
);

ReviewSchema.methods.getReview = function (_event) {
    Review.find({'event': _event}).then((review) => {
        return review
    })
};

module.exports = mongoose.model('Review', ReviewSchema)
