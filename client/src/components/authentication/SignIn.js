import React, { Component } from 'react';
import {login} from '../../actions/auth';
import { connect } from 'react-redux';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.login(this.state);
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
            <button className="btn red lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStatetoProps = (state)=>{
  return {
    isAuthenticated : state.auth.isAuthenticated
  }
}
export default connect(mapStatetoProps,{login})(SignIn);
