import React from "react";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light">
      <div className="w-full max-w-5xl flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden bg-white">
        {/* Left side (branding) */}
        <div className="md:w-1/2 bg-primary flex flex-col justify-center items-center text-white p-10 space-y-4">
          <h1 className="text-4xl font-bold">BitCoderLabs Pvt Ltd</h1>
          <p className="text-lg text-center leading-relaxed max-w-md">
            Empowering developers to build the future with innovation and code.
          </p>
        </div>

        {/* Right side (form) */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-2">{title}</h2>
          <p className="text-gray-500 mb-6">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
