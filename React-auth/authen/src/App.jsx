
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/SignUp'
import Signin from './Components/Signin'
import Profile from './Components/Profile'
import PrivateRoute from './Components/PrivateRoute'
import { createContext, useState } from 'react'

export const ExampleContext = createContext();

function App() {
  const [count , setCount] = useState(5);
  const [isAuthenticated, setIsAuthenticated]= useState(false);
 
  return (
    <>
      {/* <SignUp></SignUp> */}
      
      <ExampleContext.Provider value={[isAuthenticated, setIsAuthenticated, count]}>
      <Routes>
        <Route path='/'  element = {<Signup></Signup>}></Route>
        <Route path='/signin'  element = {<Signin></Signin>}></Route>
        <Route path='/profile'  element = {<PrivateRoute component = {<Profile></Profile>}></PrivateRoute>}></Route>
      </Routes>
      </ExampleContext.Provider>
      
    </>
  )
}

export default App
