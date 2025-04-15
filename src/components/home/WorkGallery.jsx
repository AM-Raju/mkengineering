"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Sample portfolio data
const portfolioData = [
  {
    id: 1,
    title: "Design and Drawing",
    category: ["Design & Drawing"],
    image: "https://i.ibb.co.com/20dPT642/Design.webp",
    size: "small",
  },
  {
    id: 2,
    title: "Technical Support Visit",
    category: ["TSV"],
    image: "https://i.ibb.co.com/twNYHcRw/TSV.webp",
    size: "small",
  },
  {
    id: 3,
    title: "Testing on Substation Equipment",
    category: ["Testing"],
    image: "https://i.ibb.co.com/DPjQs5rX/Substation-Equipment.webp",
    size: "medium",
  },
  {
    id: 4,
    title: "Single Line Diagram (SLD)",
    category: ["Design and Drawing"],
    image: "https://i.ibb.co.com/60ChD1QN/Design2.webp",
    size: "small",
  },
  {
    id: 5,
    title: "Advanced LPS",
    category: ["Supply and Installations"],
    image: "https://i.ibb.co.com/p6dC50G1/LPS.webp",
    size: "medium",
  },
  {
    id: 6,
    title: "Electrical Equipment Testing",
    category: ["Testing"],
    image: "https://i.ibb.co.com/CKzdv1B8/Testing.webp",
    size: "small",
  },
  {
    id: 7,
    title: "Electrical Layout Drawing",
    category: ["Design & Drawing"],
    image: "https://i.ibb.co.com/chv9D6QB/Design3.webp",
    size: "small",
  },
];

// Filter categories
const categories = [
  "All",
  "TSV",
  "Design & Drawing",
  "Supply and Installations",
  "Testing",
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
    <section className=" px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Work Gallery
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our featured works showcasing successful safety audits,
            compliance solutions, and electrical designs. We power industries
            with expert solutions, ensuring safety, efficiency, and regulatory
            excellence.
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
                        item.title === "Advanced LPS" ||
                        item.title === "Testing on Substation Equipment"
                          ? "max-h-[600px]"
                          : "h-64 md:h-72"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`object-cover w-full transition-transform duration-500 group-hover:scale-110 ${
                          item.title === "Testing on Substation Equipment" ||
                          item.title === "Advanced LPS"
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
