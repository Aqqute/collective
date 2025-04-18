import Image from 'next/image';

interface ClientInfoProps {
    name: string;
    avatar: string;
    rating: number;
    totalReviews: number;
    onMessageClient: () => void;
  }
  
  export const ClientInfo = ({
    name,
    avatar,
    rating,
    totalReviews,
    onMessageClient
  }: ClientInfoProps) => {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <a href="#" className="text-blue-600 text-sm hover:underline">
              View profile
            </a>
          </div>
        </div>
  
        <div className="mb-4">
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600">{rating}</span>
          </div>
          <p className="text-sm text-gray-500">{totalReviews} reviews</p>
        </div>
  
        <button
          onClick={onMessageClient}
          className="w-full bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors"
        >
          Message Client
        </button>
      </div>
    );
  };