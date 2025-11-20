import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit
} from "react-icons/si";
import { SiReact } from "react-icons/si";

export const skillColors = {
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "React.js": "#61DAFB",
  "Next.js": "",  
  "Node.js": "#3C873A",
  "Tailwind CSS": "#38BDF8",
  "MongoDB": "#4DB33D",
  "Git": "#F05033",
};


export const skillIcons = {
  "JavaScript": SiJavascript ,
  "TypeScript": SiTypescript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  "MongoDB": SiMongodb,
  "Git": SiGit,
};

export type Skill = keyof typeof skillIcons;

export const skills: Skill[] = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Git",
];
