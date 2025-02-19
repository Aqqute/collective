import React, { useState, FormEvent } from 'react';
import { ArrowLeft } from 'lucide-react';

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
      
      {/* Laptop icon */}
      <div className="mb-6 relative">
        <div className="w-24 h-24 flex items-center justify-center">
          <div className="relative">
            {/* Laptop base */}
            <div className="w-20 h-12 bg-navy-900 rounded-b-md"></div>
            {/* Laptop screen */}
            <div className="w-18 h-14 bg-white border-2 border-navy-900 rounded-t-md absolute -top-14 left-1">
              {/* Screen content */}
              <div className="w-full h-full flex items-center justify-center p-1">
                <div className="w-full">
                  <div className="w-8 h-1 bg-gray-300 mb-1 mx-auto"></div>
                  <div className="w-10 h-1 bg-gray-300 mb-1 mx-auto"></div>
                </div>
              </div>
            </div>
            {/* Lock icon */}
            <div className="absolute -top-7 -right-3 bg-orange-500 text-white rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
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