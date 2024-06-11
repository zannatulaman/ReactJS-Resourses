import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => console.log(data))

    }, [toggle])

    const handleToggle = () => {
       setToggle(!toggle)
    }

    // console.log('Toggle', toggle);

    return (
           <div>
            <button onClick={handleToggle}>Toggle</button>
           </div>
    )
}

export default Effect