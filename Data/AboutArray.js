export const aboutArray = {
  heading: "Building Modern & Innovative Digital Solutions",
  subHeading:
    "We design and develop powerful, scalable, and user-friendly web solutions to elevate your business in the digital world.",
  primaryBtn: "Get Started",
  secondaryBtn: "Learn More",
  textBtn: "Empowering Digital Growth",
  image: "/images/sir aizaz.jpeg", // your existing image path
};
// src/Data/AboutArray.js
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws, FaDocker } from "react-icons/fa";
import { 
  SiTailwindcss, SiMongodb, SiMysql, SiNextdotjs, SiFigma, 
  SiPostman, SiVercel, SiNetlify, SiTypescript, SiExpress 
} from "react-icons/si";

export const technologies = [
  // Frontend
  { name: "HTML", icon: FaHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6", category: "Frontend" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E", category: "Frontend" },
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Backend" },

  // Advanced
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Advanced" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "Advanced" },
  { name: "GitHub", icon: FaGithub, color: "#181717", category: "Advanced" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Advanced" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Advanced" },

  // Cloud
  { name: "AWS", icon: FaAws, color: "#FF9900", category: "Cloud" },
  { name: "Docker", icon: FaDocker, color: "#2496ED", category: "Cloud" },
  { name: "Vercel", icon: SiVercel, color: "#000000", category: "Cloud" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", category: "Cloud" },
];

export const techCategories = ["All", "Frontend", "Backend", "Advanced", "Cloud"];

