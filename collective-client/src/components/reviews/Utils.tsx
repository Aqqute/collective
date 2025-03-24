import React, { useState, useCallback, useMemo } from 'react';
import { Star, ExternalLink, Share2, MessageCircle, RefreshCw, Link, Mail, Twitter, MessageSquare, Trash2 } from 'lucide-react';

// ===== Type Definitions =====

interface User {
  id: string;
  name: string;
  avatarUrl: string;
  isCurrentUser?: boolean;
}

interface Review {
  id: string;
  userId: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
  responses: ReviewResponse[];
}

interface ReviewResponse {
  id: string;
  userId: string;
  user: User;
  content: string;
  date: string;
}

interface ReviewMetrics {
  totalReviews: number;
  averageRating: number;
  growthPercentage: number;
  ratingDistribution: {
    [key: number]: number;
  };
}

// ===== Utility Functions =====

export const ReviewUtils = {
  formatDate: (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  
  getRatingStars: (rating: number): JSX.Element[] => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={`star-${index}`}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'}`}
      />
    ));
  },
  
  getTruncatedText: (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
  }
};



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-md inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500';
  
  const variantStyles = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };
  
  const loadingClass = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingClass} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
      )}
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden flex-shrink-0`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};
