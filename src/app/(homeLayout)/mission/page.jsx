import React from "react";

export const metadata = {
  title: "Mission & Vision | MK Engineering",
  description: "",
};

const MissionPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Mission Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Image on left */}
        <div className="flex justify-center items-center">
          <img
            src="https://i.ibb.co.com/gLNvy5Yd/Mission.webp" // Replace with your actual image path
            alt="Mission Image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        {/* Mission Text on right */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Mission of MK Engineering
          </h2>
          <p>
            MK Engineering aims to deliver high-quality products and safety
            solutions, coupled with unparalleled levels of service and support,
            all at the most cost-effective prices.
          </p>
          <p>
            Our engineering staff is committed to establishing an enviable
            reputation for excellence, and our dedication to quality work
            execution serves as a testament to our commitment to providing
            top-quality products and cost-effective services to an increasingly
            diverse client base.
          </p>
          <p>
            Our foremost consideration is our valued partners, and all our
            efforts are directed towards meeting and exceeding expectations at
            every level. We possess the capability to handle even the most
            complex projects with extraordinary speed, employing innovative and
            creative ideas.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image on right */}
        <div className="flex justify-center items-center lg:hidden">
          <img
            src="https://i.ibb.co.com/SwxwQY1S/Vision.webp" // Replace with your actual image path
            alt="Vision Image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        {/* Vision Text on left */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Vision of MK Engineering
          </h2>
          <p>
            Our vision is to create a platform where professionalism, quality,
            and economy converge. We aspire to achieve the pinnacle of
            reputation by delivering high-quality products, cost-effective, and
            technologically superior solutions.
          </p>
          <p>
            Our goal is to become a legendary partner by consistently providing
            quality products and services with cost-effective solutions within a
            minimal timeframe. Our communication solutions are crafted by
            individuals whose primary objective is to offer practical solutions
            for the real enhancement and improvement of your systems.
          </p>
          <p>
            We deeply value the trust you place in us, and we will always
            prioritize and consider your opinions. Our vision is aligned with
            ensuring the safety of our environment.
          </p>
        </div>
        {/* Image on right */}
        <div className="flex justify-center items-center max-lg:hidden">
          <img
            src="https://i.ibb.co.com/8LGfMg3M/Vision.webp" // Replace with your actual image path
            alt="Vision Image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
