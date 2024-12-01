import axios from "axios"
import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { ExampleContext } from "../App"


const Signin = () => {
  const contextData = useContext(ExampleContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

 
    
    
    const [isAutenticated, setIsAuthenticated, count] = contextData

    console.log('IsAutenticated', isAutenticated, count); 
  
    //handle Signup
    const handleSignin = async (e) => {
      e.preventDefault();
  
       try {
          const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signin", {
            password,
            email,
           
          }) 
          
          // console.log('Token', response.data);

          const token = response.data.token 

          if(token){
            localStorage.setItem('myToken', token)
            navigate("/profile")
          }
         
  
       } catch (error) {
          console.log(error);
       }
    }
     
  
    return (
      <div className='singin-form-container'>
       {
          <div className= 'singin-form-box'>
          <h1>Sign In</h1>
        <form className='signin-form' onSubmit={handleSignin}>
  
            <div className='form-group'>
               <input type="email" 
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
            </div>
  
            <div className='form-group'>
                <input type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
  
            <button type="submit">Sign In</button>
  
        </form>
  
      </div>
      }
      </div>
    )
  }
  
  export default Signin