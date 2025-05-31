import React from 'react';
import Card from '../ui/Card';
import { ArrowUpRight, ArrowDownRight, Users, Eye, Heart, MessageSquare } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        <div className={`p-2 rounded-md ${
          isPositive ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 
          'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
        }`}>
          {icon}
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <span className={`flex items-center text-sm ${
          isPositive ? 'text-emerald-600 dark:text-emerald-400' : 
          'text-red-600 dark:text-red-400'
        }`}>
          {isPositive ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
          {Math.abs(change)}%
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">vs last week</span>
      </div>
    </div>
  );
};

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard 
        title="Total Followers" 
        value="24,521" 
        change={5.2} 
        icon={<Users size={18} />} 
      />
      <MetricCard 
        title="Post Impressions" 
        value="148.8K" 
        change={12.4} 
        icon={<Eye size={18} />} 
      />
      <MetricCard 
        title="Engagement Rate" 
        value="3.72%" 
        change={-0.8} 
        icon={<Heart size={18} />} 
      />
      <MetricCard 
        title="Comments" 
        value="892" 
        change={7.6} 
        icon={<MessageSquare size={18} />} 
      />
    </div>
  );
};

export default PerformanceMetrics;