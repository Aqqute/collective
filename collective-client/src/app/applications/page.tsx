"use client";
import { ProjectApplicationPage } from "@/components/JobApplication/ProjectApplicationPage";
import { useCallback } from "react";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';


// --- Connected Component Export ---
interface ConnectedProjectApplicationProps {
    projectId: string;
    onComplete?: () => void;
  }
  
  export const ConnectedProjectApplication: React.FC<ConnectedProjectApplicationProps> = ({
    projectId,
    onComplete
  }) => {
  
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
 
      window.history.back();
    }, []);
    
    const handleSuccess = useCallback(() => {

      if (onComplete) {
        onComplete();
      }
    }, [onComplete]);
    
    return (
        <div>
        <Header />
      <ProjectApplicationPage
        projectId={projectId}
        projectDetails={projectDetails}
        onCancel={handleCancel}
        onSuccess={handleSuccess}
      />
       <Footer />
       </div>
    );
  };
  
  export default ConnectedProjectApplication;