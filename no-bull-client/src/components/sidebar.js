import React from 'react';
import { Link } from 'react-router';

function SideBar(props) {
    return (
        //Remember to change the a tags in the css to Link or it won't be decorated
        <div className='sidebar'>
            <Link to="#">Home</Link><br />
            <Link to="#">Macros</Link><br />
            <Link to="#">Progress</Link><br />
        </div>
    )
}

export default SideBar;