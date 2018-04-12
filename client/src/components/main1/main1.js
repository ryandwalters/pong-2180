import React, { Component } from "react";
import './Main1.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BallStatsContainer from './../ballStats';

const Main1 = () => {
    return (
        <div className='container'>
            <div className="row">
                {/* Ball Arrival Time and any other stats we want */}
                <BallStatsContainer/>

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
        </div>
    )
}

export default Main1;