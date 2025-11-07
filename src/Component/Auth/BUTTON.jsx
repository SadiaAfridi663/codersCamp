// src/Component/UI/Button.jsx
import React from "react";

export default function Button({ text, icon, className = "", onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition transform hover:-translate-y-0.5 ${className}`}
    >
      <span>{text}</span>
      {icon && <span className="text-sm">{icon}</span>}
    </button>
  );
}
