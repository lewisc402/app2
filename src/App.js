import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Index from './components/Index.js';
import store from './store/index.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    );
  }
}

export default App;
