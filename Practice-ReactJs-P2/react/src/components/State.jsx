import React, { useState } from 'react'

const State = () => {

    const [count, setCount]= useState(0)

     const handleState = () => {
        // setCount(count + 1)
        setCount((prev) => (prev + 1));
     }


  return (
    <div>
        <h1>Learning Hook in ReactJS</h1>
        <h2>{count}</h2>
        <button onClick={handleState}>Increase The State</button>
      
    </div>
  )
}

export default State