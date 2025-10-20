import React from "react";
import FilterSection from "./FilterSection";
import PremiumOption from "./PremiumOption";

const prices = ["All Courses", "Free", "Paid"];

export default function PriceFilter({ expanded, toggleSection, selectedFilters, updateFilter }) {
  return (
    <FilterSection
      label="Price"
      expanded={expanded}
      onToggle={() => toggleSection("price")}
      selectedCount={selectedFilters.price ? 1 : 0}
    >
      <div className="space-y-3 mt-4">
        {prices.map((price) => (
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
  );
}
