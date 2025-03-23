import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-2">
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-gray-200 rounded-md font-semibold"
      >
        {title}
      </button> */}
      {isOpen && <div className="p-4 bg-gray-50  ">{children}</div>}
    </div>
  );
};

export { AccordionItem };
