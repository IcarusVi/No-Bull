import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class routineHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routineList: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/exercise', { withCredentials: true })
            .then(response => {
                let receivedRoutine = response.data.routine.routine
                
                {this.setState({
                    routineList: receivedRoutine
                })}
            }

            )
    }

    convertToLi = (test) => {
        return test.map((exercise, j) => {
            return (
                <li key={j}>
                    {exercise.title}/Sets:{exercise.sets}/Reps:{exercise.reps}
                </li>
            );
        });
    }



    render() {
        if (this.state.routineList.length !== 0) {
            return (
                <div className="routineIndex">
                    {this.state.routineList.map((routine, i) => {
                        return (
                            <div key={i} className="routineCard">
                                <p>{routine.RoutineName}</p>
                                <ul>{this.convertToLi(routine.ExerciseList)}</ul>
                            </div>
                        );
                    })}
                    <button><Link to="/index/exercises/add">Click to Add Routine</Link></button>
                </div>
            );
        }

        else{
            return (
                <div className="routineIndex">
                    <button><Link to="/index/exercises/add">Click to Add Routine</Link></button>
                </div>

            );
        }
    }
}
