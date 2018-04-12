import React, { Component } from "react";
import './header.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Header = () => {
    return(
        <header className='container'>
        <div className="row">
            <div className='col-xs-6'>
                <h2>PONG 2180</h2>
            </div>
            <div className='col-xs-3'>
                <h3>Login</h3>
            </div>
        </div>
        </header>
    )
}

export default Header;