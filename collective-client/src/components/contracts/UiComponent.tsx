interface SectionHeaderProps {
    title: string;
  }
  
export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
    <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
  );
  
  interface InfoItemProps {
    label: string;
    description?: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
  }
  
  export const InfoItem: React.FC<InfoItemProps> = ({ 
    label, 
    description, 
    value, 
    icon 
  }) => (
    <div className="mb-4 pb-4 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex justify-between items-start">
        <div className="max-w-[70%]">
          <div className="flex items-center gap-1">
            <p className="font-medium text-gray-900">{label}</p>
            {icon && icon}
          </div>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <div className="text-right">
          {typeof value === 'string' ? (
            <p className="font-semibold text-gray-900">{value}</p>
          ) : (
            value
          )}
        </div>
      </div>
    </div>
  );
  
  interface InfoGridProps {
    columns: number;
    items: {
      label: string;
      value: React.ReactNode;
    }[];
  }
  
export const InfoGrid: React.FC<InfoGridProps> = ({ columns, items }) => (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
      {items.map((item, index) => (
        <div key={`grid-item-${index}`}>
          <p className="text-sm text-gray-500 mb-1">{item.label}</p>
          <p className="font-medium text-gray-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
  
  interface CardProps {
    className?: string;
    title?: string;
    action?: any;
    children: React.ReactNode;
  }
  
export const Card: React.FC<CardProps> = ({ className = '', children }) => (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
      {children}
    </div>
  );
  
  interface PartyProfileProps {
    party: any;
    type: 'Client' | 'Freelancer';
  }
  
export  const PartyProfile: React.FC<PartyProfileProps> = ({ party, type }) => (
    <div>
      <p className="text-sm text-gray-500 mb-2">{type}</p>
      <div className="flex items-center">
        <img 
          src={party.avatarUrl} 
          alt={party.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-medium text-gray-900">{party.name}</p>
          <p className="text-sm text-gray-600">{party.role}</p>
        </div>
      </div>
    </div>
  );
  