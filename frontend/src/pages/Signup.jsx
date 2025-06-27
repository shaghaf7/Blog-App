import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onsubmitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/signup", {
      name,
      email,
      password
    })
      .then((res) => {
        console.log("Success", res);

        // ✅ Save user info to localStorage
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("userName", res.data.user.name);

        // ✅ Show success message
        setMessage("🎉 Account created successfully! Redirecting...");

        // ✅ Redirect after short delay
        setTimeout(() => {
          navigate('/Home');
        }, 2000); // 2 seconds delay

        // Clear fields
        setname('');
        setemail('');
        setpassword('');
      })
      .catch((err) => {
        console.log("Errors", err);
        setMessage("❌ Signup failed: " + (err.response?.data?.message || "Server error"));
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Signup</h2>
        
        {/* ✅ Success or error message */}
        {message && (
          <div className="mb-4 text-center text-sm font-semibold text-green-600">
            {message}
          </div>
        )}

        <form onSubmit={onsubmitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
