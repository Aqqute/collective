"use client";
import React, { useState, FormEvent } from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface ResetPasswordFormProps {
  onSubmit: (email: string) => void;
  onBack: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onSubmit, onBack }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit(email);
    // In a real app, you would handle the response from the server here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Back button */}
      <button 
        onClick={onBack}
        className="self-start flex items-center text-gray-600 mb-6 hover:text-gray-800"
        type="button"
      >
        <ArrowLeft size={16} className="mr-1" />
        <span>Reset your password</span>
      </button>
      
      <Image src="/onboarding/laptop.png" height="250" width="250" alt="inbox" />
      
      {/* Form title */}
      <h2 className="text-xl font-bold text-center mb-3">Reset your password</h2>
      
      <p className="text-center text-gray-600 mb-6">
        Enter your Go-Collective email address so we can reset your password.
      </p>
      
      {/* Email form */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className={`w-full py-3 px-4 rounded-full font-medium text-white 
            ${isSubmitting || !email ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'} 
            transition-colors duration-200`}
        >
          {isSubmitting ? 'Processing...' : 'Next'}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;