export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Post {
  id: string;
  content: string;
  platforms: string[];
  scheduledFor?: Date;
  status: 'draft' | 'scheduled' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  color: string;
  connected: boolean;
}

export interface Trend {
  id: string;
  topic: string;
  category: string;
  growth: number;
  source: string;
}

export interface ContentIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  relevance: number;
}