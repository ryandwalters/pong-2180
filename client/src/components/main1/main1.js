import React, { Component } from "react";
import './main1.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BallStatsContainer from './../ballStats';
import MapComponent from './../mapPage/';
import BallHitContainer from './../ballHit';
import ScoreBoardContainer from './../scoreBoard';

const Main1 = () => {
    return (
        <div className='container'>
            <div className="row">
                {/* Ball Arrival Time and any other stats we want */}
                <BallStatsContainer />

                {/* Map display */}
                <MapComponent />
                
                {/* scoreboar and possible twitter and text buttons */}
                <ScoreBoardContainer />

                {/*Ball Hit Button*/}
                <BallHitContainer />

            </div>
        </div>
    )
}

export default Main1;