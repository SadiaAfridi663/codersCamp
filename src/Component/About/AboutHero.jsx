import React from "react";
import { motion } from "framer-motion";
import { aboutArray } from "../../../Data/AboutArray";
import Button from "../UI/Button";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-primary/15 to-blue-50 relative flex items-center justify-center overflow-hidden py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-primary-dark rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Badge */}
            <motion.div
              className="inline-flex items-center gap-2  text-white bg-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              {aboutArray.topText}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary">Building Modern</span>
              <br />
              <span className="text-gray-800">& Innovative</span>
              <br />
              <span className="text-gray-800">Digital Solutions</span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
              className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {aboutArray.subHeading}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                text={aboutArray.primaryBtn} 
                variant="primary" 
                size="sm"
                className="transform hover:scale-105 transition-all duration-300"
              />
              <Button 
                text={aboutArray.secondaryBtn} 
                variant="outline" 
                size="sm"
                className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary transform hover:scale-105 transition-all duration-300"
              />
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {aboutArray.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Feature Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {aboutArray.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="text-primary text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}