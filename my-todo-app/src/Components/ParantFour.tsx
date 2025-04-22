import React from 'react'
import ChildFour from './ChildFour'



export interface UserDataTypes {
    name : string;
    language : string;
    id : number
  }





const ParantFour = () => {
  
  const user : UserDataTypes = {
    name : "React", 
    language : "TypeScript",
    id : 123

 }



  return (
  


        <>
         <div> I am Parent Four Component </div>




        <ChildFour userData = {user} />

        </>

   
  )
}

export default ParantFour