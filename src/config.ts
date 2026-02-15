import { ProfileConfig, Project, Skill } from './types';

// ========================================
// EDIT YOUR INFORMATION HERE
// ========================================
export const profile: ProfileConfig = {
  name: "Fikri Aziz Mudzakir",
  title: "Full Stack Developer",
  description: "My name is Fikri Aziz Mudzakir. I am a Software Engineer student who is highly enthusiastic about programming, especially web development. I work as a Full Stack Developer.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername"
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Java", "C#", "PHP", "JavaScript", "Dart", "Go", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Express.js", "Laravel", "Flutter"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team chat, and progress tracking features.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    link: "#"
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with beautiful visualizations.",
    techStack: ["Flutter", "Dart", "Firebase", "Provider"],
    link: "#"
  }
];