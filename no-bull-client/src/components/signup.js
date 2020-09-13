import React from 'react';
import { Redirect } from 'react-router-dom';


class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: ''
    }
  }
  
  handleChange = (e) =>{
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({
      [nam]: val
    })
  }

  handleSubmit=(e)=>{
    if(this.state.password == this.state.confirmPassword && this.state.password.length > 0){
      fetch('http://localhost:8080/signup',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then(data =>{
        if(data){
          redirect: window.location.replace('http://localhost:3000')
        }
        else{
          alert('Error in signing up please try again');
        }
      })
    }
    else{
      e.preventDefault();
      alert("Password do not match or should be longer")
    }
  }
    render() {
      return (
        <div id="signUp">
          <form onSubmit={this.handleSubmit}>
            <h1>Create Account</h1>
            <input type='text' name="username" onChange={this.handleChange} placeholder="Username"/><br/>
            <input type='text' name="email" onChange={this.handleChange} placeholder="email@something.com"/><br/>
            <input type='password' name="password" onChange={this.handleChange} placeholder="Password"/><br/>
            <input type='password' name="confirmPassword" onChange={this.handleChange} placeholder="Repeat Password"/><br/>
            <input type="submit" value="SIGN UP" id="submit-button"/>
          </form>
        </div>
      );
    }
  }
export default SignUpForm;