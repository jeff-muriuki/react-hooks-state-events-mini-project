import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filteredCategory, setFilteredCategory] = useState("All");

  function handleSelecting (category) {
 setFilteredCategory(category)
  }
   const filteredTasks = filteredCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === filteredCategory);

 function handleDelete(taskIndex) {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(updatedTasks)
  }

  function handleSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleSelecting}  />
      <NewTaskForm categories={CATEGORIES.slice(1)} onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
