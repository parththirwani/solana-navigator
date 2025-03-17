import { ArrowRight } from 'lucide-react';

interface TransactionCardProps {
  hash: string;
  time: string;
  from: string;
  to: string;
}

export default function TransactionCard({ hash, time, from, to }: TransactionCardProps) {
  return (
    <div className="bg-black rounded-lg p-3 border border-gray-800 w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-800 rounded-md p-1">
            <div className="h-5 w-5 flex items-center justify-center">
              <span className="text-xs">⬛</span>
            </div>
          </div>
          <span className="text-gray-400 text-sm">{hash}</span>
        </div>
        <span className="text-gray-400 text-sm">{time}</span>
      </div>
      
      <div className="flex items-center space-x-2 mb-4 px-1">
        <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center">
          <span className="text-xs">0x</span>
        </div>
        <span className="text-gray-400 text-sm">{from}</span>
        <ArrowRight className="h-4 w-4 text-gray-400" />
        <div className="bg-teal-500 rounded-full h-6 w-6 flex items-center justify-center">
          <span className="text-xs">V</span>
        </div>
        <span className="text-gray-400 text-sm">{to}</span>
      </div>
      
      <button className="bg-black text-white rounded-lg py-2 w-full border border-gray-700 hover:bg-gray-900 transition-colors">
        View Transaction
      </button>
    </div>
  );
}