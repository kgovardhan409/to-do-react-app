
import React, { useState } from 'react'


const Counter = () => {

  const [count, setCount] = useState<number>(0)

  const handleIncrement = ()=>{
    setCount(prevCount => prevCount + 1)
  }

  const handleIecrementTen= ()=>{
    setCount(prevCount => prevCount + 10)
  }

  const handleDecrement = ()=>{

    if(count > 0) {
      setCount(value => value - 1)
    }
   
  }


  return (


    <>

      <div style={{ width: '50%', margin: '0 auto' }}>



        <button style={{ padding: '10px', marginRight: '5px' }} onClick={handleDecrement}>Decrement <b>-</b> </button>

        <input type="text" style={{ padding: '10px', marginRight: '5px' }} readOnly value={count} />

        <button style={{ padding: '10px', marginRight: '5px' }} onClick={handleIncrement}>Increment <b>+</b></button>

        <button style={{ padding: '10px', marginRight: '5px' }} onClick={handleIecrementTen}>Increment  <b>+ 10</b></button>

       


      </div>










    </>
  )

}

export default Counter