import React from 'react';
import './Message.css';

export const Header = ({title}) =>{

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://github.com/Power1stZ"target="_blank" >
                {title}</a>
            </div>
        </nav>
    );
};