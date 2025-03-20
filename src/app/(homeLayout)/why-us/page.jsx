import {
  FaCheckCircle,
  FaIndustry,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const data = [
  {
    title: "Proven Track Record",
    description:
      "With a strong legacy of success, we have completed 195+ projects and earned the trust of 55+ satisfied clients. Our experience spans diverse industries, ensuring that we bring a wealth of knowledge and expertise to every project we undertake.",
    icon: FaCheckCircle,
  },
  {
    title: "Industry Expertise",
    description:
      "Our team of highly skilled and certified engineers brings in-depth technical knowledge and hands-on experience in electrical systems, fire safety, and structural integrity. We adhere to the latest industry standards and best practices to ensure compliance, efficiency, and long-term reliability.",
    icon: FaIndustry,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We believe that every project is unique. That’s why we take the time to understand your specific needs, challenges, and goals before crafting customized solutions. Your success is our priority, and we work closely with you at every stage to ensure seamless execution.",
    icon: FaUsers,
  },
  {
    title: "Innovative & Future-Ready Solutions",
    description:
      "Innovation is at the core of what we do. We continuously stay ahead of industry advancements, leveraging modern technologies and forward-thinking strategies to enhance safety, efficiency, and operational performance. Our solutions are designed to not only meet current industry requirements but also future-proof your business.",
    icon: FaLightbulb,
  },
];

const WhyUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Why Choose MK Engineering
        </h1>
        <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
          At MK Engineering, we take pride in our commitment to excellence,
          innovation, and client satisfaction. Our expertise in electrical,
          fire, and structural safety makes us a trusted partner for industries
          seeking reliable and efficient engineering solutions. Here’s why
          businesses choose us:
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-12 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border border-mk-orange p-6 rounded-lg shadow-md"
          >
            <div className="absolute -top-7 left-7 bg-mk-orange text-white p-3 rounded-lg shadow-lg">
              <item.icon size={30} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-8">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
