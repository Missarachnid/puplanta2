import React from 'react';
import MapContainer from './MapContainer';
import { render } from 'react-dom';
import InfoWindow from './InfoWindow'

export default class Stores extends React.Component {
 
  render = () => {
        /* This dynamically loads cards from the park locations data */
        let stores = this.props.stores.map( el => (
          <div className='col-sm-12 col-md-6 col-lg-4' key={el.id}>
            <div className='card card-stores' >
              <img src={el.image} className='card-img-top card-stores-image rounded' alt={`An logo for ${el.title}.` } />
              <div className='card-body card-main-body'>
              <div className='card-text-seperator'>
                <h5 className='card-title card-main-title'>{el.brand}</h5>
                
                <p className='card-text card-main-text'>{el.address}</p>
                </div>
                <a href={el.website} className='btn paw-button' rel='noopener noreferrer' target='_blank'>Info</a>
              </div>
            </div>
          </div>
        ));
      
    return(
    <div id='stores'>
       <h1 className='headline' >Atlanta Dog Stores</h1>
       <div id='map-placement'>
       <MapContainer
        id="myMap"
        options={{
          center: { lat: 33.8884544, lng: -84.3842454 },
          zoom: 8.4
        }}
        onMapLoad={map => {

          let windowArr = [];

          this.props.stores.map((el) => {
            let temp = el;
            let marker = new window.google.maps.Marker({
              position: { lat: el.lat, lng: el.lng },
              map: map,
              title: el.title,
              website: el.website,
              address: el.address
            });
            
            const createInfoWindow = (e, map) => {

              const infoWindow = new window.google.maps.InfoWindow({
                  content: '<div id="infoWindow" />',
                  position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
                  title: e.title,
                  maxWidth: 280
              });

              infoWindow.addListener('domready', (e) => {
                render(<InfoWindow data={temp} />, document.getElementById('infoWindow'));
              });

              windowArr.push(infoWindow);
              
              if(windowArr.length > 1){
                let infoItem = windowArr.shift();
                infoItem.close(map);
                infoWindow.open(map);
                console.log('AHa', windowArr);
              } else {
                infoWindow.open(map)
                console.log('Arr issue', windowArr);
              }
            }

            marker.addListener('click', e => {
                createInfoWindow(e, map);
            });
            
            return marker;
          });

        }}
      />
       </div>
       <div className='items-display container'>
          <div className='row align-items-center'>
        
            {stores}

          </div>
        </div>
    </div>
    )
  }
}