import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";
import './gamestart.css';


const Gamestart = () => {
    return (
        <div className='text-center'>
            <hr />
            <hr />
            <div className='row'>
                <div className='col-xs-12'>
                    {/*Player 1 Form*/}
                    <form id='player1' className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <label htmlFor='player1'>Player 1 Address</label>
                            <input type="address" className="form-control" placeholder="Your Location" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-12'>
                    {/*Player 2 Form*/}
                    <form id='player2' className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <label htmlFor='player2'>Player 2 Address</label>
                            <input type="address" className="form-control" placeholder="Your Location" />
                        </div>
                    </form>
                </div>
            </div>
            {/*Choose Ball Panel*/}
            <div className='row panel'>
                <div className='panel-title'>
                    <h2 className='bungeeFont'>Click the Box to Choose Your Ball!</h2>
                </div>
                <div className='panel-body'>
                    <ul className='bungeeFont'>
                        <li>
                            <label htmlFor='checkbox'>Bowling Ball</label>
                            <input type='checkbox' id='bowlingball' />
                            <img className='img img-thumbnail' src={require = './../images/bowlingball.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Baseball</label>
                            <input type='checkbox' id='baseball' />
                            <img className='img img-thumbnail' src={require = './../images/baseball.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Basketball</label>
                            <input type='checkbox' id='basketball' />
                            <img className='img img-thumbnail' src={require = './../images/basketball.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Crying Emoji</label>
                            <input type='checkbox' id='cryingemoji' />
                            <img className='img img-thumbnail' src={require = './../images/cryingemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Disappointed Emoji</label>
                            <input type='checkbox' id='disappointedemoji' />
                            <img className='img img-thumbnail' src={require = './../images/disappointedemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Dizzy Emoji</label>
                            <input type='checkbox' id='dizzyemoji' />
                            <img className='img img-thumbnail' src={require = './../images/dizzyemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Fireball</label>
                            <input type='checkbox' id='fireball' />
                            <img className='img img-thumbnail' src={require = './../images/fireball.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Heart</label>
                            <input type='checkbox' id='heart' />
                            <img className='img img-thumbnail' src={require = './../images/heart.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Huggin Emoji</label>
                            <input type='checkbox' id='huggingemoji' />
                            <img className='img img-thumbnail' src={require = './../images/huggingfaceemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Monocle Emoji</label>
                            <input type='checkbox' id='monocle' />
                            <img className='img img-thumbnail' src={require = './../images/monocleemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Nerd Emoji</label>
                            <input type='checkbox' id='nerdemoji' />
                            <img className='img img-thumbnail' src={require = './../images/nerdemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Poo Emoji</label>
                            <input type='checkbox' id='pooemoji' />
                            <img className='img img-thumbnail' src={require = './../images/pooemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Surprised Emoji</label>
                            <input type='checkbox' id='surprisedemoji' />
                            <img className='img img-thumbnail' src={require = './../images/surprisedemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Thinking Emoji</label>
                            <input type='checkbox' id='thinkingemoji' />
                            <img className='img img-thumbnail' src={require = './../images/thinkingfaceemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Vomit Emoji</label>
                            <input type='checkbox' id='vomitemoji' />
                            <img className='img img-thumbnail' src={require = './../images/vomitemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>Wacky Emoji</label>
                            <input type='checkbox' id='wackyemoji' />
                            <img className='img img-thumbnail' src={require = './../images/wackyemoji.png'} />
                        </li>
                        <li>
                            <label htmlFor='checkbox'>YinYang</label>
                            <input type='checkbox' id='yinyang' />
                            <img className='img img-thumbnail' src={require = './../images/yinyang.png'} />
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='row'>
                {/*Start Game Button*/}
                <button className='btn'>
                    <h2 className='jumbotron rainbow monotonFont'><Link to='/main1'>Start Game!</Link></h2>
                </button>
            </div>
            <div className='row'>
                {/*Start Game Button*/}
                <button className='btn'>
                    <h2 className='jumbotron rainbow monotonFont'><a href='https://pong2180-physics.herokuapp.com/users/mobile/1'>Demo User 1</a></h2>
                </button>
            </div>
            <div className='row'>
                {/*Start Game Button*/}
                <button className='btn'>
                    <h2 className='jumbotron rainbow monotonFont'><a href='https://pong2180-physics.herokuapp.com/users/mobile/2'>Demo User 2</a></h2>
                </button>
            </div>
            <div className='row'>
                {/*Start Game Button*/}
                <button className='btn'>
                    <h2 className='jumbotron rainbow monotonFont'><a href='https://richbu.github.io/Pong2180_user_demo/'>Detailed Stats</a></h2>
                </button>
            </div>
            <hr />
            <hr />
        </div>
    )
}

export default Gamestart;