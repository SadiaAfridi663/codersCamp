import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaBullhorn,
  FaBriefcase,
  FaPython,FaChartBar, FaPalette, FaRobot,FaLaptopCode, FaChartLine,
} from "react-icons/fa";

export const Right = [
  { id: 1, Level: "B", color: "bg-primary text-white" },
  { id: 2, Level: "I", color: "bg-primary/80 text-white" },
  { id: 3, Level: "T", color: "bg-primary/60 text-white" },
  { id: 4, Level: "C", color: "bg-primary/40 text-gray-700" },
  { id: 5, Level: "+", color: "bg-primary/20 text-gray-700" },
];

export const recommendations = [
  { id: 1, title: "Web Development", icon: "fas fa-code" },
  { id: 2, title: "Data Science", icon: "fas fa-chart-bar" },
  { id: 3, title: "UI/UX Design", icon: "fas fa-palette" },
];

export const FilterButtons = [
  {
    id: "popular",
    text: "Most Popular",
    variant: "square",
  },
  {
    id: "trending",
    text: "New & Trending",
    variant: "squareOutline",
  },
  {
    id: "career",
    text: "Career Paths",
    variant: "squareOutline",
  },
];

// Most Popular Courses
export const popularCourses = [
  {
    id: 1,
    title: "Web Development",
    desc: "Master HTML, CSS, JavaScript and modern frameworks like React",
    courseCount: "24 Courses",
    duration: "3 Months",
    icon: FaCode,
  },
  {
    id: 2,
    title: "Data Science",
    desc: "Python, ML, data analysis and visualization with real projects",
    courseCount: "18 Courses",
    duration: "4 Months",
    icon: FaChartBar,
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "SEO, social media marketing, and growth strategies",
    courseCount: "16 Courses",
    duration: "2 Months",
    icon: FaBullhorn,
  },
  {
    id: 4,
    title: "Python Programming",
    desc: "From basics to advanced applications and automation",
    courseCount: "20 Courses",
    duration: "3 Months",
    icon: FaPython,
  },
];

// New & Trending Courses
export const trendingCourses = [
  {
    id: 1,
    title: "AI & Machine Learning",
    desc: "ChatGPT, neural networks, and AI model development",
    courseCount: "12 Courses",
    duration: "5 Months",
    icon: FaRobot,
  },
  {
    id: 2,
    title: "Cloud Computing",
    desc: "AWS, Azure, Docker and Kubernetes deployment",
    courseCount: "11 Courses",
    duration: "3 Months",
    icon: FaCloud,
  },
  {
    id: 3,
    title: "Cybersecurity",
    desc: "Ethical hacking, network security and threat protection",
    courseCount: "8 Courses",
    duration: "4 Months",
    icon: FaShieldAlt,
  },
  {
    id: 4,
    title: "Mobile Development",
    desc: "Flutter, React Native for cross-platform apps",
    courseCount: "14 Courses",
    duration: "3 Months",
    icon: FaMobileAlt,
  },
];

// Career Path Courses
export const careerCourses = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "End-to-end web development career path",
    courseCount: "30 Courses",
    duration: "6 Months",
    icon: FaLaptopCode,
  },
  {
    id: 2,
    title: "Data Analyst",
    desc: "Complete data analysis and visualization career",
    courseCount: "15 Courses",
    duration: "4 Months",
    icon: FaChartLine,
  },
  {
    id: 3,
    title: "UX/UI Designer",
    desc: "Design thinking and interface design career",
    courseCount: "12 Courses",
    duration: "3 Months",
    icon: FaPalette,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    desc: "Infrastructure, CI/CD and cloud operations",
    courseCount: "18 Courses",
    duration: "5 Months",
    icon: FaServer,
  },
];
// src/Data/Array.js (or wherever you keep it)

