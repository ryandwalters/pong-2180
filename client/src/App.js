import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitlePage from './components/titlePage/';
import { BrowserRouter, Route, Link } from 'react-router-dom'


/*document.querySelectorAll('#loadHome').click(function () {
  //change  style to display: none; to hide it
  document.querySelectorAll('#body').attr('style', 'display: initial;');
  //change main3 style to display: initial: to show it
  document.querySelectorAll('#title').attr('style', 'display: none;');
});*/

function handleClick(event) {
  //change  style to display: none; to hide it
  document.querySelectorAll('#body').attr('style', 'display: initial;');
  //change main3 style to display: initial: to show it
  document.querySelectorAll('#title').attr('style', 'display: none;');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitlePage/>
        <div id='body'>
          <header>header</header>
          <main className="container">

          <div className="row">
            {/* Ball Arrival Time and any other stats we want */}
            <div className="col-xs-3" >
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Arrival Time</h3>
                </div>
                <div className="panel-body">
                  Panel content
                  </div>
              </div>

            </div>

            {/* <MapComponent/> */}
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
      </div>
    );
  }
}


export default App;
