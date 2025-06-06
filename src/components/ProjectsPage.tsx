// File: components/ProjectsPage.js
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "White Label Quotation Service - SaaS Website",
      description: "A SaaS platform for generating and downloading white-label quotations for factory and ventors .A large scale project with multiple features.",
      sourceCode: "https://github.com/quotely-co/client",
      liveLink: "https://quotely.shop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "PDF Download" ,"3D Model"]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with MERN stack with admin role and payment gateway integration.",
      sourceCode: "https://github.com/watchlab-co/client",
      liveLink: "https://www.watchlab.in/",
      technologies: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "AI Job Platform",
      description: "An AI-powered job platform that lets users upload their resume and intelligently fetches relevant jobs from the internet using NLP. Built with modern tech stack and scalable microservices.",
      sourceCode: "https://github.com/Shaamiilll/Jobsforce",
      liveLink: "https://shamil-jobforce.vercel.app/",
      technologies: ["AI", "NLP", "Python", "FastAPI", "Node.js", "React.js", "AWS"],
    },
    {
      title: "Infinity ecommerce application",
      description: "An e-commerce application for gadgets with Razorpay integration. & admin role",
      sourceCode: "https://github.com/Shaamiilll/Infinity-Ecommerce",
      technologies: ["Node.js", "AWS", "EJS", "MongoDB", "Razorpay", "Express"]
    },
    {
      title: "Skill Up - E-Learning Platform",
      description: "An online learning platform with authentication and payment gateway integration for student and instructor roles.",
      sourceCode: "https://github.com/Shaamiilll/Skillup-E-learning",
      technologies: ["TypeScript", "Node.js", "React", "MongoDB", "Express", "OAuth", "AWS", "Payment Gateway"]
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS.",
      liveLink: "https://shamil-amiyan.vercel.app/",
      technologies: ["Next.js", "Tailwind"]
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