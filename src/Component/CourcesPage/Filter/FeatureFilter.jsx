import React from "react";
import FilterSection from "./FilterSection";
import PremiumOption from "./PremiumOption";
import { features } from "../../../../Data/Courses.Array";

export default function FeatureFilter({ expanded, toggleSection, selectedFilters, updateFilter }) {
  return (
    <FilterSection
      label="Features"
      expanded={expanded}
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
  );
}
