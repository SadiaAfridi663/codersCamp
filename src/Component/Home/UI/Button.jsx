import React from "react";

export default function Button({
  text = "Click Me",
  icon = "",
  variant = "primary",
  size = "md", // 👈 new size prop
  onClick,
  className = "",
}) {
  const baseStyle =
    "rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3";

  // Variant styles
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    outline: "bg-white hover:bg-gray-50 text-primary border-2 border-primary",
    square: "bg-primary hover:bg-primary-dark text-white rounded-md",
    squareOutline:"bg-white hover:bg-gray-50 text-primary border-2 border-primary rounded-md",
  };

  // Size styles
  const sizes = {
    sm: "text-sm px-4 py-2", 
    md: "text-base px-6 py-3", 
    lg: "text-lg px-8 py-4", 
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
}
