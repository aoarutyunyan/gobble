// server/models/Dish.js
const mongoose = require('mongoose')
let DishSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        tags: {
            type: [{
                tag: mongoose.Schema.Types.String
            }],
            required: true,
        },
    }
);

DishSchema.methods.getSchema = function (_name) {
    Event.find({'name': _name}).then((dish) => {
        return dish
    })
};

module.exports = mongoose.model('Dish', DishSchema)
