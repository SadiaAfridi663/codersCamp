import React from "react";
import FilterSection from "./FilterSection";
import PremiumOption from "./PremiumOption";
import { levels } from "../../../../Data/Courses.Array";

export default function DifficultyLevel({ expanded, toggleSection, selectedFilters, updateFilter }) {
  return (
    <FilterSection
      label="Difficulty Level"
      expanded={expanded}
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
  );
}
