import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../../UI/Button";

import CourseCategory from "./CourseCategory";
import DifficultyLevel from "./DifficultyLevel";
import PriceFilter from "./PriceFilter";
import DurationFilter from "./DurationFilter";
import LanguageFilter from "./LanguageFilter";
import RatingFilter from "./RatingFilter";
import FeatureFilter from "./FeatureFilter";

export default function Filter() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    level: "",
    price: "",
    duration: "",
    language: "",
    rating: 0,
    features: [],
  });

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    level: true,
    price: false,
    duration: false,
    language: false,
    rating: false,
    features: false,
  });

  const toggleSection = (section) =>
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));

  const updateFilter = (type, value) => {
    setSelectedFilters((prev) => {
      if (type === "category" || type === "features") {
        const current = prev[type];
        return {
          ...prev,
          [type]: current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value],
        };
      }
      return { ...prev, [type]: prev[type] === value ? "" : value };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      category: [],
      level: "",
      price: "",
      duration: "",
      language: "",
      rating: 0,
      features: [],
    });
  };

  const activeFiltersCount = Object.values(selectedFilters)
    .flat()
    .filter(Boolean).length;

  return (
    <aside className="w-80 sticky top-6 bg-white border-l border-gray-100 px-6 py-8 h-screen overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-gray-900 tracking-tight mb-2">
            Filters
          </h2>
          <div className="flex items-center gap-3">
            <p className="text-xs text-gray-500 font-light">
              {activeFiltersCount > 0
                ? `${activeFiltersCount} active`
                : "Refine your search"}
            </p>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-gray-400 hover:text-gray-600 font-medium transition-colors border-b border-transparent hover:border-gray-400 cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <FaSearch className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-6 pr-4 py-2 text-sm border-b border-gray-200 bg-transparent focus:border-gray-900 focus:outline-none transition-colors placeholder-gray-400"
        />
      </div>

      {/* All Filter Sections */}
      <div className="space-y-6">
        <CourseCategory {...{ expanded: expandedSections.category, toggleSection, selectedFilters, updateFilter }} />
        <DifficultyLevel {...{ expanded: expandedSections.level, toggleSection, selectedFilters, updateFilter }} />
        <PriceFilter {...{ expanded: expandedSections.price, toggleSection, selectedFilters, updateFilter }} />
        <DurationFilter {...{ expanded: expandedSections.duration, toggleSection, selectedFilters, updateFilter }} />
        <LanguageFilter {...{ expanded: expandedSections.language, toggleSection, selectedFilters, updateFilter }} />
        <RatingFilter {...{ expanded: expandedSections.rating, toggleSection, selectedFilters, updateFilter }} />
        <FeatureFilter {...{ expanded: expandedSections.features, toggleSection, selectedFilters, updateFilter }} />
      </div>

      {/* Results Button */}
      <div className="pt-8 mt-6 border-t border-gray-100 place-items-center">
        <Button variant="squareOutline" text="Show Results" size="sm" />
      </div>
    </aside>
  );
}
