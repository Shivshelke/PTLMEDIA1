"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Tv,
  Video,
  Film,
  MonitorPlay,
  Mic,
  Palette,
  HeartHandshake,
  Briefcase,
  Home,
  Gamepad2,
  Image as ImageIcon,
} from "lucide-react";

const services = [
  { title: "Instagram Reels", icon: <Smartphone size={28} /> },
  { title: "YouTube Shorts", icon: <Tv size={28} /> },
  { title: "YouTube Long Form", icon: <Video size={28} /> },
  { title: "Commercial Ads", icon: <Film size={28} /> },
  { title: "Motion Graphics", icon: <MonitorPlay size={28} /> },
  { title: "Podcast Editing", icon: <Mic size={28} /> },
  { title: "Color Grading", icon: <Palette size={28} /> },
  { title: "Wedding Films", icon: <HeartHandshake size={28} /> },
  { title: "Corporate Videos", icon: <Briefcase size={28} /> },
  { title: "Real Estate Videos", icon: <Home size={28} /> },
  { title: "Gaming Videos", icon: <Gamepad2 size={28} /> },
  { title: "Thumbnail Design", icon: <ImageIcon size={28} /> },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 md:py-32 relative bg-dark-gray/30">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer a comprehensive suite of post-production services designed to elevate your content and engage your audience.
          </motion.p>
        </div>

        {/* 
          Responsive grid:
          1 col (mobile) → 2 col (sm/tablet) → 3 col (md) → 4 col (xl desktop)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-panel p-6 sm:p-7 md:p-8 rounded-2xl flex flex-col items-start gap-4 sm:gap-5 md:gap-6 hover-target relative group cursor-pointer min-h-[140px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              /* Hover animation only on devices that support it (non-touch) */
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] transition-all duration-300 pointer-events-none" />

              <div className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
