import { Navigate } from "react-router-dom";


const PrivateRoute = ({component}) => {
    const token = localStorage.getItem('myToken');

    console.log({token});

  return token ?(
      component
  ): (
      <Navigate to= "/signin"></Navigate>
  )
}

export default PrivateRoute