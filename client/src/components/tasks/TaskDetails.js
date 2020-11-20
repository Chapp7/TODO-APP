import React from 'react'

const TaskDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section task-details">
      <div className="card z-depth-0">
        <div className="card content">
          <span className="card-title">Task Title - {id}</span>
          <p>This is the task</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Task Assigned</div>
        </div>
     </div>
    </div>
  )
}

export default TaskDetails
