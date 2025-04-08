import "./App.css";
import ToDoComponant from "./Components/ToDoComponant";
import ToDoList from "./Components/ToDoList";

export interface Todo {
  taskId: number;
  taskName: string;
}

function App() {
  const list: Todo[] = [
    { taskId: 1, taskName: "my task 1" },
    { taskId: 2, taskName: "my task 2" },
    { taskId: 3, taskName: "my task 3" },
  ];

  return (
    <div className="container">
      <ToDoComponant />
      <ToDoList todos={list} />
    </div>
  );
}

export default App;

// html + javascript -- JSX
// public folder - static assets,

// Task
// crate to do component(ToDoComponent) and add it to the app
// In ToDoComponent create a form  - label(add new todos) input field and button(add)

// next day
// props - parent to child..
// state in tod do component

// function add(a: number, b: number) {
//   // a and b are parameters or properties or props
//   console.log(a + b);
// }
// add(2, 3);
