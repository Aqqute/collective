import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProgressNavProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}


const ProgressNav: React.FC<ProgressNavProps> = ({
    currentStep,
    totalSteps,
    onNext,
    onBack
  }) => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-2xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
              disabled={currentStep === 1}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <span className="text-gray-600">
              {currentStep}/{totalSteps}
            </span>
          </div>
  
          <button
            onClick={onNext}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2"
          >
            {currentStep === totalSteps ? 'Finish' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };
  
  export default ProgressNav;