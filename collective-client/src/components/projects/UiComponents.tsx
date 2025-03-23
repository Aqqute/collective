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

export type ProjectStatus = 'in-progress' | 'completed' | 'pending' | 'cancelled';

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
