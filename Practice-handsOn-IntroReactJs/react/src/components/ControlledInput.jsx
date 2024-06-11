import React, { useState } from 'react'

export const ControlledInput = () => {

      const [inputValue, setInputValue] = useState(1000)

       const handleChange = (event) => {
        setInputValue(event.target.value);
       }

  return (
    <div>
         <h1>Learning Controlled Input</h1>
         {/* uncontrolled input */}
          {/* <input type="text" /> */}
        
          {/* controlled input */}
         <input type="text" onChange={handleChange} value={inputValue}/>
         <h2>The latest value is: {inputValue}</h2>
    </div>
  )
}
export default ControlledInput
