import { Card, KeyValuePair } from "../ProjectDetail/ReusableUi";
import { PaymentStatusBadge } from "./PaymentStatusBadge";

export const TransactionDetails: React.FC = () => {
    return (
      <Card title="Transaction Details">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Jost Chris - Web design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <KeyValuePair label="Date" value="24/10/2024" />
              <KeyValuePair label="Time" value="06:00 PM" />
              <KeyValuePair label="Currency" value="NON" />
              <KeyValuePair label="Amount" value="N20,000" />
              <KeyValuePair label="Service Fee" value="N1,300" />
              <KeyValuePair label="Total Amount" value="N18,700" />
              <KeyValuePair label="Transaction Type" value="Withdrawal" />
              <KeyValuePair label="Status" value={<PaymentStatusBadge status="completed" />} />
              <KeyValuePair label="Method" value="Bank Transfer" />
            </div>
          </div>
  
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-medium mb-4">Withdraw Details</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 text-gray-500">Account Number</td>
                  <td className="py-2">28436733333</td>
                </tr>
                {/* Add other table rows */}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    );
  };
  