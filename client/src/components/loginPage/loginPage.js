import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './loginPage.css';


const LoginPage = () => {
    return (
        <div>
            <div className='row' style={{padding: '5px 5px 5px 5px', margin: '5px 5px 5px 5px'}}  >
                <br />
                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Login password" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>

            </div>
            <div className='row'>
            <br />
            <br />
            </div>
            <div className='row' style={{padding: '5px 5px 5px 5px', margin: '5px 5px 5px 5px'}} >
                {/*Start Game Button*/}
                <button className='btn'>
                    <h2 className='jumbotron rainbow monotonFont'><a href='https://pong2180-physics.herokuapp.com/physics/start_auto_demo'>Start Demo</a></h2>
                </button>
            </div>
            <div className='row' style={{padding: '5px 5px 5px 5px', margin: '5px 5px 5px 5px'}} >
                <br />
                <br />
                <h2>To watch a self-running version, click the Start Demo Button </h2>
                <br />
                <h4>making a live game work is still being worked on that's why there is a password and is only available to the authors of this site at the moment.  Feel free to contact them for a full demo </h4>
            </div>
            
        </div>

    )
}

export default LoginPage;