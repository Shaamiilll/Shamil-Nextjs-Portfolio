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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        layout
        className={`
          bg-black rounded-3xl cursor-pointer overflow-hidden
          ${isExpanded ? 'fixed inset-4 z-50 ' : 'relative h-16'}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{
          backgroundColor: isHovered && !isExpanded ? "#1a1a1a" : "#000000"
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Collapsed State */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between h-full px-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-white font-medium text-sm">{project.title}</h3>
                </motion.div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 text-xs">{project.year}</span>
                <motion.div
                  animate={{ rotate: isHovered ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded State */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 h-full flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                  </div>
                  <div>
                    <h2 className="text-white font-semibold text-xl">{project.title}</h2>
                    <p className="text-gray-400 text-sm">{project.category} • {project.year}</p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M13 1L1 13M1 1l12 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </motion.button>
              </div>

              {/* Content */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Image/Video */}
                <div className="space-y-4">
                  {project.image ? (
                    <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-800 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16" stroke="currentColor" strokeWidth="2"/>
                            <path d="M14 14l2.586-2.586a2 2 0 012.828 0L22 14" stroke="currentColor" strokeWidth="2"/>
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm">No preview available</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-900 rounded-xl p-3 text-center">
                      <div className="text-white font-semibold text-lg">{project.technologies.length}</div>
                      <div className="text-gray-400 text-xs">Technologies</div>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-3 text-center">
                      <div className="text-white font-semibold text-lg">{project.year}</div>
                      <div className="text-gray-400 text-xs">Year</div>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-3 text-center">
                      <div className="text-green-400 font-semibold text-lg">●</div>
                      <div className="text-gray-400 text-xs">Active</div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-medium mb-3">About</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-white text-black font-medium py-3 px-4 rounded-xl text-sm text-center block hover:bg-gray-100 transition-colors"
                      >
                        View Live Demo
                      </motion.a>
                    )}
                    
                    {project.sourceCode && (
                      <motion.a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-gray-800 text-white font-medium py-3 px-4 rounded-xl text-sm text-center block hover:bg-gray-700 transition-colors border border-gray-700"
                      >
                        View Source Code
                      </motion.a>
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
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DynamicProjectCard;