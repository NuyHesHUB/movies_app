import React from 'react';
import {Link} from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;