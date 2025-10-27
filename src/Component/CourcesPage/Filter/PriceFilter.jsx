import React from "react";
import FilterSection from "./FilterSection";
import PremiumOption from "./PremiumOption";
import { Gift, CreditCard, BookOpen } from "lucide-react"; // ✅ import Lucide icons

const prices = ["All Courses", "Free", "Paid"];

export default function PriceFilter({ expanded, toggleSection, selectedFilters, updateFilter }) {
  const iconMap = {
    "All Courses": <BookOpen className="w-4 h-4 text-blue-500" />,
    Free: <Gift className="w-4 h-4 text-green-500" />,
    Paid: <CreditCard className="w-4 h-4 text-yellow-500" />,
  };

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
            icon={iconMap[price]} // ✅ replace emoji with icon
          />
        ))}
      </div>
    </FilterSection>
  );
}
