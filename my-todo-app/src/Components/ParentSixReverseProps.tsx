
import React from 'react'
import ChildSixReverseProps from './ChildSixReverseProps'

const ParentSixReverseProps = () => {


    const parantData = (data : string)=>{
        console.log("sending data from Parant" , data)
    }


  return (
   <>
    <div>I am Parent Six Reverce Props Component</div>
   
   



   <ChildSixReverseProps parantFun = {parantData}/>
   </>
  )
}

export default ParentSixReverseProps