import React from 'react'

interface childSixProps{
    parantFun : (data : string) => void;
}


const ChildSixReverseProps : React.FC<childSixProps> = ({parantFun}) => {

    const handleProps = ()=>{
        parantFun("I am your Child Component Sending Data from Overhere")
    }



  return (
    <>
    <div>I am Child Six Reverce Props Compomemt</div>

    <button onClick={handleProps}>Click Here</button>
    
    
    </>
  )
}

export default ChildSixReverseProps