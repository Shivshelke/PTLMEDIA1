"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Shivam Shelke",
    role: "Tech Creator",
    image: "https://i.pinimg.com/736x/33/12/b2/3312b294c7a0133bf4dc4fe99a424b03.jpg",
    text: "PTL MEDIA completely transformed my channel. The cinematic quality and storytelling they brought to my videos increased my retention rate by 40% in just one month.",
  },
  {
    name: "shreya ",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "The commercial ads they edited for our summer campaign were nothing short of spectacular. Premium, fast, and incredibly creative.",
  },
  {
    name: "Raj patil",
    role: "Real Estate Agent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "I've worked with many editors, but none understand pacing and color grading like this team. They make every property look like a million bucks.",
  },
  {
    name: "jayshree pawar",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "My Instagram Reels blew up after I started working with PTL. They know exactly how to hook the viewer and keep them engaged.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-28 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Client <span className="text-primary">Stories</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Dynamic height carousel — eliminates fixed height clipping on mobile */}
          <div className="relative">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                className="glass-panel p-6 sm:p-8 md:p-12 rounded-3xl flex flex-col gap-6 sm:gap-8"
                initial={false}
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  x: i === activeIndex ? 0 : i < activeIndex ? -60 : 60,
                  scale: i === activeIndex ? 1 : 0.95,
                  zIndex: i === activeIndex ? 10 : 0,
                  pointerEvents: i === activeIndex ? "auto" : "none",
                  position: i === activeIndex ? "relative" : "absolute",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  top: i !== activeIndex ? 0 : undefined,
                  left: i !== activeIndex ? 0 : undefined,
                  right: i !== activeIndex ? 0 : undefined,
                }}
              >
                <div>
                  <div className="flex gap-1 mb-4 sm:mb-5 text-primary">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/50 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-8 sm:mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 min-w-[12px] min-h-[12px] ${
                  i === activeIndex ? "bg-primary w-8" : "bg-white/20 hover:bg-white/50 w-3"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
