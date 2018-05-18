import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../Styles/Detail.css';


class Detail extends Component {
  render() {
    return (
      <Element name="scroll-detail">
        <div className="Detail">
          <h1>This is Detail component</h1>        
        </div>
      </Element>
    );
  }
}

export default Detail;
