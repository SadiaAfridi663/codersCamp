import React, { useState } from 'react';
import { Play, ChevronRight, Clock, Users, Target, CheckCircle } from 'lucide-react';


export const HowWeWork = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const processSteps = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategy & Discovery",
      description: "Deep dive into your business goals and technical requirements to create a perfect roadmap",
      duration: "1-2 weeks",
      videoId: "your-video-id-1"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Design & Prototyping",
      description: "Create stunning UI/UX designs with interactive prototypes for your approval",
      duration: "2-3 weeks",
      videoId: "your-video-id-2"
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Development Sprint",
      description: "Agile development with weekly demos, continuous integration and transparent progress",
      duration: "4-6 weeks",
      videoId: "your-video-id-3"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Testing & Launch",
      description: "Comprehensive testing across devices and smooth deployment with post-launch support",
      duration: "1-2 weeks",
      videoId: "your-video-id-4"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A transparent, collaborative process that delivers exceptional results every time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Process Steps */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(index)}
              >
                <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeVideo === index 
                    ? 'border-primary bg-primary/5 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-primary/30 hover:shadow-md'
                }`}>
                  
                  {/* Step Header */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeVideo === index 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                    }`}>
                      {step.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                          activeVideo === index ? 'text-primary' : 'text-gray-900'
                        }`}>
                          {step.title}
                        </h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      activeVideo === index 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 text-gray-600 group-hover:bg-primary/20 group-hover:text-primary'
                    }`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Watch Video CTA */}
                  <div className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                    activeVideo === index ? 'text-primary' : 'text-gray-500 group-hover:text-primary'
                  }`}>
                    <span>Watch process video</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Active Indicator */}
                  {activeVideo === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Video Player */}
          <div className="sticky top-8">
            {/* Main Video Player */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
              <div className="aspect-video bg-gray-900">
                <iframe
                  src={`https://www.youtube.com/embed/${processSteps[activeVideo].videoId}?modestbranding=1&rel=0&showinfo=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Process: ${processSteps[activeVideo].title}`}
                />
              </div>

              {/* Video Info */}
              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-primary font-semibold text-sm">
                    Step {activeVideo + 1} of {processSteps.length}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {processSteps[activeVideo].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {processSteps[activeVideo].description}
                </p>
              </div>
            </div>

            {/* Step Progress */}
            <div className="flex items-center gap-2 mt-6 p-4 bg-gray-50 rounded-xl">
              {processSteps.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                    index === activeVideo
                      ? 'bg-primary'
                      : index < activeVideo
                      ? 'bg-primary/50'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-4 gap-3 mt-6">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVideo(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                    activeVideo === index 
                      ? 'ring-2 ring-primary scale-105' 
                      : 'hover:ring-1 hover:ring-primary/50 hover:scale-102'
                  }`}
                >
                  {/* Thumbnail Background */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    activeVideo === index ? 'bg-primary/20' : 'bg-gray-200 group-hover:bg-primary/10'
                  }`} />
                  
                  {/* Thumbnail Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeVideo === index 
                        ? 'bg-primary text-white' 
                        : 'bg-white/80 text-gray-600 group-hover:bg-primary group-hover:text-white'
                    }`}>
                      <Play className="w-3 h-3 fill-current" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 mt-1 text-center leading-tight">
                      Step {index + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              {[
                { value: '50+', label: 'Projects' },
                { value: '98%', label: 'Success Rate' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

