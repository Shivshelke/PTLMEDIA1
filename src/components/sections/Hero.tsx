"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ShieldCheck, Zap, Heart } from "lucide-react";
import gsap from "gsap";

const trustBadges = [
  { icon: <Zap size={14} />, text: "Fast Delivery", style: "top-[20%] left-[8%]" },
  { icon: <Star size={14} />, text: "Premium Quality", style: "top-[15%] right-[8%]" },
  { icon: <Heart size={14} />, text: "Unlimited Creativity", style: "bottom-[30%] left-[6%]" },
  { icon: <ShieldCheck size={14} />, text: "Client First", style: "bottom-[30%] right-[6%]" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // Only attach mouse parallax on desktop
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const xVal = (e.clientX / window.innerWidth - 0.5) * 30;
      const yVal = (e.clientY / window.innerHeight - 0.5) * 30;
      gsap.to(".parallax-badge", {
        x: xVal,
        y: yVal,
        stagger: 0.05,
        ease: "power2.out",
        duration: 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-900/20 rounded-full blur-[100px] md:blur-[150px] opacity-40 mix-blend-screen" />
      </div>

      {/* Trust Badges — desktop only */}
      {trustBadges.map((badge, i) => (
        <motion.div
          key={i}
          className={`absolute z-10 hidden lg:flex items-center gap-2 glass-panel px-3 py-2 xl:px-4 rounded-full text-xs xl:text-sm font-medium text-white/90 parallax-badge ${badge.style}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
        >
          <span className="text-primary">{badge.icon}</span>
          {badge.text}
        </motion.div>
      ))}

      <motion.div
        className="container mx-auto px-5 sm:px-8 md:px-12 z-20 text-center flex flex-col items-center py-12 sm:py-16"
        style={{ y, opacity }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase mb-5 sm:mb-6 leading-[0.92] max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          We Don't Just
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
            Edit Videos.
          </span>
          <br />
          We Create Experiences.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mb-10 sm:mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          From scroll-stopping reels to cinematic brand films, we help creators and businesses turn ordinary footage into extraordinary visual stories that captivate audiences and drive results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#portfolio"
            className="hover-target w-full sm:w-auto min-h-[52px] px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-bold text-base sm:text-lg rounded-full hover:bg-gray-200 active:bg-gray-300 transition-colors flex items-center justify-center gap-2 group"
          >
            View Portfolio
            <motion.span
              className="inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#contact"
            className="hover-target w-full sm:w-auto min-h-[52px] px-8 sm:px-10 py-4 sm:py-5 glass-panel text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center gap-2"
          >
            Let's Work Together
          </a>
        </motion.div>

        {/* Mobile trust badges — shown below CTA on small screens */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-10 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 glass-panel px-3 py-2 rounded-full text-xs font-medium text-white/90"
            >
              <span className="text-primary">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
