import React, {Component} from 'react'
import Notifications from './Notifications' 
import TaskList from '../tasks/TaskList'
import {connect} from 'react-redux'


class Dashboard extends Component{
  render(){
    console.log(this.props);
    return( 
      <div className="dashboad container" >
        <div className="row">
          <div className="col s12 m6">
            <TaskList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    tasks: state.task.tasks
  }
}

export default connect(mapStateToProps)(Dashboard)