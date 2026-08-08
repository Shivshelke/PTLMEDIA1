"use client";

import { motion } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  return (
    <motion.div
      className="w-full h-full bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <video
        className="w-full h-full object-cover rounded-xl"
        controls
        autoPlay
        playsInline
        poster={poster}
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}
