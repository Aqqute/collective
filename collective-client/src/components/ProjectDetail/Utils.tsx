
export type ProjectStatus = 'in-progress' | 'completed' | 'pending' | 'cancelled';

export interface ProjectTimeline {
  startDate: string;
  endDate: string;
  milestones?: Array<{
    id: string;
    name: string;
    dueDate: string;
    status: 'pending' | 'completed';
  }>;
}

export interface ProjectFile {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: string;
  size?: number;
}

// export interface ProjectDetails {
//   id: string;
//   title: string;
//   description: string;
//   status: ProjectStatus;
//   timeline: ProjectTimeline;
//   budget: number;
//   currency: string;
//   paymentType: 'Fixed' | 'Hourly';
//   files: ProjectFile[];
//   createdAt: string;
// }


export interface ProjectDetails {

  id: string;

  title: string;

  description: string;

  status: string;

  timeline: {

    startDate: string;

    endDate: string;

  };

  budget: number;

  currency: string;

  paymentType: string;

  files: {

    id: string;

    name: string;

    type: string;

    url: string;

    uploadedAt: string;

  }[];

  createdAt: string;

}


interface FileUpload {
  id: string;
  name: string;
  size: number;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  uploadSpeed?: number;
  error?: string;
}

// Core Utility Layer
// ----------------------------------------------------------------

export const ProjectUtils = {
  formatDate: (dateString: string): string => {
    // Handle different date formats (assuming DD/MM/YYYY in this case)
    if (dateString.includes('/')) return dateString;
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '/');
  },
  
  formatCurrency: (amount: number, currency: string = '₦'): string => {
    return `${currency}${amount.toLocaleString()}`;
  },
  
  formatFileSize: (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  },
  
  getStatusClassName: (status: ProjectStatus): string => {
    const statusMap: Record<ProjectStatus, string> = {
      'in-progress': 'bg-yellow-50 text-yellow-800',
      'completed': 'bg-green-50 text-green-800',
      'pending': 'bg-blue-50 text-blue-800',
      'cancelled': 'bg-red-50 text-red-800'
    };
    
    return statusMap[status] || '';
  },
  
  getStatusLabel: (status: ProjectStatus): string => {
    const statusMap: Record<ProjectStatus, string> = {
      'in-progress': 'In progress',
      'completed': 'Completed',
      'pending': 'Pending',
      'cancelled': 'Cancelled'
    };
    
    return statusMap[status] || status;
  },
  
  getTimeElapsed: (dateString: string): string => {
    const now = new Date();
    const created = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    return `${Math.floor(diffInHours / 24)} days ago`;
  }
};