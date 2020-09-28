var passport = require('passport');
const User = require('../models/userModel')
module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser((user, done) => {
        
        done(null, { _id: user._id })
    })

    passport.deserializeUser((id, done) => {
        User.findOne(
            { _id: id },
            'username',
            (err, user) => {
                done(null, user)
            }
        )
    })



    require('../config/local.strategy')();
};