import React from 'react';
import { ProjectShareModal } from './ShareModal';
import { ProjectCard } from './ProjectCard';

export interface ProjectEntity {
    id: string;
    title: string;
    description: string;
    amount: number;
    currency: string;
    duration: string;
    type: 'Remote' | 'Onsite' | 'Hybrid';
    createdAt: string;
    updatedAt: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  }
  
interface AvailableProjectsProps {
  title?: string;
  description?: string;
  viewAllLabel?: string;
  onViewAll?: () => void;
  projects: ProjectEntity[];
  loading?: boolean;
  className?: string;
  onSaveProject?: (id: string) => void;
  onShareProject?: (id: string) => void;
  emptyState?: React.ReactNode;
  loadingState?: React.ReactNode;
}

export const AvailableProjects: React.FC<AvailableProjectsProps> = ({
  title = "Available projects for you",
  description = "Browse a selection of projects curated to match your unique skills and expertise. Find the perfect opportunities that align with your strengths and career aspirations.",
  viewAllLabel = "See all →",
  onViewAll,
  projects,
  loading = false,
  className = "",
  onSaveProject,
  onShareProject,
  emptyState,
  loadingState
}) => {
  // State to track which project is being shared
  const [sharingProject, setSharingProject] = React.useState<ProjectEntity | null>(null);

  // Handle share button click
  const handleShare = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSharingProject(project);
    }
    
    // If external handler exists, call it too
    if (onShareProject) {
      onShareProject(projectId);
    }
  };

  // Close share modal
  const closeShareModal = () => {
    setSharingProject(null);
  };

  // Conditional rendering for loading state
  if (loading) {
    if (loadingState) return <>{loadingState}</>;
    
    return (
      <section className={`mb-12 ${className}`}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse mt-1"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map(i => (
            <div key={i} className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  // Conditional rendering for empty state
  if (projects.length === 0) {
    if (emptyState) return <>{emptyState}</>;
    
    return (
      <section className={`mb-12 ${className}`}>
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects available</h3>
          <p className="text-gray-600 mb-4">Check back later for new opportunities</p>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
            Refresh
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={`mb-12 ${className}`} data-testid="available-projects">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        {onViewAll && (
          <a 
            href="#" 
            className="text-orange-500 hover:text-orange-600 font-medium"
            onClick={(e) => {
              e.preventDefault();
              onViewAll();
            }}
          >
            {viewAllLabel}
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            amount={project.amount}
            currency={project.currency}
            duration={project.duration}
            type={project.type}
            onSave={onSaveProject ? () => onSaveProject(project.id) : undefined}
            onShare={onShareProject ? () => handleShare(project.id) : undefined}
          />
        ))}
      </div>
      
      {/* Share Modal */}
      {sharingProject && (
        <ProjectShareModal
          project={sharingProject}
          isOpen={!!sharingProject}
          onClose={closeShareModal}
        />
      )}
    </section>
  );
};

