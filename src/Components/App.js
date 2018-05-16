import React, { Component } from 'react';
import '../Styles/App.css';
import Landing from './Landing.js'
import Location from './Location.js'
import Timeline from './Landing.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Landing />
          <Location />
          <Timeline />
        </p>
      </div>
    );
  }
}

export default App;
