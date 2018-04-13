import TitlePage from './../titlePage/';
import Main1 from './../main1/';
import LoginPage from './../loginPage/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './routes.css';


const Routes = () => {
    return(
        <Router>
            <main className='container'>
                {<TitlePage/>}
                {<Main1/>}
                {<LoginPage/>}
            </main>
        </Router>
    )
}

export default Routes;