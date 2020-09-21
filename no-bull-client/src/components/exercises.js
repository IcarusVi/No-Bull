import React from 'react';
import '../App.scss';


function Exercises(props) {
    return (
        //Remember to change the a tags in the css to Link or it won't be decorated
        <div className='hub'>
            <h1>This is the exercises tab</h1>
            <div className ='exercise-tab'>
                <h2>Needs to have an add exercise button</h2>
                //Most likely a post function to add to 
                <h2>Needs to have a save routine button</h2>
                <h2>Needs graph to show progression or regression in lifts</h2>
            </div>
        </div>
    )
}

export default Exercises;