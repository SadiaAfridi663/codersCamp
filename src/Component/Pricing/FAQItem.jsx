import React, { useState } from "react";

const FAQItem = ({ question, answer, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group border-b border-gray-200   overflow-hidden transition-all duration-300 ${className} `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center   px-6 py-5 text-left focus:outline-none"
      >
        <span className="font-semibold text-gray-800 group-hover:text-[#4481b8]">{question}</span>
        <i
          className={`fas fa-chevron-down  text-[#4481b8] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      <div
        className={`px-6  text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
          isOpen
            ? "max-h-40 opacity-100 pb-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;
