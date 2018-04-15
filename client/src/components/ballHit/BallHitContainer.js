import React, { Component } from 'react';

class BallHitContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("Ball hit Container");

    }
    render() {
        return (

        <button className='jumbotron btn rainbow monotonFont'>
            <h2>HIT THE BALL</h2>
        </button>

        )

    }


}


export default BallHitContainer;