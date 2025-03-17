// File: components/layout/ChatLayout.tsx
"use client"
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';

import { ChatMessage, ChatSession } from '../../types';
import Sidebar from './sidebar';
import ChatHeader from './chat-header';
import ChatContent from './chat-content';
import ChatInput from './chat-input';

export default function ChatLayout() {
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

  const handleSubmit = (text: string) => {
    if (!text.trim()) return;
    
    setChatHistory([...chatHistory, {
      type: 'command',
      text: text
    }]);
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'message',
        text: `Processing your request for "${text}"`
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
      
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={toggleSidebar}
        chatSessions={chatSessions}
        currentChatId={chatId}
      />
      
      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-300 ease-in-out`}>
        <ChatHeader 
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        
        <ChatContent 
          chatHistory={chatHistory}
        />
        
        <ChatInput 
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}