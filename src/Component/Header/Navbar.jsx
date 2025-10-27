import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Play, ArrowRight, Menu, X } from "lucide-react";
import Button from "../UI/Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [activeCourse, setActiveCourse] = useState(null);
  const coursesDropdownRef = useRef(null);

  const courseToSubcourses = {
    "html-basics": "html-basics-subcourses",
    "intro-css": "intro-css-subcourses",
    "js-basics": "js-basics-subcourses",
    "git-basics": "html-basics-subcourses",
    "react-fundamentals": "intro-css-subcourses",
    "nodejs-basics": "js-basics-subcourses",
    "tailwind-projects": "intro-css-subcourses",
    "mongodb-basics": "js-basics-subcourses",
    "full-stack": "full-stack-subcourses",
    "api-integration": "full-stack-subcourses",
    "nextjs-advanced": "full-stack-subcourses",
    microservices: "full-stack-subcourses",
  };

  const courseLevels = {
    beginner: [
      { id: "html-basics", name: "HTML Basics" },
      { id: "intro-css", name: "Intro to CSS" },
      { id: "js-basics", name: "JavaScript Basics" },
      { id: "git-basics", name: "Git Basics" },
    ],
    intermediate: [
      { id: "react-fundamentals", name: "React Fundamentals" },
      { id: "nodejs-basics", name: "Node.js Basics" },
      { id: "tailwind-projects", name: "Tailwind CSS Projects" },
      { id: "mongodb-basics", name: "MongoDB Basics" },
    ],
    advanced: [
      { id: "full-stack", name: "Full Stack Development" },
      { id: "api-integration", name: "API Integration" },
      { id: "nextjs-advanced", name: "Next.js Advanced" },
      { id: "microservices", name: "Microservices Architecture" },
    ],
  };

  const subcourses = {
    "html-basics-subcourses": [
      { name: "HTML Structure & Syntax" },
      { name: "Forms & Inputs" },
      { name: "Semantic HTML" },
      { name: "HTML5 Features" },
    ],
    "intro-css-subcourses": [
      { name: "CSS Selectors" },
      { name: "Box Model" },
      { name: "Flexbox" },
      { name: "CSS Grid" },
    ],
    "js-basics-subcourses": [
      { name: "Variables & Data Types" },
      { name: "Functions & Scope" },
      { name: "DOM Manipulation" },
      { name: "Event Handling" },
    ],
    "full-stack-subcourses": [
      { name: "Frontend Development" },
      { name: "Backend Development" },
      { name: "Database Integration" },
      { name: "Deployment Strategies" },
    ],
  };

  const handleLevelHover = (level) => {
    setActiveLevel(level);
    setActiveCourse(null);
  };

  const handleCourseHover = (courseId) => {
    setActiveCourse(courseId);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest("#mobile-menu") &&
        !event.target.closest("#menu-btn")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="w-full bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <header className="max-w-7xl mx-auto flex justify-between items-center lg:px-8 px-4 lg:py-4 py-3 bg-white relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold text-gray-900 hover:no-underline tracking-tight"
          >
            Bit<span className="text-primary-dark">CoderLabs</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <div className="group relative px-3 py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-all duration-300 relative py-2 px-1 ${
                  isActive
                    ? "text-primary-dark"
                    : "text-gray-700 hover:text-primary-dark"
                }`
              }
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-dark transition-all duration-300 ${
                  window.location.pathname === "/"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </NavLink>
          </div>

          {/* Courses Dropdown */}
          <div
            className="courses-dropdown group relative px-3 py-2"
            ref={coursesDropdownRef}
          >
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `font-medium transition-all duration-300 relative py-2 px-1 flex items-center gap-1 ${
                  isActive
                    ? "text-primary-dark"
                    : "text-gray-700 hover:text-primary-dark"
                }`
              }
            >
              Courses
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-dark scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </NavLink>

            {/* Dropdown */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 w-[800px] opacity-0 invisible -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="flex h-[400px]">
                {/* Level Column */}
                <div className="w-1/4 bg-white p-6 border-r border-gray-200 overflow-y-auto rounded-l-xl">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                    Course Levels
                  </h3>
                  <ul className="space-y-1">
                    {["beginner", "intermediate", "advanced"].map((level) => (
                      <li key={level} className="level-item group/level">
                        <button
                          className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center justify-between border ${
                            activeLevel === level
                              ? "bg-primary-dark text-white shadow-md"
                              : "text-gray-700 border-transparent hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm"
                          }`}
                          onMouseEnter={() => handleLevelHover(level)}
                        >
                          <span className="capitalize font-medium text-sm">
                            {level}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/level:opacity-100 transition-opacity duration-200" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Column */}
                <div className="w-2/5 p-6 border-r border-gray-200 overflow-y-auto">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                    Courses
                  </h3>
                  <div className="space-y-1">
                    {courseLevels[activeLevel]?.map((course) => (
                      <div key={course.id} className="course-item group/course">
                        <button
                          className="w-full text-left p-3 rounded-lg text-gray-700 border border-transparent hover:bg-primary-dark hover:text-white cursor-pointer hover:border-white transition-all duration-200 flex items-center justify-between"
                          onMouseEnter={() => handleCourseHover(course.id)}
                        >
                          <span className="font-medium text-sm">
                            {course.name}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/course:opacity-100 transition-opacity duration-200" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subcourse Column */}
                <div className="w-2/5 p-6 overflow-y-auto rounded-r-xl">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                    Lessons
                  </h3>
                  {!activeCourse ? (
                    <div className="text-gray-400 text-sm italic text-center py-8">
                      Select a course to view lessons
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {subcourses[courseToSubcourses[activeCourse]]?.map(
                        (subcourse, index) => (
                          <div
                            key={index}
                            className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center cursor-pointer group/lesson border border-transparent hover:border-blue-200"
                          >
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover/lesson:bg-primary-dark transition-colors duration-200">
                              <Play className="w-4 h-4 text-primary-dark group-hover/lesson:text-white transition-colors duration-200" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover/lesson:text-primary-dark transition-colors duration-200">
                              {subcourse.name}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Other Links */}
          {["about", "prices", "contact"].map((item) => (
            <div key={item} className="group relative px-3 py-2">
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 relative py-2 px-1 ${
                    isActive
                      ? "text-primary-dark"
                      : "text-gray-700 hover:text-primary-dark"
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-dark transition-all duration-300 ${
                    window.location.pathname === `/${item}`
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </NavLink>
            </div>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-3">
            <Button variant="outline" size="md" text="Sign Up" />
            <Button text="Join Now" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="menu-btn"
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50"
            onClick={handleMobileMenuToggle}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Overlay Background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"></div>
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-[64px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-0 p-4">
          {["/", "/courses", "/about", "/prices", "/contact"].map((path) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `py-3 px-4 font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-primary-dark text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {path === "/"
                ? "Home"
                : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
          <div className="flex space-x-3 pt-2">
            <Button text="Sign In" variant="squarefull" />
            <Button text="Join Now" variant="squarefull" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
