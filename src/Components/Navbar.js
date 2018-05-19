import React, { Component } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-scroll'
import { NavMenu } from './NavMenu'
import HambergerNav from './HambergerNav'
import $ from 'jquery';
class Navbar extends Component {
  render() {

    return (
    <div className="nav">
      <div className="nav-menu">
        <NavMenu name='landing'>landing</NavMenu>
        <NavMenu name='date'>date</NavMenu>
        <div className="nav-logo">
          <a href="http://th.spankbang.com/7x91/video/063+sw251">
            <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="50px" className=""/>
          </a>
        </div>
        <NavMenu name='detail'>detail</NavMenu>
        <NavMenu name='location'>location</NavMenu>
      </div>
      <div className="hamberger">
        <HambergerNav/>
      </div>
    </div>
    );
  }
}
$(document).ready(()=>{
  $(window).scroll(()=>{
    if($(window).scrollTop() <= 150){
      $('.nav').hide()
    }
    else $('.nav').show()
  })
})
export default Navbar;
