// import React from 'react'

export const List = () => {

    const lists = ["List 1", "List 2", "List 3", "List 4", "List 5", "List 6", 
        "and more"
    ];

     return (
        <div>

        <ul>
            {
                lists.map((item , index) => 
                <li key={index} >
                    {item}
                </li>
                )
            }
        </ul>
    </div>
  )
}

export default List
