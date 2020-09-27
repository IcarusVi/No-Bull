import React, { Component } from 'react'

export default class AddExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
          routineName: "",
          routineExercises: [],
          exerciseTitle: '',
          Sets: 0,
          Reps: 0,
          active:true
        };
      }
      
      handleChange = (e) =>{
        this.setState({
          routineName: e.target.value
        })
      }
      
      inputChange = (e) =>{
        let name = e.target.name;
        let val = e.target.value
        this.setState({
          [name]: val
        })
      }
      
      addExercise = () =>{
        
        let newExercise = {
          title: this.state.exerciseTitle,
          sets: this.state.Sets,
          reps: this.state.Reps
        }
        console.log(newExercise);
        this.setState({
          routineExercises: [...this.state.routineExercises, newExercise],
          exerciseTitle: '',
          sets: 0,
          reps: 0
        })
        
      }                                              
      
      render() {
        return (
          <div className="createExercise">
            <h1>Create Routine</h1>
            <form>
              <input type="text" onChange={this.handleChange} name='Routine Name' placeholder='Enter routine name'/>
            </form>
    
            <div id="routineName">
              <h2>{this.state.routineName}</h2>
              <ul id="routineList">
                {this.state.routineExercises.map((x)=>{
                  return(
                    <li>{x.title} Sets: {x.sets} Reps: {x.reps}</li>
                  )
                })}
              </ul>
            </div>
            <form>
              <input
                type="text"
                name="exerciseTitle"
                placeholder="Enter Exercise Name"
                onChange={this.inputChange}
              />
              <br />
              <input type="text" name="Sets" placeholder="Sets" onChange={this.inputChange} />
              <br />
              <input type="text" name="Reps" placeholder="Reps" onChange={this.inputChange} />
              <br />
              <button onClick={this.addExercise}><i className="fas fa-plus"></i></button>
            </form>
            <button id="sub-routine">Submit Routine</button>
          </div>
        );
      }
}
