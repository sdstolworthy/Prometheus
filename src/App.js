import React, { Component } from 'react';
import logo from './logo.svg';
import Routes from './routes'
import 'bulma/css/bulma.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
