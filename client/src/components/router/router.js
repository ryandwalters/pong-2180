import React, { Component } from "react";
import './router.css';
import TitlePage from './components/titlePage/';
import Main1 from './components/main1/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
    return(
        <main className='container'>
            <TitlePage/>
            <Main1/>
        </main>
    )
}

export default Routes;