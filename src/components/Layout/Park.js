import React from 'react';
import { withAuthorization } from '../Session';

const Park = () => (
  <div className='jumbotron store'>
    <h1>Individual Store</h1>
  </div>
)
export default withAuthorization(Park);