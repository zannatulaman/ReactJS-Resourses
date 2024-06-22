import React, { useState } from 'react'

const ToDoApp = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([]);
  
    const handleChange = (event) => {
        setTask(event.target.value)
      }

    // console.log('task', task);

    const handleAdd = () => {
       if(task){
          setList([...list, task])
          setTask("");

       }else{
           alert("Please Enter your task")
       }
       
    }
    // console.log('list', list);

    const handleDelete = (id) => {
        // console.log('id', id);

        const updatedLists = [...list]
        updatedLists.splice(id, 1)
        setList(updatedLists);
    }


  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
           <h1>To do app</h1>
           <br />
          <input type="text" style={{width: "20%",padding: "10px"}} onChange={handleChange} value={task}/>
          <button style={{padding: "10px", backgroundColor: "#007BFF", color: "white", marginLeft: "10px"}} onClick={handleAdd}>Add Task</button>

       {
         list.map((item, index) => 
          
          <div key={index}>
            <p style={{marginRight: '30px'}}>{item}
              <button style={{marginLeft: '30px', color: 'red'}} onClick={() => handleDelete(index)} >Delete</button>
            </p>
          </div>

        )
       }
    </div>
  )
}

export default ToDoApp