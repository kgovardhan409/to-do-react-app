import Children from "./Children";
import { Person } from "./model/ToDoModel";

const Parent: React.FC = () => {
  function myfunction() {}

  let message: String = "Hi";

  let phoneNumber: number = 1234;

  const mahesh: Person = {
    firstName: "Mahesh",
    lastName: "L",
    age: 29,
    isMarried: true,
  };

  const govardhan: Person = {
    firstName: "Govardhan",
    lastName: "Kurakula",
    age: 30,
    isMarried: true,
    company: "afasdf",
  };

  return (
    <>
      <button onClick={myfunction}>Click me</button>

      {/* <Children msg={phoneNumber} /> */}
      <Children msg={govardhan} msg2={mahesh} />
    </>
  );
};

export default Parent;
