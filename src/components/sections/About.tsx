"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 sm:py-28 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          style={{ y, opacity }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Crafting Stories <br />
              <span className="text-gray-500">That People</span> <br />
              <span className="text-primary">Remember.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
            <p>
              At <strong className="text-white font-bold">PTL MEDIA</strong>, every frame has a purpose. We blend storytelling, cinematic editing, motion design, sound, and strategy to create content that captures attention and delivers impact.
            </p>
            <p>
              Instead of simply editing videos, we build visual experiences that grow brands, creators, and businesses.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative large text behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none -z-10 opacity-5 select-none">
        <h3 className="text-[20vw] font-black tracking-tighter whitespace-nowrap">
          PTL MEDIA
        </h3>
      </div>
    </section>
  );
}
