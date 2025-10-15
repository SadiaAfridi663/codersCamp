import React from "react";
import * as FaIcons from "react-icons/fa";
import { FooterLink } from "../../../../Data/Array"; // ✅ Make sure path is correct

export default function FooterSection() {
  const { quickLinks, supportLinks, contact } = FooterLink;

  // Function to render link lists
  const renderLinks = (links) =>
    links.map((link, index) => (
      <li key={index}>
        <a
          href={link.href}
          className="text-gray-600 hover:text-[#3baee9] transition-all duration-300 flex items-center gap-3 group py-2 text-sm"
        >
          
          {link.name}
        </a>
      </li>
    ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          Quick Links
        </h3>
        <ul className="space-y-3">{renderLinks(quickLinks)}</ul>
      </div>

      {/* Support Links */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          Support
        </h3>
        <ul className="space-y-3">{renderLinks(supportLinks)}</ul>
      </div>

      {/* Contact Section + Customer Support Box */}
      <div>
        {/* Contact */}
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          Contact
        </h3>

        <div className="space-y-4 text-sm text-gray-600 mb-8">
          <p className="flex items-center gap-3">
            <FaIcons.FaMapMarkerAlt className="text-[#3baee9]" />
            {contact.address}
          </p>
          <p className="flex items-center gap-3">
            <FaIcons.FaPhoneAlt className="text-[#3baee9]" />
            <a href={`tel:${contact.phone}`} className="hover:text-[#3baee9]">
              {contact.phone}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FaIcons.FaEnvelope className="text-[#3baee9]" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-[#3baee9]"
            >
              {contact.email}
            </a>
          </p>
        </div>

        {/* 💬 Customer Support Box */}
        <div className="bg-gradient-to-r from-[#e8f7ff] to-[#d9f2ff] p-6 rounded-2xl shadow-sm border border-[#bde8ff]/50">
          <div className="flex items-center gap-3 mb-3">
            <FaIcons.FaHeadset className="text-[#3baee9] text-2xl" />
            <h4 className="text-gray-900 font-semibold text-base">
              Customer Support
            </h4>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Need help? Our support team is available <b>24/7</b> to assist you.
          </p>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#3baee9] hover:bg-[#2a9fd8] transition-all px-4 py-2 rounded-lg"
          >
            <FaIcons.FaPhoneAlt className="text-white" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
