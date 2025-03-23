import { Project, ProjectsListing } from "@/components/contracts/ConnectedOffer";
import { useCallback } from "react";

export const ProjectsContainer: React.FC = () => {
    // In a real-world scenario, this would come from an API call
    const sampleProjects: Project[] = [
      {
        id: '1',
        title: 'Logo Design for Startup',
        description: 'We are looking for someone to design our logo...',
        status: 'in-progress',
        budget: 10000,
        currency: '₦',
        duration: '1 week',
        locationType: 'Remote',
        createdAt: '2025-03-20T08:00:00Z'
      },
      {
        id: '2',
        title: 'Logo Design for Startup',
        description: 'We are looking for someone to design our logo...',
        status: 'completed',
        budget: 10000,
        currency: '₦',
        duration: '1 week',
        locationType: 'Remote',
        createdAt: '2025-03-15T08:00:00Z'
      },
      {
        id: '3',
        title: 'Logo Design for Startup',
        description: 'We are looking for someone to design our logo...',
        status: 'completed',
        budget: 10000,
        currency: '₦',
        duration: '1 week',
        locationType: 'Remote',
        createdAt: '2025-03-10T08:00:00Z'
      }
    ];
    
    const handleProjectSelect = useCallback((projectId: string) => {
      console.log(`Project selected: ${projectId}`);
      // Navigate to project detail or open modal
    }, []);
    
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <ProjectsListing 
          projects={sampleProjects} 
          onProjectSelect={handleProjectSelect}
        />
      </div>
    );
  };
  
  export default ProjectsContainer;