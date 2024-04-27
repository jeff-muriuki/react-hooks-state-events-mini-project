import React from "react";

function Task({ taskIndex, task, onDelete }) {
  function handleDelete() {
    onDelete(taskIndex)
  }

  return (
    <div className="task">
      <div className="label"> {task.category} </div>
      <div className="text">{task.text} </div>
      <button className="delete" onClick={handleDelete} >X</button>
    </div>
  );
}

export default Task;
