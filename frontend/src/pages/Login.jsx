import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axiosInstance'
import bgImage from '../assets/log-in.jpeg' // Use your login bg image

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await axios.post('/users/login', { email, password })
      localStorage.setItem('token', res.data.token)
      navigate('/') // ✅ redirect on success
    } catch (err) {
      console.error('Login failed:', err)
      const message =
        err.response?.data?.errors?.[0]?.msg ||
        err.response?.data?.message ||
        'Login failed. Please try again.'
      setError(message)
    }
  }

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 bg-white/90 p-8 rounded-xl shadow-2xl w-full max-w-md backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Login</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Don’t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>

        {error && (
          <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-white border border-gray-300 rounded placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 w-full bg-white border border-gray-300 rounded placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-blue-600 hover:underline"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
