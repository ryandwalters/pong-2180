import React, { Component } from "react";
import './Main1.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BallStatsContainer from './../ballStats';
import BallHitContainer from './../ballHit';
import ScoreBoardContainer from './../scoreBoard';

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

<ScoreBoardContainer/>
                {/* scoreboar and possible twitter and text buttons */}
                {/* <div className="col-xs-3" >
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Scoreboard</h3>
                        </div>
                        <div className="panel-body">
                            Panel content
                        </div>
                    </div>
                </div> */}

<BallHitContainer/>

            </div>
        </div>
    )
}

export default Main1;