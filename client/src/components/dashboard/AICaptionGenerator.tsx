import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Sparkles, Copy, Check, RefreshCw } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  icon: React.ElementType;
  enabled: boolean;
  color: string;
}

interface AICaptionGeneratorProps {
  originalContent: string;
  isGenerating: boolean;
  setIsGenerating: (value: boolean) => void;
  platforms: Platform[];
  onSelectCaption: (platform: string, caption: string) => void;
}

// Mock AI generated captions
const generateMockCaptions = (content: string, platforms: Platform[]) => {
  const mockCaptions: Record<string, string> = {};
  
  platforms.forEach(platform => {
    if (platform.id === 'twitter') {
      mockCaptions[platform.id] = content ? 
        `${content.substring(0, 80)}... #trending #viral` : 
        "Just discovered something amazing! Check this out! #trending #viral";
    } else if (platform.id === 'linkedin') {
      mockCaptions[platform.id] = content ?
        `I'm excited to share ${content.substring(0, 50)}... \n\nWhat are your thoughts on this? Let me know in the comments below! #professionalinsights` :
        "I'm excited to share my latest insights on this trending topic. What are your thoughts on this? Let me know in the comments below! #professionalinsights";
    }
  });
  
  return mockCaptions;
};

const AICaptionGenerator: React.FC<AICaptionGeneratorProps> = ({
  originalContent,
  isGenerating,
  setIsGenerating,
  platforms,
  onSelectCaption
}) => {
  const [captions, setCaptions] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isGenerating) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        setCaptions(generateMockCaptions(originalContent, platforms));
        setLoading(false);
      }, 1500);
    }
  }, [isGenerating, originalContent, platforms]);

  const handleCopy = (platform: string, caption: string) => {
    navigator.clipboard.writeText(caption);
    setCopied({ ...copied, [platform]: true });
    setTimeout(() => {
      setCopied({ ...copied, [platform]: false });
    }, 2000);
  };

  const handleRefresh = (platform: string) => {
    setLoading(true);
    setTimeout(() => {
      const newCaptions = { ...captions };
      if (platform === 'twitter') {
        newCaptions[platform] = originalContent ? 
          `${originalContent.substring(0, 70)}... Check this out! #viral #trending` : 
          "Just discovered something amazing! Check this out! #viral #trending";
      } else if (platform === 'linkedin') {
        newCaptions[platform] = originalContent ?
          `I wanted to share with my network: ${originalContent.substring(0, 40)}... \n\nI'd love to hear your professional take on this! #networking` :
          "I wanted to share with my network this amazing insight. I'd love to hear your professional take on this! #networking";
      }
      setCaptions(newCaptions);
      setLoading(false);
    }, 1000);
  };

  if (!isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-8 px-2 text-center">
        <Sparkles className="text-blue-500 mb-3" size={32} />
        <h3 className="font-medium mb-2">AI Caption Generator</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Let AI generate optimized captions for each platform
        </p>
        <Button 
          onClick={() => setIsGenerating(true)}
          disabled={!originalContent || platforms.length === 0}
        >
          Generate Captions
        </Button>
      </div>
    );
  }

  return (
    <div className="py-2">
      <h3 className="font-medium mb-3">AI-Generated Captions</h3>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-3"></div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            AI is crafting the perfect captions...
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {platforms.map(platform => (
            <div key={platform.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-2">
                <platform.icon className={`mr-2`} size={16} />
                <span className="font-medium">{platform.name}</span>
              </div>
              <p className="text-sm mb-3 whitespace-pre-line">{captions[platform.id]}</p>
              <div className="flex justify-between">
                <Button 
                  size="sm" 
                  variant="outline" 
                  leftIcon={<RefreshCw size={14} />}
                  onClick={() => handleRefresh(platform.id)}
                >
                  Refresh
                </Button>
                <div className="space-x-2">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    leftIcon={copied[platform.id] ? <Check size={14} /> : <Copy size={14} />}
                    onClick={() => handleCopy(platform.id, captions[platform.id])}
                  >
                    {copied[platform.id] ? 'Copied' : 'Copy'}
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => onSelectCaption(platform.id, captions[platform.id])}
                  >
                    Use
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AICaptionGenerator;