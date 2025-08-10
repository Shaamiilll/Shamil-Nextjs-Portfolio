// File: components/ProjectsPage.js
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      id: "1",
      title: "DM Resharing",
      description: "A secure direct message resharing system with end-to-end encryption and advanced privacy controls. Built for seamless communication across multiple platforms with real-time synchronization.",
      technologies: ["React", "Node.js", "Socket.io", "Encryption"],
      year: "2024",
      category: "Communication",
      sourceCode: "https://github.com/example/dm-resharing",
      liveLink: "https://demo.com/dm-resharing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: "2",
      title: "Media Viewer",
      description: "Advanced media viewer with support for multiple formats, real-time editing capabilities, and cloud synchronization features. Optimized for performance and user experience.",
      technologies: ["Vue.js", "WebGL", "FFmpeg", "AWS"],
      year: "2024",
      category: "Media",
      sourceCode: "https://github.com/example/media-viewer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: "3",
      title: "Command System",
      description: "Powerful command-line interface system with intelligent autocomplete, plugin architecture, and customizable workflows. Designed for developer productivity.",
      technologies: ["TypeScript", "Electron", "CLI", "Plugins"],
      year: "2024",
      category: "Developer Tools",
      liveLink: "https://demo.com/command-system",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop"
    },
    {
      id: "4",
      title: "Send Interaction",
      description: "Real-time interaction platform enabling seamless communication with gesture recognition and voice commands. Built for modern collaborative workflows.",
      technologies: ["React Native", "WebRTC", "ML Kit", "Firebase"],
      year: "2024",
      category: "Mobile",
      sourceCode: "https://github.com/example/send-interaction",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
      id: "5",
      title: "@Everyone",
      description: "Collaborative workspace platform with advanced notification system and team management features. Streamlines communication for distributed teams.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
      year: "2024",
      category: "Collaboration",
      liveLink: "https://demo.com/everyone",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      id: "6",
      title: "/Gif",
      description: "High-performance GIF creation and optimization tool with batch processing and custom compression algorithms. Perfect for content creators.",
      technologies: ["Python", "OpenCV", "FastAPI", "Docker"],
      year: "2024",
      category: "Media Processing",
      sourceCode: "https://github.com/example/gif-processor"
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