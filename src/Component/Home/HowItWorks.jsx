// src/Component/Home/HowItWorks.jsx
import React from "react";
import { steps } from "../../../Data/Array";
import SectionHeader from "../UI/SectionHeader";
import Button from "../UI/Button";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f9fbff] to-[#eef4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="SIMPLE PROCESS"
          subtitle={
            <>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3baee9] to-[#2a9fd8]">
                How It
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9fd8] to-[#3baee9]">
                Works
              </span>
            </>
          }
          description="Start your learning journey in just four simple steps"
        />

        
        <div className="relative mt-16">
          {/* Connecting Line (desktop only) */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-[#b3e5fc] to-[#bbdefb] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] animate-pulse"></div>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#3baee9]/40 transition-all duration-500 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}
                  >
                    <div className="text-white text-3xl">
                      <step.icon />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#2a9fd8] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 place-items-center">
          <Button text="Get Started Now" />
          <p className="text-gray-500 text-sm mt-4">
            No credit card required • Start learning in minutes
          </p>
        </div>
      </div>
    </section>
  );
}
