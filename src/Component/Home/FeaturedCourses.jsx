import React from "react";
import Button from "../Home/UI/Button";
import { FilterButtons } from "../../../Data/Array";
import FeaturedCoursesCategories from "./FeaturedCoursesCategories";

export default function FeaturedCourses() {
  return (
    <div>
    <div className="md:flex justify-between items-center space-x-4 p-5">
      <div className="max-w-7xl  py-12 px-4">
        {/* Title and Subtitle */}
        <div className="sm:text-center md:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 ">
            Featured Courses
          </h1>
          <p className="text-lg text-gray-600">
            Handpicked courses to boost your career
          </p>
        </div>
      </div>
      {/* Filter Buttons */}
      <div>
        <div className="flex justify-center space-x-4 ">
          {FilterButtons.map((button) => (
            <Button
              key={button.id}
              text={button.text}
              variant={button.variant}
              size="sm"
              onClick={button.onClick}
            />
          ))}
        </div>
      </div>
      
    </div>
    <FeaturedCoursesCategories />
    </div>
  );
}
