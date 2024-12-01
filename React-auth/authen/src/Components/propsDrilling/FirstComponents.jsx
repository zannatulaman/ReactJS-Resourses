import React, { useState } from 'react'
import SecondComponent from './SecondComponent'

const FirstComponents = () => {
    const [count, setCount]= useState(100);


  return (
    <div>FirstComponents
        <SecondComponent counts={count}></SecondComponent>
        <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default FirstComponents