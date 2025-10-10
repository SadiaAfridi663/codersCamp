import React from "react";
import Button from "../UI/Button";
import CategoriesCards from "./CategoriesCards";
import CategoriesArray from "../../../../Data/Array";
import CustomSlider from "../UI/Slider";

export default function Categories({ Categoriestitle, CategoriesSubtitle }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {Categoriestitle}
        </h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          {CategoriesSubtitle}
        </p>

        {/* 🔹 Reusable Slider */}
        <CustomSlider
          data={CategoriesArray.concat(CategoriesArray)} // duplicate for smooth loop
          slidesPerView={4}
          renderSlide={(cat) => <CategoriesCards {...cat} />}
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Button text="Explore Paths" />
          <Button text="Get Guidance" variant="outline" />
        </div>

        {/* Trust Badge */}
        <p className="mt-5 text-gray-500 text-sm">
          Trusted by{" "}
          <span className="font-bold text-gray-800">50,000+</span> learners worldwide.
        </p>
      </div>
    </section>
  );
}
