import { useState } from "react";

interface NewsletterProps {
    onSubscribe: (email: string) => void;
  }
  
  export const Newsletter = ({ onSubscribe }: NewsletterProps) => {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubscribe(email);
      setEmail('');
    };
  
    return (
      <div className="max-w-md">
        <h3 className="text-white text-lg font-semibold mb-2">
          Stay Ahead with Our Freelancer Insider Newsletter!
        </h3>
        <p className="text-gray-400 mb-4">
          Get the latest updates, tips, and opportunities delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-gray-800 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  };
  