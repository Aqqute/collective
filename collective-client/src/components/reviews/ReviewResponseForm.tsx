

interface ReviewResponseFormProps {
    reviewId: string;
    onSubmit: (reviewId: string, response: string) => Promise<void>;
    onCancel: () => void;
  }
  
  const ReviewResponseForm: React.FC<ReviewResponseFormProps> = ({
    reviewId,
    onSubmit,
    onCancel
  }) => {
    const [response, setResponse] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const MAX_CHARS = 500;
    
    const handleTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.target.value;
      if (text.length <= MAX_CHARS) {
        setResponse(text);
        setCharCount(text.length);
      }
    }, []);
    
    const handleSubmit = useCallback(async () => {
      if (!response.trim()) return;
      
      try {
        setIsSubmitting(true);
        await onSubmit(reviewId, response);
        setResponse('');
      } catch (error) {
        console.error('Failed to submit response:', error);
      } finally {
        setIsSubmitting(false);
      }
    }, [reviewId, response, onSubmit]);
    
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium">Respond to Review</h3>
          <button 
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        
        <textarea
          value={response}
          onChange={handleTextChange}
          placeholder="Type your response..."
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-orange-500 focus:border-orange-500 resize-none min-h-32"
          disabled={isSubmitting}
        />
        
        <div className="flex items-center justify-between mt-3">
          <span className={`text-xs ${charCount > MAX_CHARS * 0.9 ? 'text-orange-500' : 'text-gray-400'}`}>
            {charCount}/{MAX_CHARS}
          </span>
          
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            
            <Button
              variant="primary"
              onClick={handleSubmit}
              isLoading={isSubmitting}
              disabled={response.trim() === ''}
            >
              Respond
            </Button>
          </div>
        </div>
      </div>
    );
  };
  