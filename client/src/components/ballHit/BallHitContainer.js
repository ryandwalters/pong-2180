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

        <div>
            <button className='jumbotron btn rainbow monotonFont'>Hit the Ball!</button>
        </div>
                        
        )

    }


}


export default BallHitContainer;