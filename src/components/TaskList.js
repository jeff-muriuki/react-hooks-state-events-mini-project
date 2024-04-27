import React from "react";
import Task from './Task';

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">

      {tasks.map((task, index) => (
        <Task key={index} taskIndex={index} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
