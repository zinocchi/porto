// Profile / Personal Information
export interface ProfileConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
}

// Skills
export interface Skill {
  category: string;
  items: string[];
}

// Projects
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}
