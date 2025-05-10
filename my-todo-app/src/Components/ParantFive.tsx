

import React from 'react'
import ChildFive from './ChildFive'


export interface fiveDataTypes{
    name : string;
    age : number;
    isLoving : boolean;
    hobbies : string[];
    address : {
        city : string;
        state : string
    }
}





const ParantFive = () => {

    const userDetails : fiveDataTypes = {
        name: "Bujji",
        age: 24,
        isLoving: true,
        hobbies: ["coding", "music", "talking to kanna 😘"],
        address: {
          city : "Hyderabad",
          state: "Telangana"
        }
      };
      

  return (






    <>
    <div>I am Parant Five Component</div>
    
    <ChildFive userDataFive = {userDetails}/> 
    </>
  )
}

export default ParantFive