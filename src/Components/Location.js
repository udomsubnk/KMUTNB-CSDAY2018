import React, { Component } from 'react';
import { Map } from './Map'

import '../Styles/Location.css';


class Location extends Component {
  render() {
    return (
      <div className="Location">
        <div className="map-location halfnaja">
          <div className="map-google">
            <Map/>
          </div>
        </div>
        <div className="content-location halfnaja">
          Location
        </div>        
      </div>
    );
  }
}

export default Location;
