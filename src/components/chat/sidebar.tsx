import { X, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { ChatSession } from '../../types';
import NebulaLogo from '../ui/NebulaLogo';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  chatSessions: ChatSession[];
  currentChatId: string;
}

export default function Sidebar({ isOpen, onClose, chatSessions, currentChatId }: SidebarProps) {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-0'} transition-width duration-300 ease-in-out fixed left-0 top-0 h-full bg-black overflow-hidden z-10 border-r border-gray-800`}>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">Nebula</span>
          <NebulaLogo />
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4">
        <button className="bg-gray-900 hover:bg-gray-800 rounded-lg w-full py-3 px-4 flex items-center space-x-2 border border-gray-700">
          <PlusCircle className="h-4 w-4" />
          <span>New chat</span>
        </button>
      </div>
      
      <div className="overflow-y-auto h-[calc(100%-150px)] px-2">
        {chatSessions.map(session => (
          <Link href={`/chat/${session.id}`} key={session.id}>
            <div className={`p-3 rounded-lg mb-1 hover:bg-gray-800 cursor-pointer ${currentChatId === session.id ? 'bg-gray-800' : ''}`}>
              <div className="flex items-center space-x-3">
                <div className="flex-1 truncate">
                  <p className="truncate font-medium">{session.title}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}       