import React, { use } from 'react'
import { useAuth } from '../context/auth'
import { Navigate } from 'react-router-dom'


const Protected = ({ children }) => {

  const { user } = useAuth();


  if (!user) {
    return (
      <Navigate to="/login" />
    )
  }
  else {
    return children;
  }

}

export default Protected