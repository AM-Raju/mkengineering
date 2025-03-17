"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Md. Khorshed Alam",
    role: "CEO",
    image: "https://i.ibb.co.com/39kz251d/Md-Khorshed-Alam.webp",
  },
  {
    name: "Md. Jamal Hossain",
    role: "COO",
    image: "",
  },
  {
    name: "Md. Eunus Ali",
    role: "Manager (HR & Admin)",
    image: "https://i.ibb.co.com/hJmpdNNn/Md-Eunus-Ali.webp",
  },
  {
    name: "Md. Sohrab Ali",
    role: "Manager (Accounts)",
    image: "https://i.ibb.co.com/20V2yhxK/Md-Sohrab-Ali.webp",
  },
  {
    name: "Md. Mehraj Uddin",
    role: "Manager (Operation)",
    image: "",
  },
  {
    name: "Md. Nasir Uddin",
    role: "Manager (Technical)",
    image: "",
  },
  {
    name: "Md. Ashikul Haque Sazzad",
    role: "Design and Safety Engineer",
    image: "",
  },

  {
    name: "Md. Parvej Ahammed",
    role: "Executive Engineer",
    image: "https://i.ibb.co.com/6Rb43XPf/Md-Parvej-Ahammed.webp",
  },

  {
    name: "Md. Nazmul Haque",
    role: "Project Engineer",
    image: "https://i.ibb.co.com/LdyLRxTH/Md-Nazmul-Haque.webp",
  },
  {
    name: "Md. Hasan Babu",
    role: "Design Engineer",
    image: "https://i.ibb.co.com/wF807LHs/Md-Hasan-Babu.webp",
  },
  {
    name: "Md. Sakib Ali",
    role: "Safety Engineer",
    image: "https://i.ibb.co.com/H8FxbHn/Md-Sakib-Ali.webp",
  },
  {
    name: "Md. Nazmul Hasan",
    role: "Executive Engineer",
    image: "https://i.ibb.co.com/jvXGnpcZ/Md-Nazmul-Hasan-Suvo.webp",
  },
  {
    name: "Md. Rakib Hasan",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/wFqwhw6b/Md-Rakib-Hasan.webp",
  },

  {
    name: "Md. Alamin Sarkar",
    role: "Jr. Executive (Accounts)",
    image: "https://i.ibb.co.com/d01XRHTW/Md-Alamin-Sarkar.webp",
  },
  {
    name: "Sayed Alam",
    role: "Marketing Officer",
    image: "https://i.ibb.co.com/Txtq4Zdy/Sayed-Alam.png",
  },

  {
    name: "Md. Naim Islam",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/MbMTTNp/Md-Naim-Islam.webp",
  },
  {
    name: "Md. Zahid Hasan",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/bR5TScW6/Md-Zahid-Hasan.webp",
  },
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
                  className=" border rounded-lg flex flex-col items-center"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-[300px] h-[370px] px-4 pt-4 pb-2 object-cover  rounded-md"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[300px] h-[370px] px-4 pt-4 pb-2 object-cover  text-gray-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  )}
                  <h3 className=" text-xl font-semibold">{member.name}</h3>
                  <p className="mb-2 text-gray-500">{member.role}</p>
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
