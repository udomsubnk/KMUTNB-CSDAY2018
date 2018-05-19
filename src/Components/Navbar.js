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
        <NavMenu name='date'>date & time</NavMenu>
        <div className="nav-logo">
            <img src="/logo.png" alt="KMUTNB CSDAY 2018" width="80px" className=""/>
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
  $('.nav-logo').click(()=>{
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  })
})
export default Navbar;
