// File: components/sections/SkillsSection.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillsSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const initialSkills = [
    "React.js", "Node.js", "MongoDB", "Express.js", 
    "Next.js", "Tailwind CSS", "AWS", "Git", 
    "Github", "PostgreSQL", "TypeScript", "Python", "Redux"
  ];
  
  const additionalSkills = [
    "Socket.io", "Cloudinary", "Twilio", "SendGrid", 
    "Firebase", "Node Mailer", "OAuth 2.0", "JWT", 
    "Postman", "JIRA", "S3"
  ];
  
  const displaySkills = showAllSkills 
    ? [...initialSkills, ...additionalSkills] 
    : initialSkills;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-4 sm:mt-6"
    >
      <h2 className="font-semibold text-base sm:text-lg">Skills</h2>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <AnimatePresence>
          {displaySkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                delay: showAllSkills && index >= initialSkills.length 
                  ? (index - initialSkills.length) * 0.05 
                  : index * 0.05,
                duration: 0.2 
              }}
              className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
            >
              {skill}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
      
      <motion.button
        onClick={() => setShowAllSkills(!showAllSkills)}
        className="mt-3 text-xs text-blue-500 hover:text-blue-700 flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{showAllSkills ? "See less" : "See more"}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-3 w-3 ml-1 transition-transform ${showAllSkills ? "rotate-180" : ""}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default SkillsSection;