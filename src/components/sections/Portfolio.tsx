"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
type ProjectCategory = "Reel" | "Short" | "YouTube" | "youtube" | "Ad" | "village life";

interface FeaturedProject {
  id: number;
  title: string;
  category: ProjectCategory;
  duration: string;
  driveUrl: string;
  customThumbnailUrl?: string;
  previewUrl?: string;
}

type PlayerType = "iframe" | "video";

const featuredProjects: FeaturedProject[] = [
  // Replace `driveUrl` values with your Google Drive links.
  // Add `customThumbnailUrl` when you want to override the auto-generated Drive thumbnail.
  // Add `previewUrl` (direct .mp4) to enable muted hover previews.
  {
    id: 1,
    title: "Thar Editz Reel",
    category: "Reel",
    duration: "00:20",
    driveUrl: "https://drive.google.com/file/d/1FQnV4SUHx_sjjWt--yXde5Oqe8T20H6P/view?usp=sharing",
    customThumbnailUrl:
      "https://i.pinimg.com/736x/a8/bd/76/a8bd7655e7ae6c67104c870ed6b423da.jpg",
  },
  {
    id: 2,
    title: "Scorpio Reel",
    category: "Short",
    duration: "00:32",
    driveUrl: "https://drive.google.com/file/d/1zaZUXvOW08uCFhm53nlMvLSTaQMgvZsZ/view?usp=sharing",
    customThumbnailUrl:
      "https://i.pinimg.com/736x/f1/87/8e/f1878e228d6873595c6e5b558e2d2494.jpg",
  },
  {
    id: 3,
    title: "Annabhau Sathe Edit",
    category: "Reel",
    duration: "00:30",
    driveUrl: "https://drive.google.com/file/d/16ZpycVgOHdvqgRQis7I3OYZLbrshWdfB/view?usp=share_link",
    customThumbnailUrl:
      "https://i.pinimg.com/736x/b4/84/d5/b484d59bbb5ddc2acb068ed4ec72840d.jpg",
  },
  {
    id: 4,
    title: "Village life editz",
    category: "village life",
    duration: "00:25",
    driveUrl: "https://drive.google.com/file/d/1RKrc27x_wo-mMFCxNJXlzENKNj2IQNwa/view?usp=sharing",
    customThumbnailUrl:
      "https://i.pinimg.com/1200x/80/3c/c2/803cc24726e912cfdcf79e9b80a60ff0.jpg",
  },
  {
    id: 5,
    title: "This Is Not Editing. This Is Positioning.",
    category: "YouTube",
    duration: "00:50",
    driveUrl: "https://v1.pinimg.com/videos/iht/expMp4/39/8c/99/398c9919d410d5179b9b41edd180e9ed_720w.mp4",
    previewUrl:
      "https://v1.pinimg.com/videos/iht/expMp4/39/8c/99/398c9919d410d5179b9b41edd180e9ed_720w.mp4",
    customThumbnailUrl:
      "https://i.pinimg.com/originals/a0/7f/2b/a07f2bea1e1d7c4e083f6af25bd722ac.jpg",
  },
  {
    id: 6,
    title: "Thar Editz Reel",
    category: "Reel",
    duration: "00:20",
    driveUrl: "https://v1.pinimg.com/videos/iht/expMp4/e1/c0/76/e1c076c627b48994220da9ec8202e9d7_720w.mp4",
    previewUrl:
      "https://v1.pinimg.com/videos/iht/expMp4/e1/c0/76/e1c076c627b48994220da9ec8202e9d7_720w.mp4",
    customThumbnailUrl:
      "https://i.pinimg.com/originals/39/31/f2/3931f21b7ae5bdd7eef70a12b54b0614.jpg",
  },
 {
    id: 7,
    title: "Pro Video Editing: 10x Your Reels in Minutes! 🚀",
    category: "Reel",
    duration: "00:40",
    driveUrl: "https://v1.pinimg.com/videos/iht/expMp4/76/d4/8e/76d48e86507e32bb90c1bc7c64005f9b_720w.mp4",
    previewUrl:
      "https://v1.pinimg.com/videos/iht/expMp4/76/d4/8e/76d48e86507e32bb90c1bc7c64005f9b_720w.mp4",
    customThumbnailUrl:
      "https://i.pinimg.com/originals/16/7a/fd/167afd48460e40ba9176e7db2d91b3d9.jpg",
  },
  {
    id: 8,
    title: "Not a player. A standard. 👑🔥",
    category: "Reel",
    duration: "00:15",
    driveUrl: "https://v1.pinimg.com/videos/iht/expMp4/78/bb/a4/78bba42a10ed03a9efa40e5a340196f5_720w.mp4",
    previewUrl:
      "https://v1.pinimg.com/videos/iht/expMp4/78/bb/a4/78bba42a10ed03a9efa40e5a340196f5_720w.mp4",
      customThumbnailUrl:
      "https://i.pinimg.com/originals/63/ed/21/63ed21655ec4881e03a5ba3c916ee9d1.jpg",
  },
  {
    id: 9,
    title: "This Is Not Editing. This Is Positioning.",
    category: "YouTube",
    duration: "00:50",
    driveUrl: "https://v1.pinimg.com/videos/iht/expMp4/92/d0/be/92d0be688264a4fdf2c8edb3c1671088_720w.mp4",
    previewUrl:
      "https://v1.pinimg.com/videos/iht/expMp4/92/d0/be/92d0be688264a4fdf2c8edb3c1671088_720w.mp4",
    customThumbnailUrl:
      "https://i.pinimg.com/originals/f6/f0/59/f6f0595f7ba76784ba2958674101a14f.jpg",
  },
  
];

