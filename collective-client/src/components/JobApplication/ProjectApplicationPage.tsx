import React, { useState, useCallback } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { useProjectApplication, formatCurrency } from '../../../hooks/projectHook';

// --- Type Definitions ---
interface ProjectApplicationProps {
  projectId: string;
  projectDetails: {
    title: string;
    description: string;
    createdAt: string;
    budget: number;
    currency: string;
    paymentType: 'Fixed' | 'Hourly';
    serviceFee?: number;
  };
  onCancel: () => void;
  onSuccess: () => void;
}

// --- Component Implementation ---
export const ProjectApplicationPage: React.FC<ProjectApplicationProps> = ({
  projectId,
  projectDetails,
  onCancel,
  onSuccess
}) => {
  const [coverLetter, setCoverLetter] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { handleApply, isApplying, applicationError } = useProjectApplication(projectId);
  
  const characterLimit = 2000;
  const remainingCharacters = characterLimit - coverLetter.length;
  
  const handleCoverLetterChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= characterLimit) {
      setCoverLetter(text);
    }
  }, []);
  
  const handleSubmitApplication = useCallback(async () => {
    setSubmitting(true);
    try {
      const success = await handleApply();
      if (success) {
        onSuccess();
      }
    } finally {
      setSubmitting(false);
    }
  }, [handleApply, onSuccess]);
  
  const isSubmitDisabled = isApplying || submitting || coverLetter.trim().length < 50;
  
  // Calculate net earnings (considering service fee)
  const serviceFee = projectDetails.serviceFee || 0;
  const netEarnings = projectDetails.budget - serviceFee;
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Apply for Job</h1>
      
      {/* Job Details Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-medium mb-4">Job Details</h2>
        
        <h3 className="text-lg font-medium text-gray-900 mb-1">{projectDetails.title}</h3>
        <p className="text-sm text-gray-500 mb-4">2 hours ago</p>
        
        <div className="mb-6">
          <p className="text-gray-700">{projectDetails.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-100 pt-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Payment Type</p>
            <p className="font-medium">{projectDetails.paymentType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Currency</p>
            <p className="font-medium">{projectDetails.currency}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Budget</p>
            <p className="font-medium">
              {formatCurrency(projectDetails.budget, projectDetails.currency)}
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <a 
            href="#" 
            className="text-orange-500 hover:text-orange-600 text-sm transition-colors"
          >
            View Job Details
          </a>
        </div>
      </div>
      
      {/* Cover Letter Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-medium mb-4">Cover Letter</h2>
        <div className="mb-1">
          <p className="text-gray-700 mb-2">
            Highlight your skills, experiences, and passion for the job. Let the client know why you're the perfect fit!
          </p>
          <textarea
            value={coverLetter}
            onChange={handleCoverLetterChange}
            className="w-full h-40 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none transition-all"
            placeholder="Write your cover letter here..."
          />
          <div className="text-xs text-gray-500 text-right">
            {remainingCharacters}/{characterLimit} characters left
          </div>
        </div>
      </div>
      
      {/* Payment Terms */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-medium mb-6">Payment Terms</h2>
        
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-gray-900">Total Project Amount</p>
              <p className="text-sm text-gray-500">Client's budget for this project.</p>
            </div>
            <p className="font-semibold text-gray-900">
              {formatCurrency(projectDetails.budget, projectDetails.currency)}
            </p>
          </div>
          
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <p className="font-medium text-gray-900 mr-1">Service Charge</p>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Platform fee deducted from payment.</p>
              <p className="font-semibold text-gray-900">
                {formatCurrency(serviceFee, projectDetails.currency)}
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-start pt-4 border-t border-gray-100">
            <div>
              <p className="font-medium text-gray-900">Net Earnings</p>
              <p className="text-sm text-gray-500">Amount you'll receive after fees.</p>
            </div>
            <p className="font-semibold text-gray-900">
              {formatCurrency(netEarnings, projectDetails.currency)}
            </p>
          </div>
        </div>
      </div>
      
      {/* Application Error Display */}
      {applicationError && (
        <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-md mb-6">
          {applicationError}
        </div>
      )}
      
      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleSubmitApplication}
          disabled={isSubmitDisabled}
          className={`
            flex items-center justify-center px-8 py-3 rounded-md
            ${isSubmitDisabled 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-orange-500 text-white hover:bg-orange-600'}
            transition-colors font-medium
          `}
        >
          {isApplying ? (
            <>Submitting...</>
          ) : (
            <>
              Apply <ArrowRight className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
        
        <button
          onClick={onCancel}
          className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
