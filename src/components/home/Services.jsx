"use client";

import { GiElectricalResistance } from "react-icons/gi";
import { PiPencilRulerLight } from "react-icons/pi";
import { BsClipboardCheck } from "react-icons/bs";
import { GiAbstract063 } from "react-icons/gi";
import { GiAbstract029 } from "react-icons/gi";
import { GiLightningSpanner } from "react-icons/gi";

// Create services data
const services = [
  {
    id: 1,
    title: "Safety Audit",
    description:
      "We inspect, identify risks, and ensure your electrical systems meet safety standards, preventing hazards before they happen. Safe factories mean a stronger future.",
    icon: <GiElectricalResistance size={40} />,
  },
  {
    id: 2,
    title: "Compliance Consultancy",
    description:
      "Navigating electrical compliance is easy with us. We help you meet industry standards, ensuring your factory runs smoothly without regulatory worries.",
    icon: <BsClipboardCheck size={40} />,
  },
  {
    id: 3,
    title: "Design, Drawing, and BOQ of Electrical System",
    description:
      "Get expert electrical designs with precise drawings and BOQs for a safe, efficient, and cost-effective system that meets your industry needs.",
    icon: <PiPencilRulerLight size={40} />,
  },
  {
    id: 4,
    title: "TSV Support on LRQA(Elevate)",
    description:
      "We guide you through LRQA (Elevate) compliance with expert technical support, ensuring your systems pass with confidence.",
    icon: <GiAbstract063 size={40} />,
  },
  {
    id: 5,
    title: "Annual Maintenance ",
    description:
      "Prevent breakdowns and costly repairs with our yearly maintenance services, keeping your electrical systems in top shape.",
    icon: <GiAbstract029 size={40} />,
  },
  {
    id: 6,
    title: "Lightening Protection System(LPS)",
    description:
      "Protect your factory from lightning strikes with our advanced LPS solutions, keeping your workplace and people safe.",
    icon: <GiLightningSpanner size={40} />,
  },
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ensure safe, efficient, and compliant electrical systems for
            industries. From audits to design, our expert solutions protect your
            workplace, prevent risks, and power a safer future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-4 md:p-8 h-[300px] flex flex-col items-center border md:border-transparent transition-all duration-300 ease-in-out  hover:border-mk-orange hover:shadow-[0_5px_15px_rgba(0,0,0,0.05)] group"
            >
              <div className="mb-4 text-center group-hover:text-mk-orange group-hover:scale-125 transition-all duration-500">
                {/* <service.icon className="w-12 h-12 text-gray-800 transition-transform duration-300 ease-in-out group-hover:scale-110 mx-auto" /> */}
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <div className="w-[calc(100%-10px)] h-[1px] bg-black my-3 mx-[5px] transition-colors duration-300 ease-in-out group-hover:bg-mk-orange"></div>
              <p className="text-gray-600 text-center flex-grow  mt-5">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
