import React, { Component } from "react";
import './titlePage.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TitlePage = () => {
  return(
  <div id='title' className='text-center'>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <h1><span className='rainbow monotonFont'>PONG</span></h1>
      <h1><span className='rainbow monotonFont'>2180</span></h1>
  </div>
  )
}

export default TitlePage;