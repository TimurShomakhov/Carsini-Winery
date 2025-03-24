// Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth object from firebase.js

const Signup = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use Firebase Auth to create user
      alert('User created successfully');
      // You can redirect or clear fields here as needed
    } catch (error) {
      setError(error.message); // If there's an error, set the error message
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      {/* Display error if there is one */}
      {error && <p className="text-red-500">{error}</p>}
      
      {/* Form to collect email and password */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
          className="p-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          className="p-2 border rounded mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
