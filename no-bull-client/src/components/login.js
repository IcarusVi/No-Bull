import React from 'react';

class LogInForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
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
      fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
    }
  }
    render() {
      return( 
        <div id="login">
          <form onSubmit={this.handleSubmit}>
            <h1> LOGIN </h1>
            <input type='text' onChange = {this.handleChange} name='username' placeholder="Enter Email"/><br/>
            <input type='text' onChange = {this.handleChange} name ='password' placeholder="Enter Password"/><br/>
            <input type="submit" value="LOGIN" id="submit-button"/>
          </form>
        </div>
      )
    }  
  }

export default LogInForm;