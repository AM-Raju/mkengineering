"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables server-side rendering and static site generation for React applications.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development with predefined classes.",
  },
  {
    question: "How does the FAQ section work?",
    answer:
      "Click on a question to expand the answer. Clicking again will collapse it, and opening another question will close the previous one.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <p className="text-gray-600 mt-2">
          Find answers to the most commonly asked questions.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-6 ">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300  overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-lg  bg-gray-100 hover:bg-gray-200 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
