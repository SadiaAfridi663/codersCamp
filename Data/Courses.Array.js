
import course1 from "../images/course1.jpeg";
import course2 from "../images/course2.jpeg";
import course3 from "../images/course3.jpeg";
import course4 from "../images/course4.jpeg";
import course5 from "../images/course5.jpeg";
import course6 from "../images/course6.jpeg";
export const dummyCourses = [
  {
    id: 1,
    title: "The Complete Web Development Bootcamp 2025",
    instructor: "Dr. Angela Yu",
    duration: "55h 30m",
    rating: 4.9,
    price: 49.99,
    category: "Web Development",
    level: "Beginner to Advanced",
    language: "English",
    image: course1,
    description:
      "Learn full-stack web development from scratch using HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build real-world responsive websites, APIs, and deploy them online with hands-on projects and challenges.",
    features: ["Certification", "Quizzes", "Assignments", "Lifetime Access"],
  },
  {
    id: 2,
    title: "Master UI/UX Design: From Wireframes to Prototypes",
    instructor: "Sarah Khan",
    duration: "18h 15m",
    rating: 4.8,
    price: 29.99,
    category: "UI/UX",
    level: "Intermediate",
    language: "English, Urdu",
    image: course2,
    description:
      "Become a professional UI/UX designer. Learn user research, wireframing, prototyping, color theory, typography, and design systems using Figma and Adobe XD. Create stunning interfaces that improve user experiences.",
    features: ["Certification", "Quizzes", "Assignments", "Lifetime Access"],
  },
  {
    id: 3,
    title: "Artificial Intelligence for Everyone",
    instructor: "Andrew Ng",
    duration: "12h 40m",
    rating: 4.9,
    price: 0,
    category: "AI & Machine Learning",
    level: "Advanced",
    language: "English",
    image: course3,
    description:
      "Understand the basics of Artificial Intelligence without coding. Learn how AI is transforming industries, how to manage AI projects, and build intelligent business solutions. Perfect for students and professionals alike.",
    features: ["Certification", "Assignments", "Lifetime Access"],
  },
  {
    id: 4,
    title: "JavaScript Mastery: Build Real-World Apps",
    instructor: "Brad Traversy",
    duration: "25h 10m",
    rating: 4.7,
    price: 34.99,
    category: "JS Mastery",
    level: "Intermediate",
    language: "English",
    image: course4,
    description:
      "Master modern JavaScript from the ground up. Learn ES6+, asynchronous programming, DOM manipulation, APIs, and advanced topics like React and Node.js. Includes several real-world projects for hands-on learning.",
  },
  {
    id: 5,
    title: "Python for Data Science and Machine Learning",
    instructor: "Jose Portilla",
    duration: "40h 50m",
    rating: 4.8,
    price: 59.99,
    category: "Data Science",
    level: "Beginner to Intermediate",
    language: "English",
    image: course5,
    description:
      "A comprehensive course covering Python programming, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, and real-world data science projects. Build predictive models and understand the core ML algorithms step-by-step.",
  },
  {
    id: 6,
    title: "Freelancing 101: Launch Your Career Online",
    instructor: "Ayesha Ahmed",
    duration: "7h 25m",
    rating: 4.6,
    price: 0,
    category: "Freelancing",
    level: "Beginner",
    language: "Urdu",
    image: course6,
    description:
      "Kickstart your freelancing career with practical strategies on Fiverr, Upwork, and Freelancer. Learn profile optimization, proposal writing, client communication, and how to build long-term client relationships.",
  },
  // 🔥 New Added Courses
  {
    id: 7,
    title: "React & Next.js Advanced Frontend Development",
    instructor: "Maximilian Schwarzmüller",
    duration: "38h 10m",
    rating: 4.8,
    price: 44.99,
    category: "Web Development",
    level: "Advanced",
    language: "English",
    image: course1,
    description:
      "Build fast, scalable, and SEO-friendly web applications using React and Next.js. Learn server-side rendering, static generation, and API routes with modern deployment strategies.",
    features: ["Certification", "Projects", "Lifetime Access"],
  },
  {
    id: 8,
    title: "Figma to UI Mastery: Create Modern Web Interfaces",
    instructor: "Ali Haider",
    duration: "14h 45m",
    rating: 4.7,
    price: 24.99,
    category: "UI/UX",
    level: "Beginner",
    language: "English",
    image: course2,
    description:
      "Learn how to design beautiful, functional websites using Figma. Understand design grids, auto-layout, and interactive prototypes that convert users effectively.",
    features: ["Certification", "Assignments", "Quizzes"],
  },
  {
    id: 9,
    title: "Deep Learning with TensorFlow and Keras",
    instructor: "Andrew Ng",
    duration: "45h 30m",
    rating: 4.9,
    price: 69.99,
    category: "AI & Machine Learning",
    level: "Advanced",
    language: "English",
    image: course3,
    description:
      "Master deep learning fundamentals. Build neural networks, CNNs, and RNNs using TensorFlow and Keras to solve complex AI challenges and deploy real-world applications.",
    features: ["Certification", "Projects", "Lifetime Access"],
  },
  {
    id: 10,
    title: "Modern JavaScript + TypeScript for Developers",
    instructor: "Jonas Schmedtmann",
    duration: "22h 20m",
    rating: 4.8,
    price: 39.99,
    category: "JS Mastery",
    level: "Intermediate",
    language: "English",
    image: course4,
    description:
      "Learn advanced ESNext and TypeScript concepts. Build large-scale web applications confidently with static typing, interfaces, generics, and modular architecture.",
    features: ["Certification", "Assignments", "Lifetime Access"],
  },
  {
    id: 11,
    title: "Data Analysis with Python and Pandas",
    instructor: "Kirill Eremenko",
    duration: "33h 15m",
    rating: 4.6,
    price: 54.99,
    category: "Data Science",
    level: "Intermediate",
    language: "English",
    image: course5,
    description:
      "Learn how to clean, analyze, and visualize data efficiently using Python libraries. Build powerful insights and dashboards for real-world datasets.",
    features: ["Certification", "Quizzes", "Assignments"],
  },
  {
    id: 12,
    title: "Advanced Freelancing Strategies for 2025",
    instructor: "Hassan Raza",
    duration: "10h 00m",
    rating: 4.7,
    price: 19.99,
    category: "Freelancing",
    level: "Advanced",
    language: "English, Urdu",
    image: course6,
    description:
      "Take your freelancing to the next level. Learn to scale your business, manage clients effectively, and automate tasks to grow your online income stream.",
    features: ["Certification", "Case Studies", "Lifetime Access"],
  },
];


// src/Data/filterData.js

export const categories = [
  "Web Development",
  "Data Science",
  "Mobile Development",
  "UI/UX",
  "JS Mastery",
  "Freelancing",
  "AI & Machine Learning",
];

export const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];

export const durations = ["0-2 hours", "2-5 hours", "5-10 hours", "10+ hours"];

export const languages = ["English", "Spanish", "French", "German", "Hindi"];

export const features = [
  "Certification",
  "Quizzes",
  "Assignments",
  "Downloadable Resources",
  "Lifetime Access",
];
