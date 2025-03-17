import Image from "next/image";

import SocialIcons from "../ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative bg-mk-blue text-white py-10">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/Pbs69Ym/footer-bg.webp')] bg-cover bg-center opacity-60"></div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6">
        {/* Logo and Text */}
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="mx-auto mb-4"
          />
          <p className="max-w-xl mx-auto text-gray-300">
            Empowering industries with expert electrical solutions, safety
            audits, and compliance consultancy. We ensure efficiency,
            reliability, and regulatory success for a safer, smarter future.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <SocialIcons></SocialIcons>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-6 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
            <a href="#" className="hover:text-white">
              Home
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
