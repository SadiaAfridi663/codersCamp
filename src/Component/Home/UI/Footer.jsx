// src/Component/Home/Footer.jsx
import React from "react";
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight,FaHeadset,FaCode,FaShieldAlt,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaYoutube
} from "react-icons/fa";
import { quickLinks, supportLinks, socialLinks, Features, } from "../../../../Data/Array";

// Icon mapping object
const iconComponents = {
  FaCode,FaShieldAlt,FaHeadset,FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaYoutube
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f7ff] to-white opacity-50"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Features Strip */}
        <div className="bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Features.map((feature, index) => {
                const IconComponent = iconComponents[feature.icon];
                return (
                  <div key={index} className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{feature.title}</h4>
                      <p className="text-white/80 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info - Left Side */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">BL</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900">BitCoderLabs</span>
                  <p className="text-gray-500 text-sm">Learn. Code. Succeed.</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                Empowering developers and tech enthusiasts with cutting-edge courses, 
                hands-on projects, and industry expertise to accelerate your career in technology.
              </p>
              
              {/* Newsletter Subscription */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Stay Updated</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#3baee9] focus:ring-2 focus:ring-[#3baee9]/20 transition-all duration-300 text-sm"
                  />
                  <button className="bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] hover:from-[#2a9fd8] hover:to-[#3baee9] text-white px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const SocialIcon = iconComponents[social.icon];
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-transparent`}
                      >
                        <SocialIcon className="text-sm" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Links Sections - Right Side */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3baee9] rounded-full"></div>
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#3baee9] transition-all duration-300 flex items-center gap-3 group py-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-[#3baee9] transition-colors duration-300"></div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3baee9] rounded-full"></div>
                  Support
                </h3>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#3baee9] transition-all duration-300 flex items-center gap-3 group py-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-[#3baee9] transition-colors duration-300"></div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#3baee9] rounded-full"></div>
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-[#3baee9] group-hover:text-white transition-all duration-300 mt-1 flex-shrink-0">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm group-hover:text-[#3baee9] transition-colors duration-300">123 Tech Park</p>
                      <p className="text-gray-600 text-sm group-hover:text-[#3baee9] transition-colors duration-300">Innovation City, IC 54321</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-[#3baee9] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <FaPhone className="text-sm" />
                    </div>
                    <a href="tel:+11234567890" className="text-gray-600 hover:text-[#3baee9] transition-colors duration-300 text-sm">
                      +1 (123) 456-7890
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-[#3baee9] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <FaEnvelope className="text-sm" />
                    </div>
                    <a href="mailto:hello@bitcoderlabs.com" className="text-gray-600 hover:text-[#3baee9] transition-colors duration-300 text-sm">
                      hello@bitcoderlabs.com
                    </a>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 p-4 bg-gradient-to-r from-[#e8f7ff] to-[#f0faff] rounded-2xl border border-[#3baee9]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3baee9] rounded-xl flex items-center justify-center">
                      <FaHeadset className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Expert Support</p>
                      <p className="text-gray-500 text-xs">Always here to help you learn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} <span className="text-[#3baee9] font-semibold">BitCoderLabs</span>. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span>Empowering developers worldwide</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Code • Learn • Grow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}