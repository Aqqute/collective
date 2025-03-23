
// --- Connected Component Export ---
interface ConnectedProjectApplicationProps {
    projectId: string;
    onComplete?: () => void;
  }
  
  export const ConnectedProjectApplication: React.FC<ConnectedProjectApplicationProps> = ({
    projectId,
    onComplete
  }) => {
    // In a real implementation, you would fetch project details here
    // using React Query, SWR, or Redux
    const projectDetails = {
      title: "Logo Design for Startup",
      description: "Lorem ipsum dolor sit amet consectetur. Tristique pharetra magnis consectetur sed sed sem. Nisl etiam ultricies id eleifend non sed mattis cursus. Amet etiam nunc viverra rhoncus. Et varius sagittis diam mollis nisi.",
      createdAt: "2025-03-23T10:00:00.000Z",
      budget: 10000,
      currency: "USD",
      paymentType: "Fixed" as const,
      serviceFee: 1000,
    };
    
    const handleCancel = useCallback(() => {
      // Navigate back or close modal
      window.history.back();
    }, []);
    
    const handleSuccess = useCallback(() => {
      // Handle successful application
      if (onComplete) {
        onComplete();
      }
    }, [onComplete]);
    
    return (
      <ProjectApplicationPage
        projectId={projectId}
        projectDetails={projectDetails}
        onCancel={handleCancel}
        onSuccess={handleSuccess}
      />
    );
  };
  
  export default ConnectedProjectApplication;