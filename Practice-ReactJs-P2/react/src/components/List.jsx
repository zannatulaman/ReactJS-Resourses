import React from 'react'

const List = () => {
    const lists = ['List 1', 'List 2', 'List 3', 'List 4', 'List 5', 'List 6'];

  return (
    <div>
        <ul>
            {/* <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
            <li>List 4</li>
            <li>List 5</li>
            <li>List 6</li>
            <li>List 7</li> */}
            {
                lists.map((item, index) => 
                    <li  key={index}>{item}</li>
                ) 
            }
        </ul>
    </div>
  )
}

export default List