import { useState } from "react";
import "./ToDoComponent.css";

function ToDoComponent() {
  const [myTask, setMyTask] = useState(""); // inilization is mandatory as we are using typescript..

  const handleAddTask = () => {};

  function taskInputValueEvent(task: string) {
    setMyTask(task);
    console.log("input changed, user clicked outside of the input box ", task);
  }

  return (
    <div className="parantDiv">
      <h2>React To-Do App</h2>

      <div className="inputContainer">
        <input
          className="taskInput"
          type="text"
          placeholder="Enter your task"
          onBlur={(e) => taskInputValueEvent(e.target.value)}
        />
        <button className="addToDoBtn" onClick={handleAddTask}>
          Add
        </button>

        {myTask}
        {/* will it work or not ? Mahesh - Yes, Govardhan - No */}
      </div>
    </div>
  );
}

export default ToDoComponent;

// State
// It stores the data in our component.
// Whenever state changes(setState) our component re-renders so that our component knows latest change.
// <input type="text" onBlur="myFun(event)" />
// function myFun(ev){console.log(ev.target.value)}
