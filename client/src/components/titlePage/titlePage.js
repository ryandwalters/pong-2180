import React, { Component } from "react";
import './titlePage.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TitlePage = () => {
  return(
  <div id='title'>
    <div className='text-center'>
      <h1><span id='rainbow'>PONG 2180</span></h1>
      <hr/>
      <button id='loadLoginPage' className='btn btn-primary'><h2>Click Here to Start!</h2></button>
    </div>
  </div>
  )
}

export default TitlePage;