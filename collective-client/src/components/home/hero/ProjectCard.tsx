import { Clock, MapPin } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  price: number;
  duration: string;
  type: 'Remote' | 'Onsite';
  onSave?: () => void;
}

export const ProjectCard = ({ title, price, duration, type, onSave }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">₦{price.toLocaleString()}</p>
          <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {type}
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