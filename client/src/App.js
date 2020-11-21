import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar'
import TaskDetails from './components/tasks/TaskDetails'
import SignIn from './components/authentication/SignIn'
import SignUp from './components/authentication/SignUp'
import CreateTask from './components/tasks/CreateTask'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path= '/' component={Dashboard}/>
          <Route path= '/project/:id' component={TaskDetails}/>
          <Route path= '/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateTask}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;