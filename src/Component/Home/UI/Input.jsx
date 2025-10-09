import React from "react";
import Button from "./Button";

export default function Input({
  type = "text",
  placeholder = "Search here...",
  value,
  onChange,
  onClick,
  showButton = true,
  className = "",
}) {
  return (
    <div className={`max-w-2xl mx-auto mb-12 ${className}`}>
      <div className="relative">
        {/* Input Field */}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-6 py-4 pl-14 rounded-full border border-gray-300 shadow-lg 
                     focus:outline-none focus:ring-4 focus:ring-primary/20 
                     focus:border-primary text-lg transition-all duration-300 text-white bg-transparent"
        />

        {/* Icon */}
        <i className="fas fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>

        {/* Optional Button */}
        {showButton && (
          <Button
            text="Search"
            size="md"
            onClick={onClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2  transition-colors duration-300"
          /> 
        )}
      </div>
    </div>
  );
}
