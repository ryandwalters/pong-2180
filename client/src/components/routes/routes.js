import TitlePage from './../titlePage/';
import Main1 from './../Main1/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import './routes.css';


const Routes = () => {
    return(
        <main className='container'>
            Hello
            {/*<TitlePage/>*/}
            <Main1/>
        </main>
    )
}

export default Routes;