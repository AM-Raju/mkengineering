"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, CompanyX",
    review: "This service is outstanding! It exceeded all my expectations.",
    image: "https://i.ibb.co.com/6nBTkTn/9.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Marketing Head, BrandY",
    review: "A game changer for our business. Highly recommend!",
    image: "https://i.ibb.co.com/VVhsMpP/6.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Founder, StartupZ",
    review: "Incredible experience, great support, and amazing quality.",
    image: "https://i.ibb.co.com/fF3v3jy/4.jpg",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative  mx-auto py-16 flex flex-col items-center text-center ">
      <h1 className="text-4xl mb-8 text-center">Testimonial</h1>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/x033W2N/testimonial-bg.webp')",
        }}
      ></div>

      {/* Testimonial Content */}
      <div className="relative z-10  p-8 w-full max-w-[1240px] flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="text-mk-orange hover:text-mk-orange/80"
        >
          <FaChevronLeft size={24} />
        </button>

        <div className=" mx-auto text-center w-[500px] ">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={64}
            height={64}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-mk-orange"
          />
          <h3 className="text-xl font-semibold">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm text-mk-orange">
            {testimonials[currentIndex].designation}
          </p>
          <p className="mt-4 text-gray-700">
            "{testimonials[currentIndex].review}"
          </p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="text-mk-orange hover:text-mk-orange/80"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
