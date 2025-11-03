import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import { FilterButtons } from "../../../Data/Array";
import FeaturedCoursesCategories from "./FeaturedCoursesCategories";

export default function FeaturedCourses() {
  const [activeFilter, setActiveFilter] = useState("popular");
  const [buttonSize, setButtonSize] = useState("sm"); // default size for large screens

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  useEffect(() => {
    const updateButtonSize = () => {
      if (window.innerWidth < 640) {
        setButtonSize("xs")
      } else {
        setButtonSize("sm")
      }
    };

    updateButtonSize(); 
    window.addEventListener("resize", updateButtonSize);

    return () => window.removeEventListener("resize", updateButtonSize);
  }, []);

  return (
    <div>
      <div className="md:flex justify-between items-center space-x-4 p-5">
        <div className="max-w-7xl lg:py-12 py-7">
          {/* Title and Subtitle */}
          <div className="place-items-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Featured Courses
            </h1>
            <p className="text-lg text-gray-600">
              Handpicked courses to boost your career
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div>
          <div className="flex justify-center flex-wrap gap-3">
            {FilterButtons.map((button) => (
              <Button
                key={button.id}
                text={button.text}
                variant={
                  activeFilter === button.id ? "square" : "squareOutline"
                }
                size={buttonSize} 
                onClick={() => handleFilterClick(button.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <FeaturedCoursesCategories activeFilter={activeFilter} />
    </div>
  );
}
