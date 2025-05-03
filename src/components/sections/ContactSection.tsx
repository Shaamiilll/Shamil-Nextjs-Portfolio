// File: components/sections/ContactSection.js
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mt-4 sm:mt-6 mb-8"
    >
      <h2 className="font-semibold text-base sm:text-lg">Contact</h2>
      <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
        <motion.a
          href="mailto:shamilamiyan@gmail.com"
          className="text-xs sm:text-sm text-gray-700 hover:underline"
          transition={{ duration: 0.3 }}
        >
          shamilamiyan@gmail.com
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactSection;