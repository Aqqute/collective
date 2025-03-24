
interface ShareReviewModalProps {
    review: Review;
    onClose: () => void;
  }
  
  const ShareReviewModal: React.FC<ShareReviewModalProps> = ({ review, onClose }) => {
    const shareOptions = useMemo(() => [
      { id: 'link', label: 'Link', icon: <Link className="w-5 h-5" /> },
      { id: 'message', label: 'Message', icon: <MessageSquare className="w-5 h-5" /> },
      { id: 'email', label: 'E-mail', icon: <Mail className="w-5 h-5" /> },
      { id: 'twitter', label: 'Twitter', icon: <Twitter className="w-5 h-5" /> },
      { id: 'whatsapp', label: 'Whatsapp', icon: <MessageCircle className="w-5 h-5" /> },
      { id: 'messenger', label: 'Messenger', icon: <MessageSquare className="w-5 h-5" /> }
    ], []);
    
    const handleShare = useCallback((optionId: string) => {
      // Implementation would depend on the sharing mechanism
      console.log(`Sharing review ${review.id} via ${optionId}`);
      onClose();
    }, [review.id, onClose]);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium">Share Comment</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          
          <div className="p-4">
            <div className="flex items-start mb-4">
              <Avatar src={review.user.avatarUrl} alt={review.user.name} size="md" />
              
              <div className="ml-3">
                <div className="flex items-center">
                  <h3 className="font-medium text-gray-900">{review.user.name}</h3>
                  <span className="text-sm text-gray-500 ml-2">{ReviewUtils.formatDate(review.date)}</span>
                </div>
                
                <div className="flex mt-1 mb-2">
                  {ReviewUtils.getRatingStars(review.rating)}
                </div>
                
                <p className="text-gray-700">{ReviewUtils.getTruncatedText(review.comment, 150)}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              {shareOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleShare(option.id)}
                  className="flex flex-col items-center p-4 rounded-md hover:bg-gray-50"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    {option.icon}
                  </div>
                  <span className="text-sm text-gray-600">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  