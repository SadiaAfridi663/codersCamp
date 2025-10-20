import React from "react";
import FilterSection from "./FilterSection";
import PremiumOption from "./PremiumOption";
import { FaStar } from "react-icons/fa";

export default function RatingFilter({ expanded, toggleSection, selectedFilters, updateFilter }) {
  return (
    <FilterSection
      label="Rating"
      expanded={expanded}
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
  );
}
