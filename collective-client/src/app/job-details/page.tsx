import { ProjectDetails } from "@/components/JobDetails";
import { ProjectMetadata, Client, Review } from "@/types/Project";

export const ProjectDetailsPage: React.FC<{ projectId: string }> = ({ projectId }) => {
    // In a real application, these would be fetched from an API
    const project: ProjectMetadata = {
      id: "proj-123",
      title: "Logo Design for Startup",
      createdAt: "2025-03-21T14:30:00Z",
      description: "Lorem ipsum dolor sit amet consectetur. Tristique pharetra magnis consectetur sed sed sem. Nisi etiam ultricies id eleifend non sed mattis cursus. Amet etiam nunc viverra rhoncus. Et varius sagittis diam mollis nisi.Tristique pharetra magnis consectetur sed sed sem. Nisi etiam ultricies id eleifend non sed mattis cursus. Amet etiam nunc viverra rhoncus. Et varius sagittis diam mollis nisi. Tristique pharetra magnis consectetur sed sed sem. Nisi etiam ultricies id eleifend non sed mattis cursus. Amet etiam nunc viverra rhoncus. Et varius sagittis diam mollis nisi.",
      paymentType: "Fixed",
      currency: "USD",
      budget: 10000,
      duration: "1 week",
      workArrangement: "Remote",
      support: "One-time project",
      projectScope: "Small",
      experienceLevel: "Entry level",
      location: "Nigeria",
      skills: [
        "Graphic design",
        "Graphic design",
        "Graphic design",
        "Graphic design",
        "Graphic design",
        "Graphic design",
        "Graphic design",
        "Graphic design"
      ],
      attachments: [
        {
          id: "att-1",
          name: "Product Requirement document PRD",
          type: "application/pdf",
          url: "/documents/product-requirements.pdf"
        }
      ]
    };
  
    const client: Client = {
      id: "client-456",
      name: "Client name",
      avatarUrl: "/images/client-avatar.jpg",
      profileUrl: "/clients/client-456",
      rating: 4.5,
      reviewCount: 4500
    };
  
    const reviews: Review[] = [
      {
          id: "rev-1",
          authorId: "user-789",
          authorName: "Jonas Sousa",
          authorRole: "UI designer",
          authorAvatarUrl: "/images/jonas-avatar.jpg",
          rating: 4,
          date: "01/11/2024",
          comment: "Lorem ipsum dolor sit amet consectetur.",
          reviewer: {
              name: "",
              role: "",
              avatar: ""
          }
      },
      {
          id: "rev-2",
          authorId: "user-790",
          authorName: "Isabela Silveira",
          authorRole: "Desenvolvedora",
          authorAvatarUrl: "/images/isabela-avatar.jpg",
          rating: 4,
          date: "01/11/2024",
          comment: "Lorem ipsum dolor sit amet consectetur.",
          reviewer: {
              name: "",
              role: "",
              avatar: ""
          }
      },
      {
          id: "rev-3",
          authorId: "user-789",
          authorName: "Jonas Sousa",
          authorRole: "UI designer",
          authorAvatarUrl: "/images/jonas-avatar.jpg",
          rating: 4,
          date: "01/11/2024",
          comment: "Lorem ipsum dolor sit amet consectetur.",
          reviewer: {
              name: "",
              role: "",
              avatar: ""
          }
      }
    ];
  
    return (
      <ProjectDetails
        project={project}
        client={client}
        reviews={reviews}
        onApply={() => {
          console.log('Application submitted');
          // Navigation or notification logic
        }}
        onShare={() => {
          console.log('Share modal triggered');
          // Modal open logic
        }}
      />
    );
  };
  