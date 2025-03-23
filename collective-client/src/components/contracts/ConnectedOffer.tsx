import React, { useState, useCallback, useMemo } from 'react';
import { Clock, MapPin } from 'lucide-react';

// Domain Models
export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  budget: number;
  currency: string;
  duration: string;
  locationType: 'Remote' | 'On-site' | 'Hybrid';
  createdAt: string;
}

export type ProjectStatus = 'in-progress' | 'completed' | 'pending' | 'cancelled' | 'reviews';

// ViewModels - Transform domain data for presentation
interface ProjectViewModel extends Project {
  formattedBudget: string;
  statusLabel: string;
  statusClassName: string;
}

// Component Props with strict typing
interface ProjectsListingProps {
  projects: Project[];
  onProjectSelect?: (projectId: string) => void;
  className?: string;
}

interface ProjectCardProps {
  project: ProjectViewModel;
  onSelect?: (projectId: string) => void;
}

interface FilterButtonProps {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

// Utilities
const ProjectUtils = {
  formatCurrency: (amount: number, currency: string = '₦'): string => {
    return `${currency}${amount.toLocaleString()}`;
  },
  
  getStatusConfig: (status: ProjectStatus): { label: string; className: string } => {
    const statusMap = {
      'in-progress': { 
        label: 'In progress', 
        className: 'bg-yellow-50 text-yellow-800'
      },
      'completed': { 
        label: 'Completed', 
        className: 'bg-green-50 text-green-800'
      },
      'pending': { 
        label: 'Pending', 
        className: 'bg-blue-50 text-blue-800'
      },
      'cancelled': { 
        label: 'Cancelled', 
        className: 'bg-red-50 text-red-800'
      },
      'reviews': { 
        label: 'Reviews', 
        className: 'bg-purple-50 text-purple-800'
      }
    };
    
    return statusMap[status] || { label: status, className: '' };
  },
  
  mapToViewModel: (project: Project): ProjectViewModel => {
    const { label, className } = ProjectUtils.getStatusConfig(project.status);
    
    return {
      ...project,
      formattedBudget: ProjectUtils.formatCurrency(project.budget),
      statusLabel: label,
      statusClassName: className
    };
  }
};

// Presentational Components
const FilterButton: React.FC<FilterButtonProps> = ({ 
  label, 
  icon, 
  isActive, 
  onClick 
}) => {
  const baseClassName = "flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors";
  const activeClassName = isActive 
    ? "bg-gray-200 text-gray-900" 
    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900";
  
  return (
    <button 
      className={`${baseClassName} ${activeClassName}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
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

// Container Component with Business Logic

export const ProjectsListing: React.FC<ProjectsListingProps> = ({ 
  projects, 
  onProjectSelect, 
  className = '' 
}) => {
  // State management
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectStatus>('all');
  
  // Filter definitions
  const filters = [
    { id: 'all', label: 'All project', icon: <span className="mr-1">📋</span> },
    { id: 'in-progress', label: 'In-progress', icon: <span className="mr-1">🔄</span> },
    { id: 'completed', label: 'Completed', icon: <span className="mr-1">✅</span> },
    { id: 'reviews', label: 'Reviews', icon: <span className="mr-1">⭐</span> }
  ];
  
  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    if (activeFilter === 'reviews') return projects.filter(p => p.status === 'completed');
    return projects.filter(project => project.status === activeFilter);
  }, [projects, activeFilter]);
  
  // Map domain models to view models for presentation
  const projectViewModels = useMemo(() => {
    return filteredProjects.map(ProjectUtils.mapToViewModel);
  }, [filteredProjects]);
  
  // Event handlers
  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId as 'all' | ProjectStatus);
  }, []);
  
  return (
    <div className={`projects-listing ${className}`}>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Projects</h1>
      
      {/* Filters */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {filters.map(filter => (
          <FilterButton
            key={filter.id}
            label={filter.label}
            icon={filter.icon}
            isActive={activeFilter === filter.id}
            onClick={() => handleFilterChange(filter.id)}
          />
        ))}
      </div>
      
      {/* Projects List */}
      <div className="space-y-4">
        {projectViewModels.length > 0 ? (
          projectViewModels.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onProjectSelect}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No projects found matching your filter criteria.
          </div>
        )}
      </div>
    </div>
  );
};

// Usage Example with Sample Data

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