import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axiosInstance'
import bgImage from '../assets/sign-up.jpg'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])

    try {
      await axios.post('/users/register', { name, email, password })
      navigate('/login')
    } catch (err) {
      console.error('Signup error:', err)

      const errorData = err.response?.data
      console.log('FULL ERROR:', errorData)

      if (errorData?.errors && Array.isArray(errorData.errors)) {
        // Backend sends: { errors: [{ msg: 'error message' }, ...] }
        const errorMessages = errorData.errors.map((e) => e.msg)
        setErrors(errorMessages)
      } else if (typeof errorData === 'string') {
        setErrors([errorData])
      } else if (errorData?.message) {
        setErrors([errorData.message])
      } else {
        setErrors(['Signup failed. Please try again.'])
      }
    }
  }

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 bg-white/90 p-8 rounded-xl shadow-2xl w-full max-w-md backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Sign Up</h2>

        {/* Error Message Block */}
        {errors.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
            <ul className="list-disc list-inside text-left space-y-1">
              {errors.map((errMsg, idx) => (
                <li key={idx}>{errMsg}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 bg-white border border-gray-300 rounded placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-white border border-gray-300 rounded placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            className="p-3 bg-white border border-gray-300 rounded placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
