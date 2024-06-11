import React from 'react'

const Banner = (props) => {
    //   const title1 = props.title
    //   console.log(title1);
  return (
    <div>
        <h1>This is child component</h1>
        <h2>{props.title}</h2>
        <h2>{props.description}</h2>
      
    </div>
  )
}

export default Banner