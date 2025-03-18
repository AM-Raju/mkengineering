import { FaProjectDiagram, FaUsers, FaClock, FaHeadset } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";

const StatsSection = () => {
  const stats = [
    { icon: <FaProjectDiagram size={40} />, title: "Projects", number: "530+" },
    { icon: <FaUsers size={40} />, title: "Clients", number: "106+" },
    { icon: <FaClock size={40} />, title: "Experience", number: "6+ Years" },
    {
      icon: <BsFillLightningFill size={40} />,
      title: "LPS Installation",
      number: "30+",
    },
  ];

  return (
    <section className="container mx-auto  my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white shadow-sm shadow-mk-blue/30  hover:shadow-md transition-all duration-300  group"
          >
            <div className=" mb-3 text-mk-blue">{stat.icon}</div>
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
