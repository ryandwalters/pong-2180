import TitlePage from './../titlePage/';
import Main1 from './../Main1/';
import LoginPage from './../loginPage/';
import Gamestart from './../gamestart/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './routes.css';


const Routes = () => {
    return(
        <Router>
            <main className='container'>         
                {/*<Route exact path='/' component={TitlePage}/>
                <Route path='/main1' component={Main1}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/gamestart' component={Gamestart}/>*/}
                <Gamestart/>
            </main>
        </Router>
        
    )
}

export default Routes;