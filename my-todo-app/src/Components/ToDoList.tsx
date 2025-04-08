import { Todo } from "../App";
import ToDoItem from "./ToDoItem";

interface TodoListProps {
  todos: Todo[]; // this name only we should give it in the component param
}

const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      <h1>To Do List</h1>
      {/* Add your to-do list implementation here */}
      {todos.map((todo) => {
        return <ToDoItem itemId={todo.taskId} itemName={todo.taskName} />;
      })}
      {/* 
      {props.todos
        .filter((a) => a == "task2")
        .map((todo) => {
          return `Task 2 ${todo}`;
        })} */}

      {/* {2 + 3 - 2} */}
    </div>
  );
};

export default ToDoList;
