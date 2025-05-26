import React from 'react';
import Card from '../ui/Card';

const EngagementChart: React.FC = () => {
  // In a real app, this would use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple visual representation
  
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const twitterData = [42, 38, 65, 54, 46, 28, 35];
  const linkedinData = [28, 32, 43, 48, 52, 22, 18];
  
  const maxValue = Math.max(...twitterData, ...linkedinData);
  
  return (
    <Card title="Weekly Engagement" subtitle="Platform performance for the past week">
      <div className="h-64">
        <div className="flex h-48 items-end space-x-2">
          {weekdays.map((day, index) => (
            <div key={day} className="flex-1 flex flex-col items-center space-y-1">
              <div className="w-full flex justify-center space-x-1">
                <div 
                  className="w-3 bg-blue-400 rounded-t"
                  style={{ height: `${(twitterData[index] / maxValue) * 100}%` }}
                  title={`Twitter: ${twitterData[index]} engagements`}
                ></div>
                <div 
                  className="w-3 bg-blue-700 rounded-t"
                  style={{ height: `${(linkedinData[index] / maxValue) * 100}%` }}
                  title={`LinkedIn: ${linkedinData[index]} engagements`}
                ></div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{day}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-center space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded mr-2"></div>
            <span className="text-xs text-slate-600 dark:text-slate-300">Twitter</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-700 rounded mr-2"></div>
            <span className="text-xs text-slate-600 dark:text-slate-300">LinkedIn</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EngagementChart;