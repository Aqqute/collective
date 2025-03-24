"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EarningsChart } from "@/components/payments/EarningChart";
import { PaymentOverview } from "@/components/payments/PaymentOverview";
import { TransactionDetails } from "@/components/payments/TransactionDetails";
import { WithdrawForm } from "@/components/payments/WithdrawForm";
import { Button } from "@/components/ProjectDetail/ReusableUi";
import { Card } from "@/components/ProjectDetail/ReusableUi";

const PaymentDashboard = () => {
  return (
    <div>
        <Header />
   
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Payment Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <EarningsChart />
        </div>
        <div>
          <Card title="Quick Actions" className="h-full">
            <div className="space-y-4">
              <Button variant="primary" className="w-full">
                Request Payment
              </Button>
              <Button variant="secondary" className="w-full">
                Withdraw Funds
              </Button>
              <Button variant="outline" className="w-full">
                View All Transactions
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PaymentOverview />
        </div>
        <div className="space-y-8">
          <WithdrawForm />
          <Card title="Recent Notifications">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Payment Received</h3>
                <p className="text-sm text-gray-500">NC 30,000 from Joel Chris</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Withdrawal Request</h3>
                <p className="text-sm text-gray-500">NC 10,000 to be processed</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Payment Received</h3>
                <p className="text-sm text-gray-500">NC 30,000 from Joel Chris</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default PaymentDashboard;

// For individual transaction view
export const TransactionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Transaction Details</h1>
          <Button variant="outline" size="sm">
            Back to Transactions
          </Button>
        </div>
        <TransactionDetails />
      </div>
    </div>
  );
};