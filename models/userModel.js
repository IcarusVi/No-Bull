const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User routine is an array, user should be able to choose and change their routine

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    routine: Array
})

module.exports = mongoose.model('User', userSchema);