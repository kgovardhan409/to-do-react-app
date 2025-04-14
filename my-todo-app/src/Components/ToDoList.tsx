import { Todo } from "../model/ToDoModel";
import ToDoComponant from "./ToDoComponant";
import ToDoItem from "./ToDoItem";

interface TodoListProps {
  todos: Todo[]; // this name only we should give it in the component param
}

const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
  // const taskAdded () => {}
  // todos=mylist}
  return (
    <div>
      <ToDoComponant />

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
