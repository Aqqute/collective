import { ProjectStatus, ProjectUtils, ProjectTimeline } from "./Utils";

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    action?: React.ReactNode;
  }
  
export  const Card: React.FC<CardProps> = ({ title, children, className = '', action }) => (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 mb-6 ${className}`}>
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </div>
  );
  
  interface KeyValuePairProps {
    label: string;
    value: React.ReactNode;
    className?: string;
  }
  
export const KeyValuePair: React.FC<KeyValuePairProps> = ({ label, value, className = '' }) => (
    <div className={`flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0 ${className}`}>
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
  
  interface StatusBadgeProps {
    status: ProjectStatus;
    className?: string;
  }
  
 export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${ProjectUtils.getStatusClassName(status)} ${className}`}>
      {ProjectUtils.getStatusLabel(status)}
    </span>
  );
  
  interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    icon?: React.ReactNode;
  }
  
export  const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    type = 'button',
    icon
  }) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors";
    
    const variantStyles = {
      primary: "bg-orange-500 hover:bg-orange-600 text-white",
      secondary: "bg-white text-orange-500 border border-orange-500 hover:bg-orange-50",
      outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
    };
    
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-6 py-3"
    };
    
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    
    return (
      <button
        type={type}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  };
  

//   interface KeyDetailsProps {
//     projectDetails: {
//       timeline: ProjectTimeline;
//       status: ProjectStatus;
//     };
//   }
interface KeyDetailsProps {
        projectDetails: any;
      }
  
  export const KeyDetailsCard: React.FC<KeyDetailsProps> = ({ projectDetails }) => {
    return (
      <Card title="Key Details">
        <KeyValuePair 
          label="Start Date" 
          value={ProjectUtils.formatDate(projectDetails.timeline.startDate)} 
        />
        <KeyValuePair 
          label="End Date" 
          value={ProjectUtils.formatDate(projectDetails.timeline.endDate)} 
        />
        <KeyValuePair 
          label="Project Status" 
          value={<StatusBadge status={projectDetails.status} />} 
        />
      </Card>
    );
  };
  
