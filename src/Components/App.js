import React, { Component } from 'react';
import '../Styles/App.css';
import Landing from './Landing.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Landing />
        </div>
      </div>
    );
  }
}

export default App;
