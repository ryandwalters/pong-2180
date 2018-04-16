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
                    {/*Player 1 Form*/}
                    <form id='player1' className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <label for='Addrress Player 1'>Adress Player 1</label>
                            <input type="address" className="form-control" placeholder="Your Location"/>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className='col-xs-6'>
                    {/*Player 2 Form*/}
                    <form id='player2' className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <label for='Addrress Player 2'>Adress Player 2</label>
                            <input type="address" className="form-control" placeholder="Your Location"/>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            {/*Choose Ball Panel*/}
            <div className='row panel'>
                <div className='panel-title'>
                    <h2 className='bungeeFont'>Choose Your Ball!</h2>
                </div>
                <div className='panel-body'>
                    <ul>
                        <li>
                            <label for='checkbox'>Bowling Ball</label>
                            <input type='checkbox' id='bowlingball'/>
                            <img className='img img-thumbnail' src={require='./../images/bowlingball.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Baseball</label>
                            <input type='checkbox' id='baseball'/>
                            <img className='img img-thumbnail' src={require='./../images/baseball.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Basketball</label>
                            <input type='checkbox' id='basketball'/>
                            <img className='img img-thumbnail' src={require='./../images/basketball.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Crying Emoji</label>
                            <input type='checkbox' id='cryingemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/cryingemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Disappointed Emoji</label>
                            <input type='checkbox' id='disappointedemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/disappointedemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Dizzy Emoji</label>
                            <input type='checkbox' id='dizzyemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/dizzyemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Fireball</label>
                            <input type='checkbox' id='fireball'/>
                            <img className='img img-thumbnail' src={require='./../images/fireball.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Heart</label>
                            <input type='checkbox' id='heart'/>
                            <img className='img img-thumbnail' src={require='./../images/heart.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Huggin Emoji</label>
                            <input type='checkbox' id='huggingemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/huggingfaceemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Monocle</label>
                            <input type='checkbox' id='monocle'/>
                            <img className='img img-thumbnail' src={require='./../images/monocleemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Nerd Emoji</label>
                            <input type='checkbox' id='nerdemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/nerdemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Poo Emoji</label>
                            <input type='checkbox' id='pooemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/pooemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Surprised Emoji</label>
                            <input type='checkbox' id='surprisedemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/surprisedemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Thinking Emoji</label>
                            <input type='checkbox' id='thinkingemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/thinkingfaceemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Vomit Emoji</label>
                            <input type='checkbox' id='vomitemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/vomitemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>Wacky Emoji</label>
                            <input type='checkbox' id='wackyemoji'/>
                            <img className='img img-thumbnail' src={require='./../images/wackyemoji.png'}/>
                        </li>
                        <li>
                            <label for='checkbox'>YinYang</label>
                            <input type='checkbox' id='yinyang'/>
                            <img className='img img-thumbnail' src={require='./../images/yinyang.png'}/>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='row'>
                {/*Start Game Button*/}
                <button classname='btn'>
                    <h2 className='jumbotron rainbow monotonFont'>Start Game!</h2>
                </button>
            </div>
            <hr/>
            <hr/>
        </div> 
    )
}

export default Gamestart;