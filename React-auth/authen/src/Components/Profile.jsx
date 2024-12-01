import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FirstComponents from './propsDrilling/FirstComponents'

const Profile = () => {
    const [token, setToken] = useState(localStorage.getItem('myToken'))
    const [userData, setUserData] = useState(null)
          
    // console.log('Token', token);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.post ('https://staging-be-ecom.techserve4u.com/api/user/verify',  {}, {
                    headers: {
                        "Authorization" : `${token}`,
                        "Content-Type"  : "application/json"
                    }
                })
             
                // console.log('Response', response.data.user);

                  setUserData(response.data.user)



            } catch (error) {
                console.log('Error', error);
            }
        }
        

        fetchData()
       
    }, [token])

   console.log('Userdata', userData);
  return (


    <div className='singin-form-container'>
         <div>
                <h1>My Name is: {userData?.name}</h1>
                <h1>Email: {userData?.email}</h1>
                {/* <Test name="MR Something"></Test> */}
            </div>

     <FirstComponents></FirstComponents>   
    </div>


  )
}

export default Profile