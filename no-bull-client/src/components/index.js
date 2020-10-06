import React from 'react';
import SideBar from './sidebar';
import Header from './header';
import DashBoard from './dashboard';
import Exercises from './exercises';
import AddExercise from './addExercise';
import RoutineHome from './routineHome'
import axios from 'axios';
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

  handleLogOut = () => {
    axios
      .get('http://localhost:8080/logout', { withCredentials: true })
      .then(
        this.setState({
          signedIn: false,
          username: ''
        })
      )

  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/', { withCredentials: true })
      .then(response => {
        //If backend responds that the user is signed in change state
        if (response.data.signedIn) {
          this.setState({
            signedIn: true,
            username: response.data.username
          })
        }
        else{
          window.location.href='/'
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
    else {
      return (
        <div id="dash">
          <Header name={this.state.username} />
          <SideBar logOut={this.handleLogOut} />
          <div className="content">
            <Route path="/index/exercises" component={RoutineHome}/>
            <Route path="/index/exercises/add" component={AddExercise}/>
            <Route exact path="/index" component={DashBoard}/>
          </div>
        </div>
      )
    }
  }
}

export default Index;