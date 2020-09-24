const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User routine is an array, user should be able to choose and change their routine
//Exercise will be an array consiting of custom exercises
//that that user has made themselves
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    routine: Array,
    exercise: Array
})

module.exports = mongoose.model('User', userSchema);