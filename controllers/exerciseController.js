
var User = require('../models/userModel')

//function to save a routine
exports.saveRoutine = (req, res) =>{
   /*
   A better way to do this would be for the function to accept a
   json object full of exercises then have the function accept that instead
   */


   //let formCount = Object.keys(req.body).length;
   let routineTitle = req.body.routineName;
   let totalExercises = req.body.exercises;

   let newRoutine = {
       RoutineName: routineTitle,
       ExerciseList: totalExercises
   }

   console.log(newRoutine);

   User.findByIdAndUpdate(req.user._id,
    {$push: {"routine": newRoutine}},
    {safe: true, upsert: true},
    (err, user)=>{
       if(err){
           console.log(err)
       }
       else{
           console.log(newRoutine.RoutineName + " was saved to " + user.username)
       }
   })

   res.json(newRoutine);
}

exports.getRoutine = async (req, res) => {
    let userRoutine = await User.findById(req.user._id, 'routine', (err,user)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(user)
            return user
        }
    })
    if(userRoutine.length !== 0){
        res.json({
            routine: userRoutine
        })
    }
    else{
        console.log('No routines currently saved')
        res.status(400).send({
            error: 'No routine saved'
        })
    }
}
    