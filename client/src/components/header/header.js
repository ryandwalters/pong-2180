import React, { Component } from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
            <header className='container'>
                <div className="row text-center">
                    <div className='col-xs-8'>
                        <h2 className='bungeeFont'>PONG 2180</h2>
                    </div>
                    <div className='col-xs-3'>              
                        <Link to="/gamestart">
                            <h3 className='bungeeFont'>Login</h3>
                        </Link>                
                    </div>
                </div>
            </header> 
    )
}

export default Header;