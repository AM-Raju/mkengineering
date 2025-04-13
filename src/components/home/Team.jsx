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
    image: "https://i.ibb.co.com/XxsfqGQX/Jamal-Vy.webp",
  },
  {
    name: "Parvin Akter",
    role: "CFO",
    image: "https://i.ibb.co.com/84xBRK37/borkha.webp",
  },
  {
    name: "Md. Eunus Ali",
    role: "Coordinator & HRM",
    image: "https://i.ibb.co.com/hJmpdNNn/Md-Eunus-Ali.webp",
  },
  {
    name: "Md. Motalleb Hossain",
    role: "CSO",
    image: "",
  },
  {
    name: "Mst. Poly Akter",
    role: "Asst. Manager (Business Development)",
    image: "https://i.ibb.co.com/84xBRK37/borkha.webp",
  },
  {
    name: "Md. Sohrab Ali",
    role: "Manager (Accounts)",
    image: "https://i.ibb.co.com/20V2yhxK/Md-Sohrab-Ali.webp",
  },
  {
    name: "Abdullah Al Mamun",
    role: "Safety Engineer",
    image: "",
  },
  {
    name: "Md. Mehraj Uddin",
    role: "Engineer",
    image: "https://i.ibb.co.com/nMhgL6N7/Mehraj-Uddin.webp",
  },
  {
    name: "Md. Nasir Uddin",
    role: "Engineer",
    image: "https://i.ibb.co.com/GQWMRDJy/Nasir-Uddin.webp",
  },
  {
    name: "Md. Ashikul Haque Sazzad",
    role: "Engineer",
    image: "https://i.ibb.co.com/tMtRbXHr/Ashiqul-Haque-Sazzad.webp",
  },

  {
    name: "Md. Parvej Ahammed",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/6Rb43XPf/Md-Parvej-Ahammed.webp",
  },

  {
    name: "Md. Nazmul Haque",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/LdyLRxTH/Md-Nazmul-Haque.webp",
  },
  {
    name: "Md. Hasan Babu",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/wF807LHs/Md-Hasan-Babu.webp",
  },
  {
    name: "Md. Sakib Ali",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/H8FxbHn/Md-Sakib-Ali.webp",
  },
  {
    name: "Md. Nazmul Hasan",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/jvXGnpcZ/Md-Nazmul-Hasan-Suvo.webp",
  },
  {
    name: "Md. Rakib Hasan",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/wFqwhw6b/Md-Rakib-Hasan.webp",
  },

  {
    name: "Md. Alamin Sarkar",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/d01XRHTW/Md-Alamin-Sarkar.webp",
  },
  {
    name: "Sayed Alam",
    role: "Asst. Engineer",
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
            {teamMembers.slice(startIndex, startIndex + visibleCards).map(
              (member, index) =>
                member && (
                  <div
                    key={index}
                    className=" border rounded-lg flex flex-col items-center p-4 "
                  >
                    {member.image ? (
                      <div className="overflow-hidden  mb-2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-[300px] h-[370px]  object-cover  rounded-md hover:scale-105 transition-all duration-700 "
                        />
                      </div>
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
                    <p className=" text-gray-500 text-md">{member.role}</p>
                  </div>
                )
            )}
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
