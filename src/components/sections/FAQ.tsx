"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Turnaround times vary depending on the scope of the project. A standard Instagram Reel or YouTube Short takes 1-2 days, while a long-form YouTube video might take 3-5 days. For complex commercial or cinematic projects, we'll provide a custom timeline.",
  },
  {
    question: "Do you offer unlimited revisions?",
    answer: "Yes! We want you to be 100% satisfied with the final product. We offer unlimited reasonable revisions within the original scope of the project until you're completely happy with the result.",
  },
  {
    question: "How do I send you my raw footage?",
    answer: "We use secure, high-speed file transfer services like Frame.io, Google Drive, or Dropbox. Once we start a project, you'll receive a dedicated folder to upload all your assets.",
  },
  {
    question: "Can you match a specific editing style?",
    answer: "Absolutely. During our discovery phase, you can share reference videos or channels you like, and we will tailor our editing, pacing, and color grading to match that exact aesthetic.",
  },
  {
    question: "What are your pricing packages?",
    answer: "Since every project is unique, we provide custom quotes based on your specific needs, volume of content, and complexity. Contact us below, and we'll send you a detailed proposal within 24 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 md:py-32 relative bg-dark-gray/30">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 max-w-4xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Common <span className="text-primary">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="glass-panel rounded-xl sm:rounded-2xl overflow-hidden border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Touch-friendly: min 56px height */}
              <button
                className="w-full px-5 sm:px-7 md:px-8 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-white/5 active:bg-white/10 transition-colors gap-4 min-h-[56px]"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {faq.question}
                </span>
                <span className="text-primary flex-shrink-0 transition-transform duration-300">
                  {openIndex === i ? <Minus size={22} /> : <Plus size={22} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 sm:px-7 md:px-8 pb-5 sm:pb-6 pt-2 text-gray-400 leading-relaxed text-sm sm:text-base border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
