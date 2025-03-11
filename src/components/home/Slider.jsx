"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample data for the slides
// Ideal image size: 1920x1080px or 16:9 aspect ratio for optimal responsiveness across devices
const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/Wpv2rVdb/slide-1.png",
    title: "Beautiful Landscapes",
    description:
      "Explore stunning natural landscapes from around the world. Each view offers a unique perspective on our planet's beauty.",
    position: "left", // Text position
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/bM35jT6N/slide-2.png",
    title: "Urban Architecture",
    description:
      "Discover remarkable architectural wonders in cities across the globe. From modern skyscrapers to historic buildings.",
    position: "right",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/K43cQgF/slide-3.png",
    title: "Wildlife Photography",
    description:
      "Witness the majesty of wildlife in their natural habitats. These rare moments capture the essence of animal behavior.",
    position: "left",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/HTfnFG2R/slide-4.png",
    title: "Cultural Festivals",
    description:
      "Experience vibrant cultural celebrations that showcase traditions passed down through generations.",
    position: "right",
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/4R9n1Bns/slide-5.png",
    title: "Culinary Delights",
    description:
      "Savor the visual feast of culinary masterpieces from different cuisines. Each dish tells a story of heritage and innovation.",
    position: "left",
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/ynJsTsJk/slide-6.png",
    title: "Adventure Sports",
    description:
      "Feel the adrenaline rush through extreme sports and adventures. These activities push the boundaries of human capability.",
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
                    className={`md:max-w-md p-6 md:p-8 bg-black/50 backdrop-blur-sm
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
