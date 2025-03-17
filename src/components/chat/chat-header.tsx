import { Menu, Share2 } from 'lucide-react';
import NebulaLogo from '../ui/NebulaLogo';

interface ChatHeaderProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function ChatHeader({ sidebarOpen, toggleSidebar }: ChatHeaderProps) {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
      <div className="flex items-center space-x-3">
        {!sidebarOpen && (
          <button onClick={toggleSidebar} className="mr-2">
            <Menu className="h-5 w-5 text-white" />
          </button>
        )}
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Nebula</span>
          <NebulaLogo />
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-gray-400 hover:text-white px-2">
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}