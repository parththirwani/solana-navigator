import { User } from 'lucide-react';
import { ChatMessage } from '../../types';
import TransactionSuccessMessage from './TransactionSuccessMessage';
import TransactionCard from './TransactionCard';

interface ChatContentProps {
  chatHistory: ChatMessage[];
}

export default function ChatContent({ chatHistory }: ChatContentProps) {
  return (
    <main className="flex-1 overflow-y-auto px-4">
      <div className="max-w-3xl mx-auto">
        {chatHistory.map((item, index) => {
          if (item.type === 'command') {
            return (
              <div key={index} className="py-6 border-b border-gray-800">
                <div className="flex flex-col items-start max-w-3xl mx-auto">
                  <div className="flex w-full">
                    <div className="w-8 h-8 flex-shrink-0 mr-4 flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (item.type === 'message') {
            return (
              <div key={index} className="py-6 border-b border-gray-800 bg-gray-900 bg-opacity-30">
                <div className="flex flex-col items-start max-w-3xl mx-auto">
                  <div className="flex w-full">
                    <div className="w-8 h-8 flex-shrink-0 mr-4 flex items-center justify-center">
                      <div className="bg-gray-800 rounded-full p-1">
                        <div className="h-5 w-5 text-white flex items-center justify-center">
                          <span className="text-sm font-medium">N</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white mb-4">{item.text}</p>
                      
                      {index > 0 && chatHistory[index-1].type === 'success' && (
                        <div className="mt-2 mb-4">
                          <TransactionSuccessMessage text={chatHistory[index-1].text || ''} />
                          
                          {index > 1 && chatHistory[index-2].type === 'transaction' && (
                            <TransactionCard 
                              hash={chatHistory[index-2].hash || ''}
                              time={chatHistory[index-2].time || ''}
                              from={chatHistory[index-2].from || ''}
                              to={chatHistory[index-2].to || ''}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </main>
  );
}
