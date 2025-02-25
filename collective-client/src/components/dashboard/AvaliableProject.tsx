import { ProjectCard } from './ProjectCard';

export const AvailableProjects = () => {
  const projects = [
    {
      title: "Logo Design for Startup",
      description: "We are looking for someone to design our logo...",
      amount: 10000,
      duration: "1 week",
      type: "Remote" as const
    },
    {
      title: "Logo Design for Startup",
      description: "We are looking for someone to design our logo...",
      amount: 10000,
      duration: "1 week",
      type: "Remote" as const
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Available projects for you</h2>
          <p className="text-gray-600">
            Browse a selection of projects curated to match your unique skills and expertise.
            Find the perfect opportunities that align with your strengths and career aspirations.
          </p>
        </div>
        <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
          See all →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onSave={() => console.log('Saved project:', project.title)}
          />
        ))}
      </div>
    </section>
  );
};