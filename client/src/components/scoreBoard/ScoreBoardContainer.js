import React, { Component } from 'react';

class ScoreBoardContainer extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount() {
        console.log("ScoreBoard Container");

    }
    render() {
        return (
            <div className="col-xs-3" >
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title bungeeFont">Scoreboard</h3>
                </div>
                <div className="panel-body">
                    Panel content
                </div>
            </div>
        </div>



        )

    }


}


export default ScoreBoardContainer;