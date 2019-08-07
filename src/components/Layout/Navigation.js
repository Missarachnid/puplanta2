import React from 'react';
import puplanta from '../../img/puplanta_long_name.png';
import { Link, NavLink as NLink } from 'react-router-dom';
import * as ROUTES from '../Routes/Routes';
import { AuthUserContext } from '../Session';
import SignOut from './SignOut';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



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
    <Nav>
      <NavItem className='item'>
        <NavLink tag={NLink} to={ROUTES.HOME} >Home</NavLink>
      </NavItem>
      <NavItem className='tem'>
        <NavLink tag={NLink} to={ROUTES.ABOUT} >About</NavLink>
      </NavItem>
      <NavItem className='item'> 
        <NavLink tag={NLink} to={ROUTES.STORES} >Stores</NavLink>
      </NavItem>
      <NavItem className='item'>
        <NavLink tag={NLink} to={ROUTES.PARKS} >Parks</NavLink>
      </NavItem>
      <NavItem  className='item'>
        <NavLink tag={NLink} to={ROUTES.SIGN_IN} >Sign In</NavLink>
      </NavItem>
      <NavItem className='item'>
        <NavLink tag={NLink} to={ROUTES.SIGN_UP} >Sign Up</NavLink>
      </NavItem>
    </Nav>
  );


  const NavbarAuth = ({authUser}) => (
    <Nav>
      <NavItem className='item'>
        <NavLink tag={NLink} to={ROUTES.HOME}>Home </NavLink>
      </NavItem>
      <NavItem className='item'>
        <NavLink tag={NLink} to={ROUTES.ABOUT}>About</NavLink>
      </NavItem>
      <NavItem className='item'>
        <NavLink tag={NLink} to={ROUTES.STORES}>Stores</NavLink>
      </NavItem>
      <NavItem className='item'>
        <NavLink tag={NLink} to={ROUTES.PARKS} >Parks</NavLink>
      </NavItem>
      <NavItem className='item'>
        <NavLink tag={NLink} to={ROUTES.ACCOUNT}>Account</NavLink>
      </NavItem>
      <NavItem className='item'>
        <SignOut tag={NLink} to={ROUTES.HOME}></SignOut>
      </NavItem>
    </Nav>
  );

    return (
      <Navbar light expand="md">
          <NavbarBrand tag ={NLink} to={ROUTES.HOME}><img src={puplanta} className='puplanta-logo' alt='puplanta logo'  /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.props.menu} navbar>
          <AuthUserContext.Consumer>
            {authUser => (
              authUser ? <NavbarAuth authUser={authUser} /> : <NavbarNonAuth menu={this.props.menu} toggle={toggle}/>
            )
            }
      </AuthUserContext.Consumer>
          </Collapse>
        </Navbar>
    ) 
  }
}



/*
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
        <SignOut to={ROUTES.HOME}></SignOut>
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

*/