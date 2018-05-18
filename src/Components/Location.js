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
            <div className="content-location-body mgl40">Department of Computer Science</div>
            <div className="content-location-body mgl40">Faculty of Applied Science</div>
            <div className="content-location-footer mgl40">ที่จอดรถฟรี !!</div>
          </div>        
        </div>
      </Element>
    );
  }
}

export default Location;
