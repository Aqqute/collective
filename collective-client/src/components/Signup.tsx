"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { setUser } from '../store/userSlice';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  company?: string;
  country: string;
  agreeToTerms: boolean;
};

const SignUpForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  // const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // dispatch(setUser(data));
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-800">Join Go-Collective</h2>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="flex space-x-2">
            <button className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="#000000"/>
                <path d="M15.09 12.71L15.17 13.27H18.18L18.1 13.55C17.89 14.43 17.49 15.26 16.92 15.97C16.36 16.67 15.64 17.23 14.82 17.6C14 17.97 13.1 18.16 12.19 18.16C11.29 18.16 10.41 17.99 9.59 17.65C8.77 17.31 8.05 16.81 7.46 16.16C6.86 15.51 6.39 14.72 6.09 13.84C5.79 12.96 5.67 12.03 5.73 11.09C5.78 10.16 6.02 9.25 6.42 8.42C6.82 7.59 7.38 6.86 8.08 6.27C8.78 5.67 9.58 5.23 10.45 4.96C11.32 4.69 12.24 4.6 13.15 4.71C14.05 4.81 14.92 5.09 15.71 5.53C16.5 5.97 17.2 6.56 17.76 7.28C18.32 8 18.74 8.83 18.98 9.73L19.06 10.03H13.94L13.86 9.77C13.75 9.41 13.58 9.08 13.35 8.79C13.12 8.5 12.83 8.25 12.5 8.07C12.18 7.89 11.83 7.77 11.46 7.73C11.09 7.69 10.72 7.72 10.37 7.83C10.02 7.93 9.68 8.1 9.39 8.33C9.1 8.56 8.85 8.83 8.67 9.15C8.49 9.47 8.36 9.82 8.31 10.19C8.26 10.56 8.28 10.93 8.38 11.3C8.48 11.66 8.64 12 8.87 12.3C9.09 12.6 9.37 12.86 9.68 13.05C9.99 13.25 10.34 13.39 10.7 13.46C11.07 13.52 11.44 13.52 11.81 13.45C12.18 13.38 12.53 13.24 12.84 13.05C13.16 12.85 13.43 12.6 13.66 12.3C13.89 12 14.06 11.66 14.16 11.3L14.24 11.04H11.95V8.93H16.3L16.38 9.16C16.53 9.59 16.62 10.04 16.64 10.5C16.66 10.95 16.63 11.4 16.53 11.84C16.43 12.28 16.28 12.7 16.07 13.1L15.91 13.39L15.09 12.71Z" fill="#FFFFFF"/>
              </svg>
              Continue with Apple
            </button>
            <button className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              Continue with Google
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-sm text-gray-500">OR</span>
            </div>
          </div>
        </div>
        
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                {...register('firstName', { required: 'First name is required' })}
                type="text"
                placeholder="First name"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>
            <div>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                type="text"
                placeholder="Last name"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>
          
          <div>
            <input
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              type="email"
              placeholder="Email address"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              placeholder="Phone number"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          
          <div>
            <div className="relative">
              <select
                {...register('country', { required: 'Country is required' })}
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
            </div>
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
          </div>
          
          <div>
            <div className="relative">
              <input
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                type="password"
                placeholder="Password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
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

export default SignUpForm;