import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  action,
  noPadding = false
}) => {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden ${className}`}>
      {(title || action) && (
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
          <div>
            {title && <h3 className="font-medium">{title}</h3>}
            {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div className={noPadding ? '' : 'p-4'}>
        {children}
      </div>
    </div>
  );
};

export default Card;