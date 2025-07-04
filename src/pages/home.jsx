import React from 'react'
import { useNavigate } from 'react-router-dom'

function home() {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-6xl text-center aliign-ceter font-bold text-blue-600'>Welcome To the Home Page</h1>
      <button className='bg-blue-800 text-white px-4 py-2 rounded  mt-6' onClick={handleLogin} >
        Go To Login
      </button>
      <button className='bg-blue-800 text-white px-4 py-2 rounded mt-4' onClick={handleRegister}>
        Go To Register
      </button>
    </div>
  )
}

export default home