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
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isExpanded]);

  // ─── Optimized buttery smooth spring animations ───────
  const springSmooth = {
    type: "spring" as const,
    stiffness: 380,      // smooth acceleration
    damping: 35,         // minimal bounce, quick settle
    mass: 0.8,           // balanced weight
  };

  const springFast = {
    type: "spring" as const,
    stiffness: 450,
    damping: 40,
    mass: 0.7,
  };

  const overshootCurve: [number, number, number, number] = [0.16, 1, 0.3, 1]; // smooth ease-in-out

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          layout
          layoutId={`project-card-${project.id}`}
          initial={false}
          animate={{
            borderRadius: isExpanded ? (isMobile ? "20px" : "24px") : "16px",
          }}
          transition={{
            layout: springSmooth,
            borderRadius: { type: "tween", duration: 0.5, ease: overshootCurve }
          }}
          className={`
            cursor-pointer overflow-hidden bg-white border border-gray-200
            ${isExpanded
              ? `fixed z-50 shadow-2xl border-gray-300/70
                 ${isMobile ? "inset-3 top-14 bottom-4" : isTablet ? "inset-5 top-12 bottom-6" : "inset-8 lg:inset-16 xl:inset-20"}`
              : "relative h-14 sm:h-16 md:h-20 shadow-sm hover:shadow-md"
            }
          `}
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={!isExpanded ? { scale: 1.01, y: -1 } : {}}
          whileTap={{ scale: isExpanded ? 0.998 : 0.98 }}
        >
          {/* Collapsed content */}
          <AnimatePresence mode="wait">
            {!isExpanded && (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between h-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4"
              >
                <div className="flex flex-col min-w-0 flex-1 pr-2">
                  <h3 className="text-gray-900 font-semibold text-xs sm:text-sm md:text-base tracking-tight truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm font-medium truncate mt-0.5">
                    {project.category}
                  </p>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                  <div className="hidden sm:flex items-center space-x-1.5 sm:space-x-2 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full" />
                    <span className="text-gray-600 font-medium">{project.year}</span>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expanded content */}
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: overshootCurve }}
                className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-9 h-full flex flex-col overflow-y-auto overscroll-contain"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1 pr-3 sm:pr-4 min-w-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl flex items-center justify-center border border-blue-200/60 flex-shrink-0">
                      <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-1 truncate">{project.title}</h1>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                        <span className="text-gray-600 font-medium">{project.category}</span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-gray-500">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-700 active:bg-gray-200 flex-shrink-0 ml-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={springFast}
                  >
                    <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </motion.button>
                </div>

                {/* Main content grid */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7 min-h-0">
                  {/* Left side */}
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Image */}
                    {project.image ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...springSmooth, delay: 0.1 }}
                        className="rounded-xl sm:rounded-2xl overflow-hidden aspect-video border border-gray-200 shadow-sm relative"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        />
                      </motion.div>
                    ) : (
                      <div className="aspect-video rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center">
                        <p className="text-gray-500 font-medium text-sm sm:text-base">Preview not available</p>
                      </div>
                    )}

                    {/* Stats */}
                    {/* <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                      {[
                        { value: project.technologies.length, label: "Tech stack", color: "blue" },
                        { value: project.year, label: "Year", color: "purple" },
                        { value: "●", label: "Active", color: "green" },
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ ...springSmooth, delay: 0.15 + i * 0.05 }}
                          className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border border-${stat.color}-200/60 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center`}
                        >
                          <div className={`text-xl sm:text-2xl font-bold text-${stat.color}-600 mb-0.5 sm:mb-1`}>{stat.value}</div>
                          <div className={`text-[10px] sm:text-xs font-medium text-${stat.color}-600/80`}>{stat.label}</div>
                        </motion.div>
                      ))}
                    </div> */}
                  </div>

                  {/* Right side */}
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...springSmooth, delay: 0.2 }}
                    >
                      <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">About</h2>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">{project.description}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...springSmooth, delay: 0.25 }}
                    >
                      <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Technologies</h2>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100/80 text-gray-700 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...springSmooth, delay: 0.3 }}
                      className="space-y-2.5 sm:space-y-3 pt-2 sm:pt-3"
                    >
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 rounded-lg sm:rounded-xl text-center text-sm sm:text-base active:scale-[0.98]"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          transition={springFast}
                        >
                          View Live Project →
                        </motion.a>
                      )}

                      {project.sourceCode && (
                        <motion.a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 rounded-lg sm:rounded-xl text-center text-sm sm:text-base active:scale-[0.98]"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          transition={springFast}
                        >
                          View Source Code →
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Backdrop - smooth fade */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: overshootCurve }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicProjectCard;
