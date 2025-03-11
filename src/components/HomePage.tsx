// File: components/HomePage.js
import React from "react";
import { motion } from "framer-motion";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute w-full"
    >
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </motion.div>
  );
};

export default HomePage;