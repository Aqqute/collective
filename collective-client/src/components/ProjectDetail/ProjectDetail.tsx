import { ExternalLink, RefreshCw } from "lucide-react";
import { ProjectDetails, ProjectUtils } from "./Utils";
import { Card } from "./ReusableUi";

interface ProjectDetailsCardProps {
    project: any;
    onViewDetails?: () => void;
  }
  
  export const ProjectDetailsCard: React.FC<ProjectDetailsCardProps> = ({ 
    project,
    onViewDetails 
  }) => {
    return (
      <div className="space-y-6">
        <Card title="Project Details">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Job Details</h3>
            <p className="text-sm text-gray-500 mb-4">
              {ProjectUtils.getTimeElapsed(project.createdAt)}
            </p>
            
            <h4 className="font-medium text-gray-900 mb-2">{project.title}</h4>
            <p className="text-gray-700 mb-6">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-100 pt-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Payment Type</p>
                <p className="font-medium">{project.paymentType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Currency</p>
                <p className="font-medium">{project.currency}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Budget</p>
                <p className="font-medium">
                  {ProjectUtils.formatCurrency(project.budget, project.currency)}
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <button 
                onClick={onViewDetails}
                className="text-orange-500 hover:text-orange-600 text-sm transition-colors inline-flex items-center"
              >
                View Job Details <ExternalLink className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        </Card>
        
        <Card title="Timeline" action={
          <button 
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
            aria-label="Refresh"
          >
            <RefreshCw size={18} />
          </button>
        }>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Start Date</p>
              <p className="font-medium">{ProjectUtils.formatDate(project.timeline.startDate)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Expected End Date</p>
              <p className="font-medium">{ProjectUtils.formatDate(project.timeline.endDate)}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  };
  