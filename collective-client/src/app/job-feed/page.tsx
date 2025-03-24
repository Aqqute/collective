"use client";
import { AvailableProjects } from '@/components/JobFeed/AvailableProject';
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
export interface ProjectEntity {
    id: string;
    title: string;
    description: string;
    amount: number;
    currency: string;
    duration: string;
    type: 'Remote' | 'Onsite' | 'Hybrid';
    createdAt: string;
    updatedAt: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  }
const projectsService = {
  getProjects: (): Promise<ProjectEntity[]> => 
    Promise.resolve([
      {
        id: "1",
        title: "Logo Design for Startup",
        description: "We are looking for someone to design our logo...",
        amount: 10000,
        currency: "NGN",
        duration: "1 week",
        type: "Remote",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: "OPEN"
      },
      {
        id: "2",
        title: "Website Development",
        description: "Need a developer to create a responsive website for our business...",
        amount: 50000,
        currency: "NGN",
        duration: "3 weeks",
        type: "Remote",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: "OPEN"
      }
    ])
};

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectEntity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    const fetchProjects = async () => {
      try {
        const data = await projectsService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleSaveProject = (id: string) => {
    console.log(`Saved project ${id}`);
    // Implementation for saving logic
  };

  const handleShareProject = (id: string) => {
    console.log(`Shared project ${id}`);
    // Base share handling is implemented in the AvailableProjects component
  };

  const handleViewAll = () => {
    console.log('View all projects clicked');
    // Navigation logic
  };

  return (
    <div>
      <Header />
   
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Find Work</h1>
      
      <AvailableProjects
        projects={projects}
        loading={loading}
        onSaveProject={handleSaveProject}
        onShareProject={handleShareProject}
        onViewAll={handleViewAll}
      />
      
      {/* Other sections can be added here */}
    </div>
    <Footer />
    </div>
  );
};

export default ProjectsPage;