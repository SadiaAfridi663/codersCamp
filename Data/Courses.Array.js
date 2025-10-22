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

/////////////////////////////////// course detail

import SirDawood from "../images/sir dawood.jpg";
export const courseData = {
  title: "Advanced Web Development",
  tagline: "Master modern web technologies and build scalable applications",
  duration: "12 weeks",
  level: "Intermediate",
  students: "2,500+",
  price: "$299",
  originalPrice: "$499",
  badges: ["Bestseller", "Hot & New", "Trending"],
  rating: "4.8",
  reviews: "1,200",
  instructor: {
    name: "Mian Dawood",
    role: "Senior Full Stack Developer",
    avatar: SirDawood,
  },
  features: [
    "48 hours of video content",
    "12 real-world projects",
    "Certificate of completion",
    "Lifetime access",
  ],
};

export const stats = [
  { label: "Success Rate", value: "98%" },
  { label: "Support", value: "24/7" },
  { label: "Hiring Partners", value: "500+" },
  { label: "Mentorship", value: "1-on-1" },
];

// Key benefits
export const benefits = [
  "Hands-on projects and real-world applications",
  "Expert instruction from industry professionals",
  "Lifetime access to course materials and updates",
  "Community support and peer learning",
  "Career guidance and portfolio building",
  "Certificate of completion",
];


// Syllabus data
export   const Syllabus = {
    total:[
      {title:"modules",value:8},
      {title:"lessons",value:72},
      {title:"duration",value:"48 hours"},
      {title:"projects",value:12}
    ],
    modules: [
      {
        id: 1,
        title: "Frontend Foundations",
        description: "Master the core concepts of modern frontend development",
        duration: "6 hours",
        lessons: 8,
        progress: 100,
        lessonsList: [
          { name: "HTML5 & Semantic Web", duration: "45 min", type: "video", completed: true },
          { name: "Advanced CSS3 & Flexbox", duration: "1 hour", type: "video", completed: true },
          { name: "CSS Grid Layout", duration: "1.5 hours", type: "video", completed: true },
          { name: "Responsive Design Principles", duration: "1 hour", type: "video", completed: true },
          { name: "CSS Variables & Custom Properties", duration: "45 min", type: "video", completed: true },
          { name: "Modern CSS Frameworks", duration: "1 hour", type: "video", completed: true },
          { name: "Building a Portfolio Layout", duration: "2 hours", type: "project", completed: true },
          { name: "Module 1 Quiz", duration: "30 min", type: "quiz", completed: true }
        ]
      },
      {
        id: 2,
        title: "JavaScript Fundamentals",
        description: "Deep dive into modern JavaScript concepts and patterns",
        duration: "8 hours",
        lessons: 10,
        progress: 100,
        lessonsList: [
          { name: "ES6+ Syntax & Features", duration: "1 hour", type: "video", completed: true },
          { name: "Functions & Scope", duration: "1.5 hours", type: "video", completed: true },
          { name: "Arrays & Objects Methods", duration: "2 hours", type: "video", completed: true },
          { name: "Async JavaScript & Promises", duration: "2 hours", type: "video", completed: true },
          { name: "Modern Array Methods", duration: "1 hour", type: "video", completed: true },
          { name: "DOM Manipulation", duration: "1.5 hours", type: "video", completed: true },
          { name: "Event Handling", duration: "1 hour", type: "video", completed: true },
          { name: "Building a Todo Application", duration: "3 hours", type: "project", completed: true },
          { name: "JavaScript Challenges", duration: "1 hour", type: "exercise", completed: true },
          { name: "Module 2 Quiz", duration: "30 min", type: "quiz", completed: true }
        ]
      },
      {
        id: 3,
        title: "React & Modern Frameworks",
        description: "Build dynamic applications with React and state management",
        duration: "12 hours",
        lessons: 14,
        progress: 75,
        lessonsList: [
          { name: "React Components & JSX", duration: "1.5 hours", type: "video", completed: true },
          { name: "Props & State Management", duration: "2 hours", type: "video", completed: true },
          { name: "Hooks & Functional Components", duration: "2.5 hours", type: "video", completed: true },
          { name: "Context API & Global State", duration: "2 hours", type: "video", completed: true },
          { name: "React Router & Navigation", duration: "1.5 hours", type: "video", completed: true },
          { name: "Building a E-commerce Cart", duration: "4 hours", type: "project", completed: true },
          { name: "Performance Optimization", duration: "1.5 hours", type: "video", completed: false },
          { name: "Testing React Applications", duration: "2 hours", type: "video", completed: false },
          { name: "Deployment Strategies", duration: "1 hour", type: "video", completed: false }
        ]
      },
      {
        id: 4,
        title: "Backend Development",
        description: "Server-side development with Node.js and databases",
        duration: "10 hours",
        lessons: 12,
        progress: 50,
        lessonsList: [
          { name: "Node.js Fundamentals", duration: "1.5 hours", type: "video", completed: true },
          { name: "Express.js Framework", duration: "2 hours", type: "video", completed: true },
          { name: "RESTful API Design", duration: "2 hours", type: "video", completed: true },
          { name: "Database Design & SQL", duration: "2 hours", type: "video", completed: true },
          { name: "MongoDB & NoSQL", duration: "1.5 hours", type: "video", completed: false },
          { name: "Authentication & Security", duration: "2 hours", type: "video", completed: false }
        ]
      },
      {
        id: 5,
        title: "Advanced Concepts",
        description: "Master advanced patterns and architecture",
        duration: "6 hours",
        lessons: 8,
        progress: 0,
        lessonsList: [
          { name: "Microservices Architecture", duration: "1.5 hours", type: "video", completed: false },
          { name: "GraphQL APIs", duration: "2 hours", type: "video", completed: false },
          { name: "WebSockets & Real-time", duration: "1.5 hours", type: "video", completed: false }
        ]
      }
    ]
  };

  export const feature = [
    "Lifetime access",
    "Certificate included",
    "Beginner friendly",
    "Project-based learning"
  ];
  export const topics = [
    
            "HTML5 & Semantics",
            "CSS3 & Flexbox",
            "JavaScript ES6+",
            "Responsive Design",
            "Git & GitHub",
            "Deployment",
          ]