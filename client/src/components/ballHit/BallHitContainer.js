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

        <div className="col-xs-12 b text-center" >
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title bungeeFont">HIT THE BALL!</h3>
                </div>
                <div className="panel-body">
                    <button className='jumbotron btn rainbow monotonFont'>
                        <h2>Activate Lasers</h2>
                    </button>
                </div>
            </div>
        </div>

        )

    }


}


export default BallHitContainer;