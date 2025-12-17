"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/UI-Components/Pages/Services" },

  {
    label: "Projects",
    href: "/UI-Components/Projects",
    dropdown: [
      { label: "Projects", href: "/UI-Components/Projects" },
      { label: "Projects Details", href: "/UI-Components/Projects" },
    ],
  },

  {
    label: "Blogs",
    href: "/UI-Components/Blogs",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/Blogs" },
    ],
  },

  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "About", href: "/UI-Components/Pages/About" },
      { label: "Team", href: "/UI-Components/Pages/Teams" },
      { label: "Gallery", href: "/UI-Components/Pages/Gallery" },
      { label: "Contact", href: "/UI-Components/Pages/Contact" },
      { label: "Page 404", href: "/UI-Components/Pages/Page404" },
    ],
  },

  { label: "Contact", href: "/UI-Components/Pages/Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => (prev[label] ? {} : { [label]: true }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full transition-all duration-300 fixed top-0 left-0 z-50
        ${isScrolled ? "bg-(--white) shadow-md" : "bg-(--white)"}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-[8%] lg:px-[12%] py-3">
        <div className="flex items-center gap-4">
          {/* logo */}
          <Link
            href="/"
            className="text-3xl md:text-4xl lg:text-5xl font-bold Audiowide leading-none"
          >
            Oli<span className="text-(--prim)">vion</span>
          </Link>

          {/* Desktop Nav */}
          <nav className= "hidden lg:flex items-center space-x-4 md:space-x-6 relative ml-10">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group z-50">
                  <Link
                    href={link.href}
                    className="flex menu-links text-base md:text-lg items-center gap-1 hover:text-(--prim) transition-all duration-300"
                  >
                    {link.label} <i className="ri-arrow-down-s-line"></i>,
                   </Link>

                  {/* Dropdown: positioned flush under the link, starts invisible + translated,
                  on group-hover becomes visible, opaque and pointer-events enabled */}
                  <div
                    className = "absolute left-0 top-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-(--white) shadow-xl border-gray-50/10 rounded-lg z-50 min-w-[180px]"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm rounded-md hover:text-(--prim) transition-all duration-150"
                      >
                        <i className="bi bi-gear text-xs"></i>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base md:text-lg hover:text-(--prim) transition-all duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
        {/* Right section */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="hidden lg:flex items-center gap-2 text-sm">
            <i className="bi bi-telephone-inbound text-2xl p-2 rounded-full"></i>
            <div className="flex flex-col items-start">
              <p className="text-xs">Call Us Now</p>
              <h3 className="text-(--prim) GolosText text-sm md:text-base">
                +234 706 574 6568
              </h3>
            </div>
          </button>
          <Link href="/UI-Components/Pages/Contact">
            <button
              className="bg-(--prim) text-white font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-white
            hover:text-(--black) border border-transparent hover:border-gray-300 cursor-pointer transition-all duration-200 text-sm"
            >
              Get a quote
            </button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-2xl p-1"
            aria-label="Toggle menu"
          >
            <i
              className={`ri-${
                mobileMenuOpen ? "close-line" : "menu-3-line"
              } transition-all duration-200`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-(--white) border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-screen opacity-100 py-3"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-4 sm:px-6 space-y-3">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left text-sm"
                  >
                    {link.label}
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-200 ${
                        openDropdowns[link.label] ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`pl-6 pr-4 bg-gray-50 border-t border-gray-200
                        transition-all duration-300 ease-out overflow-hidden ${
                          openDropdowns[link.label]
                            ? "max-h-screen opacity-100 py-2"
                            : "max-h-0 opacity-0 py-0"
                        }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 font-medium hover:text-(--prim) transition border-b border-gray-200 last:border-b-0 text-sm"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm hover:text-(--prim-color) transition font-medium"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
