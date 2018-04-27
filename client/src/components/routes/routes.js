import TitlePage from './../titlePage/';
import Main1 from './../main1/';
import LoginPage from './../loginPage/';
import Gamestart from './../gamestart/';
import Header from './../header/';
import PhysicsEngine from './../physicsEngine';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
//import { ReactRedirect } from "react-redirect";
import React, { Component } from "react";
import './routes.css';


const Routes = () => {
    return (
        <Router>
            <div>
                <Header />
                <main className='container'>
                    <Switch>
                        <Route exact path='/' component={TitlePage} />
                        <Route path='/main1' component={Main1} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/physics-engine' render={() => {
                            return (
                                window.location = "https://pong2180-physics.herokuapp.com/admin/log-disp",
                                <div>
                                    <h5>Redirecting to Physics Engine</h5>
                                    <br />
                                    <h5>It may take some time if engine is in sleep mode</h5>
                                </div> );
                } } />
                <Route exact path='/gamestart' render={() => <Gamestart />} />
                        <Gamestart />
                    </Switch>
                </main>
            </div>
        </Router >

    )
}

export default Routes;