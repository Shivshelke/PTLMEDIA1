"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Aperture,
  Bot,
  Brain,
  Clapperboard,
  Cloud,
  FileVideo,
  FolderOpen,
  Gauge,
  Image as ImageIcon,
  LayoutTemplate,
  Mic2,
  MonitorPlay,
  PenTool,
  Scissors,
  Smartphone,
  Sparkles,
  Waves,
  Wand2,
} from "lucide-react";

interface ToolkitItem {
  name: string;
  category: string;
  icon: LucideIcon;
}

const toolkitItems: ToolkitItem[] = [
  { name: "Adobe Premiere Pro", category: "Desktop", icon: Clapperboard },
  { name: "Adobe After Effects", category: "Desktop", icon: Sparkles },
  { name: "DaVinci Resolve", category: "Desktop", icon: Aperture },
  { name: "Final Cut Pro", category: "Desktop", icon: Scissors },
  { name: "CapCut", category: "Mobile", icon: Smartphone },
  { name: "VN Editor", category: "Mobile", icon: Smartphone },
  { name: "Alight Motion", category: "Mobile", icon: Waves },
  { name: "Adobe Photoshop", category: "Design", icon: ImageIcon },
  { name: "Adobe Illustrator", category: "Design", icon: PenTool },
  { name: "Canva", category: "Design", icon: LayoutTemplate },
  { name: "Figma", category: "Design", icon: PenTool },
  { name: "ChatGPT", category: "AI", icon: Bot },
  { name: "Google Gemini", category: "AI", icon: Brain },
  { name: "Runway ML", category: "AI", icon: Wand2 },
  { name: "ElevenLabs", category: "AI Audio", icon: Mic2 },
  { name: "Google Drive", category: "Cloud", icon: Cloud },
  { name: "Frame.io", category: "Workflow", icon: FolderOpen },
  { name: "OBS Studio", category: "Production", icon: MonitorPlay },
  { name: "FFmpeg", category: "Encoding", icon: Gauge },
  { name: "Audacity", category: "Audio", icon: FileVideo },
];

export default function CreativeToolkit() {
  return (
    <section id="creative-toolkit" className="py-20 sm:py-28 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.2),transparent_56%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,122,0,0.06),transparent_35%,rgba(255,122,0,0.08))]" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Creative <span className="text-primary">Toolkit</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-gray-300/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Professional software I use to create high-quality content.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {toolkitItems.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.article
                key={tool.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl p-4 sm:p-5 md:p-6 bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-colors duration-300"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 group-hover:shadow-[0_0_28px_rgba(255,122,0,0.28)] transition-all duration-500" />

                <motion.div
                  className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/35 flex items-center justify-center mb-4"
                  whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
                  transition={{ duration: 0.45 }}
                >
                  <Icon size={26} className="text-orange-300 group-hover:text-orange-200 transition-colors duration-300" />
                </motion.div>

                <h3 className="text-white text-sm sm:text-base font-semibold leading-tight group-hover:text-orange-100 transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {tool.category}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
