import { useState } from "react"
import "../styles/Signin.scss"
import axios from "axios"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isOtpSend, setIsOtpSend] = useState(false)
  const [otp, setOtp] = useState("")

  // console.log('Name', name);
  // console.log('Email', email);
  // console.log('Password', password);
   

  //handle Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

     try {
        const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signup", {
  
          name,
          email,
          password
        })   
        // console.log('Response', response.data);
          
        if(response.data.isOtpSend){
          setIsOtpSend("true");
        }

     } catch (error) {
        console.log(error);
     }
  }
   

  //handle Otp
  const handleOtp = async (e) => {
      e.preventDefault()

      try {
        const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/verifyotp", {
          otp,
          email
        })

      console.log(response.data);

      if (response.data.success) {
        alert("Registered successfully!")
        setIsOtpSend(false)
    }

      } catch (error) {
        console.log(error);
      }

      
  }


  return (
    <div className='singin-form-container'>
     {
       isOtpSend ?
          <div className="singin-form-box">
             <h1>Verify OTP</h1>
             <form className="signin-form" onSubmit={handleOtp}>
             <div className='form-group'>
               <input type="text" 
               placeholder="Enter otp"
               value={otp}
               onChange={(e) => setOtp(e.target.value)}
              required
              />
             </div>
             <button type="submit">Send Verify</button>
             </form>
          </div>
        :
        <div className= 'singin-form-box'>
        <h1>Sign Up</h1>
      <form className='signin-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type="text" 
             placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          </div>

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

          <button type="submit">Sign Up</button>

      </form>

    </div>
    }
    </div>
  )
}

export default SignUp