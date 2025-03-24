import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface PaymentStatusBadgeProps {
  status: 'pending' | 'completed' | 'refunded' | 'failed';
// status: any;
}

export const PaymentStatusBadge: React.FC<PaymentStatusBadgeProps> = ({ status }) => {
  const statusStyles = {
    pending: 'bg-amber-100 text-amber-800',
    completed: 'bg-green-100 text-green-800',
    refunded: 'bg-blue-100 text-blue-800',
    failed: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};
