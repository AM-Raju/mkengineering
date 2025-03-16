"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample data for the slides
// Ideal image size: 1920x1080px or 16:9 aspect ratio for optimal responsiveness across devices
const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/7NvNdXZg/1.webp",
    title: "Powering Compliance, Empowering Growth",
    description:
      "Ensuring RMG factories in Bangladesh meet safety and compliance standards for a more efficient and secure tomorrow.",
    position: "left", // Text position
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/m5WvGjTW/2.webp",
    title: "Safety First, Success Always",
    description:
      "We guide your factory through compliance audits and electrical solutions, reducing risks and maximizing productivity.",
    position: "right",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/xqsffZ6j/3.webp",
    title: "Future-Proofing Industries, Today",
    description:
      "Our consultancy ensures your factory meets compliance standards, helping you achieve long-term safety and sustainability.",
    position: "left",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/mCZjXwnC/4.webp",
    title: "Electrical Safety, Seamless Operations",
    description:
      "Expert consultancy to eliminate hazards, enhance energy efficiency, and maintain a compliant, risk-free environment.",
    position: "right",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  // Function to go to the previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play when user interacts with the slider
  const handleInteraction = () => {
    setIsAutoPlaying(false);

    // Resume auto-play after 5 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);

    return () => clearTimeout(timeout);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider container */}
      <div
        className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]"
        onMouseEnter={handleInteraction}
        onTouchStart={handleInteraction}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out
    ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {/* Image container */}
            <div className="relative w-full h-full">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="object-cover w-full h-full"
              />

              {/* Overlay to improve text readability */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Text content inside .container */}
              <div className="absolute top-1/2 w-full -translate-y-1/2">
                <div className="container mx-auto px-4 md:px-0">
                  <div
                    className={`max-w-sm mx-auto md:max-w-md p-6 md:p-8 bg-mk-blue/50 backdrop-blur-sm
            ${
              slide.position === "left"
                ? "md:ml-0 md:mr-auto md:text-left"
                : "md:mr-0 md:ml-auto md:text-right"
            }
            text-center md:text-inherit`}
                  >
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                      {slide.title}
                    </h2>
                    <p className="text-white/90 text-sm md:text-base">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={() => {
            prevSlide();
            handleInteraction();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 shadow-md transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => {
            nextSlide();
            handleInteraction();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 shadow-md transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              handleInteraction();
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
