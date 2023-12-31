import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location= useLocation()

  const {user,loading}= useContext(AuthContext)

   if (loading) {
    return <span  className=" flex  mx-auto justify-center  loading loading-dots loading-lg"></span>
   }

  if (user?.email && !loading) {
    return children
  }
 return <Navigate state={location.pathname}  to={'/login'}></Navigate>
};

export default PrivateRoute;