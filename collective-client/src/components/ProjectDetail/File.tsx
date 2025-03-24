import { Plus, FileText, ExternalLink } from "lucide-react";
import { useCallback } from "react";
import { Button } from "../reviews/Utils";
import { ProjectFile } from "./Utils";
import { Card } from "./ReusableUi";

interface FilesCardProps {
    files: ProjectFile[];
    onAddFile?: () => void;
    onViewFile?: (file: ProjectFile) => void;
  }
  
  export const FilesCard: React.FC<FilesCardProps> = ({ 
    files, 
    onAddFile,
    onViewFile
  }) => {
    const handleAddFile = useCallback(() => {
      if (onAddFile) onAddFile();
    }, [onAddFile]);
    
    const handleViewFile = useCallback((file: ProjectFile) => {
      if (onViewFile) onViewFile(file);
    }, [onViewFile]);
    
    return (
      <Card 
        title="Files" 
        action={
          <button 
            onClick={handleAddFile}
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
            aria-label="Add file"
          >
            <Plus size={20} />
          </button>
        }
      >
        <div className="space-y-3">
          {files.length > 0 ? (
            files.map(file => (
              <div 
                key={file.id}
                className="border border-dashed border-gray-300 rounded-md p-3 flex items-center cursor-pointer hover:bg-gray-50"
                onClick={() => handleViewFile(file)}
              >
                <FileText className="text-gray-400 mr-3" size={20} />
                <span className="text-gray-800">{file.name}</span>
                <button 
                  className="ml-auto text-gray-400 hover:text-gray-600"
                  onClick={() => window.open(file.url, '_blank')}
                >
                  <ExternalLink size={16} />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-500">
              No files uploaded yet
            </div>
          )}
        </div>
        
        <div className="mt-6 flex">
          <Button 
            variant="primary" 
            onClick={handleAddFile}
            className="mr-4"
          >
            Mark project as complete
          </Button>
          
          <Button 
            variant="outline"
          >
            View Contract
          </Button>
        </div>
      </Card>
    );
  };
  
  