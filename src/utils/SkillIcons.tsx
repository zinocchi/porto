import {
  FaJava,
  FaPhp,
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiFlutter,
  SiDart,
  SiGo,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

import type { IconType } from "react-icons";

export const skillIcons: Record<string, IconType> = {
  Java: FaJava,
  PHP: FaPhp,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  Dart: SiDart,
  Go: SiGo,
  HTML: FaHtml5,
  CSS: FaCss3Alt,

  // Frameworks / Libraries
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Express.js": SiExpress,
  Laravel: FaLaravel,
  Flutter: SiFlutter,

  // CSS Frameworks
  Bootstrap: SiBootstrap,
  Tailwind: SiTailwindcss,
};
