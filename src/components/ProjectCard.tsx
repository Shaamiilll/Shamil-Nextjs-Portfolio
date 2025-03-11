import React from "react";
import { motion } from "framer-motion";

// Define the project interface
interface Project {
  title: string;
  description: string;
  technologies: string[];
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
      className="p-3 bg-gray-50 rounded-lg"
    >
      <h3 className="font-medium text-sm sm:text-base">{project.title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">{project.description}</p>
      <div className="flex gap-2 mt-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;