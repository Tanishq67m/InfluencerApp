import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Lightbulb, Plus } from 'lucide-react';

interface ContentIdea {
  id: number;
  title: string;
  description: string;
  category: string;
  relevance: number;
}

const ContentIdeas: React.FC = () => {
  const [ideas] = useState<ContentIdea[]>([
    {
      id: 1,
      title: "AI Tools for Content Creators",
      description: "Explore how AI is transforming content creation and which tools every creator should know about.",
      category: "Technology",
      relevance: 92
    },
    {
      id: 2,
      title: "5 Productivity Hacks for Remote Workers",
      description: "Share your top productivity tips that help you stay focused while working remotely.",
      category: "Productivity",
      relevance: 85
    },
    {
      id: 3,
      title: "The Future of Social Media Marketing",
      description: "Analyze emerging trends and predict how social media marketing will evolve in the next 2 years.",
      category: "Marketing",
      relevance: 78
    }
  ]);

  return (
    <Card 
      title="Content Ideas" 
      subtitle="AI-generated topics based on trends"
      action={<Button size="sm" variant="outline" leftIcon={<Plus size={14} />}>More Ideas</Button>}
    >
      <div className="space-y-4">
        {ideas.map((idea) => (
          <div key={idea.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-start">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-md text-amber-600 dark:text-amber-400 mr-3">
                <Lightbulb size={18} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium">{idea.title}</h4>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-0.5 rounded-full">
                    {idea.relevance}% match
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{idea.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{idea.category}</span>
                  <Button size="sm" variant="ghost">
                    Use This Idea
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ContentIdeas;