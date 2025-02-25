import Image from 'next/image';

interface InfoCardProps {
    title: string;
    icon: React.ReactNode;
  }
  
  const InfoCard = ({ title, icon }: InfoCardProps) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="w-12 h-12 mb-4">{icon}</div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </div>
  );
  
  export const InfoSection = () => {
    return (
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Things you may want to know more about
        </h2>
        <p className="text-gray-600 mb-6">
          We want your experience to be smooth and hassle-free. Here are some key topics you may
          want to explore to ensure everything runs seamlessly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            title="Conflict Resolution"
            icon={<Image src="/api/placeholder/48/48" alt="Conflict Resolution" width={48} height={48} />}
          />
          <InfoCard
            title="Payments Options"
            icon={<Image src="/api/placeholder/48/48" alt="Payments" width={48} height={48} />}
          />
          <InfoCard
            title="Progress Tracking"
            icon={<Image src="/api/placeholder/48/48" alt="Progress" width={48} height={48} />}
          />
        </div>
      </div>
    );
  };
  