import React from 'react';
import SideBar from './sidebar';
import Header from './header';
import DashBoard from './dashboard';
import Exercises from './exercises';
import AddExercise from './addExercise';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      username: ''
    }
  }
  componentDidMount(){
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data=> {
        //If backend responds that the user is signed in change state
        if(data.signedIn){
          this.setState({
            signedIn: true,
            username: data.username
          })
        }
      })
  }
  //If user is signed in return the index page
  render() {
    if (!this.state.signedIn) {
      //If user is not signed in render a you are not signed in page
      return (
        <div id="Home">
          <h1>You are not signed in</h1>
        </div>
      )
    }
    //If signed in render the full dashboard page
    else{
      return ( 
        <div id="dash">
          <Header name={this.state.username}/>
          <SideBar/>
          <div className="content">
            <Route exact path="/" component ={DashBoard}/>
            <Route path="/exercises" component ={Exercises}/>

          </div>
        </div>
      )
    }
  }
}

export default Index;