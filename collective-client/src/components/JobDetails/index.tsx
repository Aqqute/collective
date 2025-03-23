import { ProjectMetadata, Client, Review } from "@/types/Project";
import { Share2, ArrowRight } from "lucide-react";
import { useProjectApplication, formatTimeAgo } from "../../../hooks/projectHook";
import { formatCurrency } from "../JobFeed/ProjectCard";
import { MetadataGrid, SkillTag, AttachmentItem, ClientProfile, ReviewItem } from './components/reusableUi';

interface ProjectDetailsProps {
    project: ProjectMetadata;
    client: Client;
    reviews: Review[];
    className?: string;
    onApply?: () => void;
    onShare?: () => void;
  }
  
  export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    project,
    client,
    reviews,
    className = '',
    onApply,
    onShare
  }) => {
    const { isApplying, applicationError, handleApply } = useProjectApplication(project.id);
    
    const handleApplyClick = async () => {
      const success = await handleApply();
      if (success && onApply) {
        onApply();
      }
    };
    
    const metadataRows = [
      { label: 'Payment Type', value: project.paymentType },
      { label: 'Currency', value: project.currency },
      { label: 'Budget', value: formatCurrency(project.budget, project.currency) },
      { label: 'Duration', value: project.duration },
      { label: 'Work arrangement', value: project.workArrangement },
      { label: 'Support', value: project.support },
      { label: 'Project scope', value: project.projectScope },
      { label: 'Experience level', value: project.experienceLevel },
      { label: 'Location', value: project.location }
    ];
  
    return (
      <div className={`bg-white ${className}`}>
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h1>
                  <p className="text-gray-600">{formatTimeAgo(project.createdAt)}</p>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={onShare}
                    className="p-2 bg-gray-100 rounded-full"
                    aria-label="Share project"
                  >
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                  
                  <button
                    onClick={handleApplyClick}
                    disabled={isApplying}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Apply
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
              </div>
              
              <div className="mb-8">
                <MetadataGrid metadata={metadataRows} />
              </div>
              
              {project.attachments.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Attachments</h3>
                  <div className="space-y-3">
                    {project.attachments.map(attachment => (
                      <AttachmentItem 
                        key={attachment.id}
                        name={attachment.name}
                        url={attachment.url}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Skills needed</h3>
                <div className="flex flex-wrap">
                  {project.skills.map((skill, index) => (
                    <SkillTag key={`skill-${index}`} label={skill} />
                  ))}
                </div>
              </div>
              
              {applicationError && (
                <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-md">
                  {applicationError}
                </div>
              )}
              
              <div className="mb-8 flex justify-between mt-6 pt-6 border-t">
                <button 
                  onClick={() => window.history.back()}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                
                <button
                  onClick={handleApplyClick}
                  disabled={isApplying}
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md transition-colors"
                >
                  {isApplying ? 'Applying...' : 'Apply'}
                  {!isApplying && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <ClientProfile client={client} />
              
              {reviews.length > 0 && (
                <div className="bg-white rounded-lg border border-gray-100 p-6 mt-6">
                  <h3 className="text-lg font-medium mb-4">Recent Reviews</h3>
                  <div className="divide-y divide-gray-100">
                    {reviews.map(review => (
                      <ReviewItem key={review.id} review={review} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  