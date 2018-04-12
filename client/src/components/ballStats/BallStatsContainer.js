import React, { Component } from 'react';
import './BallStatsContainer.css';

class BallStatsContainer extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount() {
        console.log("Ball Stats Container");

    }
    render() {
        return (

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

        )

    }


}


export default BallStatsContainer;