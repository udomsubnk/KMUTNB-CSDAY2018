import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../Styles/Detail.css';


class Detail extends Component {
  render() {
    return (
      <Element className="mgt-global-20" name="scroll-detail">
        <div className="Detail Detail-textalign-left" data-aos="fade-up">
          <h1>WHAT IS CS DAY?</h1>     
          <h1>PARTICIPANTS</h1>
          <h1>REASONS TO COME</h1>
        </div>
      </Element>
    );
  }
}

export default Detail;
