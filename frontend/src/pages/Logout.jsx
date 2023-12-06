import React, { useEffect } from 'react'
import { useAuth } from '../store/auth'
import { Navigate } from 'react-router-dom';

const Logout = () => {

    const {logOutUser} = useAuth();

    useEffect(() => {
        logOutUser();
    },[logOutUser]);

  return (
    <Navigate to={"/"}></Navigate>
  )
}

export default Logout
