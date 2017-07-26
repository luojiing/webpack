import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeDisplay from './components/TimeDisplay';

class App extends Component {
  render() {
    return (
        <div className="App">
            <TimeDisplay time={123456} />
        </div>
    );
  }
}

export default App;
