import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Main from './Main'; 
import { connect } from 'react-redux';
import ParkLocations from '../location-data/ParkLocations';
import StoreLocations from '../location-data/StoreLocations';
//import axios from 'axios';
import { withAuthentication } from '../Session';
import { compose } from 'recompose';


import {
  LOAD_PARKS,
  LOAD_STORES,
  UPDATE_USER,
  TOGGLE_MENU,
  SHOW_ERROR,
  SIGNUP_CHANGE,
  SIGNIN_CHANGE,
  CHANGE_PASSWORD,
  FORGOT_PASSWORD
} from '../../actions/actions';

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    parks: state.mapReducer.parks,
    stores: state.mapReducer.stores,
    menu: state.menuReducer.menu,
    error: state.authReducer.error,
    signupdata: state.authReducer.signupdata,
    signindata: state.authReducer.signindata,
    pwforgot: state.authReducer.pwforgot,
    pwchange: state.authReducer.pwchange
  }
}

const mapDispatchToProps = dispatch => ({
  loadParks: (parksData) => {
    dispatch({type: LOAD_PARKS, payload: parksData})
  },
  loadStores: (storesData) => {
    dispatch({type: LOAD_STORES, payload: storesData})
  },
  updateUser: (userData) => {
    dispatch({type: UPDATE_USER, payload: userData})
  },
  toggleMenu: () => {
    dispatch({type: TOGGLE_MENU})
  },
  showError: (err) => {
    dispatch({type: SHOW_ERROR, payload: err})
  },
  signupChange: (signupData) => {
    dispatch({type: SIGNUP_CHANGE, payload: signupData})
  },
  signinChange: (signinData) => {
    dispatch({type: SIGNIN_CHANGE, payload: signinData})
  },
  forgotPW: (emailData) => {
    dispatch({type: FORGOT_PASSWORD, payload: emailData})
  },
  changePW: (passData) => {
    dispatch({type: CHANGE_PASSWORD, payload: passData})
  }
});


class App extends React.Component {
  componentWillMount(){
    
    /* After Api is built, axios will be used to gather the data and the the store will be updated */
    this.props.loadParks(ParkLocations);
    this.props.loadStores(StoreLocations);
   
  }

  render = () => {
    //console.log('props in render ', this.props);
    return (
    <BrowserRouter>
    <div id='app'>
      <Navigation 
        user={this.props.user}
        updateUser={this.props.updateUser}
        toggleMenu={this.props.toggleMenu}
        menu={this.props.menu}
        error={this.props.error}
        showError={this.props.showError}
        
      />   
      <Main 
        parks={this.props.parks}
        user={this.props.user}
        stores={this.props.stores}
        updateUser={this.props.updateUser}
        error={this.props.error}
        showError={this.props.showError}
        signupChange={this.props.signupChange}
        signinChange={this.props.signinChange}
        signupdata={this.props.signupdata}
        signindata={this.props.signindata}
        pwforgot={this.props.pwforgot}
        forgotPW={this.props.forgotPW}
        pwchange={this.props.pwchange}
        changePW={this.props.changePW}
      />
      <Footer />
    </div>
      
    </BrowserRouter>
    )
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthentication)(App);