import React from 'react';
import { Bell, Settings, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-3 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold md:text-2xl">Ultimate Influencer Dashboard</h1>
      </div>
      <div className="flex items-center space-x-3">
        <button 
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button 
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 relative"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        <button 
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>
        <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;