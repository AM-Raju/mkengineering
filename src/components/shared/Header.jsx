"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import SocialIcons from "../ui/SocialIcons";

export default function Header({
  logoText = "MK Engineering",
  logoImage = "/logo.png",
  phoneNumber = "+1 (555) 123-4567",
  email = "info@example.com",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-gray-700 py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side - Contact info */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center hover:text-primary text-white"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">{phoneNumber}</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center hover:text-primary text-white"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">{email}</span>
            </a>
          </div>

          {/* Right side - Social icons and login */}
          <div className="flex items-center space-x-4 ">
            <SocialIcons></SocialIcons>
            <div className="h-4 w-px bg-gray-300"></div>
            <a
              href="/login"
              className="hover:text-primary transition-colors text-sm text-white"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`bg-white py-2 px-4 shadow-sm transition-all ${
          isScrolled ? "sticky top-0 z-50 shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logoImage ? (
              <Image
                src={logoImage || "/placeholder.svg"}
                alt={logoText}
                width={150}
                height={40}
                className="h-16 w-auto"
              />
            ) : (
              <span className="text-xl font-bold">{logoText}</span>
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItem href="/" label="Home" isActive={pathname === "/"} />
            <NavItem
              href="/about-us"
              label="About Us"
              isActive={pathname === "/about-us"}
            />

            <NavItem
              href="/mission"
              label="Mission & Vision"
              isActive={pathname === "/mission"}
            />
            <NavItem
              href="/services"
              label="Services"
              // hasDropdown={true}
              isActive={pathname.startsWith("/services")}
              /* dropdownItems={[
                { label: "Web Development", href: "/services/web-development" },
                { label: "Mobile Apps", href: "/services/mobile-apps" },
                { label: "UI/UX Design", href: "/services/ui-ux-design" },
              ]} */
            />
            <NavItem
              href="/whyUs"
              label="Why Us"
              isActive={pathname === "/whyUs"}
            />
            <NavItem
              href="/contact"
              label="Contact"
              isActive={pathname === "/contact"}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
          <div className="container mx-auto px-4 pb-4 space-y-2">
            <MobileNavItem href="/" label="Home" isActive={pathname === "/"} />
            <MobileNavItem
              href="/about"
              label="About"
              isActive={pathname === "/about"}
            />
            <MobileNavItem
              href="/services"
              label="Services"
              hasDropdown={true}
              isActive={pathname.startsWith("/services")}
              dropdownItems={[
                { label: "Web Development", href: "/services/web-development" },
                { label: "Mobile Apps", href: "/services/mobile-apps" },
                { label: "UI/UX Design", href: "/services/ui-ux-design" },
              ]}
            />
            <MobileNavItem
              href="/portfolio"
              label="Portfolio"
              isActive={pathname === "/portfolio"}
            />
            <MobileNavItem
              href="/blog"
              label="Blog"
              isActive={pathname === "/blog"}
            />
            <MobileNavItem
              href="/contact"
              label="Contact"
              isActive={pathname === "/contact"}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

// Desktop Navigation Item
function NavItem({ href, label, hasDropdown, dropdownItems, isActive }) {
  const pathname = usePathname();
  return (
    <div className="relative group">
      <Link
        href={href}
        className={`inline-block py-2 relative ${
          isActive
            ? "text-primary font-medium text-mk-orange"
            : "hover:text-primary"
        }`}
      >
        <span className="relative z-10">
          {label} {hasDropdown && <ChevronDown className="inline h-4 w-4" />}
        </span>
        <span className="absolute inset-x-0 top-0 h-0.5 bg-mk-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </Link>

      {hasDropdown && dropdownItems && (
        <div className="absolute left-0 mt-2 w-48 bg-white border-t-2 border-mk-orange shadow-lg  overflow-hidden z-20 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left">
          <div className="">
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 relative group ${
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-gray-700"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-0 top-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Mobile Navigation Item
function MobileNavItem({ href, label, hasDropdown, dropdownItems, isActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      {hasDropdown ? (
        <>
          <button
            className={`flex justify-between items-center w-full py-2 border-b border-gray-200 ${
              isActive ? "text-primary font-medium" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {label}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen && dropdownItems && (
            <div className="pl-4 mt-1 space-y-1">
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`block py-2 text-sm hover:text-primary relative group ${
                    pathname === item.href
                      ? "text-primary font-medium"
                      : "text-gray-700"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={href}
          className={`block py-2 border-b border-gray-200 hover:text-primary ${
            isActive ? "text-primary font-medium" : ""
          }`}
        >
          {label}
        </Link>
      )}
    </div>
  );
}
