import React from 'react';
import SideBar from './sidebar';

function Header(props){
    //add the "sidebar-active" class to sidebar
    toggleNav = () =>{
        let nav = document.getElementsByClassName("sidebar")
        
    }


    return(
        <div className='header'>
            <h2>Welcome {props.name}</h2>
            <i onClick={this.toggleNav} class="fas fa-bars"></i>
        </div>
    )
}

export default Header;