function extractGoogleDriveFileId(driveUrl: string): string | null {
  const matchedByPath = driveUrl.match(/\/file\/d\/([^/]+)/);
  if (matchedByPath?.[1]) {
    return matchedByPath[1];
  }

  const matchedByQuery = driveUrl.match(/[?&]id=([^&]+)/);
  if (matchedByQuery?.[1]) {
    return matchedByQuery[1];
  }

  return null;
}

function getGoogleDriveThumbnail(fileId: string): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
}

function getGoogleDriveEmbed(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

function isDirectVideoUrl(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?|#|$)/i.test(url);
}

async function createVideoThumbnail(videoUrl: string): Promise<string | null> {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";

    const cleanup = () => {
      video.remove();
    };

    const handleError = () => {
      cleanup();
      resolve(null);
    };

    const handleLoadedMetadata = () => {
      try {
        video.currentTime = 0.1;
      } catch {
        handleError();
      }
    };

    const handleSeeked = () => {
      const canvas = document.createElement("canvas");
      const width = video.videoWidth || 1280;
      const height = video.videoHeight || 720;
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");
      if (!context) {
        cleanup();
        resolve(null);
        return;
      }

      context.drawImage(video, 0, 0, width, height);
      cleanup();
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata, { once: true });
    video.addEventListener("seeked", handleSeeked, { once: true });
    video.addEventListener("error", handleError, { once: true });
    video.load();
  });
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (FeaturedProject & { embedUrl: string; thumbnailUrl: string; playerType: PlayerType }) | null
  >(null);
  const previewRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const [activePreviewProject, setActivePreviewProject] = useState<number | null>(null);
  const [generatedThumbnails, setGeneratedThumbnails] = useState<Record<number, string>>({});

  useEffect(() => {
    let isCancelled = false;

    const loadThumbnails = async () => {
      for (const project of featuredProjects) {
        if (project.customThumbnailUrl || generatedThumbnails[project.id]) {
          continue;
        }

        const sourceUrl = project.previewUrl ?? project.driveUrl;
        if (!sourceUrl || !isDirectVideoUrl(sourceUrl)) {
          continue;
        }

        const thumbnail = await createVideoThumbnail(sourceUrl);
        if (!isCancelled && thumbnail) {
          setGeneratedThumbnails((current) => (current[project.id] ? current : { ...current, [project.id]: thumbnail }));
        }
      }
    };

    void loadThumbnails();

    return () => {
      isCancelled = true;
    };
  }, [generatedThumbnails]);

  const projects = useMemo(
    () =>
      featuredProjects
        .map((project) => {
          const fileId = extractGoogleDriveFileId(project.driveUrl);
          if (fileId) {
            return {
              ...project,
              embedUrl: getGoogleDriveEmbed(fileId),
              thumbnailUrl: project.customThumbnailUrl ?? generatedThumbnails[project.id] ?? getGoogleDriveThumbnail(fileId),
              playerType: "iframe" as const,
            };
          }

          const fallbackThumbnail = "https://i.pinimg.com/1200x/80/3c/c2/803cc24726e912cfdcf79e9b80a60ff0.jpg";

          return {
            ...project,
            embedUrl: project.driveUrl,
            thumbnailUrl: project.customThumbnailUrl ?? generatedThumbnails[project.id] ?? fallbackThumbnail,
            playerType: isDirectVideoUrl(project.driveUrl) ? ("video" as const) : ("iframe" as const),
          };
        }),
    [generatedThumbnails]
  );

  useEffect(() => {
    if (!selectedProject) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  const handlePreviewStart = async (projectId: number) => {
    setActivePreviewProject(projectId);
    const preview = previewRefs.current[projectId];
    if (!preview) {
      return;
    }
    preview.currentTime = 0;
    await preview.play().catch((error) => {
      console.warn("Preview autoplay blocked by browser policy:", error);
    });
  };

  const handlePreviewStop = (projectId: number) => {
    setActivePreviewProject((current) => (current === projectId ? null : current));
    const preview = previewRefs.current[projectId];
    if (!preview) {
      return;
    }
    preview.pause();
    preview.currentTime = 0;
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.14),transparent_55%)]" />
      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 md:mb-20 gap-6">
          <div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Featured <span className="text-primary">Work</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-base sm:text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A premium showcase of our editing work. Add Google Drive or other video links to instantly stream each project.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sm:flex-shrink-0"
          >
            <div className="w-full sm:w-auto px-5 py-2.5 min-h-[48px] rounded-full border border-white/10 bg-black/40 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Multi-source Streaming Enabled
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => handlePreviewStart(project.id)}
              onMouseLeave={() => handlePreviewStop(project.id)}
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/11]">
                <Image
                  src={project.thumbnailUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {project.previewUrl ? (
                  <video
                    ref={(node) => {
                      previewRefs.current[project.id] = node;
                    }}
                    src={project.previewUrl}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${activePreviewProject === project.id ? "opacity-100" : "opacity-0"}`}
                  />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/15 group-hover:from-black/85 transition-colors duration-500" />

                <div className="absolute inset-x-0 top-0 p-4 sm:p-5 flex items-start justify-between gap-2">
                  <span className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase border border-white/20 bg-black/55 backdrop-blur-xl">
                    {project.category}
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold border border-primary/35 bg-primary/15 text-orange-100">
                    {project.duration}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">{project.title}</h3>

                  <div className="inline-flex items-center gap-3 rounded-full pl-4 pr-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 group-hover:border-primary/60 group-hover:bg-primary/20 transition-all duration-500">
                    <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,122,0,0.65)]">
                      <Play size={16} className="fill-black ml-0.5" />
                    </span>
                    <span className="text-sm font-medium text-white">Play Project</span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/45 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white z-[122] p-3 rounded-full bg-black/60 border border-white/15 hover:border-primary/60 transition-colors"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              aria-label="Close player"
            >
              <X size={24} />
            </motion.button>

            <motion.div
              className="h-full w-full flex items-center justify-center p-4 sm:p-8 md:p-12"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="w-full max-w-7xl rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_140px_rgba(255,122,0,0.2)] bg-black">
                <div className="relative aspect-video">
                  {selectedProject.playerType === "video" ? (
                    <video
                      src={selectedProject.embedUrl}
                      className="w-full h-full"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <iframe
                      src={selectedProject.embedUrl}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                      allowFullScreen
                      title={selectedProject.title}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 sm:px-6 py-4 bg-gradient-to-r from-black via-[#0b0b0b] to-black border-t border-white/10">
                  <div>
                    <p className="text-primary text-sm font-medium uppercase tracking-wide">{selectedProject.category}</p>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{selectedProject.title}</h3>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/40 bg-primary/15 text-orange-100">
                    {selectedProject.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
