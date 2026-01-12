import React from 'react'
import { fiveDataTypes } from './ParantFive'



interface childFiveProps{
    userDataFive : fiveDataTypes
}

const ChildFive : React.FC<childFiveProps> = ({userDataFive}) => {
  return (
    <>
    <div>I am Child Five Component</div>


    <ul>
        <li>{userDataFive.name}</li>
        <li>{userDataFive.age}</li>
        <li>{userDataFive.isLoving ? "trur" : "false"}</li>
        <li>{userDataFive.hobbies.join(' ')}</li>
        <li>{userDataFive.address.city}, {userDataFive.address.state}</li>
       
    </ul>
    
    
    </>
  )
}

export default ChildFive