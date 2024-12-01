import React from 'react'
import ThirdComponent from './ThirdComponent'

const SecondComponent = ({counts}) => {
  return (
    <div>SecondComponent
        <ThirdComponent element={counts}></ThirdComponent>
    </div>
  )
}

export default SecondComponent