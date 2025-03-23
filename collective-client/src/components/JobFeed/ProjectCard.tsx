
import React from 'react';
import { Clock, MapPin, Share, Download } from 'lucide-react';

export type ProjectCardVariant = 'default' | 'compact' | 'modal';
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  amount: number;
  currency?: string;
  duration: string;
  type: 'Remote' | 'Onsite' | 'Hybrid';
  variant?: ProjectCardVariant;
  className?: string;
  onSave?: (id: string) => void;
  onShare?: (id: string) => void;
  hideActions?: boolean;
}

export const formatCurrency = (
    amount: number,
    currencyCode: string = 'NGN',
    locale: string = 'en-NG'
  ): string => {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 0,
      currencyDisplay: 'narrowSymbol'
    });
    
    return formatter.format(amount);
  };

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  amount,
  currency = 'NGN',
  duration,
  type,
  variant = 'default',
  className = '',
  onSave,
  onShare,
  hideActions = false
}) => {
  // Determine card style based on variant
  const getCardStyles = (): string => {
    const baseStyles = "bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden";
    
    switch (variant) {
      case 'compact':
        return `${baseStyles} p-4`;
      case 'modal':
        return `${baseStyles} p-6 hover:shadow-none`;
      default:
        return `${baseStyles} p-6 hover:shadow-md transition-shadow duration-300`;
    }
  };

  return (
    <div 
      className={`${getCardStyles()} ${className}`}
      data-testid={`project-card-${id}`}
    >
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        
        <div className="pt-2">
          <p className="text-xl font-semibold text-orange-500">
            {formatCurrency(amount, currency)}
          </p>
        </div>
        
        <div className="flex items-center gap-4 pt-1">
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{type}</span>
          </div>
        </div>
      </div>
      
      {!hideActions && (
        <div className="flex justify-end mt-4 gap-2">
          {onShare && (
            <button 
              onClick={() => onShare(id)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Share project"
            >
              <Share className="w-5 h-5 text-gray-600" />
            </button>
          )}
          
          {onSave && (
            <button 
              onClick={() => onSave(id)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Save project"
            >
              <Download className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
