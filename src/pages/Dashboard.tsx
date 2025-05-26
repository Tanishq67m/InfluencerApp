import React from 'react';
import MultiPlatformPostingPanel from '../components/dashboard/MultiPlatformPostingPanel';
import TrendTracker from '../components/dashboard/TrendTracker';
import ContentIdeas from '../components/dashboard/ContentIdeas';
import PerformanceMetrics from '../components/dashboard/PerformanceMetrics';
import EngagementChart from '../components/dashboard/EngagementChart';
import ScheduledPosts from '../components/dashboard/ScheduledPosts';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      
      <PerformanceMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MultiPlatformPostingPanel />
        <TrendTracker />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EngagementChart />
        </div>
        <ContentIdeas />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ScheduledPosts />
      </div>
    </div>
  );
};

export default Dashboard;