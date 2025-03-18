import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Md. Khorshed Alam",
    role: "CEO",
    image: "https://i.ibb.co/39kz251d/Md-Khorshed-Alam.webp",
  },
  { id: 2, name: "Md. Jamal Hossain", role: "COO", image: "" },
  { id: 3, name: "Parvin Akter", role: "CFO", image: "" },
  {
    id: 4,
    name: "Md. Eunus Ali",
    role: "Coordinator & HRM",
    image: "https://i.ibb.co/hJmpdNNn/Md-Eunus-Ali.webp",
  },
  {
    id: 5,
    name: "Md. Sohrab Ali",
    role: "Manager (Accounts)",
    image: "https://i.ibb.co/20V2yhxK/Md-Sohrab-Ali.webp",
  },
  { id: 6, name: "Md. Mehraj Uddin", role: "Manager (Operation)", image: "" },
  { id: 7, name: "Md. Nasir Uddin", role: "Manager (Technical)", image: "" },
  {
    id: 8,
    name: "Md. Ashikul Haque",
    role: "Design and Safety Engineer",
    image: "",
  },
  {
    id: 9,
    name: "Parvej Ahammed",
    role: "Executive Engineer",
    image: "https://i.ibb.co/6Rb43XPf/Md-Parvej-Ahammed.webp",
  },
  {
    id: 10,
    name: "Md. Nazmul Haque",
    role: "Project Engineer",
    image: "https://i.ibb.co/LdyLRxTH/Md-Nazmul-Haque.webp",
  },
  {
    id: 11,
    name: "Md. Hasan Babu",
    role: "Design Engineer",
    image: "https://i.ibb.co/wF807LHs/Md-Hasan-Babu.webp",
  },
  {
    id: 12,
    name: "Md. Sakib Ali",
    role: "Safety Engineer",
    image: "https://i.ibb.co/H8FxbHn/Md-Sakib-Ali.webp",
  },
  {
    id: 13,
    name: "Md. Nazmul Hasan",
    role: "Executive Engineer",
    image: "https://i.ibb.co/jvXGnpcZ/Md-Nazmul-Hasan-Suvo.webp",
  },
  {
    id: 14,
    name: "Md. Rakib Hasan",
    role: "Jr. Engineer",
    image: "https://i.ibb.co/wFqwhw6b/Md-Rakib-Hasan.webp",
  },
  {
    id: 15,
    name: "Md. Alamin Sarkar",
    role: "Jr. Executive (Accounts)",
    image: "https://i.ibb.co/d01XRHTW/Md-Alamin-Sarkar.webp",
  },
  {
    id: 16,
    name: "Sayed Alam",
    role: "Asst. Engineer",
    image: "https://i.ibb.co/Txtq4Zdy/Sayed-Alam.png",
  },
  {
    id: 17,
    name: "Md. Naim Islam",
    role: "Jr. Engineer",
    image: "https://i.ibb.co/MbMTTNp/Md-Naim-Islam.webp",
  },
  {
    id: 18,
    name: "Md. Zahid Hasan",
    role: "Jr. Engineer",
    image: "https://i.ibb.co/bR5TScW6/Md-Zahid-Hasan.webp",
  },
];

const AboutUsTeam = () => {
  const managementTeam = teamMembers.filter((member) => member.id <= 5);
  const technicalGems = teamMembers.filter((member) => member.id > 5);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Management</h2>

      <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  mx-auto w-fit ">
        {managementTeam.map((member, index) => (
          <div
            key={index}
            className="border rounded-lg flex flex-col items-center p-2"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-[150px] h-[185px] object-cover rounded-md"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[150px] h-[185px] text-gray-200"
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 w-fit mx-auto">
        {technicalGems.map((member, index) => (
          <div
            key={index}
            className="border rounded-lg flex flex-col items-center p-4"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-[150px] h-[185px] object-cover rounded-md"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[150px] h-[185px] text-gray-200"
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
