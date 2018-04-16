import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";
import './gamestart.css';


const Gamestart = () => {
    return(
        <div className='text-center'>
            <hr/>
            <hr/>
            <div className='row'>        
                <div className='col-xs-6'>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <label for='Addrress Player 1'>Adress Player 1</label>
                            <input type="address" className="form-control" placeholder="Your Location"/>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className='col-xs-6'>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <label for='Addrress Player 2'>Adress Player 2</label>
                            <input type="address" className="form-control" placeholder="Your Location"/>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <div className='panel'>
                <div className='panel-title'>
                    <h2>Choose Your Ball!</h2>
                </div>
                <div className='panel-body'>
                    <ul>
                        <li><Link to='#'><img src='#'/></Link></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <button classname='btn'><h2 className='jumbotron rainbow monotonFont'>Start Game!</h2></button>
            </div>
        </div> 
    )
}

export default Gamestart;