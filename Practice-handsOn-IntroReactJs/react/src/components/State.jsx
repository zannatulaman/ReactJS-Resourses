import { useState } from "react"

const State = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        // setCount(count + 1)
        setCount (prev => (prev + 1)) //good practice
    }

    return (
        <div>
            <h1 style={{color : "blue", fontSize : "32px"}}>Learning Hooks in ReactJs</h1>
            <h2>{count}</h2>
            <button onClick={handleClick}>Incrase Change Value</button>
        </div>
    )
}

export default State 