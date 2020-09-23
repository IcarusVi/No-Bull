const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
--Thought Process--
The way we want a user to use this is by doing the following
1. User will click a button add a routine
2. User will be given a form to enter a Routine Title
3. User will then be able to add any amount of exercises given
4. Exercises will be an array of objects
5. Users will be able to access different routines by having an array of routines
    which they can choose
*/


const exerciseSchema = new Schema({
    title: String,
    sets: Number,
    reps: Number,
})

const routineSchema = new Schema({
    title: String,
    exercises: Array
})

/*
The object of the routineSchema should look like this:
Calisthenics Routine = [
    {
        title: Pushups,
        sets: 3,
        reps: 8
    }
    {
        title: Pullups,
        sets: 3, 
        reps: 10
    }
]


*/
module.exports = mongoose.model('Exercise', exerciseSchema);
module.exports = mongoose.model('Routine', routineSchema);