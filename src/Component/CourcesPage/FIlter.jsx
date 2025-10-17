// src/Component/Home/Filter.jsx
import React from "react";
import { FaFilter, FaStar, FaClock, FaLanguage, FaRedo, FaChevronDown } from "react-icons/fa";
import { categories, levels, durations, languages, features } from "../../../Data/Courses.Array";
import Input from "../UI/Input";
import FilterRadios from "./FilterRadios";

export default function Filter({ filters, handleChange, toggleFeature, resetFilters }) {
  return (
    <aside className="w-80 sticky top-6 bg-white border border-gray-200 rounded-xl shadow-lg p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <FaFilter className="text-blue-600 text-sm" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        </div>
        <button
          onClick={resetFilters}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
        >
          <FaRedo className="text-xs" />
          Reset
        </button>
      </div>

      <div className="h-[80vh] overflow-y-auto pr-2 space-y-6">
        {/* Search */}
        <Input
          type="text"
          variant="xs"
          placeholder="Search courses..."
          value={filters.search || ""}
          onChange={(e) => handleChange("search", e.target.value)}
        />

        {/* Category */}
        <FilterSelect
          label="Category"
          options={categories}
          value={filters.category}
          onChange={(v) => handleChange("category", v)}
        />

        {/* Difficulty Level */}
        <FilterRadios
          label="Difficulty Level"
          options={levels}
          selected={filters.level}
          onChange={(v) => handleChange("level", v)}
        />

        {/* Price */}
        <FilterRadios
          label="Price"
          options={["all", "free", "paid"]}
          selected={filters.price}
          onChange={(v) => handleChange("price", v)}
          labelMap={{ all: "All", free: "Free", paid: "Paid" }}
        />

        {/* Duration */}
        <FilterSelect
          label="Duration"
          icon={<FaClock className="text-blue-500" />}
          options={durations}
          value={filters.duration}
          onChange={(v) => handleChange("duration", v)}
        />

        {/* Language */}
        <FilterSelect
          label="Language"
          icon={<FaLanguage className="text-blue-500" />}
          options={languages}
          value={filters.language}
          onChange={(v) => handleChange("language", v)}
        />

        {/* Rating */}
        <div>
          <SectionLabel text="Rating" icon={<FaStar className="text-yellow-500" />} />
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleChange("rating", star)}
                  className={`text-2xl transition-all duration-200 hover:scale-110 ${
                    star <= filters.rating 
                      ? "text-yellow-400 scale-110" 
                      : "text-gray-300 hover:text-gray-400"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full border">
              {filters.rating}+ Stars
            </span>
          </div>
        </div>

        {/* Features */}
        <div>
          <SectionLabel text="Features" />
          <div className="space-y-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
            {features.map((feature) => (
              <CheckBox
                key={feature}
                label={feature}
                checked={filters.features.includes(feature)}
                onChange={() => toggleFeature(feature)}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

/* Helper Components */
const SectionLabel = ({ icon, text }) => (
  <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
    {icon}
    {text}
  </h3>
);

const FilterSelect = ({ label, icon, options, value, onChange }) => (
  <div className="relative">
    <SectionLabel text={label} icon={icon} />
    <div className="relative">
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white appearance-none cursor-pointer transition-all duration-300 hover:border-gray-300 shadow-sm"
      >
        <option value="" className="py-3 text-gray-500">All {label}</option>
        {options.map((option) => (
          <option 
            key={option} 
            value={option}
            className="py-3 text-gray-700 hover:bg-blue-50"
          >
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <FaChevronDown className="w-3 h-3 text-gray-400" />
      </div>
    </div>
  </div>
);

const CheckBox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white transition-colors">
    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
      checked 
        ? "bg-blue-600 border-blue-600 shadow-sm" 
        : "border-gray-400 group-hover:border-blue-500 bg-white"
    }`}>
      {checked && (
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className={`text-gray-700 transition-colors ${checked ? "font-medium text-blue-600" : "group-hover:text-gray-900"}`}>
      {label}
    </span>
  </label>
);