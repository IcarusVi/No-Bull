import React, { Component } from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

    }
    //add the "sidebar-active" class to sidebar
    toggleNav = () => {
        let nav = document.getElementById("bars");
        nav.classList.toggle("sidebar-active");

    }

    render() {
        return (
            <div className='header'>
                <h2>Welcome {this.props.name}</h2>
                <i onClick={this.toggleNav} class="fas fa-bars"></i>
            </div>
        )
    }
}

export default Header;