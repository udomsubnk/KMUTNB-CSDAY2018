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
          landing
        </Link>
        <Link 
          activeClass="active"
          spy={true} smooth={true} duration={500}
          to="scroll-date"
          className="nav-item"
        >
          date
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
          detail
        </Link>
        <Link 
          activeClass="active"
          spy={true} smooth={true} duration={500}
          to="scroll-location"
          className="nav-item"
        >
          location
        </Link>
      </div>
    </div>
    );
  }
}

export default Navbar;
