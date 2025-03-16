"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is a safety audit, and why do I need it?",
    answer:
      "A safety audit checks your electrical systems for risks and ensures they meet safety standards, preventing accidents and ensuring compliance.",
  },
  {
    question: "What does your compliance consultancy cover?",
    answer:
      "We help industries understand and meet safety regulations, guiding them through inspections, documentation, and corrective actions.",
  },
  {
    question:
      "Do you provide electrical system design and BOQ for new projects?",
    answer:
      "Yes, we offer complete electrical system design, drawings, and BOQ to ensure safe, efficient, and cost-effective installations.",
  },
  {
    question: "What is TSV support on LRQA (Elevate)?",
    answer:
      "We assist industries in meeting LRQA (Elevate) compliance by providing technical support, assessments, and corrective solutions.",
  },
  {
    question: "Why is annual maintenance important for electrical systems?",
    answer:
      "Regular maintenance prevents breakdowns, ensures system efficiency, and extends the lifespan of electrical installations.",
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
