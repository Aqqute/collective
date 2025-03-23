import { Client, Review } from '@/types/Project';
import { ArrowRight, Share2, FileText, Star, ExternalLink } from 'lucide-react';
import { useMemo } from 'react';


interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, className = '' }) => (
  <div className={`py-4 border-b border-gray-100 ${className}`}>
    <p className="text-gray-500 text-sm mb-1">{label}</p>
    <p className="font-medium text-gray-900">{value}</p>
  </div>
);

interface MetadataGridProps {
  metadata: {
    label: string;
    value: React.ReactNode;
  }[];
  columns?: number;
}

export const MetadataGrid: React.FC<MetadataGridProps> = ({ metadata, columns = 3 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${columns}`}>
    {metadata.map((item, index) => (
      <InfoRow 
        key={`metadata-${index}`}
        label={item.label}
        value={item.value}
      />
    ))}
  </div>
);

interface SkillTagProps {
  label: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ label }) => (
  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm mr-2 mb-2">
    {label}
  </span>
);

interface AttachmentItemProps {
  name: string;
  url: string;
}

export const AttachmentItem: React.FC<AttachmentItemProps> = ({ name, url }) => (
  <a 
    href={url}
    className="flex items-center p-4 border border-dashed border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
  >
    <FileText className="w-5 h-5 text-gray-500 mr-3" />
    <span className="text-gray-900">{name}</span>
  </a>
);

interface RatingDisplayProps {
  rating: number;
  showCount?: boolean;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
}
 
export const RatingDisplay: React.FC<RatingDisplayProps> = ({ 
  rating, 
  showCount = false, 
  count = 0,
  size = 'md' 
}) => {
  const stars = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => {
      const filled = i < Math.floor(rating);
      const halfFilled = !filled && i < Math.ceil(rating) && rating % 1 !== 0;
      
      return (
        <Star 
          key={`star-${i}`}
          className={`
            ${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}
            ${filled ? 'text-yellow-400 fill-yellow-400' : halfFilled ? 'text-yellow-400 fill-yellow-400 half-star' : 'text-yellow-400'} 
          `}
        />
      );
    });
  }, [rating, size]);

  return (
    <div className="flex items-center">
      <div className="flex">{stars}</div>
      {showCount && count > 0 && (
        <span className="ml-2 text-gray-500 text-sm">{count}</span>
      )}
    </div>
  );
};

interface ReviewItemProps {
  review: Review;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => (
  <div className="py-4 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center mb-2">
      <img 
        src={review.authorAvatarUrl} 
        alt={review.authorName}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <h4 className="font-medium text-gray-900">{review.authorName}</h4>
        <p className="text-gray-600 text-sm">{review.authorRole}</p>
      </div>
    </div>
    
    <div className="flex items-center mb-2">
      <RatingDisplay rating={review.rating} size="sm" />
      <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
    </div>
    
    <p className="text-gray-700">{review.comment}</p>
  </div>
);

interface ClientProfileProps {
  client: Client;
}

export const ClientProfile: React.FC<ClientProfileProps> = ({ client }) => (
  <div className="bg-white rounded-lg border border-gray-100 p-6">
    <div className="flex flex-col items-center mb-4">
      <img 
        src={client.avatarUrl} 
        alt={client.name}
        className="w-16 h-16 rounded-full mb-3"
      />
      <h3 className="font-medium text-lg text-center mb-1">{client.name}</h3>
      <a 
        href={client.profileUrl}
        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
      >
        View profile
      </a>
    </div>
    
    <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 rounded-md py-2 px-4 transition-colors mb-6">
      Message Client
    </button>
    
    <div>
      <h4 className="font-medium mb-2">Reviews</h4>
      <div className="flex items-center">
        <RatingDisplay rating={client.rating} size="sm" />
        <span className="ml-2 text-gray-700">{client.rating.toFixed(1)}</span>
      </div>
    </div>
  </div>
);
