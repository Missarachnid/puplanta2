import React from 'react';
import * as ROUTES from '../Routes/Routes';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Stores from './Stores';
import Parks from './Parks';
import Account from './Account';
import SignIn from './SignIn';
import SignOut from './SignOut';
import PasswordForgetPage from './PasswordForget';
import PasswordChange from './PasswordChange';
import SignUpPage from './SignUp';
import Park from './Park';
import StoreInfo from './StoreInfo';
import { withAuthentication } from '../Session';

class Main extends React.Component {
  

  render = () => {
    //console.log('inside Main ', this.props);
    return (
      <div className='container' id='main'>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.PARKS} render={props => 
        <Parks 
        parks={this.props.parks}
        user={this.props.user}
       
        />}
      />
      <Route path={ROUTES.PARK_ID} component={Park} />
      <Route path={ROUTES.STORES} component={Stores} />
      <Route path={ROUTES.STORE_ID} component={StoreInfo} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.SIGN_OUT} component={SignOut} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChange} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
    </div>
    );
  }
    
  
}

export default withAuthentication(Main);