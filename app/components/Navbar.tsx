"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll handler with offset for fixed navbar
  const handleScrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    const navbarHeight = 64; // adjust if your navbar height changes
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white/60 backdrop-blur-sm transition-shadow duration-250 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
      <div className="shrink-0">
       <a href="#home" className="font-bold tracking-tight flex items-center space-x-1">
         {/* Mobile view */}
        <span className="block md:hidden text-2xl">
         <span className="text-blue-600 text-3xl">F</span>
         <span className="text-sky-400 text-2xl font-extrabold align-top">.</span>
         <span className="text-gray-900 text-xl">jumbo</span>
        </span>

        {/* Desktop view */}
         <span className="hidden md:block text-2xl">
          <span className="text-blue-600 text-3xl">F</span>
          <span className="text-sky-400 text-2xl font-extrabold align-top">.</span>
          <span className="text-gray-900 text-xl">jumbo</span>
          <span className="text-gray-500 text-base font-medium ml-2">/ Full Stack Developer</span>
         </span>
        </a>
       </div>


          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }}
                className="text-sm font-medium hover:text-gray-700 transition"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="https://wa.me/+2349063391041"
              target="_blank"
              rel="noreferrer"
              className="ml-4 text-white bg-black inline-block px-4 py-2 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50 transition"
            >
              Talk to Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.18 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false); // close menu first
                    setTimeout(() => handleScrollTo(link.href), 180); // scroll after menu closes
                  }}
                  className="block text-base font-medium py-2"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/+2349063391041"
                target="_blank"
                rel="noreferrer"
                className="block bg-black text-white mt-2 px-4 py-2 rounded-md text-center border border-gray-200"
              >
                Talk to Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
