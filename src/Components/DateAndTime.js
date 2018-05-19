import React, {Component} from 'react';
import {Element} from 'react-scroll'
import '../Styles/DateAndTime.css';
import Activities from './Activities';
export default class DateAndTime extends Component {
  render() {
    return (
      <Element className="mgt-global-20" name="scroll-date">
        <div className="DateAndTime" data-aos="fade-up">
          <div className="left-side">
            <h1>DATE & TIME</h1>
            <h2 data-aos="fade-right">28 MAY 2018</h2>
            <h2 data-aos="fade-right">10:00 - 16:00</h2>
          </div>
          <div className="right-side">
            <h1>PLACE</h1>
            <h2 data-aos="fade-left">APPLIED SCIENCE BUILDING (78)</h2>
            <h2 data-aos="fade-left">KING MONGKUT'S UNIVERSITY
              <br/>OF TECHNOLOGY
              NORTH BANGKOK</h2>
              {/* <h2>KMUTNB</h2> */}
          </div>
        </div>
        <Activities/>
      </Element>
    )
  }
}