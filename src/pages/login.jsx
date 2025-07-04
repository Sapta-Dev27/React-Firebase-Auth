import React from 'react'
import { useState } from 'react'
import { auth, googleAuthProvider } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value)

  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRegister = () => {
    navigate('/register');
  }

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        alert('Login Successful');
        navigate('/dashboard');
      }
    }
    catch (error) {
      alert(error.message);
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, googleAuthProvider);
      if (response) {
        alert('Login Successful with Google');
        navigate('/dashboard');
      }
    }
    catch (error) {
      {
        alert(error.message);
      }
    }
  }


  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-center aliign-ceter font-bold text-blue-600'>Login Page</h1>
        <p className='text-gray-600 mt-4 mb-4'>Please enter your credentials to login</p>
        <input
          type='email'
          name='email'
          placeholder='Enter your Email'
          value={email}
          onChange={handleEmailChange}
          className='border border-gray-300 px-4 py-2 rounded w-80'
        ></input>
        <input
          type='password'
          name='password'
          placeholder='Enter your Password'
          value={password}
          onChange={handlePasswordChange}
          className='border border-gray-300 px-4 py-2 rounded w-80 mt-4'
        >
        </input>
        <button
          className='bg-blue-800 text-white px-4 py-2 rounded mt-4 w-80'
          onClick={handleLogin}
        >Login</button>

        <button
          onClick={handleGoogleLogin}
          className='bg-blue-800 text-white px-4 py-2 rounded mt-4 w-80'>
          Login With Google
        </button>
        <p className='text-gray-600 mt-4'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={handleRegister}>Register</span></p>
      </div>
    </div>
  )
}

export default login