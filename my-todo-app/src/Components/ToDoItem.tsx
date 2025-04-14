import { Todo } from "../model/ToDoModel";
import "./ToDoItem.css";

interface TodoListProps {
  toDoItem: Todo;
}

const ToDoItem: React.FC<TodoListProps> = ({ toDoItem }) => {
  return (
    <div className="todo-item">
      <li key={toDoItem.taskId} className="itemsLi">
        <span>{toDoItem.taskName}</span>

        <div style={{ display: "flex", gap: "8px" }}>
          <button className="deleteBtn">Delete</button>
          <button className="editBtn">Edit</button>
        </div>
      </li>
    </div>
  );
};

export default ToDoItem;

// Task --> remove any and utilize the interface and type of React.FC<InterfaceName>
// add a edit button next to the delete button , done
// add a edit page component of task.. component name would be - EditTaskComponent
// pass props to the EditTaskComponent and use the props in the component ex.    {/* <EditTaskComponent myItem=""/> */}
