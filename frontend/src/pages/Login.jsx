import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!emailOrUsername || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    const result = await verifyLogin(emailOrUsername, password);
    if (result.success) {
      alert('Login successful');
    } else {
      setError(result.message);
    }
  };

  const verifyLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/odoo/login', {
        email,
        password,
      });

      if (response.status === 200) {
        return { success: true };
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return { success: false, message: 'Username or password is incorrect' };
      } else {
        return { success: false, message: 'Something went wrong. Try again.' };
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-row bg-white text-[#3585c0]">
      {/* Left Side Image */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="login_img.png"
          alt="Website"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-[#3585c0] mb-6 text-center">Login to Your Account</h2>

          {error && (
            <div className="bg-red-100 text-[#3585c0] p-2 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-[#3585c0] font-semibold mb-1">Email or Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-#2f76ac"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#3585c0] font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-#2f76ac"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-end mb-4">
            <a href="/forgot-password" className="text-sm text-[#3585c0] hover:underline">Forgot Password?</a>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#3585c0] text-white py-2 rounded-lg hover:bg-[#2f76ac] transition duration-300"
          >
            Login
          </button>

          <div className="mt-6 text-center text-gray-500">or continue with</div>

          <div className="flex gap-4 mt-4">
            <button className="w-1/2 bg-white border border-[#3585c0] text-[#3585c0] py-2 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2">
              <img src="ggl_logo.png" alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="w-1/2 bg-white border border-[#3585c0] text-[#3585c0] py-2 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2">
              <img src="Fb_logo.png" alt="Facebook" className="w-5 h-5" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
