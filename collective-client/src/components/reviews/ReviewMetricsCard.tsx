
interface ReviewMetricsCardProps {
    metrics: ReviewMetrics;
  }
  
  const ReviewMetricsCard: React.FC<ReviewMetricsCardProps> = ({ metrics }) => {
    const ratingDistribution = useMemo(() => {
      const maxValue = Math.max(...Object.values(metrics.ratingDistribution));
      
      return Object.entries(metrics.ratingDistribution).map(([rating, count]) => ({
        rating: Number(rating),
        count,
        percentage: maxValue > 0 ? (count / maxValue) * 100 : 0
      }));
    }, [metrics.ratingDistribution]);
    
    return (
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Total Reviews</h3>
            <div className="flex items-center">
              <span className="text-3xl font-bold">{metrics.totalReviews.toLocaleString()}</span>
              <span className="ml-2 px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                {metrics.growthPercentage}% ↑
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Growth in reviews this year</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Average Rating</h3>
            <div className="flex items-center">
              <span className="text-3xl font-bold">{metrics.averageRating.toFixed(1)}</span>
              <div className="flex ml-2">
                {ReviewUtils.getRatingStars(Math.round(metrics.averageRating))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">Average rating this year</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-base font-medium text-gray-900 mb-3">Rating Distribution</h3>
          
          <div className="space-y-3">
            {ratingDistribution.sort((a, b) => b.rating - a.rating).map(item => (
              <div key={`rating-${item.rating}`} className="flex items-center">
                <span className="w-6 text-sm font-medium">{item.rating}</span>
                <div className="flex-1 mx-2 h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${item.rating >= 4 ? 'bg-green-500' : item.rating >= 3 ? 'bg-yellow-500' : 'bg-blue-500'}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="w-12 text-sm text-right">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  };
  