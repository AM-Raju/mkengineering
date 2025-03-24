"use client";

import { useState, useEffect } from "react";
import { Accordion } from "@/components/ui/accordion/Accordion";
import { AccordionItem } from "@/components/ui/accordion/AccordionItem";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const data = {
  Services: [
    {
      heading: "Design, Drawing (SLD, ELD, LPS) and BOQ of Electrical System",
      short_heading: "Design and Drawing",
      image: "",
      key_points: [
        "Comprehensive Electrical System Design & Planning",
        "Accurate Single Line Diagram (SLD) Creation",
        "Detailed Electrical Layout Drawing (ELD) Design",
        "Precise Lightning Protection System (LPS) Planning",
        "Effective Earthing System Diagram for Safety",
        "Complete Bill of Quantity (BOQ) Preparation",
        "Ensuring Compliance with Electrical Standards",
        "Optimized Load Distribution & Power Flow Analysis",
        "Cost-Effective & Efficient Electrical Solutions",
        "Customized Drawings Tailored to Project Needs",
        "Enhancing Safety, Reliability & System Performance",
        "Professional, Easy-to-Understand Technical Drawings",
        "Seamless Integration with Construction & Renovation",
        "Supporting Troubleshooting, Maintenance & Upgrades",
        "Expert Consultation for Best Electrical Practices",
      ],
    },
    {
      heading: "Technical Support Visit (TSV)",
      short_heading: "Technical Support Visit",
      image: "",
      key_points: [
        "Expert support for audit preparation and execution",
        "Ensures compliance with safety regulations and standards",
        "Bridges communication gaps between engineers and auditors",
        "Provides technical assistance during audit inspections",
        "Clarifies electrical and fire safety technical details",
        "Helps resolve safety-related concerns during audits",
        "Experienced professionals with industry-specific knowledge",
        "Enhances factory readiness for external audits",
        "Offers tailored advice for safety compliance",
        "Supports factory engineers with technical insights",
        "Ensures smooth audit processes with expert help",
        "Guarantees accurate reporting of factory conditions",
        "Prevents audit delays due to technical confusion",
        "Helps maintain continuous safety compliance standards",
        "Provides a trusted link between audit and factory",
      ],
    },
    {
      heading: "90 days / SSV Support",
      short_heading: "90 days / SSV Support",
      image: "",
      key_points: [
        "Ensures electrical systems meet safety standards",
        "Prevents equipment failures with regular checks",
        "Identifies performance issues before they escalate",
        "Supports compliance with international safety standards",
        "Minimizes downtime by detecting potential faults",
        "Involves thorough inspection of critical equipment",
        "Generates reports to support audit compliance",
        "Ensures adherence to Bangladesh National Building Code",
        "Verifies safety for transformers, circuit breakers, and more",
        "Reduces risk of safety incidents and accidents",
        "Provides regular updates to maintain operational efficiency",
        "Helps factories comply with Nirapon safety audits",
        "Enhances overall reliability of electrical systems",
        "Prepares systems for periodic safety inspections",
        "Improves long-term safety and equipment longevity",
      ],
    },
    {
      heading: "Safety Audit",
      short_heading: "Safety Audit",
      image: "",
      key_points: [
        "Comprehensive evaluation of electrical safety risks",
        "Identifies fire hazards and short circuits",
        "Ensures compliance with RSC and Nirapon",
        "Examines wiring, grounding, and load balance",
        "Detailed reports with corrective action plans",
        "Detects faulty breakers and overloaded systems",
        "Prevents workplace accidents through expert assessment",
        "Improves energy efficiency and system reliability",
        "Reduces downtime and unexpected power failures",
        "Supports factory certification and compliance needs",
        "Third-party verification for unbiased safety checks",
        "Tailored audit solutions for industrial facilities",
        "Focus on long-term electrical risk management",
        "Enhances workplace safety with proven standards",
        "Affordable, professional, and industry-compliant audits",
      ],
    },
    {
      heading: "Consultancy for Compliance Service",
      short_heading: "Compliance Consultancy",
      image: "",
      key_points: [
        "Ensure compliance with national & global standards",
        "100% cap close from RSC and Nirapon (LRQA)",
        "Prevent electrical fires, shocks & failures",
        "Optimize energy efficiency & reduce costs",
        "Upgrade electrical systems for better performance",
        "Provide fire prevention & backup power solutions",
        "Ensure reliable power distribution & safety",
        "Help factories avoid legal penalties & fines",
        "Train workers on electrical safety & preparedness",
        "Assist in achieving certifications for exports",
        "Offer customized solutions for factory compliance",
        "Ensure smooth operations with expert guidance",
        "Identify & mitigate long-term electrical risks",
        "Save time by preventing costly compliance mistakes",
        "Enhance workplace safety & business reputation",
      ],
    },
  ], // Your services data
  SupplyAndInstallations: [
    {
      heading: "LPS (Conventional and Advanced)",
      short_heading: "Lightning Protection System",
      image: "",
      key_points: [
        "Complete LPS service: design, materials, and installation",
        "Protection from fire, surges, and electrical failures",
        "We offer both Conventional and Advanced LPS",
        "Conventional LPS safely captures and grounds lightning",
        "Advanced LPS actively controls and redirects lightning",
        "Smart LPS with real-time monitoring and alerts",
        "Custom solutions for factories, buildings, and industries",
        "Ensures compliance with BNBC, NFPA, and IEC standards",
        "Proper grounding system for safe energy discharge",
        "High-quality materials for long-term durability",
        "Prevents downtime and costly equipment damage",
        "Certified installation for maximum safety and efficiency",
        "Reliable solutions for high-risk industrial environments",
        "Prevention of structural and electrical system failures",
        "Engineered for 24/7 protection against lightning hazards",
      ],
    },
    {
      heading:
        "Testing on Electrical Substation Switchgear Equipment (Transformer, VCB, ACB, ATS, COS, LBS, PFI, MCCB/MCB) service",
      short_heading: "Testing on Electrical Substation",
      image: "",
      key_points: [
        "Ensures safety and reliability of electrical equipment",
        "Prevents equipment failures with thorough testing",
        "Tests critical components like transformers and breakers",
        "Monitors insulation health to prevent leakage",
        "Verifies proper voltage change and distribution",
        "Evaluates circuit breakers for proper functioning",
        "Assesses contact resistance to prevent overheating",
        "Ensures breakers operate within safe timing limits",
        "Validates capacitor function for energy efficiency",
        "Checks dielectric strength for high voltage durability",
        "Performs earth resistance tests for safety",
        "Ensures substation equipment operates at optimal levels",
        "Confirms functional performance of relays and switches",
        "Supports compliance with safety and performance standards",
        "Improves system reliability with regular equipment testing",
      ],
    },
  ], // Your supply and installation data
};

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("Services");
  const [activeSubSection, setActiveSubSection] = useState("All");

  const currentData = data[activeSection];

  useEffect(() => {
    document.title = "Services | MK Engineering";

    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Set description
    updateMetaTag(
      "description",
      "This is a Next.js client page with SEO metadata."
    );

    // Set keywords
    updateMetaTag("keywords", "Next.js, SEO, React, Client Component");

    // Open Graph (OG) metadata for social media
    const updatePropertyMetaTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updatePropertyMetaTag("og:title", "My Client Page");
    updatePropertyMetaTag(
      "og:description",
      "Learn how to use metadata in a Next.js client page."
    );
    updatePropertyMetaTag("og:image", "/images/og-image.jpg");
    updatePropertyMetaTag("og:type", "website");
  }, []);

  return (
    <div>
      <div className="container mx-auto max-w-6xl p-6">
        <Heading>Solutions We Provide</Heading>
        {/* Section Buttons */}
        <div className="flex mb-6   border border-mk-blue">
          {Object.keys(data).map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
              }}
              className={`px-4 py-2 w-1/2 text-2xl ${
                activeSection === section
                  ? "bg-mk-blue text-white "
                  : "bg-gray-200"
              } `}
            >
              {section.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>

        <div className="border border-mk-blue p-6">
          {/* Subsection Buttons */}
          <div className="flex gap-4 mb-6 flex-wrap  ">
            <Button
              onClick={() => setActiveSubSection("All")}
              className={
                activeSubSection === "All"
                  ? "bg-mk-orange text-white"
                  : "bg-gray-200"
              }
            >
              All
            </Button>
            {currentData.map((item) => (
              <Button
                key={item.short_heading}
                onClick={() => setActiveSubSection(item.short_heading)}
                className={
                  activeSubSection === item.short_heading
                    ? "bg-mk-orange text-white"
                    : "bg-gray-200"
                }
              >
                {item.short_heading} {/* // Apply switch case here */}
              </Button>
            ))}
          </div>

          {/* Accordions */}
          <Accordion>
            {(activeSubSection === "All"
              ? currentData
              : currentData.filter((d) => d.short_heading === activeSubSection)
            ).map((item, index) => (
              <AccordionItem key={item.heading} title={item.heading}>
                <div
                  className={`flex ${
                    index % 2 === 0
                      ? "flex-col md:flex-row"
                      : "flex-col md:flex-row-reverse"
                  } gap-8 p-6 border border-mk-blue shadow-md bg-white`}
                >
                  <div className="w-full md:w-1/2 bg-gray-300 flex items-center justify-center ">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.heading}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      "No Image"
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {item.key_points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
