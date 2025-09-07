import React from "react";
import { FaStar, FaShieldAlt, FaUsers, FaBolt } from "react-icons/fa";

const AmazingFeatures = () => {
  const features = [
    {
      id: 1,
      icon: <FaStar className="w-10 h-10 text-[#0da2a0]" />,
      title: "Easy Booking",
      text: "Book your events with just a few clicks. Fast, reliable, and stress-free.",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="w-10 h-10 text-[#0da2a0]" />,
      title: "Secure Payments",
      text: "Your transactions are fully secured with trusted payment gateways.",
    },
    {
      id: 3,
      icon: <FaUsers className="w-10 h-10 text-[#0da2a0]" />,
      title: "Community Driven",
      text: "Join a growing community of event lovers and share your experiences.",
    },
    {
      id: 4,
      icon: <FaBolt className="w-10 h-10 text-[#0da2a0]" />,
      title: "Instant Updates",
      text: "Stay updated with real-time notifications and reminders for events.",
    },
  ];

  return (
    <div className="bg-[#3f3434] py-24 px-6 mb-18 mt-18">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Amazing Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ id, icon, title, text }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            {icon}
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="text-gray-600 mt-2">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingFeatures;
