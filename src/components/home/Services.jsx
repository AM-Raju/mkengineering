import {
  BarChart,
  Briefcase,
  Code,
  Layers,
  LineChart,
  Settings,
} from "lucide-react";

// Create services data
const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom web applications built with the latest technologies to meet your business needs.",
    icon: Code,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "User-centered design that enhances user experience and drives engagement.",
    icon: Layers,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Strategic marketing solutions to increase your online presence and reach.",
    icon: LineChart,
  },
  {
    id: 4,
    title: "Data Analytics",
    description:
      "Insightful data analysis to help you make informed business decisions.",
    icon: BarChart,
  },
  {
    id: 5,
    title: "IT Consulting",
    description:
      "Expert advice on technology solutions tailored to your business goals.",
    icon: Settings,
  },
  {
    id: 6,
    title: "Business Strategy",
    description:
      "Strategic planning and guidance to help your business thrive in a competitive market.",
    icon: Briefcase,
  },
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of services to help your business grow and
            succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 h-[300px] flex flex-col items-center border border-transparent transition-all duration-300 ease-in-out hover:border-mk-orange hover:shadow-[0_5px_15px_rgba(0,0,0,0.05)] group"
            >
              <div className="mb-4 text-center">
                <service.icon className="w-12 h-12 text-gray-800 transition-transform duration-300 ease-in-out group-hover:scale-110 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <div className="w-[calc(100%-10px)] h-[1px] bg-black my-3 mx-[5px] transition-colors duration-300 ease-in-out group-hover:bg-mk-orange"></div>
              <p className="text-gray-600 text-center flex-grow overflow-y-auto mt-5">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
