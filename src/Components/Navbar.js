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
    if(window.scrollY < 80) {
      document.getElementById('nav-bar').style.display = 'none'
    }else {
      document.getElementById('nav-bar').style.display = ''
    }
  }

  render() {
    return (
    <div id='nav-bar' className="nav">
      <div className="nav-menu">
        <NavMenu name='landing'>
          <p className="nav-text">landing</p>
        </NavMenu>
        <NavMenu name='detail'>
          <p className="nav-text">detail</p>
        </NavMenu>
        <NavMenu name='landing'>
          <div className="nav-logo">
              <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="80px" />
          </div>
        </NavMenu>
        <NavMenu name='table'>
          <p className="nav-text">Project lists</p>
        </NavMenu>
        <NavMenu name='location'>
          <p className="nav-text">location</p>
        </NavMenu>
        
        {/* <NavMenu name='table'>
          <p className="nav-text">table</p>
        </NavMenu> */}
      </div>
      <div className="hamberger">
        <HambergerNav/>
      </div>
    </div>
    );
  }
}

export default Navbar;
