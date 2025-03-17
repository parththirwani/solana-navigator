// components/SolanaChat.tsx
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clipboard, Pen, Settings, ArrowUp } from 'lucide-react';

interface ChatMessage {
  type: 'command' | 'success' | 'transaction' | 'message';
  text?: string;
  hash?: string;
  time?: string;
  from?: string;
  to?: string;
}

interface SolanaChatProps {
  chatId: string | string[] | undefined;
  initialMessages?: ChatMessage[];
  onSendMessage?: (message: string) => void;
}

export default function SolanaChat({ chatId, initialMessages = [], onSendMessage }: SolanaChatProps) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(initialMessages);

  useEffect(() => {
    if (initialMessages.length > 0) {
      setChatHistory(initialMessages);
    }
  }, [initialMessages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, {
      type: 'command',
      text: message
    }]);
    
    // Call parent handler if provided
    if (onSendMessage) {
      onSendMessage(message);
    }
    
    // Clear input
    setMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="bg-white bg-opacity-10 rounded-full p-2">
            <Clipboard className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg">Solana Navigator</span>
          {chatId && <span className="text-gray-400 text-sm">Chat #{chatId}</span>}
        </div>
        <div className="bg-white bg-opacity-10 rounded-full p-2">
          <Pen className="h-5 w-5 text-white" />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
        {chatHistory.map((item, index) => {
          if (item.type === 'command') {
            return (
              <div key={index} className="bg-white bg-opacity-10 rounded-full py-3 px-5 mx-auto max-w-md">
                <div className="flex justify-between items-center">
                  <span>{item.text}</span>
                  <div className="bg-white bg-opacity-10 rounded-full p-1">
                    <div className="h-5 w-5 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (item.type === 'success') {
            return (
              <div key={index} className="flex items-center space-x-2 ml-12">
                <div className="bg-white bg-opacity-10 rounded-full p-2">
                  <Clipboard className="h-5 w-5 text-white" />
                </div>
                <div className="bg-purple-600 rounded-full py-1 px-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span>{item.text}</span>
                  </div>
                </div>
              </div>
            );
          } else if (item.type === 'transaction') {
            return (
              <div key={index} className="bg-gray-900 rounded-lg p-4 mx-auto max-w-md">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-white bg-opacity-10 rounded-md p-1">
                    <div className="h-5 w-5 flex items-center justify-center">
                      <span className="text-xs">⬛</span>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{item.hash}</span>
                  <span className="text-gray-400 text-sm ml-auto">{item.time}</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4 px-2">
                  <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center">
                    <span className="text-xs">0x</span>
                  </div>
                  <span className="text-gray-400 text-sm">{item.from}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <div className="bg-teal-500 rounded-full h-6 w-6 flex items-center justify-center">
                    <span className="text-xs">VE</span>
                  </div>
                  <span className="text-gray-400 text-sm">{item.to}</span>
                </div>
                
                <button className="bg-gray-800 text-white rounded-lg py-2 w-full">
                  View Transaction
                </button>
              </div>
            );
          } else if (item.type === 'message') {
            return (
              <div key={index} className="bg-gray-900 rounded-lg p-4 mx-auto max-w-md">
                <p>{item.text}</p>
              </div>
            );
          }
          return null;
        })}
      </main>
      
      {/* Footer Input */}
      <div className="p-4">
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-full p-2 flex items-center">
          <input
            type="text"
            placeholder="Ask anything..."
            className="bg-transparent text-white border-none flex-1 px-2 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex items-center space-x-2">
            <button type="button" className="bg-white bg-opacity-10 rounded-full p-2">
              <Settings className="h-5 w-5 text-white" />
            </button>
            <button type="submit" className="bg-white rounded-full p-2">
              <ArrowUp className="h-5 w-5 text-black" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}