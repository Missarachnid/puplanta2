import React from 'react';
import { withAuthorization } from '../Session';

const StoreInfo = () => (
  <div className='jumbotron store'>
    <h1>Individual Store</h1>
  </div>
)
export default withAuthorization(StoreInfo);