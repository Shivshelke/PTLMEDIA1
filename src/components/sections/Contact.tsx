"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Camera, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build a friendly message including form fields to prefill the WhatsApp chat
    const phone = "919112750933"; // international format without +
    const lines = [
      `New inquiry from website`,
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Project Type: ${formState.type}`,
      `Budget: ${formState.budget}`,
      `Message: ${formState.message}`,
    ];

    const text = lines.join("\n");
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab (or app on mobile) with the prefilled message
    try {
      window.open(waUrl, "_blank");
    } catch (err) {
      // fallback to same-window navigation if popup blocked
      window.location.href = waUrl;
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column — Info */}
          <div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 tracking-tighter leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Let's Create <br />
              <span className="text-primary">Something Amazing</span> <br />
              Together.
            </motion.h2>

            <motion.p
              className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-12 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to elevate your content? Fill out the form, and our team will get back to you within 24 hours to discuss your project.
            </motion.p>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Each contact link has min-h-[48px] for touch */}
              <a
                href="mailto:ptlmediaagency@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-primary active:text-primary transition-colors group min-h-[48px]"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-primary/50 transition-colors flex-shrink-0">
                  <Mail size={20} />
                </div>
                <span className="text-base sm:text-lg font-medium break-all">ptlmediaagency@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919112750933"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-primary active:text-primary transition-colors group min-h-[48px]"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-primary/50 transition-colors flex-shrink-0">
                  <MessageCircle size={20} />
                </div>
                <span className="text-base sm:text-lg font-medium">+91 91127 50933</span>
              </a>

              <a
                href="https://instagram.com/ptlmedia_edits"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-primary active:text-primary transition-colors group min-h-[48px]"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:border-primary/50 transition-colors flex-shrink-0">
                  <Camera size={20} />
                </div>
                <span className="text-base sm:text-lg font-medium">@ptlmedia_edits</span>
              </a>

              <div className="flex items-center gap-4 text-gray-300 pt-4 border-t border-white/5">
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span className="text-base sm:text-lg font-medium">Available Worldwide</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs sm:text-sm font-medium text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors text-sm sm:text-base min-h-[48px]"
                    placeholder="Shubham"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs sm:text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors text-sm sm:text-base min-h-[48px]"
                    placeholder="shubham@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-type" className="text-xs sm:text-sm font-medium text-gray-400 ml-1">Project Type</label>
                  <select
                    id="contact-type"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors appearance-none text-sm sm:text-base min-h-[48px]"
                    value={formState.type}
                    onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                  >
                    <option value="" disabled className="text-gray-900">Select Type</option>
                    <option value="Short Form" className="text-gray-900">Short Form (Reels/Shorts)</option>
                    <option value="Long Form" className="text-gray-900">Long Form (YouTube/Podcast)</option>
                    <option value="Commercial" className="text-gray-900">Commercial Ads</option>
                    <option value="Other" className="text-gray-900">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-budget" className="text-xs sm:text-sm font-medium text-gray-400 ml-1">Budget</label>
                  <select
                    id="contact-budget"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors appearance-none text-sm sm:text-base min-h-[48px]"
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  >
                    <option value="" disabled className="text-gray-900">Budget Select Karein</option>
                    <option value="500-2000" className="text-gray-900">₹500 – ₹2,000</option>
                    <option value="2000-5000" className="text-gray-900">₹2,000 – ₹5,000</option>
                    <option value="5000-10000" className="text-gray-900">₹5,000 – ₹10,000</option>
                    <option value="10000-25000" className="text-gray-900">₹10,000 – ₹25,000</option>
                    <option value="25000+" className="text-gray-900">₹25,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs sm:text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[52px] py-4 bg-primary text-black font-bold text-base sm:text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-orange-400 active:bg-orange-500 transition-colors hover-target group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
