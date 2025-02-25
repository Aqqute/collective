// components/PortfolioProject.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Upload, Plus, X } from 'lucide-react';

interface PortfolioFormData {
  title: string;
  role: string;
  link?: string;
  description: string;
  skills: string[];
  files: File[];
}

const PortfolioProject: React.FC = () => {
  const [formData, setFormData] = useState<PortfolioFormData>({
    title: '',
    role: '',
    link: '',
    description: '',
    skills: [],
    files: []
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-2">Show Off Your Best Work</h2>
      <p className="text-gray-600 mb-8">
        Let your experience, certifications, and accomplishments shine—build a profile that grabs
        attention and opens doors to new opportunities.
      </p>

      <h2 className="text-xl font-semibold mb-2">Build your portfolio</h2>
      <p className="text-gray-600 mb-8">
        Wow potential clients by sharing the most projects your a proud of. Upload links, visuals, files to show exactly what you can do.
      </p>
    <div className="flex w-3/4 ">
      <div className="space-y-6 mr-4">
        <div>
          <label className="block text-sm font-medium mb-2">Project title</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your role (Optional)</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            value={formData.role}
            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Link (Optional)</label>
          <input
            type="url"
            className="w-full p-3 border rounded-lg"
            value={formData.link}
            onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Tell the story behind the project—what challenges did you tackle, and how did you add value?
          </label>
          <textarea
            className="w-full p-3 border rounded-lg min-h-[120px]"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>

        
      </div>
      <div className="flex justify-center items-center p-4">
  <div className="w-full max-w-3xl border-2 border-dashed border-orange-500 rounded-lg p-8 text-center bg-gray-50">
    <div className="flex flex-col items-center space-y-6">
      <div className="flex space-x-6">
        <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="#FF4405" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10L19.553 7.724C19.7054 7.64751 19.8748 7.61151 20.0455 7.61901C20.2162 7.62652 20.3807 7.67728 20.5244 7.76615C20.6681 7.85502 20.7861 7.97896 20.8667 8.12736C20.9473 8.27576 20.9877 8.44348 20.984 8.613V15.387C20.9877 15.5565 20.9473 15.7242 20.8667 15.8726C20.7861 16.021 20.6681 16.145 20.5244 16.2339C20.3807 16.3227 20.2162 16.3735 20.0455 16.381C19.8748 16.3885 19.7054 16.3525 19.553 16.276L15 14M11 8H7C6.46957 8 5.96086 8.21071 5.58579 8.58579C5.21071 8.96086 5 9.46957 5 10V14C5 14.5304 5.21071 15.0391 5.58579 15.4142C5.96086 15.7893 6.46957 16 7 16H11M11 8C11.5304 8 12.0391 8.21071 12.4142 8.58579C12.7893 8.96086 13 9.46957 13 10V14C13 14.5304 12.7893 15.0391 12.4142 15.4142C12.0391 15.7893 11.5304 16 11 16M11 8V16" stroke="#FF4405" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6H15M7 9H17M16 16H16.01M19 16H19.01M13 16H13.01M10 16H10.01M7 16H7.01M16 19H16.01M19 19H19.01M13 19H13.01M10 19H10.01M7 19H7.01M5 9H3C2.46957 9 1.96086 9.21071 1.58579 9.58579C1.21071 9.96086 1 10.4696 1 11V21C1 21.5304 1.21071 22.0391 1.58579 22.4142C1.96086 22.7893 2.46957 23 3 23H21C21.5304 23 22.0391 22.7893 22.4142 22.4142C22.7893 22.0391 23 21.5304 23 21V11C23 10.4696 22.7893 9.96086 22.4142 9.58579C22.0391 9.21071 21.5304 9 21 9H19M9 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V9H7V5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3Z" stroke="#FF4405" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-medium">Add content</h2>
      <input
        type="file"
        multiple
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="hidden md:block cursor-pointer"
      >
        {/* Hidden on mobile but accessible via the whole container */}
      </label>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default PortfolioProject;