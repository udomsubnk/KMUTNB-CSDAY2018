import React, { Component } from 'react';
import { Element } from 'react-scroll'
import { Map } from './Map'

import '../Styles/Location.css';


class Location extends Component {
  render() {
    return (
      <Element className="mgt-global-20" name="scroll-location">
        <div className="Location">
          <div className="map-location halfnaja">
            <div className="map-google">
              <Map/>
            </div>
          </div>
          <div className="content-location halfnaja">
            <div className="content-location-header mgl40">Location</div>
            <div className="content-location-body mgl40">ภาควิชาวิทยาการคอมพิวเตอร์</div>
            <div className="content-location-body mgl40">คณะวิทยาศาสตร์ประยุกต์(78)</div>
            <div className="content-location-body mgl40">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</div>
            <div className="content-location-footer mgl40">สามารถจอดรถในมหาวิทยาลัยได้</div>
          </div>        
        </div>
      </Element>
    );
  }
}

export default Location;
