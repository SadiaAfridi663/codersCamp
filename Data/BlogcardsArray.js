// Blog Data
export const blogs = [
  {
    id: 1,
    title: "Master React Hooks in 2024",
    description:
      "Learn how to use modern React hooks like useState, useEffect, and useContext to build efficient and maintainable React components. Understand practical use cases and patterns to write cleaner, reusable code for your projects.",
    category: "web-dev",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    trending: false,
    isNew: true,
  },
  {
    id: 2,
    title: "AI Tools Every Developer Should Know",
    description:
      "Discover the top AI tools transforming the way developers write, debug, and optimize code. From code assistants to design generators, learn how AI can supercharge your productivity and creativity in everyday development.",
    category: "ai",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    author: "Mike Chen",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    trending: false,
    isNew: true,
  },
  {
    id: 3,
    title: "Building Your Tech Career in 2024",
    description:
      "Explore strategies to advance your career in the tech industry. Learn how to build a strong portfolio, network effectively, and stay relevant with the latest technologies to achieve long-term professional success.",
    category: "career",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    author: "Alex Rodriguez",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    trending: true,
    isNew: false,
  },
  {
    id: 4,
    title: "Modern UI Design Principles",
    description:
      "Learn the core principles behind beautiful and functional UI design, including hierarchy, balance, contrast, and typography. Discover how to apply these concepts to craft interfaces that feel intuitive and delightful.",
    category: "design",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    author: "Emma Wilson",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    trending: false,
    isNew: true,
  },
  {
    id: 5,
    title: "Python for Data Analysis",
    description:
      "Start your journey into data analysis with Python. Learn how to clean, analyze, and visualize datasets using popular libraries like Pandas, NumPy, and Matplotlib to gain valuable insights and make data-driven decisions.",
    category: "data-science",
    image:
      "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=800&q=80",
    author: "David Kim",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    trending: true,
    isNew: false,
  },
  {
    id: 6,
    title: "Flutter vs React Native 2024",
    description:
      "A detailed comparison between Flutter and React Native, the two leading frameworks for cross-platform app development. Learn their pros, cons, performance insights, and which one best fits your next mobile project.",
    category: "mobile",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    author: "Lisa Wang",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    trending: false,
    isNew: true,
  },
];


// Categories
import {
  FaGlobe,
  FaLaptopCode,
  FaRobot,
  FaRocket,
  FaPaintBrush,
  FaMobileAlt,
  FaChartBar,
  FaCode,
} from "react-icons/fa";

export const categories = [
  { id: "all", name: "All Topics", icon: FaGlobe },
  { id: "web-dev", name: "Web Dev", icon: FaLaptopCode },
  { id: "ai", name: "AI & ML", icon: FaRobot },
  { id: "career", name: "Career", icon: FaRocket },
  { id: "design", name: "Design", icon: FaPaintBrush },
  { id: "mobile", name: "Mobile", icon: FaMobileAlt },
  { id: "data-science", name: "Data Science", icon: FaChartBar },
  { id: "programming", name: "Coding", icon: FaCode },
];
