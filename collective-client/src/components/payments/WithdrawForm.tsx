import { Card, KeyValuePair } from "../ProjectDetail/ReusableUi";

export const WithdrawForm: React.FC = () => {
    return (
      <Card title="Withdraw">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">GoToken</h3>
            <KeyValuePair label="Variant Address" value="2220baupfeeer6bmergws" />
          </div>
  
          <div className="border-t border-gray-100 pt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Amount</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter amount"
              />
              <p className="text-sm text-gray-500 mt-2">
                A 1.5% service fee will be applied to your transaction
              </p>
            </div>
          </div>
  
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-medium mb-4">Notifications</h3>
            <div className="space-y-4">
              {[
                { title: "Payment Received", date: "2023-10-01", description: "You have received a payment of $100." },
                { title: "Withdrawal Processed", date: "2023-10-02", description: "Your withdrawal of $50 has been processed." }
              ].map((notification, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{notification.title}</span>
                    <span className="text-sm text-gray-500">{notification.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{notification.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    );
  };