import React from "react";
import { FaCheck } from "react-icons/fa";

export default function PremiumOption({ label, type, name, selected, onChange, badgeColor, icon }) {
  const badgeColors = {
    emerald: "bg-emerald-100 text-emerald-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
  };

  return (
    <label className="flex items-center gap-3 text-sm cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
      <div className="relative flex items-center gap-3 flex-1">
        {type === "checkbox" ? (
          <div className="relative">
            <input
              type="checkbox"
              checked={selected}
              onChange={onChange}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                selected
                  ? "bg-gray-900 border-gray-900"
                  : "border-gray-300 group-hover:border-gray-400"
              }`}
            >
              {selected && <FaCheck className="text-white text-xs" />}
            </div>
          </div>
        ) : (
          <div className="relative">
            <input
              type="radio"
              name={name}
              checked={selected}
              onChange={onChange}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                selected
                  ? "border-gray-900"
                  : "border-gray-300 group-hover:border-gray-400"
              }`}
            >
              {selected && <div className="w-2 h-2 bg-gray-900 rounded-full" />}
            </div>
          </div>
        )}

        {icon && <span className="text-base">{icon}</span>}
        <span
          className={`flex-1 ${
            selected ? "text-gray-900 font-medium" : "text-gray-700"
          }`}
        >
          {label}
        </span>

        {badgeColor && (
          <span
            className={`text-xs px-2 py-1 rounded-full ${badgeColors[badgeColor]}`}
          >
            {typeof label === "string" && label.split(" ")[0]}
          </span>
        )}
      </div>
    </label>
  );
}
