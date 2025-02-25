
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, Plus } from 'lucide-react';
import { addSkill, removeSkill } from '../../store/ProfileSlice';
import type { RootState } from '../../store';

const POPULAR_SKILLS = [
  'Graphic design',
  'UI/UX Design',
  'Web Development',
  'Content Writing',
  'Digital Marketing',
  'SEO',
  'Mobile Development',
  'Project Management'
];

const SkillsSelection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const skills = useSelector((state: RootState) => state.profile.skills);
  const dispatch = useDispatch();

  const handleAddSkill = (skill: string) => {
    if (skills.length < 20) {
      dispatch(addSkill(skill));
      setSearchTerm('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-2">Showcase Your Expertise</h2>
      <p className="text-gray-600 mb-8">
        Help us recommend jobs for you, pick the skills that define your talent. 
        The more relevant skills you choose, the better we'll match you with opportunities that fit your strengths.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-4">
            Search for skills that align with the type of projects you want to work on
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Search skills"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill: any) => (
              <div
                key={skill}
                className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2"
              >
                <span>{skill}</span>
                <button
                  onClick={() => dispatch(removeSkill(skill))}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">Max 20 skills</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Need Inspiration?</h3>
          <p className="text-gray-600 mb-4">Here are some popular skills on the platform right now</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {POPULAR_SKILLS.map((skill) => (
              <button
                key={skill}
                onClick={() => handleAddSkill(skill)}
                className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
                disabled={skills.includes(skill)}
              >
                <Plus className="w-4 h-4" />
                <span>{skill}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSelection;
