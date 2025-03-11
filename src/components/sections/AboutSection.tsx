// File: components/sections/AboutSection.js
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const aboutItems = [
    "Full stack Developer specializing in MERN stack",
    "2+ years of professional experience building web applications",
    {
      text: "Worked with startups",
      link: "https://www.linkedin.com/in/shamilamiyan/details/experience/",
      linkText: "Learn more"
    },
    "Focused on creating intuitive, responsive user interfaces",
    "Continuously learning and exploring new technologies"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mt-6 sm:mt-8"
    >
      <h2 className="font-semibold text-base sm:text-lg">About</h2>
      <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-gray-700 max-w-md leading-relaxed">
        {aboutItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            {typeof item === "string" ? (
              <span>{item}</span>
            ) : (
              <span>
                {item.text}{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = item.link;
                  }}
                >
                  {item.linkText}
                </a>
              </span>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AboutSection;