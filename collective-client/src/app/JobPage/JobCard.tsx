import { Clock, MapPin } from 'lucide-react';

interface JobCardProps {
  title: string;
  description: string;
  amount: number;
  duration: string;
  type: 'Remote' | 'Onsite';
  onSave: () => void;
}

export const JobCard = ({
  title,
  description,
  amount,
  duration,
  type,
  onSave
}: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-xl font-bold text-orange-500">₦{amount.toLocaleString()}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{type}</span>
            </div>
          </div>
        </div>
        <button
          onClick={onSave}
          className="text-orange-500 hover:bg-orange-50 p-2 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};