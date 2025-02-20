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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-2">Show Off Your Best Work</h2>
      <p className="text-gray-600 mb-8">
        Let your experience, certifications, and accomplishments shine—build a profile that grabs
        attention and opens doors to new opportunities.
      </p>

      <div className="space-y-6">
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

        <div className="border-2 border-dashed rounded-lg p-8 text-center">
          <div className="flex flex-col items-center">
            <Upload className="w-8 h-8 text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">Drag files to Upload</p>
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileUpload}
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-600"
            >
              Choose File
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;