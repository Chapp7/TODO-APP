import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Navbar = ({isAuthenticated}) =>{
  return(
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
      <Link to='/' className='brand-logo'>TO-DO's</Link>
      {isAuthenticated  && (<SignedInLinks />) }
      {!isAuthenticated && (<SignedOutLinks />) }
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  isAuthenticated: PropTypes.bool
};
const mapStatetoProps = (state)=>{
  return {
    isAuthenticated : state.auth.isAuthenticated
  }
}

export default  connect(mapStatetoProps)(Navbar);
