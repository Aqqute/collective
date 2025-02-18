"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { setUser } from '../store/userSlice';

type FormValues = {
  phone: string;
  country: string;
  agreeToTerms: boolean;
};

type SignUpPostRedirectProps = {
  email: string;
  provider?: 'google' | 'apple';
};

const SignUpPostRedirect: React.FC<SignUpPostRedirectProps> = ({ email, provider }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  // const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // dispatch(setUser({ ...data, email }));
    console.log({ ...data, email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Join Go-Collective</h2>
          {email && (
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-2">J</div>
                <span className="text-gray-700">{email}</span>
              </div>
            </div>
          )}
        </div>
        
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="phone" className="sr-only">Phone number</label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              id="phone"
              type="tel"
              placeholder="Phone number"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          
          <div className="relative">
            <label htmlFor="country" className="sr-only">Country</label>
            <select
              {...register('country', { required: 'Country is required' })}
              id="country"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm pr-10"
              defaultValue=""
            >
              <option value="" disabled>Country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                {...register('agreeToTerms', { required: 'You must agree to the terms' })}
                id="agreeToTerms"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                Yes, I understand and agree to the Go-Collective{' '}
                <a href="#" className="text-orange-600 hover:text-orange-500">Terms of Service</a>, including the{' '}
                <a href="#" className="text-orange-600 hover:text-orange-500">User Agreement</a> and{' '}
                <a href="#" className="text-orange-600 hover:text-orange-500">Privacy Policy</a>.
              </label>
            </div>
          </div>
          {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms.message}</p>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Join Go-Collective
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-orange-600 hover:text-orange-500">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPostRedirect;