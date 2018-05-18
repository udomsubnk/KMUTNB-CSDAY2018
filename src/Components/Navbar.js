import React, { Component } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-scroll'

class Navbar extends Component {
  render() {
    return (
    <div className="nav">
      <div className="nav-menu">
        <a className="nav-landing" href="">
          <Link 
            activeClass="active"
            spy={true} 
            smooth={true} 
            duration={500}
            to="scroll-landing"
          >
            landing
          </Link>
        </a>
        <a className="nav-date" href="">
          <Link 
            activeClass="active"
            spy={true} smooth={true} duration={500}
            to="scroll-date"
          >
            date
          </Link>
        </a>
        <a className="nav-detail" href="">
          <Link 
            activeClass="active"
            spy={true} smooth={true} duration={500}
            to="scroll-detail"
          >
            detail
          </Link>
        </a>
        <a className="nav-location" href="">
          <Link 
            activeClass="active"
            spy={true} smooth={true} duration={500}
            to="scroll-location"
          >
            location
          </Link>
        </a>
      </div>
    </div>
    );
  }
}

export default Navbar;
