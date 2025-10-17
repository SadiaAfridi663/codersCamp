import React from "react";
import { motion } from "framer-motion";
import { aboutArray } from "../../../Data/AboutArray";
import Button from "../UI/Button";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0a192f] via-[#112d4e] to-[#3baee9]/10 text-white py-20 px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Top Small Text */}
          <span className="text-white text-sm font-medium tracking-wide uppercase">
            {aboutArray.topText}
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
            {aboutArray.heading}
          </h1>

          {/* Sub Heading */}
          <p className="mt-5 text-lg text-gray-300">{aboutArray.subHeading}</p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button text={aboutArray.primaryBtn} variant="primary" />
            <Button text={aboutArray.secondaryBtn} variant="outline" />
          </div>
        </motion.div>

        {/* RIGHT IMAGE SIDE */}
        <motion.div
          className="relative w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Glowing Background Circle */}
          <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-40 top-1/2 -translate-y-1/2"></div>

          {/* Main Image Container */}
          <div className="relative w-[85%] max-w-md">
            {/* Main Image */}
            <img
              src={aboutArray.image}
              alt="Technology Illustration"
              className="w-full rounded-2xl shadow-2xl z-10"
            />

            {/* Floating Text Card - POSITIONED ON THE IMAGE */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 
                         bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full 
                         border border-white/20 shadow-xl flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white text-sm font-medium text-center whitespace-nowrap">
                {aboutArray.textBtn}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}