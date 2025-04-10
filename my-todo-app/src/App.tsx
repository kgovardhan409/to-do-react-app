import "./App.css";
import ToDoComponant from "./Components/ToDoComponant";
import ToDoList from "./Components/ToDoList";
import { Todo } from "./model/ToDoModel";
import Parent from "./Parent";

function App() {
  const mylist: Todo[] = [
    { taskId: 1, taskName: "my task abc" },
    { taskId: 2, taskName: "my task badfa" },
    { taskId: 3, taskName: "my task fsadfa" },
  ];

  return (
    <div className="container">
      <ToDoComponant />
      <ToDoList todos={mylist} />

      <Parent />
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
