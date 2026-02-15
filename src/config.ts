import type { ProfileConfig, Project, Skill } from "./hooks/Index";
import jamu from "./assets/jamu.jpeg";
import velveta from "./assets/velveta1.jpeg";

export const profile: ProfileConfig = {
  name: "Fikri Aziz Mudzakir",
  title: "Full Stack Developer",
  description:
    "My name is Fikri Aziz Mudzakir. I am a Software Engineer student who is highly enthusiastic about programming, especially web development.",
  email: "zinocchidev@gmail.com",
  github: "https://github.com/zinocchi",
  linkedin: "https://www.linkedin.com/in/fikri-aziz-mudzakir",
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Java", "PHP", "JavaScript", "Dart", "Go", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Express.js", "Laravel", "Flutter", "Boostrap", "Tailwind"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "UMKM Traditional Jamu",
    description:
      "Full stack Project for the City-level UMKM Digitization Competition",
    techStack: ["React", "Laravel", "Tailwind", "MySql"],
    link: "https://djamu.vercel.app",
    image: jamu,
  },
  {
    id: 2,
    title: "Velveta Coffee",
    description:
      "Web Programming Project for a Point of sale with complete features such as an admin panel and user",
    techStack: ["React", "Laravel", "Tailwind", "MySql"],
    link: "https://velveta-fe.vercel.app/",
    image: velveta,
  },
];
