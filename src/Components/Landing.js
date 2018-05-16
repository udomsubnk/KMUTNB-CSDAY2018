import React, { Component } from 'react';
import '../Styles/Landing.css';
import Logo from '../Utils/logo.png'

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1>This is Landing component</h1>
        <img src={Logo} alt="KMUTNB CSDAY 2018" height="400px"/>
      </div>
    );
  }
}

export default Landing;
