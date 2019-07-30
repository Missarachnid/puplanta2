import React from 'react';
import ParkLocations from '../location-data/ParkLocations';
import ParkMarkers from './ParkMarkers';

import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
const items = Array(ParkLocations);
console.log('items ', items);





const Map = withScriptjs(withGoogleMap((props) =>{

  let points = 
    items.map((el, id) => {
      console.log('el ', el);
      return (<ParkMarkers
        key={id}
        id={el.id}
        name={el.title}
        location={{lat: parseInt(el.lat), lng: parseInt(el.lng)}}
        />); 
    });


  return (
    <GoogleMap
      defaultZoom={9.4}
      center={ { lat: 33.8884544, lng: -84.3842454 } }
      >
      {
        points
      }
      
    </GoogleMap>
    );
  }
))

export default Map;


/*export default class className extends React.Component {
constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}` ;
      console.log("s ", s);
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div className='map' id={this.props.id} />
    );
  }
}*/