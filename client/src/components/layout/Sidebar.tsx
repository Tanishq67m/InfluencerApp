import React, { useState } from 'react';
import { Home, BarChart2, Calendar, Compass, MessageSquare, Users, Settings, PenTool, Menu, X } from 'lucide-react';

interface NavItem {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([
    { icon: Home, label: 'Dashboard', isActive: true },
    { icon: PenTool, label: 'Create', isActive: false },
    { icon: BarChart2, label: 'Analytics', isActive: false },
    { icon: Calendar, label: 'Schedule', isActive: false },
    { icon: Compass, label: 'Discover', isActive: false },
    { icon: MessageSquare, label: 'Messages', isActive: false },
    { icon: Users, label: 'Audience', isActive: false },
    { icon: Settings, label: 'Settings', isActive: false },
  ]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const setActiveItem = (index: number) => {
    setNavItems(navItems.map((item, i) => ({
      ...item,
      isActive: i === index
    })));
  };

  return (
    <>
      <button 
        className="lg:hidden fixed top-3 left-3 z-30 p-2 rounded-md bg-white dark:bg-slate-800 shadow-md"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>
      
      <aside className={`bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 h-full w-64 fixed lg:static z-20 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
              U
            </div>
            <span className="ml-2 font-semibold">UID</span>
          </div>
          <button 
            className="lg:hidden p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                    item.isActive 
                      ? 'bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  onClick={() => setActiveItem(index)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                  {item.isActive && (
                    <span className="ml-auto w-1.5 h-5 bg-blue-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="bg-blue-50 dark:bg-slate-700 p-3 rounded-lg">
            <h3 className="font-medium text-blue-700 dark:text-blue-400">Pro Tip</h3>
            <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">Try our AI caption generator for Instagram!</p>
          </div>
        </div>
      </aside>
      
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;