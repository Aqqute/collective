import { ProjectCard } from './ProjectCard';
import { TestCard } from './TestCard';
import { InfoSection } from './InfoSection';

export const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Handpicked Projects Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Handpicked projects for you</h2>
            <p className="text-gray-600">
              Browse a selection of projects curated to match your unique skills and expertise.
              Find the perfect opportunities that align with your strengths and career aspirations.
            </p>
          </div>
          <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
            See all →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Logo Design for Startup"
            price={10000}
            duration="1 week"
            type="Remote"
          />
          <ProjectCard
            title="Logo Design for Startup"
            price={10000}
            duration="1 week"
            type="Remote"
          />
        </div>
      </section>

      {/* Tests Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Continue your ongoing test</h2>
            <p className="text-gray-600">
              View your progress on active skill tests and see how close you are to earning
              badges that unlock new project opportunities.
            </p>
          </div>
          <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
            See all →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestCard
            questions={30}
            timeLimit="15 Min"
            passMark={75}
            progress={32}
            level="Beginner"
          />
          <TestCard
            questions={30}
            timeLimit="15 Min"
            passMark={75}
            progress={32}
            level="Beginner"
          />
          <TestCard
            questions={30}
            timeLimit="15 Min"
            passMark={75}
            progress={32}
            level="Beginner"
          />
        </div>
      </section>

      {/* Info Section */}
      <InfoSection />
    </div>
  );
};