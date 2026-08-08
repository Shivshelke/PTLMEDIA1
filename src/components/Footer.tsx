"use client";

import Link from "next/link";
import { Camera, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-16 sm:pt-20 pb-8 sm:pb-10">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        {/* Grid: 1 col mobile → 2 col sm → 4 col md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link
              href="/"
              className="inline-block mb-4"
            >
              <Image 
                src="/logo.png" 
                alt="PTL MEDIA" 
                width={160} 
                height={60} 
                className="h-12 sm:h-16 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-400 text-base sm:text-lg max-w-sm">
              Editing That Moves People. We build visual experiences that grow brands, creators, and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-5 sm:mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary active:text-primary transition-colors text-sm sm:text-base py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-5 sm:mb-6 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="https://instagram.com/ptlmedia_edits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary active:text-primary transition-colors flex items-center gap-3 min-h-[36px] text-sm sm:text-base"
                >
                  <Camera size={18} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net/ptlmedia_edits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary active:text-primary transition-colors flex items-center gap-3 min-h-[36px] text-sm sm:text-base"
                >
                  <span className="font-bold text-lg sm:text-xl leading-none">Bē</span> Behance
                </a>
              </li>
              <li>
                <a
                  href="mailto:ptlmediaagency@gmail.com"
                  className="text-gray-400 hover:text-primary active:text-primary transition-colors flex items-center gap-3 min-h-[36px] text-sm sm:text-base"
                >
                  <Mail size={18} /> Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/5 text-gray-500 text-xs sm:text-sm gap-3 sm:gap-0">
          <p>&copy; {new Date().getFullYear()} PTL MEDIA. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <MapPin size={14} /> Available Worldwide.
          </p>
        </div>

        {/* Luxury credit line */}
        <motion.div
          className="mt-8 pt-5 border-t border-white/[0.03] text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <motion.p
            className="text-sm sm:text-base uppercase tracking-widest text-white/80 font-semibold flex items-center justify-center gap-3 select-none"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="text-gray-400">-</span>
            <span className="relative group">
              <span className="inline-block transition-transform duration-300 group-hover:scale-[1.02]">
                <strong className="font-extrabold tracking-tight">DESIGNED &amp; DEVELOPED</strong>
                <span className="mx-2">WITH</span>
                <motion.span
                  className="inline-block text-primary mx-1"
                  whileHover={{ scale: 1.15 }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                  ♥
                </motion.span>
                <strong className="font-extrabold tracking-tight ml-1">BY </strong>
                <a
                  href="https://www.instagram.com/shivamshelke07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold tracking-tight ml-1 hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  SHIVAM SHELKE
                </a>
              </span>

              {/* subtle underline glow */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-primary via-pink-400 to-yellow-300 rounded-full group-hover:w-full transition-all duration-500 ease-out" />
            </span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
