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
        if(task){
          setList([...list ,task])
          setTask("")
        }else{
          alert("Please enter a task")
        }
       
  }
  //  console.log('List', list);

   const handleDelete = (id) => {
        // console.log(id);
        const updatedLists = [...list];
        updatedLists.splice(id, 1)
        setList(updatedLists);
   }

  return (
    <div className='to-do'>
        <div className='to-do-container'>
        <h1>To Do List</h1>
        <input type="text" onChange={handleChange} value={task}/>
        <button onClick={handleClick}>Add Task</button>
        <ul className='to-do-container-list'>
               {
                list.map((item, i) => 
                    <li key={i}>{item}
                     <button onClick={() => handleDelete(i)}>Delete</button>
                    </li>
                   
                )
               }
           </ul>
        </div>

       
    </div>
  )
}

export default ToDo