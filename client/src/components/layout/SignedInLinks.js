import React from 'react'
import {NavLink} from 'react-router-dom'
import {logout} from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const SignedInLinks = ({logout}) =>{
  return(
    <ul className="right">
      <li><NavLink to='/'>New Task</NavLink></li>
      <li><NavLink to='/' onClick={logout}>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>P</NavLink></li>
    </ul>
  )
}
SignedInLinks.prototype = {
  logout : PropTypes.func.isRequired
}

export default connect(null,{logout})(SignedInLinks);