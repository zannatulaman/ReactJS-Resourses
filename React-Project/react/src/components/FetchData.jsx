import React, { useEffect, useState } from 'react'
import "../styles/FetchData.css"


const FetchData = () => {
     const [users, setUsers] = useState([])


    useEffect(() => {
        fetch("https://api.ts4u.us/api/course/get?type=program")
        .then((response) => response.json())
        .then((data) => {setUsers(data?.courses)
            // console.log(data);
        })
       
    } , [])

    console.log('Users', users);
  return (
    <div className='fetchData'>
        {
            users.map((item, index) =>
            <div key={index} className='fetchData-item'>
                <div>
                <h1>{item.title}</h1>
                <p>{item.shortDetail}</p>
                 <h2>{item.instructor.name}</h2>
                 <p>{item.price.cost.price}</p>
                 {/* <h3>{item.instructor._id}</h3>
                 <p>{toString(item.isDemo)}</p> */}
                </div>
           
                <div className='fetchData-title'>
                   <img src={item?.image} alt=""/>
                </div>
                 
                 <div>
                    {
                    //     item.benefits.map((benefit, index) => 
                    //       <div key={index}>
                    //          <h1 >{benefit._id}</h1>
                    //          <h2>{benefit.title}</h2>
                    //          <p>{benefit.description}</p>
                    //       </div>
                            
                    
                    // )
                    }
                 </div>
                 
            </div> 
        )
        }
    </div>
  )
}

export default FetchData




