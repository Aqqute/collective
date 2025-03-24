import { X, Upload, FileText } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { ProjectUtils } from "./Utils";

interface FileUpload {
  id: string;
  name: string;
  size: number;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  uploadSpeed?: number;
  error?: string;
}

interface FileUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUploadComplete?: (files: File[]) => void;
  }
  
  export const FileUploadModal: React.FC<FileUploadModalProps> = ({
    isOpen,
    onClose,
    onUploadComplete
  }) => {
    const [files, setFiles] = useState<FileUpload[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    
    // Simulate file upload progress
    useEffect(() => {
      if (files.length === 0) return;
      
      const timers = files.map(file => {
        if (file.status === 'completed' || file.status === 'error') return null;
        
        return setInterval(() => {
          setFiles(prev => 
            prev.map(f => 
              f.id === file.id && f.progress < 100
                ? { 
                    ...f, 
                    progress: Math.min(f.progress + 5, 100),
                    status: f.progress + 5 >= 100 ? 'completed' : 'uploading'
                  }
                : f
            )
          );
        }, 300);
      });
      
      return () => {
        timers.forEach(timer => timer && clearInterval(timer));
      };
    }, [files]);
    
    const handleDragEnter = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
    }, []);
    
    const handleDragLeave = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    }, []);
    
    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);
    
    const handleDrop = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      
      const droppedFiles = Array.from(e.dataTransfer.files);
      handleFiles(droppedFiles);
    }, []);
    
    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files);
        handleFiles(selectedFiles);
      }
    }, []);
    
    const handleFiles = useCallback((selectedFiles: File[]) => {
      const newFiles = selectedFiles.map(file => ({
        id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: file.name,
        size: file.size,
        progress: 0,
        status: 'uploading' as const,
        uploadSpeed: Math.floor(Math.random() * 100) + 50 // Simulated upload speed
      }));
      
      setFiles(prev => [...prev, ...newFiles]);
    }, []);
    
    const handleRemoveFile = useCallback((id: string) => {
      setFiles(prev => prev.filter(file => file.id !== id));
    }, []);
    
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-lg w-full shadow-xl">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">File Upload</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6">
            <div 
              className={`
                border-2 border-dashed rounded-lg p-8 mb-6 transition-colors flex flex-col items-center justify-center
                ${isDragging ? 'border-orange-500 bg-orange-50' : 'border-gray-300 bg-gray-50'}
              `}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100 text-orange-500 mb-4">
                <Upload size={24} />
              </div>
              <p className="text-gray-700 mb-2">Drag files to Upload</p>
              
              <input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                multiple 
                onChange={handleFileChange}
              />
              <label 
                htmlFor="file-upload"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md py-2 px-4 cursor-pointer transition-colors mt-2"
              >
                Choose File
              </label>
            </div>
            
            {files.length > 0 && (
              <div>
                <h3 className="font-medium mb-3">Uploads</h3>
                <div className="space-y-4">
                  {files.map(file => (
                    <div key={file.id} className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <FileText size={16} className="text-gray-500" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <div>
                            <span className="text-sm font-medium">{file.name}</span>
                            <span className="text-xs text-gray-500 ml-2">
                              {ProjectUtils.formatFileSize(file.size)}
                            </span>
                          </div>
                          
                          <button 
                            onClick={() => handleRemoveFile(file.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center text-xs">
                          <div className="relative flex-1 h-1 bg-gray-200 rounded-full overflow-hidden mr-2">
                            <div 
                              className={`absolute left-0 top-0 h-full ${file.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'}`}
                              style={{ width: `${file.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-500 min-w-[80px] text-right">
                            {file.status === 'completed' 
                              ? 'Completed' 
                              : `${file.progress}% done`}
                          </span>
                          <span className="ml-4 text-gray-500 min-w-[80px] text-right">
                            {file.uploadSpeed} KB/sec
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  