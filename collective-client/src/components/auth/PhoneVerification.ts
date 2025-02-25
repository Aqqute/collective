"use client";
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const PhoneVerification = ({ phoneNumber = "07043765467" }) => {
  const [isResending, setIsResending] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  
  const handleResend = () => {
    setIsResending(true);
    // Simulate API call
    setTimeout(() => setIsResending(false), 2000);
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value !== '' && index < 4) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-6 bg-white rounded-lg">
      {/* Back button */}
      <div className="self-start flex items-center text-gray-600 mb-6">
        <ArrowLeft size={16} className="mr-1" />
        <span>Verify Phone Number</span>
      </div>
      
      {/* Envelope icon with checkmark */}
      <div className="relative w-32 h-32 mb-4">
        <div className="w-32 h-24 border-2 border-gray-300 rounded-lg relative">
          <div className="absolute -bottom-2 left-0 right-0 h-10 border-t-2 border-gray-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500"></div>
      </div>
      
      {/* Verification text */}
      <h2 className="text-xl font-bold text-center mb-3">Verify your Phone Number</h2>
      
      <p className="text-center text-gray-600 mb-6">
        A 5 digit code has been sent to <span className="text-orange-500 font-medium">{phoneNumber}</span>.
        <br />Please enter 5 digit code below to secure your account.
      </p>
      
      {/* OTP Input */}
      <div className="flex gap-3 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
          />
        ))}
      </div>
      
      <p className="text-center text-gray-500 text-sm mb-4">
        If you don't receive a message within 5 mins, click on the button below to resend email
      </p>
      
      {/* Resend button */}
      <button
        onClick={handleResend}
        disabled={isResending}
        className="w-full py-3 px-4 rounded-full font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
      >
        {isResending ? 'Sending...' : 'Resend Email'}
      </button>
    </div>
  );
};

export default PhoneVerification;