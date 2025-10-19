import React from "react";
import { useNavigate } from "react-router-dom";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is included in the Pro plan?",
      answer:
        "The Pro plan includes access to all courses, downloadable resources, certificates, and offline access for learning anytime.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription anytime from your account settings. You’ll retain access until the end of your billing cycle.",
    },
    {
      question: "Do you offer team or group discounts?",
      answer:
        "Yes, we offer team plans for organizations. You can manage members, track progress, and access team analytics.",
    },
    {
      question: "Are certificates provided after course completion?",
      answer:
        "Yes, you’ll receive a certificate of completion for each course in the Pro and Team plans.",
    },
    {
      question: "What is included in the Pro plan?",
      answer:
        "The Pro plan includes access to all courses, downloadable resources, certificates, and offline access for learning anytime.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription anytime from your account settings. You’ll retain access until the end of your billing cycle.",
    },
    
  ];

  return (
    <section className="relative w-full py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-[#f9fafb] to-[#eef3f7]">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4481b8]/10 to-transparent blur-3xl opacity-40 pointer-events-none"></div>

      {/* Section Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4481b8] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl md:text-lg mx-auto">
          Find answers to the most common questions about our pricing and plans.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto rounded-2xl  bg-white  z-10">
        {faqs.map((faq, index) => {
    const isFirst = index === 0;
    const isLast = index === faqs.length - 1;

    return (
      <FAQItem
        key={index}
        question={faq.question}
        answer={faq.answer}
        className={`
          ${isFirst ? "rounded-t-2xl" : ""}
          ${isLast ? "rounded-b-2xl" : ""}
          ${!isLast ? "border-b border-gray-200" : ""}
        `}
      />
    );
  })}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10 relative z-10">
        <button
          onClick={() => navigate("/faq")}
          className="px-8 py-3 bg-[#4481b8] text-white font-semibold rounded-full shadow-lg hover:bg-[#356c9c] transition-all duration-300"
        >
          View All FAQs <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
