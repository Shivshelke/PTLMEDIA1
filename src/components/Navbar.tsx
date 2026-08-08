"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-4 glass-panel" : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white z-50">
            PTL<span className="text-primary">MEDIA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-primary text-black font-semibold rounded-full hover:bg-orange-400 transition-colors hover:scale-105 transform duration-300 hover-target"
            >
              Let's Talk
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 hover-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8"
                initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
                exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-3xl font-bold text-white hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="#contact"
                    className="px-8 py-4 bg-primary text-black font-bold rounded-full text-xl mt-4 inline-block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Let's Work Together
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Spacer to offset fixed header height so content isn't overlapped on small screens */}
      <div aria-hidden="true" className="h-24 md:h-20 lg:h-20" />
    </>
  );
}
