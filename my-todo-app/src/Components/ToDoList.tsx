import { Todo } from "../model/ToDoModel";
import ToDoItem from "./ToDoItem";

interface TodoListProps {
  todos: Todo[]; // this name only we should give it in the component param
}

const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
  // todos=mylist}
  // I want ToDoItem child data in this parent component in console.. if you have time -- send this data to parent(App.tsx)
  // practice states.. -- do some 5 or 10 components
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      {/* Add your to-do list implementation here */}
      {todos.map((todo) => {
        return <ToDoItem toDoItem={todo} />;
      })}

      {/* {todos
        .filter((a) => a == "task2")
        .map((todo) => {
          return `Task 2 ${todo}`;
        })} */}

      {/* {2 + 3 - 2} */}
    </div>
  );
};

export default ToDoList;
