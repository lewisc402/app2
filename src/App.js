import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Board from './components/Board.js';
import store from './store/index.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board/>
      </Provider>
    );
  }
}

export default App;
