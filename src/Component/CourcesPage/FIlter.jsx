// src/Component/Home/Filter.jsx
import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaCheck, FaStar } from "react-icons/fa";
import {
  categories,
  levels,
  durations,
  languages,
  features,
} from "../../../Data/Courses.Array";
import Button from "../UI/Button";

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

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

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
    <aside className="w-80 sticky top-6 bg-white border-l border-gray-100 px-6 py-8 h-screen overflow-y-auto scrollbar-hide ">
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
                className="text-xs text-gray-400 hover:text-gray-600 font-medium transition-colors border-b border-transparent hover:border-gray-400"
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

      {/* Filter Sections */}
      <div className="space-y-6">
        <FilterSection
          label="Category"
          expanded={expandedSections.category}
          onToggle={() => toggleSection("category")}
          selectedCount={selectedFilters.category.length}
        >
          <div className="space-y-2 mt-4">
            {categories.map((category) => (
              <PremiumChip
                key={category}
                label={category}
                selected={selectedFilters.category.includes(category)}
                onClick={() => updateFilter("category", category)}
                count={Math.floor(Math.random() * 15) + 3}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection
          label="Difficulty Level"
          expanded={expandedSections.level}
          onToggle={() => toggleSection("level")}
          selectedCount={selectedFilters.level ? 1 : 0}
        >
          <div className="space-y-3 mt-4">
            {levels.map((level, index) => (
              <PremiumOption
                key={level}
                label={level}
                type="radio"
                name="level"
                selected={selectedFilters.level === level}
                onChange={() => updateFilter("level", level)}
                badgeColor={
                  index === 0 ? "emerald" : index === 1 ? "blue" : "purple"
                }
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection
          label="Price"
          expanded={expandedSections.price}
          onToggle={() => toggleSection("price")}
          selectedCount={selectedFilters.price ? 1 : 0}
        >
          <div className="space-y-3 mt-4">
            {["All Courses", "Free", "Paid"].map((price) => (
              <PremiumOption
                key={price}
                label={price}
                type="radio"
                name="price"
                selected={selectedFilters.price === price}
                onChange={() => updateFilter("price", price)}
                icon={price === "Free" ? "🆓" : price === "Paid" ? "💳" : "📚"}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection
          label="Duration"
          expanded={expandedSections.duration}
          onToggle={() => toggleSection("duration")}
          selectedCount={selectedFilters.duration ? 1 : 0}
        >
          <div className="mt-4">
            <div className="relative">
              <select
                value={selectedFilters.duration}
                onChange={(e) => updateFilter("duration", e.target.value)}
                className="w-full text-sm bg-white border border-gray-200 rounded-lg px-4 py-3 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all appearance-none cursor-pointer hover:border-gray-300"
              >
                <option value="">Select duration</option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>
        </FilterSection>

        <FilterSection
          label="Language"
          expanded={expandedSections.language}
          onToggle={() => toggleSection("language")}
          selectedCount={selectedFilters.language ? 1 : 0}
        >
          <div className="mt-4">
            <div className="relative">
              <select
                value={selectedFilters.language}
                onChange={(e) => updateFilter("language", e.target.value)}
                className="w-full text-sm bg-white border border-gray-200 rounded-lg px-4 py-3 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all appearance-none cursor-pointer hover:border-gray-300"
              >
                <option value="">Select language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>
        </FilterSection>

        <FilterSection
          label="Rating"
          expanded={expandedSections.rating}
          onToggle={() => toggleSection("rating")}
          selectedCount={selectedFilters.rating ? 1 : 0}
        >
          <div className="space-y-3 mt-4">
            {[5, 4, 3].map((rating) => (
              <PremiumOption
                key={rating}
                label={
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">& above</span>
                  </div>
                }
                type="radio"
                name="rating"
                selected={selectedFilters.rating === rating}
                onChange={() => updateFilter("rating", rating)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection
          label="Features"
          expanded={expandedSections.features}
          onToggle={() => toggleSection("features")}
          selectedCount={selectedFilters.features.length}
        >
          <div className="space-y-3 mt-4">
            {features.map((feature) => (
              <PremiumOption
                key={feature}
                label={feature}
                type="checkbox"
                selected={selectedFilters.features.includes(feature)}
                onChange={() => updateFilter("features", feature)}
              />
            ))}
          </div>
        </FilterSection>
      </div>

      {/* Results Button */}
      <div className="pt-8 mt-6 border-t border-gray-100 place-items-center">
        <Button variant="squareOutline" text="Show Results" size="sm" />
      </div>
    </aside>
  );
}

// Helper Components
const FilterSection = ({
  label,
  expanded,
  onToggle,
  children,
  selectedCount,
}) => (
  <div className="border-b border-gray-100 pb-6 last:border-b-0">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full group"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-900 tracking-wide">
          {label}
        </span>
        {selectedCount > 0 && (
          <span className="bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {selectedCount}
          </span>
        )}
      </div>
      <FaChevronDown
        className={`text-gray-400 text-xs transition-transform duration-300 ${
          expanded ? "rotate-180" : ""
        } group-hover:text-gray-600`}
      />
    </button>
    {expanded && <div className="animate-fadeIn">{children}</div>}
  </div>
);

const PremiumOption = ({
  label,
  type,
  name,
  selected,
  onChange,
  badgeColor,
  icon,
}) => {
  const badgeColors = {
    emerald: "bg-emerald-100 text-emerald-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
  };

  return (
    <label className="flex items-center gap-3 text-sm cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
      <div className="relative flex items-center gap-3 flex-1">
        {type === "checkbox" ? (
          <div className="relative">
            <input
              type="checkbox"
              checked={selected}
              onChange={onChange}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                selected
                  ? "bg-gray-900 border-gray-900"
                  : "border-gray-300 group-hover:border-gray-400"
              }`}
            >
              {selected && <FaCheck className="text-white text-xs" />}
            </div>
          </div>
        ) : (
          <div className="relative">
            <input
              type="radio"
              name={name}
              checked={selected}
              onChange={onChange}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                selected
                  ? "border-gray-900"
                  : "border-gray-300 group-hover:border-gray-400"
              }`}
            >
              {selected && <div className="w-2 h-2 bg-gray-900 rounded-full" />}
            </div>
          </div>
        )}

        {icon && <span className="text-base">{icon}</span>}

        <span
          className={`flex-1 ${
            selected ? "text-gray-900 font-medium" : "text-gray-700"
          }`}
        >
          {label}
        </span>

        {badgeColor && (
          <span
            className={`text-xs px-2 py-1 rounded-full ${badgeColors[badgeColor]}`}
          >
            {typeof label === "string" && label.split(" ")[0]}
          </span>
        )}
      </div>
    </label>
  );
};

const PremiumChip = ({ label, selected, onClick, count }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-between w-full p-3 rounded-lg border transition-all duration-300 group ${
      selected
        ? "border-gray-900 bg-gray-50"
        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
    }`}
  >
    <span
      className={`text-sm font-medium transition-colors ${
        selected ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
      }`}
    >
      {label}
    </span>
    <span
      className={`text-xs px-2 py-1 rounded transition-colors ${
        selected
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
      }`}
    >
      {count}
    </span>
  </button>
);
