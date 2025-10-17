// src/Components/About/Technologies.jsx
import React, { useState } from "react";
import { technologies, techCategories } from "../../../Data/AboutArray";
import Button from "../UI/Button";

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-5xl font-bold mb-10 text-primary">Tech Stack & Learning Skills</h2>

    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {techCategories.map((category) => (
        <Button
  key={category}
  text={category}
  size="sm"
  rounded="full"
  onClick={() => setSelectedCategory(category)}
  className={
    selectedCategory === category
      ? "bg-blue-600  border border-blue-600 "
      : " text-blue-600 border border-blue-300 hover:bg-blue-50"
  }
  variant="primary"
/>

      ))}
    </div>

    {/* Technologies Grid */}
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {filteredTechnologies.map((tech, index) => {
        const IconComponent = tech.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center p-5 rounded-xl bg-white shadow-lg 
            hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer border border-gray-300 group"
          >
            <IconComponent
              className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            />
            <span className="text-sm font-medium mt-1 text-gray-800">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
}
