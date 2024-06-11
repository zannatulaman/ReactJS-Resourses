import React from 'react'

const Handler = () => {

    const handleClick = (event) => {
        console.log(event, "Handle is click");
    }

    const handleChange = (e)=> {
        console.log(e.target.value);
    }
  return (
      <div>
        <input type="text" name="" id="" onChange={handleChange}/>
        <button style={{color: "red", background: "black"}} onClick={handleClick}>Submit</button>
      </div>
  )
}

export default Handler