import React from "react";

export const metadata = {
  title: "Contact | MK Engineering",
  description: "",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="w-full h-auto ">
        <div className=" mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Us Section (2/3 on md+) */}
          <div className="relative h-72 md:h-auto md:col-span-2 flex items-center justify-center text-white">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/x033W2N/testimonial-bg.webp')",
              }}
            ></div>
            <h1 className="relative text-mk-blue text-3xl md:text-5xl font-bold z-10">
              Contact Us
            </h1>
          </div>

          {/* Contact Details (1/3 on md+) */}
          <div className="bg-white p-6 shadow-xs border border-mk-blue/10">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p className="text-gray-700 mb-2">
              📍 H #183, R#02, Avenue #03, DOHS Mirpur, Dhaka-1216
            </p>
            <p className="text-gray-700 mb-2">
              📧 Email:{" "}
              <a href="mailto:info@example.com" className="text-blue-600">
                info@mkengineeringbd.com
              </a>
            </p>
            <p className="text-gray-700">📞 01718-595979, 01714-942810</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Google Map Section */}
        <div className="w-full h-96 md:h-full  overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4357.6099501873205!2d90.366684!3d23.834321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c18d1e32c1a9%3A0x17768d9e80273f44!2sMK%20Engineering!5e1!3m2!1sen!2sbd!4v1742880463624!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg border border-mk-blue p-6 md:p-8 w-full mx-auto">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Name<span className="text-mk-orange">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-mk-blue rounded-md focus:ring focus:ring-blue-400 outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Email<span className="text-mk-orange">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-mk-blue rounded-md focus:ring focus:ring-blue-400 outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-mk-blue rounded-md focus:ring focus:ring-blue-400 outline-none"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-mk-blue text-white py-2 rounded-md font-semibold hover:bg-mk-orange transition-all duration-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