export const CategoriesArray = [
  {
    id: 1,
    title: "Web Development",
    desc: "Build modern, responsive websites and web apps.",
    count: 24,
    icon: FaCode,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Data Science",
    desc: "Learn data visualization, analysis, and machine learning.",
    count: 18,
    icon: FaChartBar,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Design beautiful and user-friendly digital experiences.",
    count: 15,
    icon: FaPalette,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    desc: "Master deep learning, neural networks, and automation.",
    count: 12,
    icon: FaRobot,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    title: "Mobile App Development",
    desc: "Create mobile apps with Flutter, React Native, or Kotlin.",
    count: 14,
    icon: FaMobileAlt,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 6,
    title: "Backend Development",
    desc: "Learn APIs, Node.js, and build scalable server-side apps.",
    count: 10,
    icon: FaServer,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 7,
    title: "Database Management",
    desc: "Master SQL, MongoDB, and data architecture.",
    count: 9,
    icon: FaDatabase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 8,
    title: "Cloud Computing",
    desc: "Deploy apps using AWS, Azure, and Google Cloud.",
    count: 11,
    icon: FaCloud,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 9,
    title: "Cybersecurity",
    desc: "Protect systems, networks, and data from cyber threats.",
    count: 8,
    icon: FaShieldAlt,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 10,
    title: "Digital Marketing",
    desc: "Learn SEO, social media, and brand promotion strategies.",
    count: 16,
    icon: FaBullhorn,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 11,
    title: "Business & Freelancing",
    desc: "Develop entrepreneurial and freelancing skills.",
    count: 13,
    icon: FaBriefcase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 12,
    title: "Python Programming",
    desc: "Start coding with Python — beginner to advanced projects.",
    count: 20,
    icon: FaPython,
    color: "from-blue-500 to-cyan-500",
  },
];

// WhyChoseUs
import {
  FaUserGraduate,
  FaInfinity,
  FaCertificate,
  FaDollarSign,
  FaLaptop,
  FaUserPlus,
  FaBookOpen,
} from "react-icons/fa";

export const features = [
  {
    id: 1,
    icon: FaUserGraduate,
    title: "Learn from Experts",
    desc: "Gain knowledge from industry professionals with years of real-world experience.",
    gradient: "from-[#3baee9] to-[#2a9fd8]",
  },
  {
    id: 2,
    icon: FaInfinity,
    title: "Lifetime Access",
    desc: "Access all your courses anytime, anywhere with no expiry limit.",
    gradient: "from-[#3baee9] to-[#2a9fd8]",
  },
  {
    id: 3,
    icon: FaDollarSign,
    title: "Affordable Pricing",
    desc: "Get high-quality learning without breaking the bank.",
    gradient: "from-[#3baee9] to-[#2a9fd8]",
  },
  {
    id: 4,
    icon: FaCertificate,
    title: "Certificate of Completion",
    desc: "Receive a professional certificate to showcase your skills.",
    gradient: "from-[#3baee9] to-[#2a9fd8]",
  },
  {
    id: 5,
    icon: FaLaptop,
    title: "Flexible Online Learning",
    desc: "Learn at your own pace with interactive, online classes.",
    gradient: "from-[#3baee9] to-[#2a9fd8]",
  },
];

