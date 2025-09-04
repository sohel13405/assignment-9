import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0da2a0] mb-8">
        About Us
      </h2>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
        Welcome to <span className="font-semibold text-[#0da2a0]">Event Explorer</span>,  
        the ultimate platform for exploring and reserving seats at events that
        bring people together. From cultural festivals and concerts to workshops
        and community gatherings, we make it easy for you to find and join
        experiences that truly inspire you. 
      </p>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
        Our mission is simple — to create a seamless and secure event booking
        journey. With just a few clicks, you can reserve your spot, stay updated
        on upcoming events, and enjoy a personalized profile to manage your
        bookings anytime. 
      </p>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        At <span className="font-semibold text-[#0da2a0]">Event Explorer</span>, we
        believe every event is more than just an activity — it’s a chance to
        connect, celebrate, and create memories that last forever. Let’s make
        every moment count, together. 🎉
      </p>
    </div>
  );
};

export default About;
