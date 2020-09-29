import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';


function SideBar(props) {
    return (
        //Remember to change the a tags in the css to Link or it won't be decorated
        <div id="bars" className='sidebar'>
            <Link className="linkStyle" to="/index">Home</Link><br />
            <Link className="linkStyle" to="/index/exercises">Exercises</Link><br />
            <Link className="linkStyle" to="#">Macros</Link><br />
            <Link onClick={()=> props.logOut()} className="linkStyle">Log Out</Link>
        </div>
    )
}

export default SideBar;