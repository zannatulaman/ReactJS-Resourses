import React, { useState } from 'react'

const ControlledInput = () => {
    const [control, setControl] = useState([1000]);
      
     const handleInput = (event) => {
        setControl(event.target.value);
        // console.log(event.target.value);
     }

  return (
    <div>
       <input type="text" onChange={handleInput} value={control}/>
       {/* <h2>{control}</h2>  */}
    </div>
  )
}

export default ControlledInput