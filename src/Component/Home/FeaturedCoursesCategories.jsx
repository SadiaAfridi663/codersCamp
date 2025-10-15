import React from "react";
import { popularCourses } from "../../../Data/Array";

export default function FeaturedCoursesCategories() {
  return (
    <div className="bg-gradient-to-br from-[#0a192f] via-[#112d4e] to-[#3baee9]/10 mx-15 rounded-2xl overflow-visible"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5">
        {popularCourses.map((course) => {
          const Icon = course.icon; 
          return (
            <div 
              key={course.id} 
              className="bg-gray-200 p-6 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-6 border-r border-gray-200 relative z-20" /* Increased translate and added z-20 */
            >
              <div className="text-4xl text-primary mb-4">
                <Icon />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 leading-tight">
                {course.title}
              </h3>
              
              <p className="text-sm opacity-80 mb-4 leading-relaxed">
                {course.desc}
              </p>
              
              {/* Professional course count and duration design */}
              <div className="flex justify-between items-center text-xs opacity-80">
                <span className="bg-primary text-white px-3 py-1 rounded-full font-medium">
                  {course.courseCount}
                </span>
                <span className="bg-primary text-white px-3 py-1 rounded-full font-medium">
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