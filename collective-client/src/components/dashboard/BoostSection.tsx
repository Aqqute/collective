import { TestCard } from './TestCard';

export const BoostSection = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Boost Your Chances for Top-Tier Projects
          </h2>
          <p className="text-gray-600">
            Stand out to clients and unlock opportunities for higher-quality projects by enhancing
            your profile and earning badges by taking test.
          </p>
        </div>
        <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
          See all →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, index) => (
          <TestCard
            key={index}
            questions={30}
            timeLimit="15 Min"
            passMark={75}
            level="Beginner"
          />
        ))}
      </div>
    </section>
  );
};