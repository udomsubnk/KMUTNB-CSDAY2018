import React, { Component } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-scroll'
import HambergerNav from './HambergerNav'

class Navbar extends Component {
  render() {

    return (
    <div className="nav">
      <div className="nav-menu">
        <Link
          activeClass="active"
          spy={true} smooth={true} duration={500}
          className="nav-item"
          to="scroll-landing"
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
          <a href="http://th.spankbang.com/7x91/video/063+sw251">
            <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="50px" className=""/>
          </a>
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
      <div className="hamberger">
        <HambergerNav/>
      </div>
    </div>
    );
  }
}

export default Navbar;
