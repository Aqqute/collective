import { Clock, MapPin } from "lucide-react";
import { useCallback } from "react";

interface ProjectCardProps {
  project: {
    id: string;
    statusClassName: string;
    statusLabel: string;
    title: string;
    description: string;
    formattedBudget: string;
    duration: string;
    locationType: string;
  };
  onSelect?: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
    const handleClick = useCallback(() => {
      if (onSelect) {
        onSelect(project.id);
      }
    }, [project.id, onSelect]);
    
    return (
      
    
      <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className={`inline-block px-2 py-1 text-xs rounded-md ${project.statusClassName} mb-2`}>
              {project.statusLabel}
            </span>
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
          </div>
          <button 
            onClick={handleClick}
            className="text-orange-500 hover:text-orange-700 rounded-full p-2 hover:bg-orange-50 transition-colors"
            aria-label="View project details"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="mt-4">
          <p className="text-orange-500 font-bold text-lg">{project.formattedBudget}</p>
        </div>
        
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <Clock className="w-4 h-4 mr-1" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{project.locationType}</span>
          </div>
        </div>
      </div>
     
    );
  };
  
  