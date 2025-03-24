import { Review } from "@/types/Project";
import { useCallback, useMemo, useState } from "react";
import { Button, ReviewResponse } from "./Utils";
import { ReviewCard } from "./ReviewCard";
import { ReviewMetrics, User } from "@/types/Reviews";
import { ReviewMetricsCard } from "./ReviewMetricsCard";

interface ReviewManagerProps {
    initialReviews: Review[];
    metrics: ReviewMetrics;
    currentUser: User;
  }
  
 const ReviewManager: React.FC<ReviewManagerProps> = ({
    initialReviews,
    metrics,
    currentUser
  }) => {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [activeReviewId, setActiveReviewId] = useState<string | null>(null);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showResponseForm, setShowResponseForm] = useState(false);
    
    // Compute the review being shared or responded to
    const activeReview = useMemo(() => {
      return reviews.find(review => review.id === activeReviewId) || null;
    }, [reviews, activeReviewId]);
    
    // Handlers
    const handleRespondClick = useCallback((reviewId: string) => {
      setActiveReviewId(reviewId);
      setShowResponseForm(true);
    }, []);
    
    const handleShareClick = useCallback((reviewId: string) => {
      setActiveReviewId(reviewId);
      setShowShareModal(true);
    }, []);
    
    const handleDeleteReview = useCallback((reviewId: string) => {
      // In a real application, this would call an API
      setReviews(prevReviews => prevReviews.filter(review => review.id !== reviewId));
    }, []);
    
    const handleSubmitResponse = useCallback(async (reviewId: string, content: string) => {
      // In a real application, this would call an API
      const newResponse: ReviewResponse = {
        id: `response-${Date.now()}`,
        userId: currentUser.id,
        user: currentUser,
        content,
        date: new Date().toISOString(),
      };
      
      setReviews(prevReviews => prevReviews.map(review => {
        if (review.id === reviewId) {
          return {
            ...review,
            responses: [...review.responses, newResponse]
          };
        }
        return review;
      }));
      
      setShowResponseForm(false);
    }, [currentUser]);
    
    const handleCloseModals = useCallback(() => {
      setShowShareModal(false);
      setShowResponseForm(false);
      setActiveReviewId(null);
    }, []);
    
    return (
      <div className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">All projects</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Mauris pretium donec mauris aliquam aliquet cursus commodo quis. Et pharetra arcu duis id commodo cras neque mauris nisi.
          </p>
          
          <div className="flex space-x-4 mt-6">
            <Button variant="ghost">All project</Button>
            <Button variant="ghost">In-progress</Button>
            <Button variant="ghost">Completed</Button>
            <Button variant="primary">Reviews</Button>
          </div>
        </div>
        
        <ReviewMetricsCard metrics={metrics} />
        
        <div className="mt-8 space-y-6">
          {reviews.map(review => (
            <ReviewCard
              key={review.id}
              review={review}
              onRespond={handleRespondClick}
              onShare={handleShareClick}
              onDelete={handleDeleteReview}
            />
          ))}
        </div>
        
        {/* Modals */}
        {showShareModal && activeReview && (
          <ShareReviewModal 
            review={activeReview} 
            onClose={handleCloseModals} 
          />
        )}
        
        {showResponseForm && activeReview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <ReviewResponseForm
                reviewId={activeReview.id}
                onSubmit={handleSubmitResponse}
                onCancel={handleCloseModals}
              />
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ReviewManager;