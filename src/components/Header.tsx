// File: components/Header.js
import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Shamil A
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="mt-1 text-sm sm:text-base font-medium text-gray-800"
        >
          Full stack Developer
        </motion.p>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Header;