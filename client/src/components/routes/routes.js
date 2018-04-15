import TitlePage from './../titlePage/';
import Main1 from './../Main1/';
import LoginPage from './../loginPage/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './routes.css';


const Routes = () => {
    return(
        
        <main className='container'>
            <Router>
                {/*<Route exact path='/' component={TitlePage}/>
                <Route path='/main1' component={Main1}/>
                <Route path='/login' component={LoginPage}/>*/}

                <Main1/>
            </Router>
        </main>
        
    )
}

export default Routes;