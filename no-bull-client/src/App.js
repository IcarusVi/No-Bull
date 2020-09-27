import React from 'react';
import './App.scss';
import SignUpForm from './components/signup';
import LogInForm from './components/login';
import Index from './components/index';
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
        <Index/>
      </Route>
    </Switch>
  );
}

export default App;
