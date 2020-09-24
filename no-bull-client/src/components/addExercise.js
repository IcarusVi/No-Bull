import React, { Component } from 'react'

export default class AddExercise extends Component {
    render() {
        return (
            <div className="createExercise">
                <h1>Create Routine</h1>
                <div id="routineName">
                    <ul id='routineList'>
                    </ul>
                </div>
                <form>
                    <input type='text'></input>
                    <input type='text' name="Exercise Name" placeholder="Enter Exercise Name"/><br/>
                    <input type='text' name="Sets" placeholder="Sets"/><br/>
                    <input type='text' name="Reps" placeholder="Reps"/><br/>
                </form>
            </div>
        )
    }
}
