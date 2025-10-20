import React from "react";
import FilterSection from "./FilterSection";
import PremiumChip from "./PremiumChip";
import { categories } from "../../../../Data/Courses.Array";

export default function CourseCategory({ expanded, toggleSection, selectedFilters, updateFilter }) {
  return (
    <FilterSection
      label="Category"
      expanded={expanded}
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
  );
}
