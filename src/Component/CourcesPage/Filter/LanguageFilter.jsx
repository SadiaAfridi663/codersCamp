import React from "react";
import { FaChevronDown } from "react-icons/fa";
import FilterSection from "./FilterSection";
import { languages } from "../../../../Data/Courses.Array";

export default function LanguageFilter({ expanded, toggleSection, selectedFilters, updateFilter }) {
  return (
    <FilterSection
      label="Language"
      expanded={expanded}
      onToggle={() => toggleSection("language")}
      selectedCount={selectedFilters.language ? 1 : 0}
    >
      <div className="mt-4 relative">
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
    </FilterSection>
  );
}
