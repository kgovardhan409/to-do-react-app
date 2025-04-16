import { Person } from "./model/ToDoModel";

interface ChildrenProps {
  msg: Person;
  msg2: Person;
}

const Children: React.FC<ChildrenProps> = ({ msg, msg2 }) => {
  return (
    <>
      <h2>Children {msg.firstName}</h2>
      <h3>{msg.lastName}</h3>

      <h2>{msg2.firstName}</h2>
    </>
  );
};

export default Children;
