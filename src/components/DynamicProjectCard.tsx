// File: components/DynamicProjectCard.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the project interface
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

// Define the props interface
interface DynamicProjectCardProps {
  project: Project;
  delay: number;
}

const DynamicProjectCard: React.FC<DynamicProjectCardProps> = ({ project, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    
    >
      <motion.div
        layout
        className={`
          rounded-2xl cursor-pointer overflow-hidden transition-all duration-300
          ${isExpanded 
            ? 'fixed inset-16 z-50 bg-white/98 backdrop-blur-xl border border-gray-200/60 shadow-2xl' 
            : 'relative h-20 bg-white border border-gray-200/60 shadow-sm'
          }
        `}
        onClick={() => setIsExpanded(!isExpanded)}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Collapsed State */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between h-full px-8 py-4"
            >
              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center border border-blue-200/50">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"></div>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-gray-900 font-semibold text-base tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">{project.category}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600 text-xs font-medium">{project.year}</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded State */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 h-full flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center border border-blue-200/50">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl"></div>
                  </div>
                  <div>
                    <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-1">{project.title}</h1>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600 font-medium">{project.category}</span>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-500">{project.year}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Visual Content */}
                <div className="space-y-6">
                  {/* Main Image/Preview */}
                  <div className="relative">
                    {project.image ? (
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden aspect-video border border-gray-200/60 shadow-sm">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl aspect-video flex items-center justify-center border border-gray-200/60">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-sm border border-gray-200/60">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-gray-400"
                            >
                              <path
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 14l2.586-2.586a2 2 0 012.828 0L22 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <p className="text-gray-500 font-medium">Preview coming soon</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200/50">
                      <div className="text-xl font-bold text-blue-600 mb-1">{project.technologies.length}</div>
                      <div className="text-blue-500 text-sm font-medium">Tech</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200/50">
                      <div className="text-xl font-bold text-purple-600 mb-1">{project.year}</div>
                      <div className="text-purple-500 text-sm font-medium">Year</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200/50">
                      <div className="text-xl font-bold text-green-600 mb-1">●</div>
                      <div className="text-green-500 text-sm font-medium">Active</div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  {/* About Section */}
                  <div>
                    <h2 className="text-gray-900 font-bold text-lg mb-3">About</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Technologies Section */}
                  <div>
                    <h2 className="text-gray-900 font-bold text-lg mb-4">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-xl text-sm text-center block hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>View Live Demo</span>
                        </div>
                      </a>
                    )}
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-white text-gray-700 font-semibold py-3 px-4 rounded-xl text-sm text-center block border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>View Source Code</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Backdrop when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-40"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DynamicProjectCard;