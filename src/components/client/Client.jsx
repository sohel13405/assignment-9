import React from "react";

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
    <div className="my-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0da2a0]">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map(({ id, name, photo, text }) => (
          <div
            key={id}
            className="card bg-white shadow-md p-6 flex flex-col md:flex-row items-center gap-4 rounded-2xl"
          >
            <img
              src={photo}
              alt={name}
              className="w-20 h-20 rounded-full object-cover border-2 border-[#0da2a0]"
            />
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-600 mt-2">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
