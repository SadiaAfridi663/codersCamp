import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
import {
  FaClock,
  FaUser,
  FaStar,
  FaArrowLeft,
  FaLock,
  FaCreditCard,
  FaMobileAlt,
  FaUniversity,
  FaWallet,
} from "react-icons/fa";
import InformationForm from "./InformationForm";
import PaymentMethod from "./PaymentMethod";

export default function EnrollPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  

  // Mock dynamic data (replace later with API or context)
  const courses = [
    {
      id: "1",
      title: "Master Modern Web Development",
      instructor: "Angela Yu",
      duration: "55h 30m",
      students: "12,500+",
      rating: "4.8/5",
      description:
        "Learn full-stack development from HTML, CSS, and JS to React. Build real-world apps and gain professional-grade skills.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
      price: "₨ 8,499",
      originalPrice: "₨ 12,999",
      discount: "35% off",
    },
    {
      id: "2",
      title: "React Mastery Bootcamp",
      instructor: "Maximilian Schwarzmüller",
      duration: "32h 10m",
      students: "8,400+",
      rating: "4.9/5",
      description:
        "Master React, hooks, routing, and advanced component patterns. Build production-level web applications with confidence.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      price: "₨ 9,999",
      originalPrice: "₨ 14,999",
      discount: "33% off",
    },
  ];

  const course = courses.find((c) => c.id === id) || courses[0];


  

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Enroll in Your Course
          </h1>
          <p className="text-gray-600">
            Complete your enrollment in just a few simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* --- Left: Enrollment Form --- */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Card */}
            <InformationForm />

            {/* Payment Method Card */}
            <PaymentMethod />

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:border-gray-400 transition-all"
              >
                <FaArrowLeft /> Back to Course
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#3baee9] to-[#2a9fd8] hover:from-[#2a9fd8] hover:to-[#3baee9] text-white font-semibold py-3 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaLock /> Complete Enrollment
              </button>
            </div>
          </div>

          {/* --- Right: Course Summary --- */}
          <div className="space-y-6">
            {/* Course Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.discount}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">by {course.instructor}</p>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2 bg-[#e8f7ff] px-3 py-1 rounded-full">
                    <FaClock className="text-[#3baee9]" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                    <FaUser className="text-green-500" /> {course.students}
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                    <FaStar className="text-yellow-500" /> {course.rating}
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Original Price:</span>
                    <span className="text-gray-500 line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Discounted Price:
                    </span>
                    <span className="text-2xl font-bold text-[#3baee9]">
                      {course.price}
                    </span>
                  </div>
                </div>

                <div className="bg-[#e8f7ff] rounded-xl p-4 mt-4">
                  <h4 className="font-semibold text-[#2a9fd8] mb-2">
                     What's Included:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lifetime access to course content</li>
                    <li>• Certificate of completion</li>
                    <li>• 24/7 support</li>
                    <li>• Downloadable resources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                <FaLock className="text-sm" />
                <span className="font-semibold">Secure Payment</span>
              </div>
              <p className="text-xs text-gray-600">
                Your payment information is encrypted and secure. We never share your details with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}