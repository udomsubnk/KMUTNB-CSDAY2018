import React, { Component } from 'react';
import '../Styles/App.css';
import Landing from './Landing.js'
import Location from './Location.js'
import Timeline from './Landing.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Location />
        <Timeline />
      </div>
    );
  }
}

export default App;
