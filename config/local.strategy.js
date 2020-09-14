var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt')
var User = require('../models/userModel');

module.exports = () => {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.findOne({ username: username }, async (err, user) => {
                if (err) {
                    console.log('Error in finding user for authentication')
                    return done(err);
                }
                else {
                    if (await bcrypt.compare(password, user.password)) {
                        console.log(user.username + " successfully logged in ");
                        //res.send(user.username + " successfully logged in ");
                        return done(null, user);
                    }
                    else {
                        console.log('You in the wrong neighborhood');
                        return done(null, false);
                    }
                }

            })
        }
    ));

}








