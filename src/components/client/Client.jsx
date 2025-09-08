import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Client = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophia Turner",
      photo: "https://i.pravatar.cc/150?img=1",
      text: "This platform made event booking so easy! The UI is smooth and I love how everything is organized.",
    },
    {
      id: 2,
      name: "Liam Johnson",
      photo: "https://i.pravatar.cc/150?img=2",
      text: "I attended a workshop I found here and it was amazing. The process was seamless and stress-free.",
    },
    {
      id: 3,
      name: "Ava Williams",
      photo: "https://i.pravatar.cc/150?img=3",
      text: "Super convenient! I was able to explore events, check details, and reserve my seat within minutes.",
    },
    {
      id: 4,
      name: "Noah Brown",
      photo: "https://i.pravatar.cc/150?img=4",
      text: "Highly recommend! It’s reliable and user-friendly. I’ll definitely use it for my future events.",
    },
  ];

  return (
    <div className="my-16 px-6 md:px-14 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
        💬 What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map(({ id, name, photo, text }) => (
          <div
            key={id}
            className="relative bg-white border-2 border-transparent bg-clip-padding rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300"
            style={{
              borderImage:
                "linear-gradient(90deg, #0da2a0, #1fc8b5, #4facfe) 1",
            }}
          >
            <FaQuoteLeft className="absolute -top-4 -left-3 text-4xl text-[#0da2a0]/30" />

            <div className="flex items-center gap-4">
              <img
                src={photo}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#0da2a0]"
              />
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-base">“{text}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
