import { Review } from "@/types/Project";
import { MessageCircle, Share2, Trash2 } from "lucide-react";
import { useCallback } from "react";
import { Avatar, ReviewUtils, Button } from "./Utils";

interface ReviewCardProps {
    review: Review;
    onRespond?: (reviewId: string) => void;
    onShare?: (reviewId: string) => void;
    onDelete?: (reviewId: string) => void;
    showActions?: boolean;
  }
  
  const ReviewCard: React.FC<ReviewCardProps> = ({
    review,
    onRespond,
    onShare,
    onDelete,
    showActions = true
  }) => {
    const handleRespond = useCallback(() => {
      if (onRespond) onRespond(review.id);
    }, [review.id, onRespond]);
    
    const handleShare = useCallback(() => {
      if (onShare) onShare(review.id);
    }, [review.id, onShare]);
    
    const handleDelete = useCallback(() => {
      if (onDelete) onDelete(review.id);
    }, [review.id, onDelete]);
    
    return (
      <Card className="p-4">
        <div className="flex items-start">
          <Avatar src={review.user.avatarUrl} alt={review.user.name} size="md" />
          
          <div className="ml-3 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{review.user.name}</h3>
                {review.user.isCurrentUser && (
                  <span className="bg-orange-100 text-orange-600 text-xs rounded-full px-2 py-0.5 ml-2">
                    You
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500">{ReviewUtils.formatDate(review.date)}</span>
            </div>
            
            <div className="flex mt-1 mb-2">
              {ReviewUtils.getRatingStars(review.rating)}
            </div>
            
            <p className="text-gray-700">{review.comment}</p>
            
            {showActions && (
              <div className="mt-3 flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleRespond}
                  className="text-gray-600"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Respond
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleShare}
                  className="text-gray-600"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
                
                {review.user.isCurrentUser && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleDelete}
                    className="text-gray-600 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  };