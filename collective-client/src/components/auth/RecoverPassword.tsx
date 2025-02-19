import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const RecoverPasswordNotification = ({ email = "Janeth@gmail.com", }) => {

// const RecoverPasswordNotification = ({ email = "Janeth@gmail.com", onResend, onBack }) => {
  const [isResending, setIsResending] = useState(false);
  
  const handleResend = () => {
    setIsResending(true);
    // onResend?.();
    setTimeout(() => setIsResending(false), 2000);
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Back button */}
      <button 
        // onClick={onBack}
        className="self-start flex items-center text-gray-600 mb-6 hover:text-gray-800"
      >
        <ArrowLeft size={16} className="mr-1" />
        <span>Recover password</span>
      </button>
      
      {/* Email icon */}
      <div className="mb-6 relative">
        <div className="w-24 h-24 bg-white p-2">
          <div className="w-full h-full border-2 border-gray-200 rounded-md relative flex items-center justify-center">
            <div className="absolute w-16 h-1 bg-orange-500 bottom-3 left-3"></div>
            <div className="absolute -top-2 -right-2 bg-white p-1 rounded-full border border-gray-100 shadow-md">
              <div className="bg-orange-500 text-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification text */}
      <h2 className="text-xl font-bold text-center mb-4">Recover password</h2>
      
      <p className="text-center text-gray-600 mb-6">
        An email has been sent to <span className="text-orange-500 font-medium">{email}</span>.
        If this email address is registered to Go-Collective, you'll
        receive instructions on how to set a new password.
      </p>
      
      <p className="text-center text-gray-500 text-sm mb-4">
        If you don't receive an email within 5 mins,
        click on the button below to resend email
      </p>
      
      {/* Resend button */}
      <button
        onClick={handleResend}
        disabled={isResending}
        className={`w-full py-3 px-4 rounded-full font-medium text-white 
          ${isResending ? 'bg-orange-400' : 'bg-orange-500 hover:bg-orange-600'} 
          transition-colors duration-200`}
      >
        {isResending ? 'Sending...' : 'Resend Email'}
      </button>
    </div>
  );
};

export default RecoverPasswordNotification;