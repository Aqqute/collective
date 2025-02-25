interface ProfileProgressProps {
    percentage: number;
    onComplete: () => void;
  }
  
  export const ProfileProgress = ({ percentage, onComplete }: ProfileProgressProps) => {
    return (
      <div className="bg-white rounded-lg p-8 mb-12">
        <div className="flex items-start justify-between max-w-3xl">
          <div className="flex items-center space-x-8">
            <div className="text-5xl font-bold text-gray-900">{percentage}%</div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Complete your profile to get Projects that suits you
              </h2>
              <p className="text-gray-600">
                Complete your profile to unlock personalized project recommendations tailored to your
                expertise. A fully optimized profile increases your chances of finding projects that
                align with your skills and career goals.
              </p>
            </div>
          </div>
          <button
            onClick={onComplete}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Complete your profile
          </button>
        </div>
        <div className="mt-6 max-w-3xl">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    );
  };
  