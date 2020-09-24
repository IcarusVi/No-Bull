var Exercise = require('../models/exerciseModel');
var Routine = require('../models/exerciseModel');
var User = require('../models/userModel')

//function to save an Exercise
exports.saveExercise = async (req, res) => {
    var newExercise = new Exercise({
        title: req.body.exerciseTitle,
        sets: req.body.sets,
        reps: req.body.reps
    })

    newExercise.save((err) =>{
        if(err){
            console.log('There was an error saving the new exercise');
            res.json({
                Failed: 'Failed to save ' + newExercise.title + " as a new exercise"

            })
        }
        else{
            console.log('Successfully saved ' + newExercise.title)
            res.json({
                Success: 'Saved ' + newExercise.title + " as a new Exercise"
            })
        }
    })
}

//function to save a routine
exports.saveRoutine = async(req, res) =>{
   /*
   A better way to do this would be for the function to accept a
   json object full of exercises then have the function accept that instead
   */


   //let formCount = Object.keys(req.body).length;
   let routineTitle = req.body.routineName
   let totalExercises = req.json;

   res.json({
       Name: routineTitle,
       Exercises: totalExercises
   })
}