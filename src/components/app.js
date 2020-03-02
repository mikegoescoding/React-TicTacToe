import React, { Component } from 'react';
import Game from './game';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>TicTacToe</h1>
        <Game />
      </div>
    );
  }
}
