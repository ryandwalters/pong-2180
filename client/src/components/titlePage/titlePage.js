import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './titlePage.css';

const TitlePage = () =>
  <div id='title'>
    <div className='text-center'>
      <h1><span id='rainbow'>PONG 2180</span></h1>
      <hr/>
      <a onClick="return handleClick(event);"><h2>Click Here to Start!</h2></a>
    </div>
  </div>;

export default TitlePage;