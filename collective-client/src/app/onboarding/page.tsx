"use client";
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import WelcomeStep from '../../components/onboarding/WelcomeStep';
import JobPreferences  from '../../components/onboarding/JobPreferrence';
import PortfolioProject from '../../components/onboarding/PortfolioProjects';
import SkillsSelection from '../../components/onboarding/SkillsSection';
import ProgressNav from '@/components/onboarding/ProgressNav';
import DiscoverProjects from '@/components/onboarding/DiscoverProject';
const steps = [
    { id: 1, component: WelcomeStep, title: 'Create your profile' },
    { id: 2, component: SkillsSelection, title: 'Showcase Your Expertise' },
    { id: 3, component: JobPreferences, title: 'Job Preferences' },
    { id: 4, component: DiscoverProjects, title: 'Discover Your Ideal Projects' },
    { id: 5, component: PortfolioProject, title: 'Show Off Your Best Work' }
    
  ];

const ProfileSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white pb-24">
        <main className="container mx-auto">
          <CurrentStepComponent />
        </main>
        
        <ProgressNav
          currentStep={currentStep}
          totalSteps={steps.length}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>
    </Provider>
  );
};

export default ProfileSetup;