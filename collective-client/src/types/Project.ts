export interface ProjectDetails {
    title: string;
    createdAt: string;
    description: string;
    paymentType: string;
    currency: string;
    budget: number;
    duration: string;
    workArrangement: string;
    support: string;
    projectScope: string;
    experienceLevel: string;
    location: string;
    attachments: Array<{
      name: string;
      url: string;
    }>;
    skills: string[];
  }
  
  export interface Review {
    id: string;
    reviewer: {
      name: string;
      role: string;
      avatar: string;
    };
    rating: number;
    date: string;
    comment: string;
  }