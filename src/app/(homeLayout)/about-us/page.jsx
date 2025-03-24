import AboutUsTeam from "@/components/about-us/AboutUsTeam";
import Heading from "@/components/ui/Heading";

export const metadata = {
  title: "About Us | MK Engineering",
  description: "",
};

const AboutUsPage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Main Heading */}
        <Heading>About Us</Heading>

        {/* Single Column Layout */}
        <div className="grid grid-cols-1 gap-8">
          {/* Who We Are */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 ">
              MK ENGINEERING is a trusted name in electrical safety,
              consultancy, and innovative engineering solutions. We are
              dedicated to ensuring industrial safety, efficiency, and
              compliance through expert guidance and cutting-edge solutions.
            </p>

            <p className="text-gray-600 mt-4">
              Our founder and CEO, Md. Khorshed Alam, brings nearly 14 years of
              experience in electrical safety inspections for RMG factories
              across Bangladesh. A B.Sc. in Electrical & Electronic Engineering
              (EEE) graduate from RUET, he has audited over 450 factories on
              behalf of Alliance, TUV, and BV, contributing to safety
              improvements for global brands like Wal-Mart, H&M, and C&A. His
              leadership drives our mission to elevate industry standards
              through Corrective Action Plans (CAPs), compliance strategies, and
              innovative safety solutions.
            </p>

            <p className="text-gray-600 mt-4">
              Supporting this vision, our management team plays a crucial role
              in operational excellence. Our COO ensures smooth execution of
              projects, the Coordinator & HRM fosters team efficiency and
              growth, and our Manager (Accounts) oversees financial integrity.
              Together, we work toward a future where industries operate with
              greater safety, intelligence, and sustainability.
            </p>

            <p className="text-gray-600 mt-4">
              Beyond inspections, MK ENGINEERING specializes in lighting module
              applications and Intelligent Security Surveillance, helping
              industries adopt smart, energy-efficient solutions for a safer
              tomorrow.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Technical Team</h2>
            <p className="text-gray-600">
              Our technical team consists of{" "}
              <strong>15+ highly skilled professionals</strong> with expertise
              in{" "}
              <strong>
                audit, design, drawing, safety engineering, testing,
                installation, and consultation
              </strong>
              . Their extensive knowledge and hands-on experience ensure that
              every project meets the highest industry standards.
            </p>
            <p className="text-gray-600 mt-4">
              From conducting <strong>electrical safety audits</strong> to
              providing precise engineering solutions, our team is committed to
              excellence. We work closely with industries to implement safety
              and efficiency-driven strategies, ensuring compliance with local
              and international standards.
            </p>
            <p className="text-gray-600 mt-4">
              With a strong focus on innovation and quality, our experts tackle
              complex challenges with confidence and efficiency, delivering
              tailored solutions that enhance operational safety and
              performance. At MK ENGINEERING, our team’s dedication is the
              foundation of our success.
            </p>
          </div>
        </div>
      </div>

      <AboutUsTeam></AboutUsTeam>
    </div>
  );
};

export default AboutUsPage;
