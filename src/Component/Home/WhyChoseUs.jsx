// src/Component/Home/WhyChooseUs.jsx
import React from "react";

import { FaArrowRight } from "react-icons/fa";
import {features} from "../../../Data/Array"
import Button from "../UI/Button";
import SectionHeader from "../UI/SectionHeader";
import image from "../../../images/whychoseUs.avif"


export default function WhyChooseUs() {  
  return (
    <section className="lg:py-20 py-8 bg-gradient-to-br from-[#0a192f] via-[#112d4e] to-[#3baee9]/10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */} 
        <SectionHeader
          title="WHY CHOOSE US"
            subtitle={
            <>
              Exceptional Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3baee9] to-[#2a9fd8]">
                Experience
              </span>
            </>
          }
          description="Discover the difference with our innovative approach to online education"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Interactive Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl py-2 px-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#3baee9]/30"
              >
                <div className="flex items-start gap-6">
                  {/* Animated Icon */}
                    <feature.icon className="text-primary text-5xl" />

                  

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] transition-all duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 text-md mb-3 leading-relaxed">
                      {feature.desc}
                    </p>

                    <div className="inline-flex items-center">
                      <Button
                        variant="link"
                        text="Learn more"
                        icon={
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        }
                        className="!justify-start !p-0 !shadow-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                >
                  <div className="absolute inset-[2px] rounded-2xl bg-[#0a192f]"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Visual Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={image}
                alt="Online Learning"
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-transparent"></div>

              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-[#3baee9] text-sm">Success Rate</div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-[#e8f7ff] text-sm">Students</div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Join thousands of successful learners today
                  </p>
                  <button className="w-full bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] hover:from-[#2a9fd8] hover:to-[#3baee9] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center lg:mt-16 mt-8">
          <div className=" hidden sm:inline-flex items-center gap-8">
            <Button text=" Start Free Trial " size="lg" />
            <Button text="Schedule Demo" variant="outline" size="lg" />
          </div>
          <div className="sm:hidden inline-flex items-center gap-4">
            <Button text=" Start Free Trial " size="md" />
            <Button text="Schedule Demo" variant="outline" size="md" />
          </div>

        </div>
      </div>
    </section>
  );
}
