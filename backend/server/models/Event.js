// server/models/Event.js
const mongoose = require('mongoose')
let EventSchema = new mongoose.Schema(
    {
        title: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        time: {
            type: mongoose.Schema.Types.Date,
            required: true,
        },
        tags: {
            type: [{
                tag: mongoose.Schema.Types.String
            }],
            required: true,
        },
        chefs: {
            type: [{
                chef: mongoose.Schema.Types.ObjectId
            }],
            required: true,
        },
        host: {
            type: mongoose.Schema.Types.ObjectId
        },
        dishes: {
            type: [{
                dish: mongoose.Schema.Types.ObjectId
            }],
            required: false,
       },
    }
);

EventSchema.methods.getEvent = function (_title) {
    Event.find({'title': _title}).then((event) => {
        return event
    })
};

module.exports = mongoose.model('Event', EventSchema)
