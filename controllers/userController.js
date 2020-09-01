var User = require('../models/userModel');
var bcrypt = require('bcrypt');

//Function to save User to datbase 
exports.saveUser = async (req, res) => {
    //Using bcrypt to hash the inputed password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    

    //Create new user based off input on signup page
    var user = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email
    })
    console.log(user);

    //save the new user to database
    user.save((err) => {
        if(err){
            console.log('There was an error saving ' + user.username +  'to the database');
        }
        else{
            console.log(user.username + " was successfully saved!");
            res.json({
                username: user.username
            })
        }
    })
}
//Function to find User and log them in
/*exports.login = (req, res) => {
    const currentUser = req.body.username;
    const currentPass = req.body.password
    User.findOne({username: currentUser}, async (err, user )=>{
        if(err){
            console.log('Problem finding User')
        }
        //If a username with that name is found use bcrypt to compare the two password
        else{
            if(await bcrypt.compare(currentPass, user.password)){
                console.log(user.username + " successfully logged in ");
                res.send(user.username + " successfully logged in ");
            }
            else{
                console.log('You in the wrong neighborhood');
                res.send('Wrong neighborhood pal');
            }
        }

    })
}*/