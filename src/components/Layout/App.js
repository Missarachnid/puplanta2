import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../App.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main'; 
import { withAuthentication } from '../Session';

const App = () => (
    <BrowserRouter>
    <div id='app'>
      <Navbar />   
      <Main />
      <Footer />
    </div>
      
    </BrowserRouter>
  );


export default withAuthentication(App);
