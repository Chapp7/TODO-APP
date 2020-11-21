import React, { Component } from 'react';
import { connect } from 'react-redux';
import {register} from '../../actions/auth';
//import PropTypes from 'prop-types';




class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:'',
      firstName:'',
      lastName:''
    }
  }
  
  handleChange = (e) =>{
    this.setState({...this.state,
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.register(this.state);
  }

  render() {
    if(this.props.isAuthenticated){
      return (
        <div>
         hello from our TODO APP!
        </div>
      );
    }
    return (
      <div className = "container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>


          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Register</button>
          </div>
          
        </form>
      </div>
    )
  }
}
/*
SignUp.propTypes = {
  isAuthenticated: PropTypes.bool
};
*/
const mapStatetoProps = (state)=>{
  return {
    isAuthenticated : state.auth.isAuthenticated
  }
}
export default connect(mapStatetoProps,{register})(SignUp);
