import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Game/Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Chess</h1>
        </header>
        <p className="App-intro">
          <Board></Board>
        </p>
      </div>
    );
  }
}

export default App;
