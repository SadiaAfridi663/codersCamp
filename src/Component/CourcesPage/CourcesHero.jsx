// components/CourseHero.jsx
import React, { useState } from "react";
import {FiUsers,FiAward,FiStar} from "react-icons/fi";
import Input from "../UI/Input";

export default function CourseHero({
  title = "Explore Our Courses",
  description = "Learn new skills from industry experts",
}) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-blue-600 text-white py-14 px-6 text-center relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title & Description */}
        <div className="mb-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl text-primary-light mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

       <Input type="text" placeholder="Search courses here....." />

      

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                label: "Professional Courses", 
                value: "100+",
                icon: <FiAward className="w-8 h-8" />
              },
              { 
                label: "Expert Instructors", 
                value: "50+",
                icon: <FiUsers className="w-8 h-8" />
              },
              { 
                label: "Happy Students", 
                value: "10K+",
                icon: <FiStar className="w-8 h-8" />
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/20 rounded-full text-primary-light">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-light font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}