"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-white">
      {/* Header is now simplified without the mobile navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-3xl w-full"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        >
          Shamil
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="mt-2 text-base sm:text-lg font-medium text-gray-800"
        >
          Software Engineer
        </motion.p>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
          className="mt-8 sm:mt-12"
        >
          <h2 className="font-semibold text-lg sm:text-xl">About</h2>
          <p className="mt-1 text-sm sm:text-base text-gray-700 max-w-md leading-relaxed">
            An innovative and passionate software engineer specializing in MERN stack development with 2+ years of experience.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
          className="mt-6 sm:mt-8"
        >
          <h2 className="font-semibold text-lg sm:text-xl">Skills</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {["React", "Node.js", "MongoDB", "Express", "Next.js", "Tailwind CSS"].map((skill, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-xs sm:text-sm rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="mt-6 sm:mt-8 mb-12"
        >
          <h2 className="font-semibold text-lg sm:text-xl">Contact</h2>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <motion.a
              href="mailto:shamilamiyan@gmail.com"
              className="text-blue-600 hover:underline"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              shamilamiyan@gmail.com
            </motion.a>
            <p className="text-sm sm:text-base text-gray-700">Phone: +91 9744676504</p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}