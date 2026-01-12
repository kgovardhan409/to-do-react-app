import React from 'react'
import { UserDataTypes } from './ParantFour'



interface childFourProps{
    userData : UserDataTypes
}


const ChildFour: React.FC<childFourProps> = ({userData} ) => {


  return (
   
   
   <>

    <div>I am Child Four Component</div>

    <ul>
        <li>{userData.name}</li>
        <li>{userData.language}</li>
        <li>{userData.id}</li>
    </ul>


    </>

  )
}

export default ChildFour