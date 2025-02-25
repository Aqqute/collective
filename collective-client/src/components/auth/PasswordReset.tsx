"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    
    setPasswordsMatch(true);
    // Handle password reset submission
    console.log('Password reset submitted');
  };

  const handleConfirmPasswordChange = (value: React.SetStateAction<string>) => {
    setConfirmPassword(value);
    if (newPassword && value) {
      setPasswordsMatch(newPassword === value);
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6">
      <h1 className="text-2xl font-bold mt-6 text-center mb-2">Reset your password</h1>
      <p className="text-center text-gray-600 mb-6">Enter your new Go-Collective password.</p>
      
      <form onSubmit={handleSubmit}>
        {/* New Password Field */}
        <div className="mb-4">
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
            />
            <button 
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        {/* Confirm Password Field */}
        <div className="mb-1">
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              placeholder="Confirm password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
            />
            <button 
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        {/* Error Message */}
        {!passwordsMatch && (
          <p className="text-sm text-red-500 mb-4">Both passwords must match.</p>
        )}
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-full transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordReset;