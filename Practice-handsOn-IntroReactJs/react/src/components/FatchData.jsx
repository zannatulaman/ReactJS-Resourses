import React, { useEffect, useState } from 'react'

const FatchData = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
         
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data))

    } , [])
    
    console.log(users);
  return (
    <div>
        {
          users.map((item, index) => 
            <li key={index}>{item.name}, {item.phone}, {item.id}</li>
          )

        }
    </div>
  )
}

export default FatchData