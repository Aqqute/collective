import { useState, useCallback, useMemo } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

export const useProjectApplication = (projectId: string) => {
  const [isApplying, setIsApplying] = useState(false);
  const [applicationError, setApplicationError] = useState<string | null>(null);

  const handleApply = useCallback(async () => {
    try {
      setIsApplying(true);
      setApplicationError(null);
      
      // Implementation would integrate with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate success for demo
      return true;
    } catch (error) {
      setApplicationError('Failed to submit application. Please try again.');
      return false;
    } finally {
      setIsApplying(false);
    }
  }, [projectId]);

  return {
    isApplying,
    applicationError,
    handleApply
  };
};

export const formatTimeAgo = (dateString: string): string => {
  try {
    return formatDistanceToNow(parseISO(dateString), { addSuffix: true });
  } catch (e) {
    return dateString;
  }
};

export const formatCurrency = (
  amount: number,
  currencyCode: string = 'NGN'
): string => {
  const formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
    currencyDisplay: 'narrowSymbol'
  });
  
  return formatter.format(amount);
};

