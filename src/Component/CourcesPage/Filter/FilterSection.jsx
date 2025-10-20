import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FilterSection({ label, expanded, onToggle, selectedCount, children }) {
  return (
    <div className="border-b border-gray-100 pb-6 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full group"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-900 tracking-wide">
            {label}
          </span>
          {selectedCount > 0 && (
            <span className="bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {selectedCount}
            </span>
          )}
        </div>
        <FaChevronDown
          className={`text-gray-400 text-xs transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          } group-hover:text-gray-600`}
        />
      </button>
      {expanded && <div className="animate-fadeIn">{children}</div>}
    </div>
  );
}
