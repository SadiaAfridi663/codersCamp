import React from "react";
import Button from "../../UI/Button";
import CategoriesCards from "./CategoriesCards";
import { CategoriesArray } from "../../../../Data/Array";
import CustomSlider from "../../UI/Slider";

export default function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3baee9] to-[#2a9fd8]">
              Learning Paths
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3 text-base">
            Discover your perfect learning journey with our curated categories.
          </p>
        </div>

        {/* 🔹 Reusable Slider */}
        <CustomSlider
          data={CategoriesArray.concat(CategoriesArray)}
          renderSlide={(cat) => <CategoriesCards {...cat} />}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1.2 }, // mobile (1-2 cards)
            480: { slidesPerView: 2 }, // small devices
            768: { slidesPerView: 3 }, // tablets (medium)
            1024: { slidesPerView: 4 }, // laptops
            1280: { slidesPerView: 5 }, // large desktops (optional)
          }}
        />

        {/* CTA Buttons */}
        <div className="flex  justify-center items-center gap-4 mt-8">
          <Button text="Explore Paths" />
          <Button text="Get Guidance" variant="outline" />
        </div>

        {/* Trust Badge */}
        <p className="mt-5 text-gray-500 text-sm">
          Trusted by <span className="font-bold text-gray-800">50,000+</span>{" "}
          learners worldwide.
        </p>
      </div>
    </section>
  );
}
