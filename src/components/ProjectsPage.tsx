import React from "react";
import ProjectCard from "./DynamicProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      id: "0",
      title: "Advanced StartUp india - scrapper and analyzer for startups",
      description:"A github repository for scrapping and analyzing startup data from startupinidia.gov.in. It includes features for data extraction, cleaning, and visualization to help users gain insights into the startup ecosystem in India.",
      technologies: ["Python", "BeautifulSoup", "Pandas", "Matplotlib"],
      year: "2025",
      category: "Data Analysis",
      liveLink: "https://github.com/Shaamiilll/StartupIndia-scrapper",
    },
    {
      id: "1",
      title: "Thiqaf Agency - A Agency Website for multilangual clients",
      description:
        "A modern agency website designed to showcase services and portfolios to a diverse, multilingual clientele. Features include responsive design, multi-language support, and interactive elements to engage visitors.",
      technologies: ["React", "Node.js", "End-to-End Encryption", "TypeScript"],
      year: "2025",
      category: "Social Media",
      liveLink: "https://www.thiqafagency.com",
      image: "/images/thiqaf.png",
    },
    {
      id: "2",
      title: "Auranize - A next gen Social media (On development)",
      description:
        "A next-generation social media platform designed to connect people in a secure, engaging, and interactive environment. Focused on privacy, speed, and modern communication features.",
      technologies: ["React", "Node.js", "Socket.io", "End-to-End Encryption", "TypeScript"],
      year: "2025",
      category: "Social Media",
      liveLink: "https://www.auranize.com",
      image: "/images/development.png",
    },
    {
      id: "3",
      title: "Quotely - A LargeScale SaaS Platform",
      description:
        "A powerful B2B quotation platform tailored for factories and industrial businesses, featuring real-time 3D model integration for product visualization, seamless order management, and email OTP authentication.",
      technologies: ["React.js", "Node.js", "3D MockUps", "AWS", "EC2", "Stripe Payment", "Email OTP Auth"],
      year: "2024",
      category: "SaaS",
      liveLink: "https://quotely.shop",
      sourceCode: "https://github.com/quotely-co/server",
      image: "/images/qotely.png",
    },
    {
      id: "4",
      title: "WatchLab - An Ecommerce Platform",
      description:
        "WatchLab is an ecommerce platform focused on selling watches, featuring an admin dashboard with advanced features and multiple payment gateways. Note: Currently shut down due to some reasons.",
      technologies: ["React.js", "Node.js", "Razorpay", "Multiple Payment Gateways", "EC2", "Cloudinary"],
      year: "2024",
      category: "Ecommerce",
      liveLink: "https://watchlab.in",
      sourceCode: "https://github.com/watchlab-co/backend",
      image: "/images/watchlab.png",
    },
    {
      id: "5",
      title: "Jobforce AI - A Job Platform",
      description:
        "A job platform that leverages NLP and AI to scrape and list jobs from the internet, providing a comprehensive job search experience for users.",
      technologies: ["Python", "React", "NLP", "AWS", "Node.js"],
      year: "2024",
      category: "Job Platform",
      liveLink: "https://shamil-jobforce.vercel.app/login",
      sourceCode: "https://github.com/Shaamiilll/Jobsforce",
      image: "/images/jobforce.png",
    },
    {
      id: "6",
      title: "SkillUp - An E-learning Platform",
      description:
        "An e-learning platform connecting students and mentors, built with clean architecture and featuring Google authentication for seamless access.",
      technologies: ["TypeScript", "Node.js", "React", "Clean Architecture", "Cloudinary", "Google Auth"],
      year: "2024",
      category: "E-learning",
      liveLink: "",
      sourceCode: "https://github.com/Shaamiilll/Skillup-E-learning",
      image: "/images/not-hosted.png",
    },
    {
      id: "7",
      title: "Infinity - An Ecommerce App",
      description:
        "An ecommerce platform for gadgets like mobiles and laptops, featuring an admin dashboard with sales analysis, report generation in PDF, email authentication, multiple payment gateways, and coupon code functionality.",
      technologies: ["React", "Node.js", "Email Auth", "Multiple Payment Gateways", "Coupon Code System"],
      year: "2023",
      category: "Ecommerce",
      liveLink: "",
      sourceCode: "https://github.com/Shaamiilll/Infinity-Ecommerce",
      image: "/images/not-hosted.png",
    },
  ];

  return (
    <div className="w-full mt-6 mb-8">
      <h2 className="font-semibold text-base sm:text-lg mb-4">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;