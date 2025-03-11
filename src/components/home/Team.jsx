"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://i.ibb.co.com/g4jsGV4/7.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://i.ibb.co.com/sVgqZj8/5.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://i.ibb.co.com/HKZJ8J8/2.jpg",
  },
  {
    name: "Emily Davis",
    role: "Designer",
    image: "https://ibb.co.com/1QJy5hH",
  },
  {
    name: "Chris Brown",
    role: "Marketing Head",
    image: "https://i.ibb.co.com/4Txw4YD/1.jpg",
  },
  {
    name: "Sarah Wilson",
    role: "HR Manager",
    image: "https://i.ibb.co.com/Gk5h5MR/3.jpg",
  },
  { name: "David White", role: "Sales Lead", image: "/images/team7.jpg" },
  { name: "Sophia Lee", role: "Support Manager", image: "/images/team8.jpg" },
  { name: "Robert King", role: "Project Manager", image: "/images/team9.jpg" },
  { name: "Emma Johnson", role: "Finance Head", image: "/images/team10.jpg" },
];

export default function Team() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 1024) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + 1 >= teamMembers.length - visibleCards + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? teamMembers.length - visibleCards : prev - 1
    );
  };

  return (
    <section className="container mx-auto py-12 text-center px-0 md:px-4 ">
      <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
      <p className="text-gray-600 mb-6">
        Our experts are here to make your vision a reality.
      </p>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 text-gray-800 p-2"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="overflow-hidden max-w-full">
          {/* <div className="flex gap-10 items-center transition-transform duration-500 "> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center transition-transform duration-500 ">
            {teamMembers
              .slice(startIndex, startIndex + visibleCards)
              .map((member, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[400px] border rounded-lg flex flex-col items-center p-4"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-4/5 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 text-gray-800 p-2"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
