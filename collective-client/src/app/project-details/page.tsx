"use client";
import { FilesCard } from "@/components/ProjectDetail/File";
import { FileUploadModal } from "@/components/ProjectDetail/FileModal";
import { ProjectDetailsCard } from "@/components/ProjectDetail/ProjectDetail";
import { KeyDetailsCard } from "@/components/ProjectDetail/ReusableUi";
import { ProjectDetails } from "@/types/Project";
import { useState, useCallback } from "react";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
export const ProjectManagementPage: React.FC = () => {
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  
  // In a real application, this would come from an API call
  const projectDetails: any = {
    id: 'proj-123',
    title: 'Logo Design for Startup',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique pharetra magnis consectetur sed sed sem. Nisl etiam ultricies id eleifend non sed mattis cursus. Amet etiam nunc viverra rhoncus. Et varius sagittis diam mollis nisi. Tristique pharetra magnis consectetur sed sed sem. Nisl etiam ultricies id eleifend non sed mattis cursus. Amet etiam nunc viverra rhoncus. Et varius sagittis diam mollis nisi.',
    status: 'in-progress',
    timeline: {
      startDate: '17/11/2024',
      endDate: '17/11/2024'
    },
    budget: 10000,
    currency: '₦',
    paymentType: 'Fixed',
    files: [
      {
        id: 'file-1',
        name: 'Product Requirement document PRD',
        type: 'application/pdf',
        url: '#',
        uploadedAt: '2025-03-21T08:00:00Z'
      }
    ],
    createdAt: '2025-03-23T06:00:00Z'
  };
  
  const handleAddFile = useCallback(() => {
    setShowFileUploadModal(true);
  }, []);
  
  const handleCloseModal = useCallback(() => {
    setShowFileUploadModal(false);
  }, []);
  
  const handleUploadComplete = useCallback((files: File[]) => {
    console.log('Files uploaded:', files);
    setShowFileUploadModal(false);
    // In a real app, you would update the project files state
  }, []);
  
  const handleMarkAsComplete = useCallback(() => {
    console.log('Marking project as complete');
    // In a real app, you would call an API to update project status
  }, []);
  
  const handleViewDetails = useCallback(() => {
    console.log('Viewing job details');
    // In a real app, you would navigate to the detailed job view
  }, []);
  
  return (
    <div>

    <Header />
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ProjectDetailsCard 
            project={projectDetails} 
            onViewDetails={handleViewDetails}
          />
        </div>
        
        <div className="space-y-6">
          <KeyDetailsCard projectDetails={projectDetails} />
          
          <FilesCard 
            files={projectDetails.files}
            onAddFile={handleAddFile}
          />
        </div>
      </div>
      
      <FileUploadModal 
        isOpen={showFileUploadModal}
        onClose={handleCloseModal}
        onUploadComplete={handleUploadComplete}
      />
    </div>
    <Footer />
  </div>
  );
};

export default ProjectManagementPage;

