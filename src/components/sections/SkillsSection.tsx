// File: components/sections/SkillsSection.js
import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = ["React.js", "Node.js", "MongoDB", "Express.js", "Next.js", "Tailwind CSS", "AWS", "Git", "Github", "PostgreSQL", "TypeScript", "Python", "Redux" ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-4 sm:mt-6"
    >
      <h2 className="font-semibold text-base sm:text-lg">Skills</h2>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;