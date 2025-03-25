// Signup.jsx
import React, { useState } from 'react'
import axios from '../api/axiosInstance' // Axios with Vite proxy setup

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('') // Include name field for signup
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/auth/register', { name, email, password })
      alert('User registered successfully!')
      // Optionally redirect or clear form here
    } catch (err) {
      console.error('Signup error:', err)
      const message = err.response?.data?.message || 'Signup failed'
      setError(message)
    }
  }

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
