import React from 'react';
import Card from '../ui/Card';
import { Calendar, Twitter, Linkedin, MoreHorizontal } from 'lucide-react';

interface ScheduledPost {
  id: number;
  content: string;
  date: string;
  time: string;
  platforms: string[];
}

const ScheduledPosts: React.FC = () => {
  const posts: ScheduledPost[] = [
    {
      id: 1,
      content: "Excited to announce our new feature release! Stay tuned for more details...",
      date: "2025-03-15",
      time: "09:30 AM",
      platforms: ["twitter", "linkedin"]
    },
    {
      id: 2,
      content: "Join our webinar on 'Social Media Trends for 2025' tomorrow!",
      date: "2025-03-18",
      time: "02:00 PM",
      platforms: ["linkedin"]
    },
    {
      id: 3,
      content: "We're hiring! Check out our open positions for remote workers.",
      date: "2025-03-20",
      time: "11:15 AM",
      platforms: ["twitter", "linkedin"]
    }
  ];

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <Twitter size={14} className="text-blue-400" />;
      case 'linkedin':
        return <Linkedin size={14} className="text-blue-700" />;
      default:
        return null;
    }
  };

  return (
    <Card 
      title="Scheduled Posts" 
      subtitle="Upcoming content for your platforms"
      className="col-span-1"
    >
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-slate-500 dark:text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {post.date} • {post.time}
                </span>
              </div>
              <div className="flex space-x-1">
                {post.platforms.map((platform) => (
                  <div key={platform} className="p-1">
                    {renderPlatformIcon(platform)}
                  </div>
                ))}
                <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                  <MoreHorizontal size={14} />
                </button>
              </div>
            </div>
            <p className="mt-2 text-sm line-clamp-2">{post.content}</p>
          </div>
        ))}
        
        <button className="w-full py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors">
          View All Scheduled Posts
        </button>
      </div>
    </Card>
  );
};

export default ScheduledPosts;