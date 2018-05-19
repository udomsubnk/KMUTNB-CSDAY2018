import React, { Component } from 'react';
import '../Styles/Navbar.css';
import { NavMenu } from './NavMenu'
import HambergerNav from './HambergerNav'

class Navbar extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    document.getElementById('nav-bar').style.display = 'none'
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if(window.scrollY < 200) {
      document.getElementById('nav-bar').style.display = 'none'
    }else {
      document.getElementById('nav-bar').style.display = 'block'
    }
  }

  render() {
    return (
    <div id='nav-bar' className="nav">
      <div className="nav-menu">
        <NavMenu name='landing'>Home</NavMenu>
        <NavMenu name='detail'>detail</NavMenu>
        <NavMenu name='landing'>
          <div className="nav-logo">
              <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="120px" className=""/>
          </div>
        </NavMenu>
        <NavMenu name='date'>date & time</NavMenu>
        <NavMenu name='location'>location</NavMenu>
      </div>
      <div className="hamberger">
        <HambergerNav/>
      </div>
    </div>
    );
  }
}

export default Navbar;
