import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { categories } from "../../../Data/BlogcardsArray";

export default function CategoryButtons({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-blue-200"
                : "bg-white text-gray-700 hover:bg-[#e8f7ff] hover:text-[#2a9fd8] border border-gray-200 hover:border-[#3baee9]"
            }`}
          >
            <span className="text-lg">
              <Icon />
            </span>
            <span className="text-xs">{category.name}</span>

            {activeCategory === category.id && (
              <FaChevronRight className="text-sm ml-1" />
            )}
          </button>
        );
      })}
    </div>
  );
}
