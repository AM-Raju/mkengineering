import { FaProjectDiagram, FaUsers, FaClock, FaHeadset } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { icon: <FaProjectDiagram size={40} />, title: "Projects", number: "120+" },
    { icon: <FaUsers size={40} />, title: "Clients", number: "80+" },
    { icon: <FaClock size={40} />, title: "Experience", number: "5+ Years" },
    { icon: <FaHeadset size={40} />, title: "Support", number: "24/7" },
  ];

  return (
    <section className="container mx-auto  py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white shadow-sm shadow-mk-blue/30  hover:shadow-md transition-all duration-300 "
          >
            <div className="text-blue-500 mb-3">{stat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
