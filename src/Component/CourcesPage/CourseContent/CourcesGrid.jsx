import React, { useState, useMemo, useCallback } from "react";
import CourseCard from "./CourseCards";
import { dummyCourses } from "../../../../Data/Courses.Array";
import Button from "../../UI/Button";
import Filter from "../FIlter";
import { FaGraduationCap, FaFilter, FaThLarge, FaList } from "react-icons/fa";

export default function CourseGrid() {
  const [layout, setLayout] = useState("grid");
  const [showFilter, setShowFilter] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    level: "",
    price: "all",
    rating: 0,
    duration: "",
    features: [],
    language: "all",
  });

  const handleChange = useCallback(
    (key, value) => setFilters((prev) => ({ ...prev, [key]: value })),
    []
  );

  const toggleFeature = useCallback(
    (feature) =>
      setFilters((prev) => ({
        ...prev,
        features: prev.features.includes(feature)
          ? prev.features.filter((x) => x !== feature)
          : [...prev.features, feature],
      })),
    []
  );

  const resetFilters = useCallback(
    () =>
      setFilters({
        search: "",
        category: "",
        level: "",
        price: "all",
        rating: 0,
        duration: "",
        features: [],
        language: "all",
      }),
    []
  );

  const filteredCourses = useMemo(() => {
    return dummyCourses.filter((course) => {
      const matchSearch = course.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchCategory =
        !filters.category || course.category === filters.category;
      const matchLevel = !filters.level || course.level === filters.level;
      const matchPrice =
        filters.price === "all" ||
        (filters.price === "free" && course.price === 0) ||
        (filters.price === "paid" && course.price > 0);
      const matchRating = course.rating >= filters.rating;
      const matchDuration =
        !filters.duration || course.duration === filters.duration;
      const matchLanguage =
        filters.language === "all" || course.language === filters.language;
      const matchFeatures =
        filters.features.length === 0 ||
        filters.features.every((f) => course.features?.includes(f));

      return (
        matchSearch &&
        matchCategory &&
        matchLevel &&
        matchPrice &&
        matchRating &&
        matchDuration &&
        matchLanguage &&
        matchFeatures
      );
    });
  }, [filters]);

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* ===== Header ===== */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaGraduationCap className="text-primary text-4xl" />
            Available Courses
          </h2>

          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <Button
              variant="outline"
              icon={<FaFilter className="w-5 h-5" />}
              onClick={() => setShowFilter(!showFilter)}
              className={`p-2 rounded-full transition-all duration-300 ${
                showFilter ? "bg-gray-200" : "bg-white"
              }`}
            />

            {/* Layout Toggle Button */}
            <Button
              variant="outline"
              icon={
                layout === "grid" ? (
                  <FaList className="w-5 h-5" />
                ) : (
                  <FaThLarge className="w-5 h-5" />
                )
              }
              onClick={() =>
                setLayout((prev) => (prev === "grid" ? "list" : "grid"))
              }
              className="p-2 rounded-full"
            />
          </div>
        </div>

        {/* ===== Main Section ===== */}
        <div className="flex gap-8 items-start transition-all duration-500 ease-in-out">
          {/* ✅ Left: Courses */}
          <div
            className={`flex-1 transition-all duration-500 ${
              showFilter ? "mr-0" : "mr-0"
            }`}
          >
            <div
              className={
                layout === "grid"
                  ? `grid gap-6 ${
                      showFilter
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    }`
                  : "space-y-6"
              }
            >
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} layout={layout} />
                ))
              ) : (
                <p className="text-gray-500 text-center col-span-full">
                  No courses found.
                </p>
              )}
            </div>
          </div>

          {/* ✅ Right: Animated Filter */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              showFilter
                ? "opacity-100 translate-x-0 w-80"
                : "opacity-0 -translate-x-10 w-0 overflow-hidden"
            }`}
          >
            <div className="sticky top-24">
              <Filter
                filters={filters}
                handleChange={handleChange}
                toggleFeature={toggleFeature}
                resetFilters={resetFilters}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
