import Image from 'next/image';

interface TestCardProps {
    questions: number;
    timeLimit: string;
    passMark: number;
    progress?: number;
    level: string;
  }
  
  export const TestCard = ({ questions, timeLimit, passMark, progress, level }: TestCardProps) => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded">
            <Image
              src="/api/placeholder/32/32"
              alt="Test icon"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>
          <span className="text-sm text-gray-600">{level}</span>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• {questions} multi-choice questions</li>
          <li>• {timeLimit} test time</li>
          <li>• Pass mark {passMark}% and above</li>
        </ul>
        {progress !== undefined ? (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <button className="mt-4 text-orange-500 hover:text-orange-600 text-sm font-medium">
            Take test
          </button>
        )}
      </div>
    );
  };
  