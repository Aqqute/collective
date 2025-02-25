"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6">Log in to Go-Collective</h1>
      
      {/* Social login buttons */}
      <div className="flex space-x-4 mb-6">
    
        <button
          className="flex-1 py-2 px-4 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <FaApple />
          <span className="text-sm font-medium">Continue with Apple</span>
        </button>
        <button
          className="flex-1 py-2 px-4 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <FcGoogle />
          <span className="text-sm font-medium">Continue with Google</span>
        </button>
      </div>
      
      {/* Divider */}
      <div className="flex items-center mb-6">
        <div className="flex-grow h-px bg-gray-200"></div>
        <span className="px-3 text-sm text-gray-500 font-medium">OR</span>
        <div className="flex-grow h-px bg-gray-200"></div>
      </div>
      
      {/* Login form */}
      <form>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <a href="/forget-password" className="text-sm text-orange-500 hover:text-orange-600">
            Forgot password?
          </a>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          Log in to Go-Collective
        </button>
      </form>
      
      <div className="mt-6 text-center text-sm text-gray-600">
        Don't have an account? <a href="/signup" className="text-orange-500 hover:text-orange-600 font-medium">Create an account</a>
      </div>
    </div>
  );
};

export default LoginPage;