import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  sourceCode?: string;
  liveLink?: string;
  image?: string;
  year: string;
  category: string;
}

interface DynamicProjectCardProps {
  project: Project;
}

const DynamicProjectCard: React.FC<DynamicProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isExpanded]);

  // ─── iOS/macOS-like fast & buttery spring (2025–2026 feel) ───────
  const springFast = {
    type: "spring" as const,
    stiffness: 420,      // snappy acceleration
    damping: 38,         // quick settle, almost no bounce
    mass: 0.75,          // light & responsive
  };

  const springUltraFast = {
    type: "spring" as const,
    stiffness: 500,
    damping: 42,
    mass: 0.68,
  };

  const overshootCurve: [number, number, number, number] = [0.165, 0.84, 0.44, 1]; // very popular macOS/iOS-ish overshoot

  const cardVariants = {
    collapsed: {
      borderRadius: "16px",
      transition: { ...springFast, duration: 0.38 }
    },
    expanded: {
      borderRadius: "28px", // bigger radius feels more premium on expand
      transition: { ...springFast, duration: 0.42 }
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div
          layout
          layoutId={`project-card-${project.id}`}
          variants={cardVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={{
            default: springFast,
            layout: springFast,
            borderRadius: { type: "tween", duration: 0.4, ease: overshootCurve }
          }}
          className={`
            cursor-pointer overflow-hidden bg-white border border-gray-200
            ${isExpanded
              ? `fixed z-50 shadow-2xl border-gray-300/70
                 ${isMobile ? "inset-4 top-10 bottom-10" : "inset-6 lg:inset-12"}`
              : "relative h-16 sm:h-20 shadow-sm hover:shadow-md"
            }
          `}
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={!isExpanded ? { scale: 1.016, y: -2.5 } : {}}
          whileTap={{ scale: isExpanded ? 0.995 : 0.97 }}
        >
          {/* Collapsed content */}
          {!isExpanded && (
            <div className="flex items-center justify-between h-full px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex flex-col min-w-0 flex-1">
                <h3 className="text-gray-900 font-semibold text-sm sm:text-base tracking-tight truncate">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium truncate">
                  {project.category}
                </p>
              </div>

              <div className="flex items-center space-x-3 flex-shrink-0">
                <div className="hidden sm:flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full text-xs">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="text-gray-600 font-medium">{project.year}</span>
                </div>
                <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Expanded content */}
          {isExpanded && (
            <div className="p-5 sm:p-7 md:p-9 h-full flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div className="flex items-center space-x-4 flex-1 pr-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center border border-blue-200/60 flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold tracking-tight mb-1 truncate">{project.title}</h1>
                    <div className="flex items-center space-x-3 text-sm">
                      <span className="text-gray-600 font-medium">{project.category}</span>
                      <div className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="text-gray-500">{project.year}</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-700"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  transition={springUltraFast}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </motion.button>
              </div>

              {/* Main content grid */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-7 min-h-0">
                {/* Left side */}
                <div className="space-y-6">
                  {/* Image */}
                  {project.image ? (
                    <div className="rounded-2xl overflow-hidden aspect-video border border-gray-200 shadow-sm relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center">
                      <p className="text-gray-500 font-medium">Preview not available</p>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: project.technologies.length, label: "Tech stack", color: "blue" },
                      { value: project.year, label: "Year", color: "purple" },
                      { value: "●", label: "Active", color: "green" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border border-${stat.color}-200/60 rounded-xl p-4 text-center`}
                      >
                        <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                        <div className={`text-xs font-medium text-${stat.color}-600/80`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold mb-3">About</h2>
                    <p className="text-gray-600 leading-relaxed text-[15px]">{project.description}</p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold mb-3">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100/80 text-gray-700 text-sm font-medium rounded-lg border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-3">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-5 rounded-xl text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={springUltraFast}
                      >
                        View Live Project →
                      </motion.a>
                    )}

                    {project.sourceCode && (
                      <motion.a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-5 rounded-xl text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={springUltraFast}
                      >
                        View Source Code →
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Backdrop - very fast & subtle */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40"
            onClick={() => setIsExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: overshootCurve }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicProjectCard;