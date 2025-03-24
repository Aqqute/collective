import { Line } from "react-chartjs-2";
import { Card } from "../contracts/UiComponent";

export const EarningsChart: React.FC = () => {
    const data = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        data: [150000, 100000, 50000, 25000, 20000, 15000, 10000, 0],
        borderColor: '#F97316',
        tension: 0.4,
      }]
    };
  
    return (
      <Card title="Earning Statistics">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold">$120,000</div>
            <div className="text-gray-500">Oct 27, 2024 - Nov 26, 2024</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">$100k-90%</div>
          </div>
        </div>
        <div className="h-64">
          <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </Card>
    );
  };
  