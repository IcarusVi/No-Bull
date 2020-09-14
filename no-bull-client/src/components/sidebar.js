import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';


function SideBar(props) {
    return (
        //Remember to change the a tags in the css to Link or it won't be decorated
        <div className='sidebar'>
            <Link className="linkStyle" to="/">Home</Link><br />
            <Link className="linkStyle" to="/exercises">Exercises</Link><br />
            <Link className="linkStyle" to="#">Macros</Link><br />
            <Link className="linkStyle" to="#">Progress</Link><br />
        </div>
    )
}

export default SideBar;