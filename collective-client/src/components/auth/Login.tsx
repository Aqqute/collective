"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-10v4h2v-4h4v-2h-4V6h-2v4H7v2h4z"/>
          </svg>
          <span className="text-sm font-medium">Continue with Apple</span>
        </button>
        <button
          className="flex-1 py-2 px-4 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 488 512" fill="currentColor">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
          </svg>
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