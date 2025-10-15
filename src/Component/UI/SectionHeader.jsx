import React from "react";

export default function SectionHeader({title,subtitle,description}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-[#3baee9] font-semibold text-lg mb-2 block">
          {title}
        </span>
        <h2 className="text-5xl font-bold text-white mb-6">
            {subtitle}
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3baee9] to-[#2a9fd8]">
            
          </span>
        </h2>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            {description}
         
        </p>
      </div>
    </div>
  );
}
