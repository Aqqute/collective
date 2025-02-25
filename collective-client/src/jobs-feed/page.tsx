import { JobCard } from './JobCard';

interface Job {
  title: string;
  description: string;
  amount: number;
  duration: string;
  type: 'Remote' | 'Onsite';
}

export const HandpickedJobs = () => {
  const jobs: Job[] = [
    {
      title: "Logo Design for Startup",
      description: "We are looking for someone to design our logo...",
      amount: 10000,
      duration: "1 week",
      type: "Remote"
    },
    {
      title: "Logo Design for Startup",
      description: "We are looking for someone to design our logo...",
      amount: 10000,
      duration: "1 week",
      type: "Remote"
    },
    {
      title: "Logo Design for Startup",
      description: "We are looking for someone to design our logo...",
      amount: 10000,
      duration: "1 week",
      type: "Remote"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Handpicked jobs that match your profile and experience level
        </h1>
        <p className="text-gray-600">
          Browse roles that match your unique skills, availability, and location preferences.
          We've curated these opportunities to help you find the right fit faster.
        </p>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            {...job}
            onSave={() => console.log('Saved job:', job.title)}
          />
        ))}
      </div>
    </div>
  );
};
