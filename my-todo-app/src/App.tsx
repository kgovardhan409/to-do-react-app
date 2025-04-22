import { useState } from "react";
import "./App.css";
import ToDoComponant from "./Components/ToDoComponant";
import ToDoList from "./Components/ToDoList";
import { Todo } from "./model/ToDoModel";
import UseEffectSample from "./Components/UseEffectSample";

function App() {
  // const mylist: Todo[] = [
  //   {
  //     taskId: 123,
  //     taskName: "my task",
  //   },
  // ];

  const [mylist, setMylist] = useState<Todo[]>([]);

  function receiveTodo(dada: string) {
    let todoObj: Todo = {
      taskId: Math.floor(Math.random() * 100),
      taskName: dada,
    };
    console.log(mylist);
    setMylist((pre) => [...pre, todoObj]);
  }

  return (
    <div className="container">
      {/* <ToDoComponant toDoProps={receiveTodo} myData={["abc", "cd"]} />

      <ToDoList todos={mylist} /> */}

      {/* <Parent /> */}
      <UseEffectSample />
    </div>
  );
}

export default App;

// html + javascript -- JSX
// public folder - static assets,

// Time complexity -->

// Space complexity -->

// Re-usable components
// Deviding components so that your code looks good

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

// you have to practice props - 10 components with multiple props.. there should be parent component and child componet (10 parents, 10 childerens)
// learn basics about state, why and how ?

// 17th April
// I want ToDoItem child data in parent component(ToDoList) in console.. if you have time -- send this data to parent(App.tsx)
// practice states.. -- do some 5 or 10 components

// useEffect --> is a react hook.

// syntax -->

// useEffect(() => {

//  }, []);

// UseCases:
//  1. To call an api's on page(component initilization) load.
//  2. When you want to trigger a function when state changes. Even multiple state's when changed also useEffect is useful.
//  3. If you want to change data which is browser level - page title, LocalStorage, Session Storage.
//  4. If you want to load or set some default data
