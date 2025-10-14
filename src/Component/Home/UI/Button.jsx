import React from "react";

export default function Button({
  text = "Click Me",
  icon = null,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) {
  const baseStyle =
    "rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3";

  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    outline:
      "bg-white hover:bg-gray-50 text-primary border-2 border-primary",
      square: "bg-primary hover:bg-primary-dark text-white rounded-md",
  squareOutline:
    "bg-white hover:bg-gray-50 text-primary border-2 border-primary rounded-md",
    link: "flex items-center gap-2 text-[#3baee9] hover:text-primary-dark font-semibold text-sm transition-colors duration-300 shadow-none hover:shadow-none bg-transparent",
  };

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
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}
