
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateJobPreferences } from '../../store/ProfileSlice';
import type { RootState } from '../../store';

const JOB_TYPES = ['Contract', 'Full-Time', 'Part-Time', 'Remote Only', 'On-Site'];
const AVAILABILITY = ['Available Now', 'Full-Time Availability', 'Open to Offers'];
const PROJECT_LENGTH = ['Short-term (Less than 3 months)', 'Long-term (More than 3 months)', 'Ongoing/Retainer-based Projects'];
const WORK_HOURS = ['Standard Business Hours', 'Flexible Hours', 'Night Owl (After 5PM)', 'Weekends'];

const JobPreferences: React.FC = () => {
  const preferences = useSelector((state: RootState) => state.profile.jobPreferences);
  const dispatch = useDispatch();

  const SelectionGroup: React.FC<{
    title: string;
    description: string;
    options: string[];
    type: keyof typeof preferences;
    multiple?: boolean;
  }> = ({ title, description, options, type, multiple = false }) => (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              let newValue;
              if (multiple) {
                newValue = preferences[type].includes(option)
                  ? preferences[type].filter((v: string) => v !== option)
                  : [...preferences[type], option];
              } else {
                newValue = [option];
              }
              dispatch(updateJobPreferences({ [type]: newValue }));
            }}
            className={`px-4 py-2 rounded-full transition-colors ${
              preferences[type].includes(option)
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-2">Job Preference</h2>
      <p className="text-gray-600 mb-8">
        Tailor your job search by selecting the types of projects and opportunities that suit you best.
        Let potential clients know how you prefer to work!
      </p>

      <SelectionGroup
        title="Preferred Job Type"
        description="How do you prefer to engage with clients?"
        options={JOB_TYPES}
        type="type"
        multiple
      />

      <SelectionGroup
        title="Work Availability"
        description="When are you available to take on new projects?"
        options={AVAILABILITY}
        type="availability"
      />

      <SelectionGroup
        title="Preferred Project Length"
        description="What kind of projects do you prefer?"
        options={PROJECT_LENGTH}
        type="projectLength"
        multiple
      />

      <SelectionGroup
        title="Preferred Work Hours"
        description="When do you prefer to work?"
        options={WORK_HOURS}
        type="workHours"
        multiple
      />
    </div>
  );
};

export default JobPreferences;