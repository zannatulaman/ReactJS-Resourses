import React, { useState } from 'react'
import axios from 'axios'

const UsingAxios = () => {
    const [users, setUsers] = useState([])

   const handleFetch = () => {
       axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => setUsers(response.data))
        .catch(error => console.log(error))
   }

  return (
    <div>
        <button onClick={handleFetch}>Fetch Information</button>
        {
            users.length > 0 ? users.map((item, index) => 

                <div key={index}>
                    <img src={item.thumbnailUrl} alt="image" loading='lazy'/>
                </div>
            ):(
                <p>Loading....</p>
            )
        }
    </div>
  )
}

export default UsingAxios