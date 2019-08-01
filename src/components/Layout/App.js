import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main'; 
import { connect } from 'react-redux';
import ParkLocations from '../location-data/ParkLocations';
//import axios from 'axios';

import {
  LOAD_PARKS,
  LOAD_STORES,
  UPDATE_USER,
  /*TOGGLE_INFOWINDOW,
  CURRENT_MARKER,
  CURRENT_WINDOW*/
} from '../../actions/actions';

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    signedin: state.authReducer.signedin,
    parks: state.mapReducer.parks,
    stores: state.mapReducer.stores,
    /*showinfowindow: state.mapReducer.showinfowindow,
    selectedmarker: state.mapReducer.selectedmarker,
    selectedwindow: state.mapReducer.selectedwindow*/
  }
}

const mapDispatchToProps = dispatch => ({
  loadParks: (parksData) => {
    dispatch({type: LOAD_PARKS, payload: parksData})
  },
  loadStores: (storesData) => {
    dispatch({type: LOAD_STORES, payload:storesData})
  },
  updateUser: (userData) => {
    dispatch({type: UPDATE_USER, payload: userData})
  }/*,
  toggleInfoWindow: (bool) => {
    dispatch({type: TOGGLE_INFOWINDOW, payload: bool})
  },
  currentMarker: (markerData) => {
    dispatch({type: CURRENT_MARKER, payload: markerData})
  },
  currentWindow: (windowData) => {
    dispatch({type: CURRENT_WINDOW, payload: windowData})
  }*/
});


class App extends React.Component {
  componentWillMount(){
    
    /* After Api is built, axios will be used to gather the data and the the store will be updated */
    this.props.loadParks(ParkLocations);
    //console.log('parks ', this.props)
  }

  render = () => {
    //console.log('props in render ', this.props);
    return (
    <BrowserRouter>
    <div id='app'>
      <Navbar />   
      <Main 
        parks={this.props.parks}
        user={this.props.user}
        /*toggleInfoWindow={this.props.toggleInfoWindow}
        showinfowindow={this.props.showinfowindow}
        currentMarker={this.props.currentMarker}
        selectedmarker={this.props.selectedmarker}
        currentWindow={this.props.currentWindow}
        selectedWindow={this.props.selectedwindow}*/
      />
      <Footer />
    </div>
      
    </BrowserRouter>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);