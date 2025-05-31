import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import { TrendingUp, ExternalLink } from 'lucide-react';

interface Trend {
  id: number;
  topic: string;
  category: string;
  growth: number;
  source: string;
}

const TrendTracker: React.FC = () => {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get trending topics
    setTimeout(() => {
      setTrends([
        { id: 1, topic: '#AIRevolution', category: 'Technology', growth: 86, source: 'Twitter' },
        { id: 2, topic: 'Remote Work Culture', category: 'Business', growth: 62, source: 'LinkedIn' },
        { id: 3, topic: 'Sustainable Fashion', category: 'Lifestyle', growth: 45, source: 'Twitter' },
        { id: 4, topic: 'Mental Health Awareness', category: 'Health', growth: 73, source: 'Twitter' },
        { id: 5, topic: 'Digital Marketing Strategies', category: 'Marketing', growth: 51, source: 'LinkedIn' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Card title="Trending Topics" subtitle="Real-time trends to boost engagement">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-3">
          {trends.map((trend) => (
            <div 
              key={trend.id}
              className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">{trend.topic}</h4>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      trend.source === 'Twitter' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : 'bg-blue-800 text-white'
                    }`}>
                      {trend.source}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{trend.category}</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                    <TrendingUp size={14} className="mr-1" />
                    <span className="text-sm font-medium">{trend.growth}%</span>
                  </div>
                  <a 
                    href="#" 
                    className="mt-2 text-xs text-blue-600 dark:text-blue-400 flex items-center hover:underline"
                  >
                    Explore <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default TrendTracker;