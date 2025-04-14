import React from 'react'
import { parantTwoDataTypes } from './ParantTwo'

interface childTwoProps{
 
    ParentTwoData:parantTwoDataTypes[]

}


const ChildTwo : React.FC<childTwoProps> = ({ParentTwoData}) => {

  return (

    <>
        <h2>I am a Child Two Component</h2>
        {ParentTwoData.map((val)=>(
            <ol key={val.admin_id}>
                <li>{val.name}</li>
                <li>{val.Course}</li>
                <li>{val.attd ? 'True' : 'False'}</li>
                <li>{val.admin_id}</li>
            </ol>
        ))}

    
    </>

  )

}


export default ChildTwo