import React, { useState } from 'react'
import "../styles/ToDo.css"

const ToDo = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([])
   
   const handleChange = (event) => {
        setTask(event.target.value) 
        // setTask("")
   }

//    console.log('Task', task);

   const handleClick = () => {
        setList([...list ,task])
        setTask("")
   }
//    console.log('List', list);

  return (
    <div className='to-do'>
        <div className='to-do-container'>
        <h1>To Do List</h1>
        <input type="text" onChange={handleChange} value={task}/>
        <button onClick={handleClick}>Add Task</button>
        <ul className='to-do-container-list'>
               {
                list.map((item, index) => 
                    <li key={index}>{item}</li>
                )
               }
           </ul>
        </div>

       
    </div>
  )
}

export default ToDo