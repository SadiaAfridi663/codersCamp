import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CategoriesCards({ title, desc, count, icon: Icon, color }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 my-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      {/* Gradient Hover Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all`} />

      {/* Icon */}
      <div className={`w-14 h-14 mb-5 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`}>
        <Icon />
      </div>

      {/* Content */}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
        <span className="text-sm text-gray-500">{count} Courses</span>
        <FaArrowRight className="text-gray-400 group-hover:text-gray-800 transition-all duration-200" />
      </div>
    </div>
  );
}
