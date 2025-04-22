import React, { useState } from "react";
import "./ToDoComponent.css";

const ToDoComponent: React.FC<any> = ({ toDoProps, myData }) => {
  // toDoProps is a function given by the parent
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    console.log(myData); // parent to child - data passing...
    if (task.trim() !== "") {
      console.log("Add Task:", task);
      toDoProps(task); // now I am calling parent function by passing parameter // child to parent - data passing...
      setTask(""); // Clear the input
    }
  };

  return (
    <div className="parantDiv">
      <h2>React To-Do App</h2>

      <div className="inputContainer">
        <input
          className="taskInput"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
        <button className="addToDoBtn" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ToDoComponent;
