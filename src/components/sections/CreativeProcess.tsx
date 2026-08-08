"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your brand, goals, and target audience." },
  { num: "02", title: "Planning", desc: "Crafting the narrative, storyboarding, and setting the creative direction." },
  { num: "03", title: "Editing", desc: "Cutting the footage to build pace, emotion, and structure." },
  { num: "04", title: "Motion Graphics", desc: "Adding dynamic text, animations, and visual effects to engage viewers." },
  { num: "05", title: "Color Grading", desc: "Enhancing the mood and achieving a premium cinematic look." },
  { num: "06", title: "Delivery", desc: "Final review, revisions, and exporting in optimal formats." },
];

export default function CreativeProcess() {
  return (
    <section id="process" className="py-20 sm:py-28 md:py-32 relative bg-black overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 mb-12 sm:mb-16 md:mb-20">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Creative <span className="text-primary">Process</span>
        </motion.h2>
      </div>

      {/* Mobile / Tablet: vertical stacked timeline */}
      <div className="lg:hidden container mx-auto px-5 sm:px-8">
        <div className="relative flex flex-col gap-0">
          {/* Vertical accent line */}
          <div className="absolute top-0 left-9 sm:left-11 w-[2px] h-full bg-white/10 z-0" />
          <div className="absolute top-0 left-9 sm:left-11 w-[2px] h-1/2 bg-primary z-0 shadow-[0_0_15px_rgba(255,122,0,0.8)]" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative z-10 flex gap-5 sm:gap-7 items-start pb-10 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Circle number */}
              <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 flex-shrink-0 rounded-full bg-black border border-white/10 flex items-center justify-center text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                {step.num}
              </div>
              <div className="pt-3 sm:pt-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: horizontal scroll effect */}
      <div className="hidden lg:block overflow-hidden">
        <div className="pl-12 h-[380px] flex items-center">
          <motion.div
            className="flex gap-16 flex-nowrap"
            initial={{ x: 0 }}
            whileInView={{ x: "-15%" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex-shrink-0 w-[340px] xl:w-[400px] relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute top-12 left-0 w-full h-[2px] bg-white/10 z-0" />
                <div className="absolute top-12 left-0 w-1/2 h-[2px] bg-primary z-0 shadow-[0_0_15px_rgba(255,122,0,0.8)]" />

                <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 relative z-10 mb-8 mx-auto shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  {step.num}
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
