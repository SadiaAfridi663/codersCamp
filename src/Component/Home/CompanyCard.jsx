import React from "react";

export default function CompanyCard({ company }) {
  return (
    <div
      key={company.id}
      className="group w-[200px] relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-5 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:bg-white/90 mb-10">
      {/* Company Logo */}
      <div className="w-24 h-24  rounded-xl flex items-center justify-center mb-3  transition-colors duration-300">
        <img
          src={company.logo}
          alt={company.name}
          className="w-20 h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Company Info */}
      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#3baee9] transition-colors duration-300">
        {company.name}
      </h3>

      {/* Company Type */}
      <span
        className={`mt-1 text-[11px] px-2 py-0.5 rounded-full font-medium ${
          company.type === "Government"
            ? "bg-green-100 text-green-700"
            : company.type === "Private"
            ? "bg-blue-100 text-blue-700"
            : company.type === "Telecom"
            ? "bg-purple-100 text-purple-700"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        {company.type}
      </span>

      {/* Divider */}
      <div className="w-10 border-t border-gray-200 mt-3 mb-2"></div>

      {/* Stats */}
      <div className="flex justify-between w-full text-xs text-gray-600">
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{company.students}</div>
          <div className="text-gray-500">Students</div>
        </div>
        <div className="flex-1 border-l border-gray-200"></div>
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{company.courses}</div>
          <div className="text-gray-500">Courses</div>
        </div>
      </div>
    </div>
  );
}
