import React, { Component } from 'react';

class MapContainer extends Component {

    componentWillMount() {
        console.log("hello")
        //this is where you want to do your fetch to get a google mapst
        //step 1 - grab information from previous source get location call to backend db or it could be props sent from anotehr componen
        //step 2 - make a get to google maps using location from previous source
        //step 3 - handle the response from that get
        //setp 4 - render map 
    }

    render() {
        return (


            < div className="col-xs-6" >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Map</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>
            </div>

        )

    }

}

export default MapComponent;