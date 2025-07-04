import React from 'react'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

function dashboard() {

  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      alert('SignOut Successful');
      navigate('/')
    }
    catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <h1 className='text-4xl text-blue-800 text-center p-3'>Welcome To the Dashboard Page</h1>
      <p className='text-2xl text-blue-500 text-center p-2'>Hi {user.displayName}</p>
      <p className='text-2xl text-blue-500 text-center p-2'>Email : {user.email}</p>
      <button onClick={handleLogOut} className='  bg-blue-800 text-white px-4 py-2 rounded mt-4 w-80'>SignOut</button>
    </div>
  )
}

export default dashboard