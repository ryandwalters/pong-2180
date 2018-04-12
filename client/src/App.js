import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';  //RPB
import Home from './components/titlePage/';  //RPB
// import MapComponent from './components/mapPage/MapContainer';
import BallStatsContainer from './components/ballStats/BallStatsContainer';
const App = () => {

  // render() {
  return (
    <div className="App">
      <Home />

      <header>header</header>

      <main className="container">

        <div className="row">

{/* <BallStatsContainer /> */}
          {/* Ball Arrival Time and any other stats we want */}
          {/* <div className="col-xs-3" >
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Arrival Time</h3>
              </div>
              <div className="panel-body">
                Panel content
                </div>
            </div>
          </div> */}

          {/* <MapComponent /> */}
          {/* Map display */}
          {/* <div className="col-xs-6" >
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Map</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>
            </div> */}


          {/* scoreboar and possible twitter and text buttons */}
          <div className="col-xs-3" >
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Scoreboard</h3>
              </div>
              <div className="panel-body">
                Panel content
                </div>
            </div>
          </div>
          <div className="col-xs-12 b" >
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">HIT THE BALL!</h3>
              </div>
              <div className="panel-body">
                <button>hit the ball!</button>
              </div>
            </div>


          </div>




        </div>



      </main>




      <footer>footer</footer>


    </div>





  )
};

export default App;
