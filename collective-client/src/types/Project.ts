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


// ==== DOMAIN MODELS & TYPE DEFINITIONS ====
export interface ProjectMetadata {
  id: string;
  title: string;
  createdAt: string;
  description: string;
  paymentType: 'Fixed' | 'Hourly';
  currency: string;
  budget: number;
  duration: string;
  workArrangement: 'Remote' | 'Onsite' | 'Hybrid';
  support: string;
  projectScope: 'Small' | 'Medium' | 'Large';
  experienceLevel: 'Entry level' | 'Intermediate' | 'Expert';
  location: string;
  skills: string[];
  attachments: Attachment[];
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
}

export interface Client {
  id: string;
  name: string;
  avatarUrl: string;
  profileUrl: string;
  rating: number;
  reviewCount: number;
}

export interface Review {
  id: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  authorAvatarUrl: string;
  rating: number;
  date: string;
  comment: string;
}