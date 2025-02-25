import { Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export const ProfileMenu = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Bell className="w-5 h-5 text-gray-600" />
      </button>
      <button className="flex items-center space-x-2">
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="/api/placeholder/32/32"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};
