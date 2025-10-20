import React from "react";

export default function PremiumChip({ label, selected, onClick, count }) {
  return (
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
}
