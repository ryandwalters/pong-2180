import React, { Component } from "react";
import './main1.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BallStatsContainer from './../ballStats';
import MapComponent from './../mapPage/';
import BallHitContainer from './../ballHit';
import BallHitContainer1 from './../ballHit1';
import ScoreBoardContainer from './../scoreBoard';

const Main1 = () => {
    return (
        <div className='container'>

            <div className='row'>
                {/* Map display */}
                <MapComponent />
            </div>

            <div className='row text-center'>

                {/*Ball Hit Button*/}
                <BallHitContainer />

                {/*<BallHitContainer1 />*/}
            </div>

            <div className="row">    
                {/* Ball Arrival Time and any other stats we want */}
                <BallStatsContainer />
            </div>

            <div className='row'>
                {/* scoreboar and possible twitter and text buttons */}
                <ScoreBoardContainer />  
            </div>
        </div>
    )
}

export default main1;