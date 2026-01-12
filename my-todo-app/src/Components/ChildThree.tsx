import React from 'react'
import { parantThreeDataType } from './ParantThree'

interface childThreeProps{
    parentThreeData : parantThreeDataType
}

const ChildThree : React.FC<childThreeProps> = ({parentThreeData}) => {
  return (
    <>
    
    <h1>I am Child Component Three</h1>
    for(let ele of {parentThreeData}){
        console.log()
    }

    
    

    </>
  )
}

export default ChildThree