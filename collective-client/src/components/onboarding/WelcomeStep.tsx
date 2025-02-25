// components/WelcomeStep.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Upload, Clock } from 'lucide-react';
import { updateBasicInfo, updateProfileImage } from '../../store/ProfileSlice';

const WelcomeStep: React.FC = () => {
  const dispatch = useDispatch();
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateProfileImage(reader.result as string));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex mb-8">
        <p className="text-sm px-4">1/10 Create Your Profile</p>
       <span className='flex text-sm'><Clock /> 10-15 Mins</span>

      </div>
      <h1 className="text-2xl font-semibold mb-4">Welcome to Go-Collective!</h1>
      <p className="text-gray-600 mb-8">
        We're excited to have you on board. Let's get you set up and ready to land your first project!
      </p>
      <div className="flex p-3">
      <div className="flex flex-col items-center mb-8 ml-6 w-2/4">
        <div className="relative w-32 h-32 rounded-full bg-gray-100 mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <Upload className="w-8 h-8 text-gray-400" />
          </div>
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <button className="text-orange-500 font-medium rounded-full border border-orange-200 px-3 py-2">
          + Add profile image
        </button>
        <p className="text-gray-600 text-center mt-2 mb-8">
        Upload a clear, professional photo, <br /> First impressions matter!
      </p>
      </div>

      <div className="space-y-6 w-full">
        <div>
          <p>Enter a single sentence description of your professional skills/exprience. <br /> e.g. Expert Web Designer with Ajax experience</p>
          <label className="block text-2xl mt-2 font-bold mb-2">
            Your Title
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Graphic designer"
            onChange={(e) => dispatch(updateBasicInfo({ 
              title: e.target.value,
              bio: '' 
            }))}
          />
        </div>

        <div>
          <label className="block text-2xl font-bold mb-2">
            Write a bio to tell us more about yourself
          </label>
          <textarea
            className="w-full p-3 border rounded-lg min-h-[120px]"
            placeholder="Write a brief introduction about your experience, skills, and what you're passionate about."
            onChange={(e) => dispatch(updateBasicInfo({ 
              title: '',
              bio: e.target.value 
            }))}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default WelcomeStep;