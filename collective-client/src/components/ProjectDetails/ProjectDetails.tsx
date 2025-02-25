interface DetailRowProps {
    label: string;
    value: string;
  }
  export interface ProjectDetails {
    title: string;
    createdAt: string;
    description: string;
    paymentType: string;
    currency: string;
    budget: number;
    duration: string;
    workArrangement: string;
    support: string;
    projectScope: string;
    experienceLevel: string;
    location: string;
    attachments: Array<{
      name: string;
      url: string;
    }>;
    skills: string[];
  }
  
  const DetailRow = ({ label, value }: DetailRowProps) => (
    <div className="grid grid-cols-2 py-3 border-b border-gray-200 last:border-0">
      <span className="text-gray-600">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
  
  export const ProjectDetails = ({ project }: { project: ProjectDetails }) => {
    return (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <p className="text-gray-600">{project.description}</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <DetailRow label="Payment Type" value={project.paymentType} />
            <DetailRow label="Currency" value={project.currency} />
            <DetailRow label="Budget" value={`₦${project.budget.toLocaleString()}`} />
          </div>
          
          <div className="space-y-2">
            <DetailRow label="Duration" value={project.duration} />
            <DetailRow label="Work arrangement" value={project.workArrangement} />
            <DetailRow label="Support" value={project.support} />
          </div>
  
          <div className="space-y-2">
            <DetailRow label="Project scope" value={project.projectScope} />
            <DetailRow label="Experience level" value={project.experienceLevel} />
            <DetailRow label="Location" value={project.location} />
          </div>
        </div>
  
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Attachments</h3>
          {project.attachments.map((attachment) => (
            <a
              key={attachment.name}
              href={attachment.url}
              className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {attachment.name}
            </a>
          ))}
        </div>
  
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Skills needed</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };