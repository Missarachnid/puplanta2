import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import PasswordChangeForm from './PasswordChange';
import { Link } from 'react-router-dom';
import Privacy from './Privacy';

class Account extends React.Component {

  render = () => {
    console.log('Account ', this.props);
    return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div className='jumbotron forms-format' id='account'>
        <h1 className='headline'>Welcome {authUser.email}</h1>
        <PasswordChangeForm 
          user={this.props.user}
          pwchange={this.props.pwchange}
          changePW={this.props.changePW}
          showError={this.props.showError}
          error={this.props.error}
        />
        <div>
        <Link to={Privacy}>Privacy Policy</Link>
        <p>Please report any issues to admin@puplanta.awsapps.com</p>
      </div>
      </div>
      
      )}
    </AuthUserContext.Consumer>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);