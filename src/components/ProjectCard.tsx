import React from "react";
import { motion } from "framer-motion";

// Define the project interface
interface Project {
  title: string;
  description: string;
  technologies: string[];
  sourceCode?: string; // Optional property for source code link
  liveLink?: string; // Optional property for live project link
  image?: string; // Optional property for project image
}

// Define the props interface
interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    >
      
      
      <h3 className="font-bold text-lg text-gray-800">{project.title}</h3>
      
      <p className="text-gray-600 mt-2 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {(project.sourceCode || project.liveLink) && (
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-4">
          {project.sourceCode && (
            <a 
              href={project.sourceCode} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 text-sm"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L17.586 10l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd"
                />
              </svg>
              View Source Code
            </a>
          )}
          
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-green-600 font-medium hover:text-green-800 text-sm"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                  clipRule="evenodd"
                />
              </svg>
              View Live Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default ProjectCard;