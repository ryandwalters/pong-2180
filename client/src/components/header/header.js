import React, { Component } from "react";
import './header.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Header = () => {
    return(
        <Router>
            <header className='container'>
                <div className="row text-center">
                    <div className='col-xs-8'>
                        <h2 className='bungeeFont'>PONG 2180</h2>
                    </div>
                    <div className='col-xs-3'>              
                        <Link to="#"><h3 className='bungeeFont'>Login</h3></Link>                
                    </div>
                </div>
            </header>
        </Router>
    )
}

export default Header;