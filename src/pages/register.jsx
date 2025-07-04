import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import { googleAuthProvider } from '../firebase'
import { useAuth } from '../context/auth'
import { useState } from 'react'

function register() {

  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    navigate('/login');
  }

  const handleRegister = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      if (newUser) {
        alert('Registration Successful');
        await updateProfile(newUser.user, {
          displayName: name
        })
        navigate('/dashboard');
      }
    }
    catch (error) {
      alert(error.message);
    }
  }

  const handleGoogleRegister = async () => {
    const newUser = await signInWithPopup(auth, googleAuthProvider);
    if (newUser) {
      alert('Registration Successful with Google');
      navigate('/dashboard');
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-center aliign-ceter font-bold text-blue-600'>Register Page</h1>
        <p className='text-gray-600 mt-4 mb-4'>Enter your credentials to create account</p>
        <input
          type='text'
          name='name'
          placeholder='Enter your Name'
          value={name}
          onChange={handleNameChange}
          className='border border-gray-300 px-4 py-2 rounded w-80 m-2'
        >
        </input>
        <input
          type='email'
          name='email'
          placeholder='Enter your Email'
          value={email}
          onChange={handleEmailChange}
          className='border border-gray-300 px-4 py-2 rounded w-80 m-2'
        ></input>
        <input
          type='password'
          name='password'
          placeholder='Enter your Password'
          value={password}
          onChange={handlePasswordChange}
          className='border border-gray-300 px-4 py-2 rounded w-80 m-2'
        ></input>
        <button
          onClick={handleRegister}
          className='bg-blue-800 text-white px-4 py-2 rounded mt-4 w-80'>
          Register
        </button>
        <button
          onClick={handleGoogleRegister}
          className='bg-blue-800 text-white px-4 py-2 rounded mt-4 w-80'>
          Continue with Google
        </button>
        <p className='text-gray-600 mt-4'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={handleLogin}>Login</span></p>
      </div>
    </div>

  )
}

export default register