import React from "react";
import { popularCourses, trendingCourses, careerCourses } from "../../../Data/Array";

export default function FeaturedCoursesCategories({ activeFilter }) {
  const getFilteredCourses = () => {
    switch (activeFilter) {
      case "popular":
        return popularCourses;
      case "trending":
        return trendingCourses;
      case "career":
        return careerCourses;
      default:
        return popularCourses;
    }
  };

  const filteredCourses = getFilteredCourses();

  return (
    <div className="bg-gradient-to-br from-gray-300 via-gray-100 to-blue-200 lg:mx-7 mx-4 rounded-2xl overflow-visible border border-gray-200 shadow-sm"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-6">
        {filteredCourses.map((course) => {
          const Icon = course.icon; 
          return (
            <div 
              key={course.id} 
              className="bg-white p-6 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-2 border border-gray-300 relative group"
            >
              {/* Icon */}
              <div className="text-4xl text-primary mb-4 group-hover:text-white">
                <Icon />
              </div>
              
              {/* Title - Fixed height for consistency */}
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 leading-tight h-12 flex items-center">
                {course.title}
              </h3>
              
              {/* Description - Fixed height */}
              <p className="text-sm text-gray-600 group-hover:text-white/90 mb-4 leading-relaxed h-12 overflow-hidden">
                {course.desc}
              </p>
              
              {/* Course count and duration - Better alignment */}
              <div className="flex justify-between items-center mt-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full font-medium text-xs group-hover:bg-white group-hover:text-primary">
                  {course.courseCount}
                </span>
                <span className="bg-primary text-white px-3 py-1 rounded-full font-medium text-xs group-hover:bg-white group-hover:text-primary">
                  {course.duration}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}