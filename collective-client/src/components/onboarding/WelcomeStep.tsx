// components/WelcomeStep.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Upload } from 'lucide-react';
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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Go-Collective!</h1>
      <p className="text-gray-600 mb-8">
        We're excited to have you on board. Let's get you set up and ready to land your first project!
      </p>
      
      <div className="flex flex-col items-center mb-8">
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
        <button className="text-orange-500 font-medium">
          Add profile image
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Your Title
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="e.g. Expert Web Designer with Ajax experience"
            onChange={(e) => dispatch(updateBasicInfo({ 
              title: e.target.value,
              bio: '' 
            }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
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
  );
};

export default WelcomeStep;