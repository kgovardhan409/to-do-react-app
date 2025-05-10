import React from 'react'
import ChildThree from './ChildThree'


export interface parantThreeDataType{
    details : string[]
}


const ParantThree = () => {

    const details : parantThreeDataType[] = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']


  return (
    <>
     <h1>I am Parant Three Component</h1>    

     <ChildThree parentThreeData={details}/>
       

    
    </>
  )
}

export default ParantThree