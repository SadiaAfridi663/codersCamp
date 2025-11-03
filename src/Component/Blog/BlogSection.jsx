import { useState } from "react";
import {
  FaArrowRight,
  FaCalendar,
  FaUser,
  FaClock,
  FaChevronRight,
  FaGlobe,
  FaLaptopCode,
  FaRobot,
  FaRocket,
  FaPaintBrush,
  FaMobileAlt,
  FaChartBar,
  FaCode,
} from "react-icons/fa";


export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories
  const categories = [
  { id: "all", name: "All Topics", icon: <FaGlobe /> },
  { id: "web-dev", name: "Web Dev", icon: <FaLaptopCode /> },
  { id: "ai", name: "AI & ML", icon: <FaRobot /> },
  { id: "career", name: "Career", icon: <FaRocket /> },
  { id: "design", name: "Design", icon: <FaPaintBrush /> },
  { id: "mobile", name: "Mobile", icon: <FaMobileAlt /> },
  { id: "data-science", name: "Data Science", icon: <FaChartBar /> },
  { id: "programming", name: "Coding", icon: <FaCode /> },
];


  // Blog data
  const blogs = [
    {
      id: 1,
      title: "Master React Hooks in 2024",
      description:
        "Learn how to use modern React hooks to build efficient and clean components with practical examples.",
      category: "web-dev",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true,
      trending: true,
    },
    {
      id: 2,
      title: "AI Tools Every Developer Should Know",
      description:
        "Discover the top AI tools that are revolutionizing the way developers work and code.",
      category: "ai",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      featured: true,
      trending: false,
    },
    {
      id: 3,
      title: "Building Your Tech Career in 2024",
      description:
        "Essential strategies and tips to advance your tech career in the current market landscape.",
      category: "career",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
      author: "Alex Rodriguez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      featured: false,
      trending: true,
    },
    {
      id: 4,
      title: "Modern UI Design Principles",
      description:
        "Learn the fundamental principles of modern UI design that create exceptional user experiences.",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
      author: "Emma Wilson",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      featured: false,
      trending: false,
    },
    {
      id: 5,
      title: "Python for Data Analysis",
      description:
        "Get started with data analysis using Python and popular libraries like Pandas and NumPy.",
      category: "data-science",
      image:
        "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=800&q=80",
      author: "David Kim",
      date: "Dec 5, 2024",
      readTime: "12 min read",
      featured: false,
      trending: true,
    },
    {
      id: 6,
      title: "Flutter vs React Native 2024",
      description:
        "Comprehensive comparison of Flutter and React Native for cross-platform mobile development.",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      author: "Lisa Wang",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      featured: true,
      trending: false,
    },
  ];

  // Filtered blogs
  const filteredBlogs =
    activeCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#e8f7ff] border border-[#3baee9]/20 text-[#2a9fd8] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#3baee9] rounded-full animate-pulse"></span>
            Latest Insights & Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover{" "}
            <span className="bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] bg-clip-text text-transparent">
              Amazing
            </span>{" "}
            Content
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of articles, tutorials, and insights
            to level up your skills.
          </p>
        </div>

        {/* Always Visible Filter Categories */}
        <div className="mb-12 flex  justify-between items-center flex-wrap gap-4">
          <div className="flex items-center justify-start ">
            <div className=" flex lg:flex-col lg:items-start sm:flex-row sm:items-center gap-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Browse Content
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-3 py-1 rounded-full border w-25">
                <span className="w-2 h-2 bg-[#3baee9] rounded-full"></span>
                {filteredBlogs.length} articles
              </div>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-3 py-2 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105  cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-700 hover:bg-[#e8f7ff] hover:text-[#2a9fd8] border border-gray-200 hover:border-[#3baee9]"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-xs">{category.name}</span>
                {activeCategory === category.id && (
                  <FaChevronRight className="text-sm ml-1" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid (unchanged) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-[#3baee9]/30 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

              {/* Blog Image */}
              <div className="relative overflow-hidden h-56 ">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      blog.featured
                        ? "bg-yellow-400/90 text-yellow-900"
                        : "bg-[#3baee9]/90 text-white"
                    }`}
                  >
                    {blog.featured
                      ? "⭐ Featured"
                      : categories.find((cat) => cat.id === blog.category)
                          ?.name}
                  </span>
                  {blog.trending && (
                    <span className="px-3 py-1.5 bg-red-500/90 text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                      🔥 Trending
                    </span>
                  )}
                </div>
              </div>

              {/* Blog Content */}
              <div className="relative p-6 z-10">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <FaUser className="text-[#3baee9] text-xs" />
                      <span className="font-medium">{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaCalendar className="text-[#3baee9] text-xs" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-full">
                    <FaClock className="text-[#3baee9] text-xs" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#2a9fd8] transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                  {blog.description}
                </p>

                <button className="group/btn w-full flex items-center justify-between bg-gradient-to-r from-[#e8f7ff] to-blue-50 hover:from-[#3baee9] hover:to-[#2a9fd8] text-[#2a9fd8] hover:text-white px-5 py-3 rounded-xl font-semibold transition-all duration-500 hover:shadow-lg border cursor-pointer border-[#3baee9]/20 hover:border-transparent">
                  <span>Continue Reading</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                      Explore
                    </span>
                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </div>
                </button>
              </div>

              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#3baee9]/10 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Empty message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#e8f7ff] to-blue-100 rounded-3xl flex items-center justify-center">
              <span className="text-5xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No articles found
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Try selecting a different category or check back later for new
              content.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore All Articles
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredBlogs.length > 0 && (
          <div className="text-center mt-16">
            <button className="group bg-white border-2 border-[#3baee9] text-[#3baee9] hover:bg-[#3baee9] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="flex items-center gap-3">
                Load More Articles
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
