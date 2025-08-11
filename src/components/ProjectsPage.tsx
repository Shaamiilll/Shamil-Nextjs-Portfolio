// File: components/ProjectsPage.js
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      id: "1",
      title: "Auranize",
      description: "A next-generation social media platform designed to connect people in a secure, engaging, and interactive environment. Focused on privacy, speed, and modern communication features.",
      technologies: ["React", "Node.js", "Socket.io", "End-to-End Encryption"],
      year: "2024",
      category: "Social Media",
      liveLink: "https://auranize.com",
      image: "/images/auranize.png"
    },
    {
      id: "2",
      title: "Quotely",
      description: "A powerful B2B quotation platform tailored for factories and industrial businesses, featuring real-time 3D model integration for product visualization and seamless order management.",
      technologies: ["Vue.js", "WebGL", "FFmpeg", "AWS"],
      year: "2024",
      category: "SaaS",
      liveLink: "https://quotely.shop",
      image: "/images/qotely.png"
    },
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