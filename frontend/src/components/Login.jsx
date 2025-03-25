import React, { useState } from 'react'
import axios from '../api/axiosInstance' // Custom axios that uses the proxy

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/auth/login', { email, password })

      // Assume your backend returns a token on successful login
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
    <div className="container mx-auto max-w-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login
