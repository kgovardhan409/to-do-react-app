import React from "react";
import ChildTwo from "./ChildTwo";

export interface parantTwoDataTypes {
  name: string;
  Course: string;
  attd: boolean;
  admin_id: number;
  section?: string;
}

function ParantTwo() {
  const UserDate: parantTwoDataTypes[] = [
    {
      name: "Mahesh",
      Course: "Phython",
      attd: true,
      admin_id: 99999,
    },
  ];

  return (
    <>
      <h1>I am Parant Two Component</h1>
      <ChildTwo ParentTwoData={UserDate} />
    </>
  );
}

export default ParantTwo;
