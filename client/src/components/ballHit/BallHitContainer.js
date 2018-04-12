import React, { Component } from 'react';

class BallHitContainer extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount() {
        console.log("Ball hit Container");

    }
    render() {
        return (

        <div className="col-xs-12 b" >
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">HIT THE BALL!</h3>
                </div>
                <div className="panel-body">
                    {/* <button onClick={activateLasers}>
                        Activate Lasers
                    </button> */}
                </div>
            </div>
        </div>

        )

    }


}


export default BallHitContainer;