// src/Component/Home/TopInstructors.jsx
import React from "react";
import {
  FaStar,
  FaUsers,
  FaPlayCircle,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import SectionHeader from "./UI/SectionHeader";
import { instructors } from "../../../Data/Array";
import Button from "./UI/Button";

export default function TopInstructors() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/20 place-items-center">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <SectionHeader
          title="TOP INSTRUCTORS"
          subtitle={
            <>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3baee9] to-[#2a9fd8]">
                Learn from
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9fd8] to-[#3baee9]">
                Industry Experts
              </span>
            </>
          }
          description="Get mentored by professionals who are shaping the future of
            technology"
        />

        {/* Instructors Container */}
        <div className="space-y-20">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className={`flex flex-col ${
                instructor.alignment === "left"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Image Section  */}
              <div className="flex-1">
                <div className="relative max-w-md">
                  {/* Main Image Container */}
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-[380px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {instructor.experience}
                      </div>
                      <div className="text-xs text-gray-500">Experience</div>
                    </div>
                  </div>

                  {/* Social Links - Minimal */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3">
                    <div className="flex gap-2">
                      <a
                        href={instructor.social.linkedin}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                      >
                        <FaLinkedin className="text-sm" />
                      </a>
                      <a
                        href={instructor.social.twitter}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-sky-50 hover:text-sky-600 transition-colors duration-300"
                      >
                        <FaTwitter className="text-sm" />
                      </a>
                      <a
                        href={instructor.social.github}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-300"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 max-w-2xl">
                <div className="space-y-6">
                  {/* Name & Title */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {instructor.name}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-4">
                      {instructor.title}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {instructor.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 ">
                    <div className="">
                      <div className="flex items-center justify-start gap-1 mb-2">
                        <FaStar className="text-yellow-400 text-lg" />
                        <span className="text-2xl font-bold text-gray-900">
                          {instructor.rating}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm ml-4">Rating</span>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <FaUsers className="text-primary text-lg" />
                        <span className="text-2xl font-bold text-gray-900">
                          {(instructor.students / 1000).toFixed(0)}K+
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm">Students</span>
                    </div>

                    <div className="text-center">
                      <div className="mb-2">
                        <span className="text-2xl font-bold text-gray-900">
                          {instructor.courses}+
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm">Courses</span>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Specializes In
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialization.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg font-medium text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button text="View Profile" rounded="lg" />
                    <Button text="Courses" variant="outline" rounded="lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 place-items-center">
          <Button text="Browse Course " size="lg" />
        </div>
      </div>
    </section>
  );
}
