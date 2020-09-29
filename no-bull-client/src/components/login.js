import React from 'react';
import axios from 'axios';
class LogInForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      signedIn: false
    }
  }
  handleChange = (e) =>{
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({
      [nam]: val
    })
  }

  handleSubmit = (e) =>{
    if(this.state.username.length == 0 || this.state.password.length == 0){
      e.preventDefault();
      alert("Please fill in email and password fields")
    }
    else{
      e.preventDefault();
      axios
        .post('http://localhost:8080/login', {
          username: this.state.username,
          password: this.state.password
        }, {
          withCredentials: true
        })
        .then(response =>{
          console.log('login reponse: ')
          console.log(response.data.username)
          window.location.href='/index'
        })
       
    }
  }
    render() {
      return( 
        <div id="login">
          <form onSubmit={this.handleSubmit}>
            <h1> LOGIN </h1>
            <input type='text' onChange = {this.handleChange} name='username' placeholder="Enter Username"/><br/>
            <input type='password' onChange = {this.handleChange} name ='password' placeholder="Enter Password"/><br/>
            <input type="submit" value="LOGIN" id="submit-button"/>
          </form>
        </div>
      )
    }  
  }

export default LogInForm;