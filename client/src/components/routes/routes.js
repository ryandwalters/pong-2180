import TitlePage from './../titlePage/';
import Main1 from './../main1/';
import LoginPage from './../loginPage/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './routes.css';


const Routes = () => {
    return(
        
        <main className='container'>
            <Router>
                {/*<TitlePage/>*/}
                {/*<Main1/>*/}
                <LoginPage/>
            </Router>
        </main>
        
    )
}

export default Routes;