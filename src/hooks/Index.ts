export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ProfileConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
}