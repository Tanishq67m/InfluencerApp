import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Twitter, Linkedin, Image, Calendar, ArrowRight, Send } from 'lucide-react';
import AICaptionGenerator from './AICaptionGenerator';

interface Platform {
  id: string;
  name: string;
  icon: React.ElementType;
  enabled: boolean;
  color: string;
}

const MultiPlatformPostingPanel: React.FC = () => {
  const [content, setContent] = useState('');
  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: 'twitter', name: 'Twitter', icon: Twitter, enabled: true, color: 'bg-blue-400' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, enabled: false, color: 'bg-blue-700' },
  ]);
  const [isAIGenerating, setIsAIGenerating] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const togglePlatform = (id: string) => {
    setPlatforms(platforms.map(platform => 
      platform.id === id ? { ...platform, enabled: !platform.enabled } : platform
    ));
  };

  const handlePostNow = () => {
    alert(`Content posted to: ${platforms.filter(p => p.enabled).map(p => p.name).join(', ')}`);
    setContent('');
  };

  return (
    <Card className="col-span-2 flex flex-col">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="w-full md:w-3/5 flex flex-col h-full">
          <div className="mb-3 flex justify-between items-center">
            <h3 className="font-medium text-lg">Create Post</h3>
            <div className="flex space-x-2">
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  className={`p-2 rounded-full transition-colors ${
                    platform.enabled 
                      ? platform.color + ' text-white' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                  title={`${platform.enabled ? 'Disable' : 'Enable'} ${platform.name}`}
                >
                  <platform.icon size={18} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What would you like to share today?"
              className="w-full min-h-[200px] p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 resize-none"
            />
            <div className="absolute bottom-3 left-3 flex space-x-2">
              <button 
                className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                title="Add image"
              >
                <Image size={18} />
              </button>
              <button 
                className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                title="Schedule post"
                onClick={() => setShowSchedule(!showSchedule)}
              >
                <Calendar size={18} />
              </button>
            </div>
          </div>
          
          {showSchedule && (
            <div className="mt-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg flex flex-col sm:flex-row gap-3 items-center animate-fadeIn">
              <input 
                type="date" 
                className="p-2 rounded border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800"
              />
              <input 
                type="time" 
                className="p-2 rounded border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800"
              />
              <Button>Schedule</Button>
            </div>
          )}
          
          <div className="mt-4 flex justify-between">
            <Button 
              variant="outline" 
              leftIcon={<ArrowRight size={16} />}
              onClick={() => setIsAIGenerating(true)}
            >
              Use AI to Enhance
            </Button>
            <Button
              leftIcon={<Send size={16} />}
              onClick={handlePostNow}
              disabled={!content.trim() || !platforms.some(p => p.enabled)}
            >
              Post Now
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 md:border-l md:border-slate-200 md:dark:border-slate-700 md:pl-4 flex-shrink-0">
          <AICaptionGenerator 
            originalContent={content}
            isGenerating={isAIGenerating}
            setIsGenerating={setIsAIGenerating}
            platforms={platforms.filter(p => p.enabled)}
            onSelectCaption={(platform, caption) => {
              setContent(caption);
              setIsAIGenerating(false);
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default MultiPlatformPostingPanel;