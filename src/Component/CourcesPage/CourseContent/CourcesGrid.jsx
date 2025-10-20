// src/components/courses/CourseGrid.jsx
import React, { useState } from "react";
import CourseCard from "./CourseCards";
import { dummyCourses } from "../../../../Data/Courses.Array";



export default function CourseGrid() {
  const [layout, setLayout] = useState("grid"); // "grid" | "list"

  // Simulate filter active
  const toggleLayout = () => {
    setLayout(layout === "grid" ? "list" : "grid");
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Available Courses 🎓</h2>
          <button
            onClick={toggleLayout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            {layout === "grid" ? "Switch to List View" : "Switch to Grid View"}
          </button>
        </div>

        {/* Courses Display */}
        <div
          className={
            layout === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-6"
          }
        >
          {dummyCourses.map((course) => (
            <CourseCard key={course.id} course={course} layout={layout} />
          ))}
        </div>
      </div>
    </section>
  );
}
