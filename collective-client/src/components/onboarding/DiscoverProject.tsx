import React, { useState } from 'react';

const DiscoverProjects = () => {
  const categories = [
    'Writing & Translation',
    'Design & Creative',
    'Data Science & Analytics',
    'Engineering & Architecture',
    'Sales & Marketing',
    'Customer Service & Consulting',
    'IT & Networking',
    'Admin Support'
  ];

  const specialties = [
    'Content Writing',
    'Blog Post',
    'Copywriting',
    'SEO Content',
    'Technical Writing',
    'Documentation',
    'Translation'
  ];

  const [selectedCategory, setSelectedCategory] = useState('Writing & Translation');
  const [selectedSpecialties, setSelectedSpecialties] = useState(['Copywriting', 'Translation']);

  const handleSpecialtyToggle = (specialty) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="w-full relative">
          <div className="h-1 bg-[#FF4405] absolute top-0 left-0 right-0" />
          <div className="pt-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-[#111827]">Discover Your Ideal Projects</h1>
            <span className="text-[#6B7280]">4/10</span>
          </div>
        </div>
      </div>

      <p className="text-[#6B7280] mb-8">
        Select the categories of projects that excite you the most. This helps us match you with opportunities that align with your interests and expertise!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <div>
          <h2 className="text-sm text-[#6B7280] mb-3">Select 1 category</h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                className={`w-full text-left px-4 py-2.5 rounded ${
                  selectedCategory === category
                    ? 'text-[#FF4405]'
                    : 'text-[#111827] hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm text-[#6B7280] mb-3">Select 1 to 4 specialties</h2>
          <div className="space-y-1">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                className={`w-full text-left px-4 py-2.5 rounded flex items-center justify-between ${
                  selectedSpecialties.includes(specialty)
                    ? 'text-[#FF4405]'
                    : 'text-[#111827] hover:bg-gray-50'
                }`}
                onClick={() => handleSpecialtyToggle(specialty)}
              >
                {specialty}
                {selectedSpecialties.includes(specialty) && (
                  <svg className="w-5 h-5 text-[#FF4405]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button className="p-2 rounded-full bg-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5L5 19M5 5L19 19" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 11.5L12 6.5M12 6.5L17 11.5M12 6.5V17.5" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="#111827" strokeWidth="2"/>
              </svg>
            </button>
            <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg">
              Ask to edit
            </button>
            <button className="p-2 rounded-full bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7H4V4H8V7ZM14 4H10V7H14V4ZM20 4H16V7H20V4ZM8 9H4V12H8V9ZM14 9H10V12H14V9ZM20 9H16V12H20V9ZM8 14H4V17H8V14ZM14 14H10V17H14V14ZM20 14H16V17H20V14Z" fill="#111827"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProjects;