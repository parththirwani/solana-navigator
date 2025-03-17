import { CheckCircle } from 'lucide-react';

interface TransactionSuccessMessageProps {
  text: string;
}

export default function TransactionSuccessMessage({ text }: TransactionSuccessMessageProps) {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center">
        <CheckCircle className="h-4 w-4 text-white" />
      </div>
      <span className="text-green-500">{text}</span>
    </div>
  );
}
