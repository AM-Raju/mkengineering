import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Md. Khorshed Alam",
    role: "CEO",
    image: "https://i.ibb.co.com/39kz251d/Md-Khorshed-Alam.webp",
  },
  {
    id: 2,
    name: "Md. Jamal Hossain",
    role: "COO",
    image: "https://i.ibb.co.com/XxsfqGQX/Jamal-Vy.webp",
  },
  {
    id: 3,
    name: "Parvin Akter",
    role: "CFO",
    image: "https://i.ibb.co.com/84xBRK37/borkha.webp",
  },
  {
    id: 4,
    name: "Md. Eunus Ali",
    role: "Coordinator & HRM",
    image: "https://i.ibb.co.com/hJmpdNNn/Md-Eunus-Ali.webp",
  },
  {
    id: 5,
    name: "Md. Motalleb Hossain",
    role: "CSO",
    image: "",
  },
  {
    id: 6,
    name: "Mst. Poly Akter",
    role: "Asst. Manager (Business Development)",
    image: "https://i.ibb.co.com/84xBRK37/borkha.webp",
  },
  {
    id: 7,
    name: "Md. Sohrab Ali",
    role: "Manager (Accounts)",
    image: "https://i.ibb.co.com/20V2yhxK/Md-Sohrab-Ali.webp",
  },
  {
    id: 8,
    name: "Abdullah Al Mamun",
    role: "Safety Engineer",
    image: "",
  },
  {
    id: 9,
    name: "Md. Mehraj Uddin",
    role: "Engineer",
    image: "https://i.ibb.co.com/nMhgL6N7/Mehraj-Uddin.webp",
  },
  {
    id: 10,
    name: "Md. Nasir Uddin",
    role: "Engineer",
    image: "https://i.ibb.co.com/GQWMRDJy/Nasir-Uddin.webp",
  },
  {
    id: 11,
    name: "Md. Ashikul Haque",
    role: "Engineer",
    image: "https://i.ibb.co.com/tMtRbXHr/Ashiqul-Haque-Sazzad.webp",
  },

  {
    id: 12,
    name: "Md. Parvej Ahammed",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/6Rb43XPf/Md-Parvej-Ahammed.webp",
  },

  {
    id: 13,
    name: "Md. Nazmul Haque",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/LdyLRxTH/Md-Nazmul-Haque.webp",
  },
  {
    id: 14,
    name: "Md. Hasan Babu",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/wF807LHs/Md-Hasan-Babu.webp",
  },
  {
    id: 15,
    name: "Md. Sakib Ali",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/H8FxbHn/Md-Sakib-Ali.webp",
  },
  {
    id: 16,
    name: "Md. Nazmul Hasan",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/jvXGnpcZ/Md-Nazmul-Hasan-Suvo.webp",
  },
  {
    id: 17,
    name: "Md. Rakib Hasan",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/wFqwhw6b/Md-Rakib-Hasan.webp",
  },

  {
    id: 18,
    name: "Md. Alamin Sarkar",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/d01XRHTW/Md-Alamin-Sarkar.webp",
  },
  {
    id: 19,
    name: "Sayed Alam",
    role: "Asst. Engineer",
    image: "https://i.ibb.co.com/nqt1ZJv5/Sayed-Alam.webp",
  },

  {
    id: 20,
    name: "Md. Naim Islam",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/MbMTTNp/Md-Naim-Islam.webp",
  },
  {
    id: 21,
    name: "Md. Zahid Hasan",
    role: "Jr. Engineer",
    image: "https://i.ibb.co.com/bR5TScW6/Md-Zahid-Hasan.webp",
  },
];

const AboutUsTeam = () => {
  const managementTeam = teamMembers.filter((member) => member.id <= 7);
  const technicalGems = teamMembers.filter((member) => member.id > 7);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Management</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-fit">
        {managementTeam.map((member, index) => (
          <div
            key={index}
            className="border rounded-lg flex flex-col items-center w-48 p-2"
          >
            {member.image ? (
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[180px] h-52 object-cover rounded-md hover:scale-105 transition-all duration-500"
                />
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[180px] h-52 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            )}
            <h3 className="text-md font-semibold mt-2">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>

      <h2 className="text-center text-3xl font-bold mt-10 mb-6">
        Technical Gems
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 w-fit mx-auto">
        {technicalGems.map((member, index) => (
          <div
            key={index}
            className="border rounded-lg flex flex-col items-center  p-2"
          >
            {member.image ? (
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-44 h-56 object-cover rounded-md hover:scale-105 transition-all duration-500"
                />
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[180px] h-52 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            )}
            <h3 className="text-md font-semibold mt-2 ">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsTeam;
