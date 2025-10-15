import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeCourse, setActiveCourse] = useState(null);
  const coursesDropdownRef = useRef(null);

  // Course data mapping
  const courseToSubcourses = {
    'html-basics': 'html-basics-subcourses',
    'intro-css': 'intro-css-subcourses',
    'js-basics': 'js-basics-subcourses',
    'git-basics': 'html-basics-subcourses',
    'react-fundamentals': 'intro-css-subcourses',
    'nodejs-basics': 'js-basics-subcourses',
    'tailwind-projects': 'intro-css-subcourses',
    'mongodb-basics': 'js-basics-subcourses',
    'full-stack': 'full-stack-subcourses',
    'api-integration': 'full-stack-subcourses',
    'nextjs-advanced': 'full-stack-subcourses',
    'microservices': 'full-stack-subcourses'
  };

  // Course data
  const courseLevels = {
    beginner: [
      { id: 'html-basics', name: 'HTML Basics' },
      { id: 'intro-css', name: 'Intro to CSS' },
      { id: 'js-basics', name: 'JavaScript Basics' },
      { id: 'git-basics', name: 'Git Basics' }
    ],
    intermediate: [
      { id: 'react-fundamentals', name: 'React Fundamentals' },
      { id: 'nodejs-basics', name: 'Node.js Basics' },
      { id: 'tailwind-projects', name: 'Tailwind CSS Projects' },
      { id: 'mongodb-basics', name: 'MongoDB Basics' }
    ],
    advanced: [
      { id: 'full-stack', name: 'Full Stack Development' },
      { id: 'api-integration', name: 'API Integration' },
      { id: 'nextjs-advanced', name: 'Next.js Advanced' },
      { id: 'microservices', name: 'Microservices Architecture' }
    ]
  };

  // Subcourse data
  const subcourses = {
    'html-basics-subcourses': [
      { name: 'HTML Structure & Syntax' },
      { name: 'Forms & Inputs' },
      { name: 'Semantic HTML' },
      { name: 'HTML5 Features' }
    ],
    'intro-css-subcourses': [
      { name: 'CSS Selectors' },
      { name: 'Box Model' },
      { name: 'Flexbox' },
      { name: 'CSS Grid' }
    ],
    'js-basics-subcourses': [
      { name: 'Variables & Data Types' },
      { name: 'Functions & Scope' },
      { name: 'DOM Manipulation' },
      { name: 'Event Handling' }
    ],
    'full-stack-subcourses': [
      { name: 'Frontend Development' },
      { name: 'Backend Development' },
      { name: 'Database Integration' },
      { name: 'Deployment Strategies' }
    ]
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('#mobile-menu') && !event.target.closest('#menu-btn')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Navigation links
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/prices', name: 'Prices' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <div className="max-w-7xl w-full bg-white shadow-lg mx-auto">
      <header className="flex justify-between items-center lg:px-8 px-2 lg:py-4 py-2 bg-white shadow-md relative">
        {/* Logo */}
        <div className="flex items-center space-x-3">
         
          <NavLink 
            to="/" 
            className="lg:text-2xl text-lg font-bold text-gray-800 hover:no-underline"
          >
            Bit<span className="text-[#4481b8]">CoderLabs</span>
          </NavLink>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li  className="group">
                <NavLink 
                  to='/'
                  className={({ isActive }) => 
                    `text-gray-700 font-semibold hover:text-[#4481b8] transition-colors duration-300 relative py-2 ${
                      isActive ? 'text-[#4481b8]' : ''
                    }`
                  }
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4481b8] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            
            
            {/* Courses Dropdown */}
            <li className="courses-dropdown relative" style={{ position: 'static' }} ref={coursesDropdownRef}>
              <NavLink 
                to="/courses"
                className={({ isActive }) => 
                // text-gray-700 font-semibold hover:text-[#4481b8] transition-colors duration-300 relative py-2 flex items-center
                  ` text-gray-700 font-semibold hover:text-[#4481b8] transition-colors duration-300 relative py-2 
                   ${ 
                    isActive ? 'text-[#4481b8]' : ''
                  }`
                }
              >
                Courses
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4481b8] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>

              {/* Dropdown Content */}
              <div className="dropdown-content absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 mx-auto w-[800px] opacity-0 invisible -translate-y-2 transition-all duration-300 courses-dropdown:hover:opacity-100 courses-dropdown:hover:visible courses-dropdown:hover:translate-y-0">
                <div className="flex h-[400px]">
                  {/* Left Column - Course Levels */}
                  <div className="w-1/4 bg-gray-50 p-6 border-r border-gray-200 overflow-y-auto rounded-l-xl">
                    <h3 className="font-semibold text-gray-700 mb-4">Course Levels</h3>
                    <ul className="space-y-2">
                      {['beginner', 'intermediate', 'advanced'].map((level) => (
                        <li key={level} className="level-item group/level">
                          <button
                            className={`w-full text-left p-2 rounded-lg transition-all duration-200 flex items-center justify-between ${
                              activeLevel === level
                                ? 'bg-[#4481b8] text-white'
                                : 'text-gray-700 hover:bg-blue-100 hover:text-[#4481b8]'
                            }`}
                            onMouseEnter={() => handleLevelHover(level)}
                          >
                            <span className="capitalize">{level}</span>
                            <i className="fas fa-chevron-right text-xs opacity-0 group-hover/level:opacity-100 transition-opacity duration-200"></i>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Middle Column - Courses */}
                  <div className="w-2/5 p-6 border-r border-gray-200 overflow-y-auto">
                    <h3 className="font-semibold text-gray-700 mb-4">Courses</h3>
                    <div className="space-y-2">
                      {courseLevels[activeLevel]?.map((course) => (
                        <div key={course.id} className="course-item group/course">
                          <button
                            className="w-full text-left p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#4481b8] transition-all duration-200 flex items-center justify-between"
                            onMouseEnter={() => handleCourseHover(course.id)}
                          >
                            <span>{course.name}</span>
                            <i className="fas fa-chevron-right text-xs opacity-0 group-hover/course:opacity-100 transition-opacity duration-200"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Column - Subcourses */}
                  <div className="w-2/5 p-6 overflow-y-auto rounded-r-xl">
                    <h3 className="font-semibold text-gray-700 mb-4">Lessons</h3>
                    
                    {!activeCourse ? (
                      <div className="text-gray-500 italic"></div>
                    ) : (
                      <div className="space-y-2">
                        {subcourses[courseToSubcourses[activeCourse]]?.map((subcourse, index) => (
                          <div
                            key={index}
                            className="p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center cursor-pointer"
                          >
                            <i className="fas fa-play-circle text-[#4481b8] mr-3"></i>
                            <span>{subcourse.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>

            <li  className="group">
                <NavLink 
                  to='/about'
                  className={({ isActive }) => 
                    `text-gray-700 font-semibold hover:text-[#4481b8] transition-colors duration-300 relative py-2 ${
                      isActive ? 'text-[#4481b8]' : ''
                    }`
                  }
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4481b8] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
           
            <li  className="group">
                <NavLink 
                  to='/prices'
                  className={({ isActive }) => 
                    `text-gray-700 font-semibold hover:text-[#4481b8] transition-colors duration-300 relative py-2 ${
                      isActive ? 'text-[#4481b8]' : ''
                    }`
                  }
                >
                  Prices
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4481b8] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
               <li  className="group">
                <NavLink 
                  to='/contact'
                  className={({ isActive }) => 
                    `text-gray-700 font-semibold hover:text-[#4481b8] transition-colors duration-300 relative py-2 ${
                      isActive ? 'text-[#4481b8]' : ''
                    }`
                  }
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4481b8] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
          </ul>
        </nav>
        
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-5 py-2 border border-[#4481b8] text-[#4481b8] font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300">
            Login
          </button>
          <button className="px-5 py-2 bg-[#4481b8] text-white font-semibold rounded-full hover:bg-[#4481b8] transition-colors duration-300 shadow-md hover:shadow-lg shrink-0">
            Join Now
          </button>
          {/* Hamburger Menu */}
          <button
            id="menu-btn"
            className="md:hidden text-gray-700 hover:text-[#4481b8] focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-blue-50 p-4 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-4 text-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 font-semibold hover:text-[#4481b8] transition-colors ${
                  isActive ? 'text-[#4481b8]' : ''
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `text-gray-700 font-semibold hover:text-[#4481b8] transition-colors ${
                isActive ? 'text-[#4481b8]' : ''
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </NavLink>
          <button className="px-5 py-2 border border-[#4481b8] text-[#4481b8] font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;