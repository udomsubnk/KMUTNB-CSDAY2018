import React, { Component } from 'react';
import '../Styles/Navbar.css';


class Navbar extends Component {
  render() {
    return (
    <div className="nav">
      <div className="nav-menu">
        <a className="nav-ladding" href="">Laning</a>
        <a className="nav-date" href="">Date</a>
        <a className="nav-detail" href="">Detail</a>
        <a className="nav-location" href="">Location</a>
      </div>
    </div>
    );
  }
}

export default Navbar;
