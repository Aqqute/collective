import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

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
      <Image src="/onboarding/inbox.png" height="250" width="250" alt="inbox" />
      
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