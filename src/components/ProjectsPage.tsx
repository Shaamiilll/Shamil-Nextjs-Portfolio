// File: components/ProjectsPage.js
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "Tailwind"]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with MERN stack.",
      technologies: ["MongoDB", "Express", "React"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute w-full mt-6 mb-8"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="font-semibold text-base sm:text-lg mb-4"
      >
        Projects
      </motion.h2>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            project={project}
            delay={0.2 + (index * 0.1)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;