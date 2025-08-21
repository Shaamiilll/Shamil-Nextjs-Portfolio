// File: components/ProjectsPage.js
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./DynamicProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      id: "1",
      title: "Auranize - A next gen Social media (On development)",
      description:
        "A next-generation social media platform designed to connect people in a secure, engaging, and interactive environment. Focused on privacy, speed, and modern communication features.",
      technologies: ["React", "Node.js", "Socket.io", "End-to-End Encryption", "TypeScript"],
      year: "2025",
      category: "Social Media",
      liveLink: "https://www.auranize.com",
      // sourceCode: "https://github.com/username/auranize", // Added source code link
      image: "/images/auranize.png",
    },
    {
      id: "2",
      title: "Quotely - A LargeScale SaaS Platform",
      description:
        "A powerful B2B quotation platform tailored for factories and industrial businesses, featuring real-time 3D model integration for product visualization, seamless order management, and email OTP authentication.",
      technologies: ["React.js", "Node.js", "3D MockUps", "AWS", "EC2", "Stripe Payment", "Email OTP Auth"],
      year: "2024",
      category: "SaaS",
      liveLink: "https://quotely.shop",
      sourceCode: "https://github.com/quotely-co/server", // Added source code link
      image: "/images/qotely.png",
    },
    {
      id: "3",
      title: "WatchLab - An Ecommerce Platform",
      description:
        "WatchLab is an ecommerce platform focused on selling watches, featuring an admin dashboard with advanced features and multiple payment gateways. Note: Currently shut down due to some reasons.",
      technologies: ["React.js", "Node.js", "Razorpay", "Multiple Payment Gateways", "EC2", "Cloudinary"],
      year: "2024",
      category: "Ecommerce",
      liveLink: "https://watchlab.in",
      sourceCode: "https://github.com/watchlab-co/backend", // Added source code link
      image: "/images/watchlab.png",
    },
    {
      id: "4",
      title: "Jobforce AI - A Job Platform",
      description:
        "A job platform that leverages NLP and AI to scrape and list jobs from the internet, providing a comprehensive job search experience for users.",
      technologies: ["Python", "React", "NLP", "AWS", "Node.js"],
      year: "2024",
      category: "Job Platform",
      liveLink: "https://shamil-jobforce.vercel.app/login",
      sourceCode: "https://github.com/Shaamiilll/Jobsforce", // Added source code link
      image: "/images/jobforce.png",
    },
    {
      id: "5",
      title: "SkillUp - An E-learning Platform",
      description:
        "An e-learning platform connecting students and mentors, built with clean architecture and featuring Google authentication for seamless access.",
      technologies: ["TypeScript", "Node.js", "React", "Clean Architecture", "Cloudinary", "Google Auth"],
      year: "2024",
      category: "E-learning",
      liveLink: "",
      sourceCode: "https://github.com/Shaamiilll/Skillup-E-learning", // Added source code link
      image: "/images/not-found.png",
    },
    {
      id: "6",
      title: "Infinity - An Ecommerce App",
      description:
        "An ecommerce platform for gadgets like mobiles and laptops, featuring an admin dashboard with sales analysis, report generation in PDF, email authentication, multiple payment gateways, and coupon code functionality.",
      technologies: ["React", "Node.js", "Email Auth", "Multiple Payment Gateways", "Coupon Code System"],
      year: "2023",
      category: "Ecommerce",
      liveLink: "",
      sourceCode: "https://github.com/Shaamiilll/Infinity-Ecommerce", // Added source code link
      image: "/images/not-found.png",
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
            delay={0.2 + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;