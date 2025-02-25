interface ProjectCardProps {
    title: string;
    description: string;
    amount: number;
    duration: string;
    type: 'Remote' | 'Onsite';
    onSave: () => void;
  }
  
  export const ProjectCard = ({
    title,
    description,
    amount,
    duration,
    type,
    onSave
  }: ProjectCardProps) => {
    return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-2xl font-bold text-gray-900">₦{amount.toLocaleString()}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" strokeWidth="2"/>
                </svg>
                <span>{duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                </svg>
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