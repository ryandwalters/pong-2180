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
                        <h3 className="panel-title bungeeFont">Ball Stats</h3>
                    </div>
                    <div className="panel-body">
                        <h4> Distance to arrival: </h4>
                        <h4> Time to arrival: </h4>
                        
                    </div>
                </div>
            </div>

        )

    }


}


export default BallStatsContainer;