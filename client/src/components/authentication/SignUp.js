import React, { Component } from 'react';
import { connect } from 'react-redux';
import {register} from '../../actions/auth';


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
    console.log(this.state);
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log('hii');
    this.props.register(this.state);
  }
  render() {
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

export default connect(null,{register})(SignUp);
