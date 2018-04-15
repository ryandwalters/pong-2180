import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './loginPage.css';


const LoginPage = () => {
    return (
        <div className='row'>
            <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
                    <button type="submit" className="btn btn-default">Submit</button>
            </form>

            <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>

        </div>
                )
            }
            
export default LoginPage;