import React, { Component } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-scroll'

class Navbar extends Component {
  render() {
    return (
    <div className="nav">
      <div className="nav-menu">
        <Link
          activeClass="active"
          spy={true} smooth={true} duration={500}
          className="nav-item"
        >
          <a className="nav-landing">landing</a>
        </Link>
        <Link 
          activeClass="active"
          spy={true} smooth={true} duration={500}
          to="scroll-date"
          className="nav-item"
        >
          <a className="nav-date">date</a>
        </Link>
        <div className="nav-logo">
          <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="50px" className=""/>
        </div>
        <Link 
          activeClass="active"
          spy={true} smooth={true} duration={500}
          to="scroll-detail"
          className="nav-item"
        >
          <a className="nav-detail">detail</a>
        </Link>
        <Link 
          activeClass="active"
          spy={true} smooth={true} duration={500}
          to="scroll-location"
          className="nav-item"
        >
          <a className="nav-location">location</a>
        </Link>

      </div>
    </div>
    );
  }
}

export default Navbar;
