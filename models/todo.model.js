const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    value: {type: String, required: true, maxlength: 70},
    completed: {type: Boolean, default: false},
    editFlag: {type: Boolean, default: false}
});

module.exports = mongoose.model('TodoItems', TodoSchema);