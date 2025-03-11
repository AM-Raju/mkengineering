"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Sample portfolio data
const portfolioData = [
  {
    id: 1,
    title: "Business Cards",
    category: ["Design", "Graphics"],
    image: "https://i.ibb.co.com/8D9mR0Zm/Design.png",
    size: "small",
  },
  {
    id: 2,
    title: "Fashion Portrait",
    category: ["Photography", "Graphics"],
    image: "https://i.ibb.co.com/8D9mR0Zm/Design.png",
    size: "small",
  },
  {
    id: 3,
    title: "Tomato Soup",
    category: ["Photography", "Food"],
    image: "https://i.ibb.co.com/35xsXHZK/Boring.png",
    size: "medium",
  },
  {
    id: 4,
    title: "Menu Design",
    category: ["Design", "Graphics"],
    image: "https://i.ibb.co.com/8D9mR0Zm/Design.png",
    size: "small",
  },
  {
    id: 5,
    title: "Black Book",
    category: ["Photography", "Design"],
    image: "https://i.ibb.co.com/35xsXHZK/Boring.png",
    size: "medium",
  },
  {
    id: 6,
    title: "Headphones",
    category: ["Photography", "Development"],
    image: "https://i.ibb.co.com/8D9mR0Zm/Design.png",
    size: "small",
  },
  {
    id: 7,
    title: "Packaging Design",
    category: ["Design", "Graphics"],
    image: "https://i.ibb.co.com/8D9mR0Zm/Design.png",
    size: "small",
  },
];

// Filter categories
const categories = [
  "All",
  "Web",
  "Design",
  "Graphics",
  "Development",
  "Photography",
];

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter items based on active category
  useEffect(() => {
    setIsAnimating(true);

    const filtered =
      activeFilter === "All"
        ? portfolioData
        : portfolioData.filter((item) => item.category.includes(activeFilter));

    const timer = setTimeout(() => {
      setFilteredItems(filtered);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  // Handle filter click
  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Enjoy The Versatility Of{" "}
            <span className="font-bold text-gray-900">
              Elizah&apos;s Portfolios
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            TheGem is a versatile wp theme with modern creative design. Made as
            an ultimate toolbox of design elements, styles & features, it helps
            people to build impressive beautiful high-performance websites of
            any scope in minutes.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === category
                  ? "bg-amber-200 text-gray-800 font-medium"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`${
                  item.size === "large"
                    ? "md:col-span-2 md:row-span-2"
                    : item.size === "medium"
                    ? "md:col-span-1 md:row-span-2"
                    : ""
                }`}
              >
                <div className="overflow-hidden h-full w-full group">
                  <div className="p-0 relative">
                    <div
                      className={`relative w-full ${
                        item.title === "Black Book" ||
                        item.title === "Tomato Soup"
                          ? "h-full min-h-[600px]"
                          : "h-64 md:h-72"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                          item.title === "Black Book" ||
                          item.title === "Tomato Soup"
                            ? "h-full min-h-[600px]"
                            : "h-64 md:h-72"
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-blue-500/0 m-5 group-hover:bg-blue-500/30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <h3 className="text-black text-xl font-medium text-center">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm text-center">
                            {item.category.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Card className="overflow-hidden h-full w-full group">
                  <CardContent className="p-0 relative">
                    <div
                      className={`relative w-full ${
                        item.title === "Black Book"
                          ? "h-full min-h-[600px]"
                          : "h-64 md:h-72"
                      }`}
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gray-200 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <h3 className="text-black text-xl font-medium text-center">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm text-center">
                            {item.category.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