// HowItWorks
export const steps = [
  {
    number: "01",
    icon: FaUserPlus, // unique icon
    title: "Sign Up for Free",
    description:
      "Create your account in seconds with no commitment. Start your learning journey instantly.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: FaBookOpen, // new icon
    title: "Choose Your Course",
    description:
      "Browse our extensive catalog and select the perfect course for your goals and skill level.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    icon: features.find((f) => f.id === 5)?.icon,
    title: "Start Learning Online",
    description:
      "Access interactive content, video lessons, and practical exercises at your own pace.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "04",
    icon: features.find((f) => f.id === 4)?.icon,
    title: "Earn Your Certificate",
    description:
      "Complete the course and receive a professional certificate to showcase your achievement.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

// instructer data
import image from "../images/sir dawood.jpg";
import images from "../images/sir aizaz.jpeg";
export const instructors = [
  {
    id: 1,
    name: "Mian Dawood",
    title: "Senior Full Stack Web Developer",
    image: image,
    rating: 4.9,
    students: 12500,
    courses: 15,
    experience: "10+ years",
    specialization: [
      "Express",
      "APIS Specialist",
      "AI & Machine Learning Integration",
      "Laravel",
    ],
    description:
      "Experienced Full Stack Developer with over 8 years of expertise in building scalable web applications. Specializes in backend APIs, AI integration, and modern frameworks like Express and Laravel. Passionate about mentoring and creating impactful digital solutions..",
    social: {
      linkedin: "https://www.linkedin.com/in/miandawoodshah/",
      twitter: "#",
      github: "#",
    },
    alignment: "left",
  },
  {
    id: 2,
    name: "Mian Aizaz",
    title: "Frontend Developer",
    image: images,
    rating: 4.8,
    students: 4900,
    courses: 12,
    experience: "7+ years",
    specialization: ["React Js", "Next Js", "TS", "Php"],
    description:
      "Passionate Frontend Developer with a strong focus on building interactive, scalable, and user-friendly web applications using React and Next.js. Dedicated to crafting clean UI and seamless user experiences with modern technologies.",
    social: {
      linkedin: "https://www.linkedin.com/in/mian-aizaz-92a690172/",
      twitter: "#",
      github: "#",
    },
    alignment: "right",
  },
];

// instructor social icons
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export const socialIcons = [
  {
    icon: FaLinkedin,
    color: "hover:bg-blue-50 hover:text-blue-600",
    key: "linkedin",
  },
  {
    icon: FaTwitter,
    color: "hover:bg-sky-50 hover:text-sky-600",
    key: "twitter",
  },
  {
    icon: FaGithub,
    color: "hover:bg-gray-50 hover:text-gray-900",
    key: "github",
  },
];

// CTA
export const CTA = [
  "Expert-led courses",
  "Flexible learning",
  "Career advancement",
];

export const FooterLink = {
  quickLinks: [
    { name: "All Courses", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  supportLinks: [
    { name: "Help Center", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
  contact: {
    address: "123 Learning St, Knowledge City, Edu 45678",
    phone: "(123) 456-7890",
    email: "info@bitcoderlabs.com",
  },
  socialLinks: [
    { icon: "FaFacebookF", href: "#", color: "hover:bg-blue-600" },
    { icon: "FaTwitter", href: "#", color: "hover:bg-sky-500" },
    { icon: "FaLinkedinIn", href: "#", color: "hover:bg-blue-700" },
    { icon: "FaInstagram", href: "#", color: "hover:bg-pink-600" },
    { icon: "FaYoutube", href: "#", color: "hover:bg-red-600" },
  ],
};

// ✅ agar Features use ho raha hai to wo bhi export kar do:
export const Features = [
  {
    icon: "FaHeadset",
    title: "24/7 Support",
    desc: "Get instant help anytime you need.",
  },
  {
    icon: "FaCode",
    title: "Practical Learning",
    desc: "Hands-on coding experience.",
  },
  {
    icon: "FaShieldAlt",
    title: "Secure Platform",
    desc: "Safe and reliable learning environment.",
  },
];


export const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React 19: What's New and Improved",
      description:
        "Discover the latest features and improvements in React 19 and how they can enhance your development workflow.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
      category: "React",
      date: "Dec 15, 2024",
      author: "Sarah Johnson",
      readTime: "5 min read",
      featured: true,
    },
  ];



  // companies colelaboration data
  import navttc from "../images/NAVTTC.jpg";
  import srsp from "../images/srsp.png";
  import pseb from "../images/PSEB.png";
  import techlogix from "../images/Techlogix.jpeg";
  import systemsLimited from "../images/Systems Limited.png";
  import kpITBoard from "../images/KP IT Board.jpeg";
  import digikhata from "../images/DigiKhata.png";
  export const companies = [
    {
      id: 1,
      name: "NAVTTC",
      logo: navttc,
      students: "8K+",
      courses: "35+",
      type: "Government"
    },
    {
      id: 2,
      name  : "SRSP",
      logo: srsp,
      students: "5.5K+",
      courses: "28+",
      type: "NGO"
    },
    {
      id: 3,
      name: "PSEB",
      logo: pseb,
      students: "6.2K+",
      courses: "32+",
      type: "Government"
    },
    {
      id: 4,
      name: "Techlogix",
      logo: techlogix,
      students: "3.8K+",
      courses: "20+",
      type: "Private"
    },
    {
      id: 5,
      name: "Systems Limited",
      logo: systemsLimited,
      students: "4.5K+",
      courses: "25+",
      type: "Private"
    },
    {
      id: 6,
      name: "KP IT Board",
      logo: kpITBoard,
      students: "7.1K+",
      courses: "30+",
      type: "Government"
    },
    {
      id: 7,
      name: "DigiKhata",
      logo: digikhata,
      students: "2.3K+",
      courses: "15+",
      type: "Startup"
    },
    
  ];

