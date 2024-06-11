import React, { useEffect,  useState } from 'react'

const Effect = () => {
     const[data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])

    console.log(data);
  return (
    <div>
        
    </div>
  )
}

export default Effect