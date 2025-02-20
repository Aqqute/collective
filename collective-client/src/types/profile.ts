export interface Profile {
    title: string;
    bio: string;
    profileImage?: string;
    skills: string[];
    jobPreferences: {
      type: ('Contract' | 'Full-Time' | 'Part-Time' | 'Remote-Only' | 'On-Site')[];
      availability: ('Available Now' | 'Full-Time Availability' | 'Open to Offers')[];
      projectLength: ('Short-term' | 'Long-term' | 'Ongoing/Retainer')[];
      workHours: ('Standard Business Hours' | 'Flexible Hours' | 'Night Owl' | 'Weekends')[];
    };
    portfolio: {
      title: string;
      role: string;
      link?: string;
      description: string;
      skills: string[];
    }[];
  }