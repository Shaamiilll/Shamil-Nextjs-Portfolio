import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

const layoutSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 32,
  mass: 0.9,
};

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const DynamicProjectCard: React.FC<DynamicProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isExpanded) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isExpanded]);

  const open = () => setIsExpanded(true);
  const close = () => setIsExpanded(false);

  const shellId = `project-shell-${project.id}`;
  const titleId = `project-title-${project.id}`;

  return (
    <div className="relative">
      {isExpanded ? (
        <div className="h-16 sm:h-[4.5rem] md:h-20" aria-hidden />
      ) : (
        <motion.button
          type="button"
          layoutId={shellId}
          onClick={open}
          transition={layoutSpring}
          className="w-full text-left cursor-pointer overflow-hidden bg-white h-16 sm:h-[4.5rem] md:h-20 group"
          whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.95)" }}
          style={{ borderRadius: 16 }}
        >
          <div className="flex items-center justify-between h-full px-4 sm:px-5 md:px-6">
            <div className="flex flex-col min-w-0 flex-1 pr-3 sm:pr-4">
              <motion.h3
                layoutId={titleId}
                className="text-gray-900 font-semibold text-sm sm:text-[15px] md:text-base tracking-tight truncate"
                transition={layoutSpring}
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-500 text-xs sm:text-[13px] md:text-sm font-medium truncate mt-0.5">
                {project.category}
              </p>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3.5 flex-shrink-0">
              <div className="hidden sm:flex items-center gap-1.5 text-xs sm:text-[13px]">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                <span className="text-gray-500 font-medium tabular-nums">{project.year}</span>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-gray-600 group-hover:bg-gray-100/80 transition-colors duration-200">
                <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </motion.button>
      )}

      {mounted &&
        createPortal(
          <>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  key="backdrop"
                  className="fixed inset-0 z-40 bg-black/25"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  onClick={close}
                />
              )}
            </AnimatePresence>

            {isExpanded && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pointer-events-none">
          <motion.div
            layoutId={shellId}
            transition={layoutSpring}
            className="pointer-events-auto w-full max-w-3xl max-h-[min(90vh,820px)] overflow-y-auto bg-white shadow-xl"
            style={{ borderRadius: 24 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: easeOut, delay: 0.12 }}
              className="p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="min-w-0 flex-1">
                  <motion.h2
                    layoutId={titleId}
                    className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 leading-snug"
                    transition={layoutSpring}
                  >
                    {project.title}
                  </motion.h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {project.category}
                    <span className="mx-1.5 text-gray-300">·</span>
                    {project.year}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close"
                  onClick={close}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors flex items-center justify-center flex-shrink-0"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 md:items-stretch">
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[240px] rounded-xl overflow-hidden bg-gray-100">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 380px"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-400 text-sm">No preview</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-2">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(project.liveLink || project.sourceCode) && (
                    <div className="flex gap-2 mt-auto pt-1">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center flex-1 rounded-lg bg-gray-900 text-white text-sm font-medium h-10 px-4 hover:bg-gray-800 transition-colors"
                        >
                          View project
                        </a>
                      )}
                      {project.sourceCode && (
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center flex-1 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium h-10 px-4 hover:bg-gray-200 transition-colors"
                        >
                          Source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
              </div>
            )}
          </>,
          document.body
        )}
    </div>
  );
};

export default DynamicProjectCard;
