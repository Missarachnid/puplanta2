import React from 'react';
import { Marker } from 'react-google-maps';

export default class ParkMarkers extends React.Component {
  
  render = (props) => (
    <Marker
      position={this.props.location}
    >
    </Marker>
  )
}