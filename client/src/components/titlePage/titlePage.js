import React, { Component } from "react";
import './titlePage.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div id='title' className='text-center'>
        <h1><span id='rainbow'>PONG 2180</span></h1>
        <hr />
        {/* <Router>
          <Link href='#'><h2>Click Here to Start!</h2></Link>
        </Router> */}
      </div>
    </div>
  )
}

export default Home;