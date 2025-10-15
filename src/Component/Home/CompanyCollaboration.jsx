import React from "react";
import { companies } from "../../../Data/Array";
import CustomSlider from "../UI/Slider";
import CompanyCard from "./CompanyCard";

export default function CompanyCollaboration() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#f9fcff] to-[#eaf7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#3baee9] font-semibold text-sm tracking-wide uppercase">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Collaborating with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3baee9] to-[#2a9fd8]">
              Pakistan’s Best
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3 text-base">
            Partnering with leading organizations to empower learning and
            innovation across Pakistan.
          </p>
        </div>

        {/* Company Cards Grid */}
        <div className="relative">
          <CustomSlider
            data={companies.concat(companies)}
            slidesPerView={4}
            renderSlide={(company) => <CompanyCard company={company} />}
          />
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] rounded-2xl p-8 text-white text-center shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-white/80 text-sm">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-white/80 text-sm">Courses Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">12+</div>
              <div className="text-white/80 text-sm">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
