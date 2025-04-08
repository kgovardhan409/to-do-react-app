const ToDoItem = (myprops: any) => {
  return (
    <div className="todo-item">
      <ul>
        <li key={myprops.itemId}>
          {myprops.itemName}
          <button className="deleteBtn">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default ToDoItem;

// Task --> remove any and utilize the interface and type of React.FC<InterfaceName>
// add a edit button next to the delete button
// add a edit page component of task.. component name would be - EditTaskComponent
// pass props to the EditTaskComponent and use the props in the component ex.    {/* <EditTaskComponent myItem=""/> */}
