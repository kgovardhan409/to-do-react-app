import React, { useState } from 'react';
import './ToDoComponent.css';

const ToDoComponent = () => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      console.log('Add Task:', task);
      setTask(''); // Clear the input
    }
  };

  return (
    <div className="parantDiv">
      <h2>React To-Do App</h2>

      <div className="inputContainer">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
};

export default ToDoComponent;
