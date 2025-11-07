import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

export default function BlogHero({ title, author, date, coverImage }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e8f7ff] via-white to-[#ffffff] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Blog Category Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-[#3baee9]/10 text-[#3baee9]">
          Featured Article
        </span>

        {/* Blog Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2a9fd8] leading-tight mb-4">
          {title || "Mastering React Hooks: A Complete Guide for 2025"}
        </h1>

        {/* Blog Meta Info */}
        <div className="flex justify-center items-center gap-6 text-gray-600 text-sm mb-10">
          <div className="flex items-center gap-2">
            <FaUser className="text-[#3baee9]" />
            <span>{author || "Abdur Rahman"}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#3baee9]" />
            <span>{date || "November 4, 2025"}</span>
          </div>
        </div>

        {/* Blog Cover Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#e8f7ff]">
          <img
            src={
              coverImage ||
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80"
            }
            alt="Blog Cover"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3baee9]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
}
