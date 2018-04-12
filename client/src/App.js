import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitlePage from './components/titlePage/';
import { BrowserRouter, Route, Link } from 'react-router-dom'


/*document.querySelectorAll('#loadHome').click(function () {
  //change  style to display: none; to hide it
  document.querySelectorAll('#body').attr('style', 'display: initial;');
  //change main3 style to display: initial: to show it
  document.querySelectorAll('#title').attr('style', 'display: none;');
});*/

function handleClick(event) {
  //change  style to display: none; to hide it
  document.querySelectorAll('#body').attr('style', 'display: initial;');
  //change main3 style to display: initial: to show it
  document.querySelectorAll('#title').attr('style', 'display: none;');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitlePage/>
        <div id='body'>
          <header>header</header>
          <main>main</main>
          <footer>footer</footer>
        </div>
      </div>
    );
  }
}

export default App;
