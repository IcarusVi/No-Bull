import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    }
  }
  //If user is signed in return the index page
  render() {
    if (this.state.signedIn) {
      return (
        <div id="Home">
          <h1>You are not signed in</h1>
        </div>
      )
    }
    else{
      return ( 
        <div>
          <h1>You are signed in</h1>
        </div>
      )
    }
  }
}

export default Home;