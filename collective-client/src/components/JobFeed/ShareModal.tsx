import { ProjectCard } from "./ProjectCard";

interface ShareOption {
    id: string;
    name: string;
    icon: React.ReactNode;
    action: (projectId: string) => void;
  }
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
  
interface ProjectShareModalProps {
    project: ProjectEntity;
    isOpen: boolean;
    onClose: () => void;
}
  
export const ProjectShareModal: React.FC<ProjectShareModalProps> = ({
    project,
    isOpen,
    onClose
  }) => {
    if (!isOpen) return null;
    
    const shareOptions: ShareOption[] = [
      {
        id: 'link',
        name: 'Link',
        icon: <div className="p-2 bg-gray-100 rounded-full"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></div>,
        action: (id) => navigator.clipboard.writeText(`https://example.com/projects/${id}`)
      },
      {
        id: 'message',
        name: 'Message',
        icon: <div className="p-2 bg-gray-100 rounded-full"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>,
        action: (id) => console.log(`Opening message for project ${id}`)
      },
      {
        id: 'email',
        name: 'E-mail',
        icon: <div className="p-2 bg-gray-100 rounded-full"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>,
        action: (id) => window.location.href = `mailto:?subject=Check out this project&body=https://example.com/projects/${id}`
      },
      {
        id: 'twitter',
        name: 'Twitter',
        icon: <div className="p-2 bg-gray-100 rounded-full"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></div>,
        action: (id) => window.open(`https://twitter.com/intent/tweet?text=Check out this project&url=https://example.com/projects/${id}`)
      },
      {
        id: 'whatsapp',
        name: 'Whatsapp',
        icon: <div className="p-2 bg-gray-100 rounded-full"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>,
        action: (id) => window.open(`https://api.whatsapp.com/send?text=Check out this project: https://example.com/projects/${id}`)
      },
      {
        id: 'messenger',
        name: 'Messenger',
        icon: <div className="p-2 bg-gray-100 rounded-full"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>,
        action: (id) => window.open(`https://www.facebook.com/dialog/send?link=https://example.com/projects/${id}`)
      }
    ];
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md mx-4 overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold">Share Job</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="p-6">
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              amount={project.amount}
              currency={project.currency}
              duration={project.duration}
              type={project.type}
              variant="modal"
              hideActions={true}
            />
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              {shareOptions.map(option => (
                <div 
                  key={option.id}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => option.action(project.id)}
                >
                  {option.icon}
                  <span className="mt-2 text-sm text-gray-600">{option.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  