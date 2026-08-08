"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function JoinCreativeTeam() {
  return (
    <section id="join-our-team" className="py-20 sm:py-28 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.18),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,122,0,0.08),transparent)]" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl p-7 sm:p-10 md:p-14 lg:p-16 border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative flex flex-col gap-8 md:gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-orange-200 text-xs sm:text-sm font-medium tracking-wide">
                <Sparkles size={14} />
                Hiring Opportunity
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                Join Our <span className="text-primary">Creative Team</span>
              </h2>

              <p className="mt-5 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                Looking for talented video editors to collaborate with us on reels, shorts, ads and creative projects.
              </p>
            </div>

            <motion.a
              href="https://forms.gle/dsyFno3ntUA5HU6d8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 w-full md:w-auto px-6 sm:px-8 py-4 min-h-[52px] rounded-xl bg-primary text-black font-bold text-base sm:text-lg shadow-[0_10px_35px_rgba(255,122,0,0.45)] hover:bg-orange-400 active:bg-orange-500 transition-colors"
            >
              Apply As Editor
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
