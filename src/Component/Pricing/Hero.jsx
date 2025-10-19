// import React from "react";
// import heroimage from '../../assets/hero.avif'

// import { useEffect } from "react";

// const PricingHero = ({ title, subtitle, buttonText, bgColor, textColor }) => {
//   return (
//     <section
//       className={`relative ${bgColor || "bg-[#4481b8]"} ${textColor || "text-white"} text-center py-20 px-4`}
//     //    style={{ backgroundImage: `url(${heroimage})` }}
//     >
//       {/* Optional Decorative Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#4481b8] to-[#6ba8d6] opacity-90 -z-10"></div>

//       <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
//         {title }
//       </h1>
//       <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 animate-fadeIn delay-200">
//         {subtitle}
//       </p>
//       <button className="bg-white text-[#4481b8] font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
//         {buttonText || "Explore Plans"}
//       </button>
//     </section>
//   );
// };

// export default PricingHero;

// import AOS from "aos";
// import "aos/dist/aos.css";


// const PricingHero = ({ title, subtitle, buttonText, bgColor, textColor }) => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   return (
//     <section
//       className={`py-30 border border-amber-400 relative ${bgColor || "bg-[#4481b8]"} ${
//         textColor || "text-white"
//       } text-center py-20 px-4 overflow-hidden`}
//       style={{
//         backgroundImage:
//           "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,93,145,0.8)), url('https://plus.unsplash.com/premium_photo-1733342678263-f53160dcd9e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=954')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
      
//       {/* Optional gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#4481b8] to-[#6ba8d6] opacity-90 -z-10"></div>

//       {/* Hero Content */}
//       <div className="max-w-3xl mx-auto">
//         <h1
//           data-aos="fade-up"
//           className="text-3xl md:text-5xl font-bold mb-4"
//         >
//           {title || "Choose Your Learning Plan"}
//         </h1>
//         <p
//           data-aos="fade-up"
//           data-aos-delay="200"
//           className="text-base md:text-lg max-w-2xl mx-auto mb-6"
//         >
//           {subtitle ||
//             "Get unlimited access to professional courses designed by experts."}
//         </p>
//         <div data-aos="zoom-in" data-aos-delay="400">
//           <button className="bg-white text-[#4481b8] font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
//             {buttonText || "Explore Plans"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingHero;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingHero = ({ title, subtitle, buttonText, bgColor, textColor }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className={`relative ${textColor || "text-white"} text-center py-6  md:py-14 px-4 overflow-hidden`}
       style={{
         backgroundImage:
           "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,93,145,0.8)), url('https://plus.unsplash.com/premium_photo-1733342678263-f53160dcd9e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=954')",
         backgroundSize: "cover",
         backgroundPosition: "center",
       }}
    >
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: '0s' }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/8 rounded-full blur-xl animate-float"
          style={{ animationDelay: '2.5s' }}
        ></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#4481b8]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#6ba8d6]/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Badge */}
        <div 
          data-aos="fade-down"
          data-aos-delay="200"
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-8"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold tracking-wide">TRUSTED BY 10,000+ LEARNERS</span>
        </div>

        {/* Main Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-3xl md:text-5xl  font-bold mb-6 leading-tight"
        >
          {title || "Choose Your"}
          <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Learning Journey
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-blue-100"
        >
          {subtitle ||
            "Unlock your potential with flexible plans designed for every stage of your coding journey"}
        </p>

        {/* CTA Buttons */}
        <div 
          data-aos="zoom-in" 
          data-aos-delay="500"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="group bg-white text-[#4481b8] font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
            {buttonText || "Explore Plans"}
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <button className="group bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 flex items-center gap-3">
            Watch Demo
            <svg 
              className="w-5 h-5 transform group-hover:scale-110 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div 
          // data-aos="fade-up"
          // data-aos-delay="600"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: "500+", label: "Courses" },
            { number: "10K+", label: "Students" },
            { number: "50+", label: "Instructors" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white/70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default PricingHero;
