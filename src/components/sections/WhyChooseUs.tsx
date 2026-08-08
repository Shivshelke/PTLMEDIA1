"use client";

import { motion } from "framer-motion";
import { Zap, Film, PenTool, TrendingUp, MessageSquareHeart, Infinity } from "lucide-react";

const reasons = [
  { icon: <Zap size={22} />, title: "Fast Turnaround", desc: "We know the algorithm waits for no one. Get your content delivered fast without compromising on quality." },
  { icon: <Film size={22} />, title: "Cinematic Storytelling", desc: "Every edit is designed to evoke emotion and keep your audience hooked from the first second to the last." },
  { icon: <PenTool size={22} />, title: "Creative Direction", desc: "We don't just follow instructions; we bring fresh ideas to the table to elevate your original vision." },
  { icon: <TrendingUp size={22} />, title: "Content That Performs", desc: "Our edits are optimized for maximum retention, engagement, and conversion across all platforms." },
  { icon: <MessageSquareHeart size={22} />, title: "Friendly Communication", desc: "We believe in building long-term relationships through transparent, fast, and friendly communication." },
  { icon: <Infinity size={22} />, title: "Unlimited Revisions", desc: "Your satisfaction is our priority. We work on your project until it perfectly aligns with your vision." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 md:py-32 relative bg-dark-gray/50">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose <span className="text-primary">PTL MEDIA</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don't just deliver files; we deliver results. Here's why top creators and brands trust us with their content.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 relative">
          {/* Connecting accent line — large screens only */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="glass-panel p-6 sm:p-7 md:p-8 rounded-2xl relative z-10 md:hover:-translate-y-4 transition-transform duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-5 sm:mb-6 border border-primary/30 flex-shrink-0">
                {reason.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
