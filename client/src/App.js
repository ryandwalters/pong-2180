import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/titlePage/';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home />

        <header>header</header>

        <main className="container">

          <div className="row">
            {/* Ball Arrival Time and any other stats we want */}
            <div className="col-xs-3" >
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Arrival Time</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>

            </div>

            {/* Map display */}

            <div className="col-xs-6" >
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Map</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
            </div>


            {/* scoreboar and possible twitter and text buttons */}
            <div className="col-xs-3" >
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Scoreboard</h3>
                </div>
                <div class="panel-body">
                  Panel content
                </div>
              </div>
            </div>
            <div className="col-xs-12 b" >
            <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">HIT THE BALL!</h3>
                </div>
                <div class="panel-body">
                  <button>hit the ball!</button>
                </div>
              </div>


              </div>


            

          </div>



        </main>




        <footer>footer</footer>


      </div>









      
    )};
}

export default App;
