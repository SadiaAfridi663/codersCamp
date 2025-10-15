import React from "react";
import Button from "./Button";

export default function Input({
  type = "text",
  placeholder = "Search here...",
  value,
  onChange,
  onClick,
  showButton = true,
  variant = "default",
  className = "",
}) {
  const variants = {
    default:
      "px-1 py-2 text-lg rounded-full border border-gray-300 shadow-lg focus:ring-4",
    small:
      "px-1 py-2 text-sm rounded-full border border-gray-300 shadow-md focus:ring-2",
  };

  return (
    <div className={`max-w-2xl mx-auto mb-12 ${className}`}>
      <div
        className={`flex items-center gap-2 bg-white rounded-full overflow-hidden ${variants[variant]}`}
      >
        {/* Icon */}
        <i
          className={`fas fa-search ml-4 ${
            variant === "small" ? "text-sm" : "text-xl"
          } text-gray-400`}
        ></i>

        {/* Input Field */}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
        />

        {/* Optional Button */}
        {showButton && (
          <Button
            text="Search"
            size={variant === "small" ? "sm" : "md"}
            onClick={onClick}
            className="mr-2"
          />
        )}
      </div>
    </div>
  );
}
