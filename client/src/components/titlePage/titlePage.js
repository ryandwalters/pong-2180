import React, { Component } from "react";
import './titlePage.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TitlePage = () => {
  return(
  <div id='title'>
    <div className='text-center'>
      <h1><span className='rainbow monotonFont'>PONG 2180</span></h1>
    </div>
  </div>
  )
}

export default TitlePage;