import React from 'react';
import puplanta from '../../img/puplanta_long_name.png';
import { Link } from 'react-router-dom';
import * as ROUTES from '../Routes/Routes';
import { AuthUserContext } from '../Session';



export default class Navigation extends React.Component {
  
  render = () => {
    let temp;
  if(this.props.menu){
    temp = 'collapse.show'; 
  } else {
    temp = 'collapse';
  }

  const toggle = () => {
    this.props.toggleMenu();
  }

  const NavbarNonAuth = () => (
    <ul className='navbar-nav mr-auto' onClick={toggle}>
      <li className='nav-item active'>
        <Link className='nav-link' to={ROUTES.HOME} >Home<span className='sr-only'>(current)</span></Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.ABOUT} >About</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.STORES} >Stores</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.PARKS} >Parks</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.SIGN_IN} >Sign In</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.SIGN_UP} >Sign Up</Link>
      </li>
    </ul>
  );


  const NavbarAuth = ({authUser}) => (
    <ul className='navbar-nav'>
      <li className='nav-item active'>
        <Link className='nav-link' to={ROUTES.HOME} onClick={toggle}>Home <span className='sr-only'>(current)</span></Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.ABOUT} onClick={toggle}>About</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.STORES} onClick={toggle}>Stores</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.PARKS} onClick={toggle}>Parks</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.ACCOUNT} onClick={toggle}>Account</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={ROUTES.SIGN_OUT} onClick={toggle}>Sign Out</Link>
      </li>
    </ul>
  );

    return (
       <nav className='navbar navbar-light navbar-expand-md'>
    <Link className='navbar-brand' to={ROUTES.HOME}>
      <img src={puplanta} className='puplanta-logo' alt='puplanta logo' />
    </Link>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation' onClick={ e => this.props.toggleMenu()}>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className={`${temp} navbar-collapse`} id='navbarNav' >
    <AuthUserContext.Consumer>
      {authUser => (
        authUser ? <NavbarAuth authUser={authUser} /> : <NavbarNonAuth menu={this.props.menu} toggle={toggle}/>
        )
      }
      </AuthUserContext.Consumer>
      </div>
      </nav>
    )
  }
}

