import { useState, FormEvent } from 'react';
import { Settings, ArrowUp } from 'lucide-react';

interface ChatInputProps {
  onSubmit: (message: string) => void;
}

export default function ChatInput({ onSubmit }: ChatInputProps) {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };
  
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="bg-black rounded-full p-2 flex items-center border border-gray-800">
        <input
          type="text"
          placeholder="Ask anything..."
          className="bg-transparent text-white border-none flex-1 px-3 py-2 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <button type="button" className="bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-all">
            <Settings className="h-5 w-5 text-white" />
          </button>
          <button 
            type="submit"
            aria-label="Send message" 
            className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
            disabled={!message.trim()}
          >
            <ArrowUp className="h-5 w-5 text-black" />
          </button>
        </div>
      </form>
    </div>
  );
}