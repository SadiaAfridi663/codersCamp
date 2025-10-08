import React from "react";
import hero from "../../assets/hero.avif"

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-around overflow-hidden px-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Learn <span className="text-primary">Anything</span>,<br />
          <span className="text-primary">Anytime</span>,{" "}
          <span className="text-primary">Anywhere</span>
        </h1>

        <p className="text-xl md:text-2xl text-white mb-7 max-w-3xl mx-auto leading-relaxed">
          Join{" "}
          <span className="font-semibold text-primary">
            thousands of learners
          </span>{" "}
          building their future with our expert-led courses.
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses, instructors, or categories..."
              className="w-full px-6 py-4 pl-14 rounded-full border border-gray-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary text-lg transition-all duration-300"
            />
            <i className="fas fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
              Search
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
            <i className="fas fa-book-open"></i>
            Browse Courses
          </button>
          <button className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
            <i className="fas fa-graduation-cap"></i>
            Start Learning for Free
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 mt-10 bg-white/90 border border-gray-200 shadow-xl rounded-2xl p-4 max-w-[370px] w-full ml-8 backdrop-blur-sm">
        {/* Course Level Card */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Courses For Every Level
          </h2>
          <div className="flex justify-start items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              B
            </div>
            <div className="w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center text-white font-bold text-sm">
              I
            </div>
            <div className="w-8 h-8 bg-primary/60 rounded-full flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <div className="w-8 h-8 bg-primary/40 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm">
              C
            </div>
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm">
              +
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 font-medium">
              Beginner to Advanced
            </span>
            <span className="text-primary font-bold">→</span>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white border border-gray-100 rounded-lg p-3 mb-4 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-700">
              Learning Progress
            </h3>
            <span className="text-md font-bold text-primary">73%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-primary h-2 rounded-full"
              style={{ width: "73%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>7,300 learners</span>
            <span>10,000 goal</span>
          </div>
        </div>

        {/* Recommendation Card */}
        <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-md">Weekly Recommendation</h3>
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
              <span className="font-bold text-sm">A+</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-white/10 rounded-md p-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <i className="fas fa-code text-primary text-xs"></i>
              </div>
              <span className="font-medium text-sm">Web Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-md p-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <i className="fas fa-chart-bar text-primary text-xs"></i>
              </div>
              <span className="font-medium text-sm">Data Science</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-md p-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <i className="fas fa-palette text-primary text-xs"></i>
              </div>
              <span className="font-medium text-sm">UI/UX Design</span>
            </div>
          </div>
          <button className="w-full mt-3 bg-white text-primary py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
