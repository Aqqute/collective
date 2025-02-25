export const ProjectView = () => {
    const project: ProjectDetails = {
      title: "Logo Design for Startup",
      createdAt: "2 hours ago",
      description: "Lorem ipsum dolor sit amet consectetur...",
      paymentType: "Fixed",
      currency: "USD",
      budget: 10000,
      duration: "1 week",
      workArrangement: "Remote",
      support: "One-time project",
      projectScope: "Small",
      experienceLevel: "Entry level",
      location: "Nigeria",
      attachments: [
        { name: "Product Requirement document PRD", url: "#" }
      ],
      skills: Array(8).fill("Graphic design")
    };
  
    const reviews: Review[] = [
      {
        id: "1",
        reviewer: {
          name: "Jonas Sousa",
          role: "UI designer",
          avatar: "/api/placeholder/40/40"
        },
        rating: 4,
        date: "01/11/2024",
        comment: "Lorem ipsum dolor sit amet consectetur."
      },
      // Add more reviews as needed
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProjectHeader
              title={project.title}
              timeAgo={project.createdAt}
              onApply={() => console.log('Apply clicked')}
              onShare={() => console.log('Share clicked')}
            />
            <ProjectDetails project={project} />
          </div>
          <div>
            <ClientInfo
              name="Client name"
              avatar="/api/placeholder/48/48"
              rating={4.5}
              totalReviews={25}
              onMessageClient={() => console.log('Message client clicked')}
            />
            <ReviewSection reviews={reviews} />
          </div>
        </div>
      </div>
    );
  };