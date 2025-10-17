// src/Component/Home/FilterRadios.jsx
import React from "react";

export default function FilterRadios({ label, options, selected, onChange, labelMap = {} }) {
  return (
    <div className="mb-5">
      <h4 className="text-sm font-semibold text-gray-800 mb-2">{label}</h4>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center cursor-pointer group">
            <input
              type="radio"
              name={label}
              checked={selected === opt}
              onChange={() => onChange(opt)}
              className="hidden"
            />
            <div
              className={`w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center transition-all ${
                selected === opt ? "border-blue-500 bg-blue-500" : "border-gray-300 group-hover:border-blue-400"
              }`}
            >
              {selected === opt && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            <span className="text-gray-700 group-hover:text-blue-600 capitalize">
              {labelMap[opt] || opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
