"use client"
import { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'next/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  ArrowUp,
  Menu,
  X,
  User,
  MessageSquare,
  PlusCircle,
  Edit
} from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

interface ChatMessage {
  type: 'command' | 'success' | 'transaction' | 'message';
  text?: string;
  hash?: string;
  time?: string;
  from?: string;
  to?: string;
}

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

export default function ChatPage() {
  const params = useParams();
  const chatId = params.chatId as string;
  const [message, setMessage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      type: 'command',
      text: 'Send 3 ETH to vitalik.eth'
    },
    {
      type: 'success',
      text: 'Transaction Successful!'
    },
    {
      type: 'transaction',
      hash: '0x5a3...d17c2',
      time: '6 sec ago',
      from: '0x33...A6Ea',
      to: 'vitalik.eth'
    },
    {
      type: 'message',
      text: 'vitalik.eth has successfully received 3 ETH. Can I help you with anything else?'
    }
  ]);

  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: '1',
      title: 'React.js',
      lastMessage: 'Send 3 ETH to vitalik.eth',
      timestamp: 'Today'
    },
    {
      id: '2',
      title: 'React Native',
      lastMessage: 'Check my NFT collection',
      timestamp: 'Yesterday'
    },
    {
      id: '3',
      title: 'Unity',
      lastMessage: 'Swap 5 ETH for USDC',
      timestamp: 'Mar 15'
    },
    {
      id: '4',
      title: 'Unreal Engine',
      lastMessage: 'View my latest transaction',
      timestamp: 'Mar 14'
    },
    {
      id: '5',
      title: '.NET',
      lastMessage: 'How to stake ETH',
      timestamp: 'Mar 12'
    },
    {
      id: '6',
      title: 'Solidity',
      lastMessage: 'Contract deployment help',
      timestamp: 'Mar 10'
    }
  ]);

  useEffect(() => {
    console.log(`Loading chat with ID: ${chatId}`);
  }, [chatId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setChatHistory([...chatHistory, {
      type: 'command',
      text: message
    }]);
    
    setMessage('');
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'message',
        text: `Processing your request for "${message}"`
      }]);
    }, 1000);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-black text-white">
      <Head>
        <title>Chat {chatId} | Nebula</title>
        <meta name="description" content={`Chat session ${chatId} on Nebula`} />
      </Head>
      
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-width duration-300 ease-in-out fixed left-0 top-0 h-full bg-black overflow-hidden z-10 border-r border-gray-800`}>
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-800 rounded-full p-2">
              <div className="h-5 w-5 text-white flex items-center justify-center">
                <span className="text-sm font-medium">N</span>
              </div>
            </div>
            <span className="font-bold">Nebula</span>
          </div>
          <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-[calc(100%-64px)] px-2">
          {chatSessions.map(session => (
            <Link href={`/chat/${session.id}`} key={session.id}>
              <div className={`p-3 rounded-lg mb-1 hover:bg-gray-800 cursor-pointer ${chatId === session.id ? 'bg-gray-800' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex-1 truncate">
                    <p className="truncate font-medium">{session.title}</p>
                    <p className="text-gray-400 text-xs truncate">{session.lastMessage}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-300 ease-in-out`}>
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            {!sidebarOpen && (
              <button onClick={toggleSidebar} className="mr-2">
                <Menu className="h-5 w-5 text-white" />
              </button>
            )}
            <div className="bg-gray-800 rounded-full p-2">
              <div className="h-5 w-5 text-white flex items-center justify-center">
                <span className="text-sm font-medium">N</span>
              </div>
            </div>
            <span className="font-semibold">Nebula</span>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-800 rounded-full p-2 mr-2">
              <Edit className="h-5 w-5 text-white" />
            </button>
          </div>
        </header> 
        
        {/* Chat Content */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatHistory.map((item, index) => {
            if (item.type === 'command') {
              return (
                <div key={index} className="flex flex-col items-end mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-800 rounded-full py-2 px-4 max-w-md">
                      <p>{item.text}</p>
                    </div>
                    <div className="bg-gray-800 rounded-full p-2 h-10 w-10 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              );
            } else if (item.type === 'message') {
              return (
                <div key={index} className="flex flex-col items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-800 rounded-full p-2 h-10 w-10 flex items-center justify-center">
                      <div className="h-5 w-5 text-white flex items-center justify-center">
                        <span className="text-sm font-medium">N</span>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-full py-2 px-4 max-w-md">
                      <p>{item.text}</p>
                    </div>
                  </div>
                  {index > 0 && chatHistory[index-1].type === 'success' && (
                    <div className="ml-16 mt-2">
                      <div className="bg-black rounded-lg p-3 border border-gray-800 max-w-md w-full">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="bg-gray-800 rounded-md p-1">
                              <div className="h-5 w-5 flex items-center justify-center">
                                <span className="text-xs">⬛</span>
                              </div>
                            </div>
                            <span className="text-gray-400 text-sm">{chatHistory[index-2].hash}</span>
                          </div>
                          <span className="text-gray-400 text-sm">{chatHistory[index-2].time}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-4 px-1">
                          <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center">
                            <span className="text-xs">0x</span>
                          </div>
                          <span className="text-gray-400 text-sm">{chatHistory[index-2].from}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                          <div className="bg-teal-500 rounded-full h-6 w-6 flex items-center justify-center">
                            <span className="text-xs">V</span>
                          </div>
                          <span className="text-gray-400 text-sm">{chatHistory[index-2].to}</span>
                        </div>
                        
                        <button className="bg-black text-white rounded-lg py-2 w-full border border-gray-700 hover:bg-gray-900 transition-colors">
                          View Transaction
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            } else if (item.type === 'success') {
              return (
                <div key={index} className="flex mb-1 ml-16">
                  <div className="flex items-center space-x-2">
                    <div className="bg-purple-600 rounded-full h-7 w-7 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white">{item.text}</span>
                  </div>
                </div>
              );
            }
            // Don't render transaction separately as it's now part of the message display
            return null;
          })}
        </main>
        
        {/* Footer Input */}
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
      </div>
    </div>
  );
}