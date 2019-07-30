import React from 'react';
import puplanta from '../../img/puplanta_long_name.png';
import { Link } from 'react-router-dom';
import * as ROUTES from '../Routes/Routes';
import { AuthUserContext } from '../Session';

const Navbar = () => (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavbarAuth /> : <NavbarNonAuth />
      }
    </AuthUserContext.Consumer>
);

const NavbarNonAuth = () => (
  <nav className="navbar navbar-light navbar-expand-md">
    <Link className="navbar-brand" to={ROUTES.HOME}>
      <img src={puplanta} className="puplanta-logo" alt="puplanta logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to={ROUTES.HOME} >Home<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.ABOUT}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.STORES}>Stores</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.PARKS}>Parks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
    </div>
  </nav>
);

const NavbarAuth = () => (
  <nav className="navbar navbar-light navbar-expand-md">
    <Link className="navbar-brand" to={ROUTES.HOME}>
      <img src={puplanta} className="puplanta-logo" alt="puplanta logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to={ROUTES.HOME}>Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.ABOUT}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.STORES}>Stores</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.PARKS}>Parks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.SIGN_OUT}>Sign Out</Link>
        </li>
      </ul>
    </div>
  </nav>
);





export default Navbar;