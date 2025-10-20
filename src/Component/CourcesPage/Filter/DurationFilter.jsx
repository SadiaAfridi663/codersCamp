import React from "react";
import { FaChevronDown } from "react-icons/fa";
import FilterSection from "./FilterSection";
import { durations } from "../../../../Data/Courses.Array";

export default function DurationFilter({ expanded, toggleSection, selectedFilters, updateFilter }) {
  return (
    <FilterSection
      label="Duration"
      expanded={expanded}
      onToggle={() => toggleSection("duration")}
      selectedCount={selectedFilters.duration ? 1 : 0}
    >
      <div className="mt-4 relative">
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
    </FilterSection>
  );
}
