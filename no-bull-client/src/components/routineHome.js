import axios from 'axios'
import { response } from 'express'
import React, { Component } from 'react'

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
                let receivedRoutine = response.data.routine;
                this.setState({
                    routineList: receivedRoutine
                })
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
            </div>
        );
    }
}
