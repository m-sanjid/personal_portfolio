export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  logo?: string;
  image: string;
  screenshots: string[];
  liveLink: string;
  githubLink: string;
  features: string[];
  technologies: string[];
  createdAt: string;
  stats: {
    stars: number;
    forks: number;
    watchers: number;
  };
}

export type Snippet = {
  title: string;
  description: string;
  slug: string;
  tags?: string[];
  code: string;
  Demo?: React.ComponentType;
  language?: string;
  author?: string;
  createdAt?: string;
  downloads?: number;
  likes?: number;
  usage?: string;
  props?: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
  }>;
  examples?: Array<{
    title: string;
    code: string;
  }>;
};

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  bgColor: string;
  accentColor: string;
}
