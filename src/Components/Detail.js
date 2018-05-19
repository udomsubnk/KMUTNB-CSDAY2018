import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../Styles/Detail.css';


class Detail extends Component {
  render() {
    return (
      <Element className="mgt-global-20" name="scroll-detail">
        <div className="Detail" data-aos="fade-up">
          <h1>This is Detail component</h1>        
        </div>
      </Element>
    );
  }
}

export default Detail;
