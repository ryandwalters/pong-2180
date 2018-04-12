import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import TitlePage from './components/titlePage/';
import Header from './components/header/';
import Footer from './components/footer/';
import Main1 from './components/main1/';
import { BrowserRouter, Route, Link } from 'react-router-dom'

/*handleClick(event) => {
  event.preventDefault;
  alert('hi!');
  //change  style to display: none; to hide it
  //document.querySelectorAll('#body').attr('style', 'display: initial;');
  //change main3 style to display: initial: to show it
  //document.querySelectorAll('#title').attr('style', 'display: none;');
}*/

/*const z = document.getElementById('#loadLoginPage');
const y = document.getElementById('#title');
const x = document.getElementById('#body');

z.onClick = (event) => {
    event.preventDefault;
    y.style.display = 'none';
    x.style.display = 'initial';
};*/

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Header/>
          <TitlePage/>
          <Main1/>
        <Footer/>
      </div>
    );
  }
}


export default App;
