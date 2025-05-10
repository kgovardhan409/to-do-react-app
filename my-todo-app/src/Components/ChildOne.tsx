import { parantDataType } from "./ParantOne";

interface childProps {
  parantData: parantDataType;
}

const ChildOne: React.FC<childProps> = ({ parantData }) => {
  return (
    <>
      <h1>I am Child One Component</h1>
      <h3>{parantData.name}</h3>
      <h3>{parantData.id}</h3>
    </>
  );
};

export default ChildOne;
