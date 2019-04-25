const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    value: {type: String, required: true, max: 140},
    completed: {type: Boolean, default: false},
    editFlag: {type: Boolean, default: false}
});

module.exports = mongoose.model('TodoItems', TodoSchema);