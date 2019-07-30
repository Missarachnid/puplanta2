import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import PasswordChangeForm from './PasswordChange';
import SignOutButton from './SignOut';

class Account extends React.Component {

  render = () => (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordChangeForm />
        <SignOutButton></SignOutButton>
      </div>
      )}
    </AuthUserContext.Consumer>
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);