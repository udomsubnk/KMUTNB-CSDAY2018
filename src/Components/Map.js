import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import { compose, withProps, withStateHandlers } from 'recompose'

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `300px`, width: '400px' }} />,
    containerElement: <div className="google-map-size" />,
    mapElement: <div style={{ height: `300px`, width: '100%' }}  />,
    center: { lat: 13.821483, lng: 100.515324 },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap defaultZoom={18} defaultCenter={props.center}>
    <Marker
      position={{ lat: 13.821483, lng: 100.515324 }}
      onClick={props.onToggleOpen}
    />
  </GoogleMap>
);

export class Map extends React.Component{
  render() {
    return (
      <StyledMapWithAnInfoBox />
    )
  }
}