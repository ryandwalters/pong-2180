import TitlePage from './../titlePage/';
import Main1 from './../main1/';
import LoginPage from './../loginPage/';
import Gamestart from './../gamestart/';
import Header from './../header/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './routes.css';


const Routes = () => {
    return(
        <Router>
            <div>
            <Header/>
            <main className='container'>
                <Switch>         
                <Route exact path='/' component={TitlePage}/>
                <Route path='/main1' component={Main1}/>
                <Route path='/login' component={LoginPage}/>
                <Route exact path='/gamestart' render={() => <Gamestart/>}/>
                {/*<Gamestart/>*/}
                </Switch>
            </main>
            </div>
        </Router>
        
    )
}

export default Routes;