
export interface User {
    id: string;
    name: string;
    avatarUrl: string;
    isCurrentUser?: boolean;
  }
  
  export interface Review {
    id: string;
    userId: string;
    user: User;
    rating: number;
    comment: string;
    date: string;
    responses: ReviewResponse[];
  }
  
  export interface ReviewResponse {
    id: string;
    userId: string;
    user: User;
    content: string;
    date: string;
  }
  
  export interface ReviewMetrics {
    totalReviews: number;
    averageRating: number;
    growthPercentage: number;
    ratingDistribution: {
      [key: number]: number;
    };
  }
  