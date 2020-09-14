import React from 'react';
import './App.scss';
import SignUpForm from './components/signup';
import LogInForm from './components/login';
import Home from './components/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path='/signup'>
        <SignUpForm/>
      </Route>
      <Route path='/login'>
        <LogInForm/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  );
}

export default App;
