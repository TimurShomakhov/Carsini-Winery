import React, { useState } from 'react'
import axios from '../api/axiosInstance'
import bgImage from '../assets/log-in.jpeg' 
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/auth/login', { email, password })
      const token = res.data.token
      localStorage.setItem('token', token)

      alert('Login successful!')
      // TODO: Redirect user to homepage or dashboard
    } catch (err) {
      console.error('Login failed:', err)
      const message = err.response?.data?.message || 'Login failed'
      setError(message)
    }
  }

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Optional: overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Login form */}
      <div className="relative z-10 bg-white/90 p-8 rounded-xl shadow-2xl w-full max-w-md backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Login</h2>
        <p className="text-center text-sm mb-6 text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
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
