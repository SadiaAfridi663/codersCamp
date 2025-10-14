import React from "react";
import { popularCourses } from "../../../Data/Array";

export default function FeaturedCoursesCategories() {
  return (
    <div className="bg-primary mx-20">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {popularCourses.map((course) => (
      <div
        key={course.id}
        className="bg-primary text-gray-700 p-6 flex flex-col items-start 
        hover:bg-gray-900 hover:text-white hover:scale-105 
        transition-transform duration-500 ease-out cursor-pointer
        border border-transparent hover:border-gray-900"
      >
        {/* Icon Section */}
        <div className="text-4xl mb-2">
          <i className="fas fa-laptop-code"></i>
        </div>

        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm opacity-80">{course.desc}</p>
      </div>
    ))}
  </div>
</div>

  );
}
