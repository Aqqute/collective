"use client";
import { Check, X, Info, ExternalLink } from "lucide-react";
import { useState, useCallback, useMemo } from "react";
import { formatCurrency } from "../../../hooks/projectHook";
import { Card, InfoItem, PartyProfile, SectionHeader } from "@/components/contracts/UiComponent";

const JobOfferPage: React.FC<any> = ({
    contractDetails,
    onAccept,
    onDecline,
    onViewDetails
  }) => {
    if (!contractDetails) {
    return <div className="max-w-4xl mx-auto p-4">Loading contract details...</div>;
  }

  const [isAccepting, setIsAccepting] = useState<boolean>(false);
  const [isDeclining, setIsDeclining] = useState<boolean>(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  
  const formattedCurrency = useCallback((amount: number) => {
    return formatCurrency(amount, contractDetails.currency);
  }, [contractDetails.currency]);
    

    
    const serviceFeeAmount = useMemo(() => {
      return (contractDetails.paymentAmount * contractDetails.serviceFeePercentage) / 100;
    }, [contractDetails.paymentAmount, contractDetails.serviceFeePercentage]);
    
    const netPaymentAmount = useMemo(() => {
      return contractDetails.paymentAmount - serviceFeeAmount;
    }, [contractDetails.paymentAmount, serviceFeeAmount]);
    
    const handleAccept = useCallback(async () => {
      try {
        setIsAccepting(true);
        setActionError(null);
        const success = await onAccept();
        
        if (success) {
          setActionSuccess('Contract accepted successfully!');
        } else {
          setActionError('Failed to accept the contract. Please try again.');
        }
      } catch (error) {
        setActionError('An unexpected error occurred. Please try again.');
        console.error('Contract acceptance error:', error);
      } finally {
        setIsAccepting(false);
      }
    }, [onAccept]);
    
    const handleDecline = useCallback(async () => {
      try {
        setIsDeclining(true);
        setActionError(null);
        const success = await onDecline();
        
        if (success) {
          setActionSuccess('Contract declined successfully.');
        } else {
          setActionError('Failed to decline the contract. Please try again.');
        }
      } catch (error) {
        setActionError('An unexpected error occurred. Please try again.');
        console.error('Contract declination error:', error);
      } finally {
        setIsDeclining(false);
      }
    }, [onDecline]);
    
    const renderActionButton = useCallback((
      label: string, 
      onClick: () => Promise<void>,
      isLoading: boolean,
      isPrimary: boolean
    ) => (
      <button
        onClick={onClick}
        disabled={isLoading || isDeclining || isAccepting || !!actionSuccess}
        className={`
          flex items-center justify-center px-6 py-3 rounded-md font-medium
          ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
          ${isPrimary 
            ? 'bg-orange-500 text-white hover:bg-orange-600' 
            : 'border border-red-500 text-red-500 hover:bg-red-50'}
          transition-colors
        `}
      >
        {isLoading ? (
          <>Processing...</>
        ) : (
          <>
            {isPrimary ? (
              <Check className="w-4 h-4 mr-2" />
            ) : (
              <X className="w-4 h-4 mr-2" />
            )}
            {label}
          </>
        )}
      </button>
    ), [isAccepting, isDeclining, actionSuccess]);
    
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Job contract</h1>
        
        {/* Contract ID Section */}
        <Card className="mb-6">
          <SectionHeader title="Contract ID" />
          <p className="text-sm text-gray-500 mb-1">Job Contract for</p>
          <p className="font-medium text-gray-900 mb-4">{contractDetails.title}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Start Date</p>
              <p className="font-medium text-gray-900">{contractDetails.startDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Expected End Date</p>
              <p className="font-medium text-gray-900">{contractDetails.expectedEndDate}</p>
            </div>
          </div>
        </Card>
        
        {/* Parties Involved */}
        <Card className="mb-6">
          <SectionHeader title="Parties Involved" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PartyProfile party={contractDetails.client} type="Client" />
            <PartyProfile party={contractDetails.freelancer} type="Freelancer" />
          </div>
        </Card>
        
        {/* Payment Details */}
        <Card className="mb-6">
          <SectionHeader title="Payment Details" />
          
          <InfoItem 
            label="Total Payment Amount"
            description="Client's budget for this project."
            value={formattedCurrency(contractDetails.paymentAmount)}
          />
          
          <InfoItem 
            label="Escrow Deposit"
            description="The client will deposit the full payment amount into the app's escrow immediately after signing the contract."
            value=""
            icon={<Info className="w-4 h-4 text-gray-400 ml-1" />}
          />
          
          <InfoItem 
            label="Release of Payment"
            description="Funds will be released to the freelancer upon project completion, following client approval"
            value=""
          />
          
          <InfoItem 
            label="Service Fee Deduction"
            description={`The app deducts a [${contractDetails.serviceFeePercentage}%] service fee from the total payment before the freelancer receives their payment.`}
            value=""
          />
        </Card>
        
        {/* Job Details */}
        <Card className="mb-6">
          <SectionHeader title="Job Details" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">{contractDetails.title}</h3>
          <p className="text-sm text-gray-500 mb-4">2 hours ago</p>
          
          <p className="text-gray-700 mb-6">{contractDetails.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-100 pt-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Payment Type</p>
              <p className="font-medium">{contractDetails.paymentType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Currency</p>
              <p className="font-medium">{contractDetails.currency}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Budget</p>
              <p className="font-medium">
                {formattedCurrency(contractDetails.paymentAmount)}
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <button 
              onClick={onViewDetails}
              className="text-orange-500 hover:text-orange-600 text-sm transition-colors inline-flex items-center"
            >
              View Job Details <ExternalLink className="w-3 h-3 ml-1" />
            </button>
          </div>
        </Card>
        
        {/* Error/Success Messages */}
        {actionError && (
          <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-md mb-6">
            {actionError}
          </div>
        )}
        
        {actionSuccess && (
          <div className="bg-green-50 border border-green-100 text-green-700 p-4 rounded-md mb-6">
            {actionSuccess}
          </div>
        )}
        
        {/* Action Buttons */}
        {!actionSuccess && (
          <div className="flex flex-col md:flex-row gap-4 justify-start">
            {renderActionButton('Accept', handleAccept, isAccepting, true)}
            {renderActionButton('Decline', handleDecline, isDeclining, false)}
          </div>
        )}
      </div>
    );
  };
  
  export default JobOfferPage;