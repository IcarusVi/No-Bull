import React from 'react';

function Header(props){
    return(
        <div className='header'>
            <h2>Welcome {props.name}</h2>
        </div>
    )
}

export default Header;