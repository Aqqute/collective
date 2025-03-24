import { Card } from "../contracts/UiComponent";
import { KeyValuePair } from "../ProjectDetail/ReusableUi";
import { Button } from "../reviews/Utils";
import { PaymentStatusBadge } from "./PaymentStatusBadge";

export const PaymentOverview: React.FC = () => {
    interface Transaction {
      name: string;
      date: string;
      time: string;
      job: string;
      status: 'pending' | 'completed' | 'refunded' | 'failed';
      amount: string;
    }
    
    const transactions: Transaction[] = [
      { name: "Joel Chris", date: "04/11/2024", time: "06:00 PM", job: "Website Design", status: "pending", amount: "NC30,00" },
      // ... other transactions
    ];
  
    return (
      <Card title="Payment Overview" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <KeyValuePair label="Available Balance" value={
              <div className="text-right">
                <div className="text-2xl font-bold">$120,000</div>
                <div className="text-sm text-gray-500">0.835548 USD</div>
              </div>
            } />
          </div>
        </div>
  
        <div className="border-t border-gray-100 pt-6">
          <h3 className="text-lg font-medium mb-4">Transaction History</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-left text-gray-500 text-sm">
                <tr>
                  <th className="pb-3">Name/Business</th>
                  <th className="pb-3">Job Title</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4">
                      <div className="font-medium">{transaction.name}</div>
                      <div className="text-sm text-gray-500">{transaction.date} - {transaction.time}</div>
                    </td>
                    <td>{transaction.job}</td>
                    <td>{transaction.amount}</td>
                    <td><PaymentStatusBadge status={transaction.status} /></td>
                    <td><Button variant="outline" size="sm">Details</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    );
  };
  
  