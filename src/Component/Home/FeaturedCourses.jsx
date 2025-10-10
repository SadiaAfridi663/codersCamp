import React from "react";
import Button from "../Home/UI/Button";

export default function FeaturedCourses() {
  return (
    <div className="md:flex justify-between items-center space-x-4 mb-8 p-5">
      <div className="max-w-7xl  py-12 px-4">
        {/* Title and Subtitle */}
        <div className="sm:text-center md:text-left mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h1>
          <p className="text-lg text-gray-600">
            Handpicked courses to boost your career
          </p>
        </div>
      </div>
      {/* Filter Buttons */}
      <div>
      <div className="flex justify-center space-x-4 mb-8">
        <Button
          text="Most Popular"
          variant="square"
          size="sm"
          onClick={() => console.log("Most Popular clicked")}
        />
        <Button
          text="New & Trending"
          variant="squareOutline"
          size="sm"
          onClick={() => console.log("New & Trending clicked")}
        />
        <Button
          text="Career Paths"
          variant="squareOutline"
          size="sm"
          onClick={() => console.log("Career Paths clicked")}
        />
      </div>
      </div>
    </div>
  );
}
