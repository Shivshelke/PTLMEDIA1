"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "+" },
  { label: "Content Views", value: 20, suffix: "M+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(16, duration / end);
      const timer = setInterval(() => {
        start += 1;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-primary/5 -skew-y-2 z-0" />
      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* 2 columns on mobile, 4 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center gap-3 sm:gap-4"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-gray-400 font-medium tracking-wider uppercase text-xs sm:text-sm md:text-base">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
