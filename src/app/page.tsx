"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activePage, setActivePage] = useState("home");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-xl w-full"
      >
        {/* Navigation Buttons */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActivePage("home")}
            className={`px-4 py-2 mx-1 rounded-2xl shadow-md transition-colors ${
              activePage === "home" 
                ? "bg-black text-white" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActivePage("projects")}
            className={`px-4 py-2 mx-1 rounded-2xl shadow-md transition-colors ${
              activePage === "projects" 
                ? "bg-black text-white" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Projects
          </button>
        </div>

        {/* Header with name and social icons in a flex container */}
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

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
            className="mt-3 sm:mt-0 flex gap-3"
          >
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/shamilamiyan/"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-blue-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 17H6.477v-7H9v7zM7.694 8.717c-.771 0-1.286-.514-1.286-1.2s.514-1.2 1.371-1.2c.771 0 1.286.514 1.286 1.2s-.514 1.2-1.371 1.2zM18 17h-2.442v-3.826c0-1.058-.651-1.302-.895-1.302s-1.058.163-1.058 1.302V17h-2.523v-7h2.523v.977c.325-.57.976-.977 2.197-.977S18 10.977 18 13.174V17z" clipRule="evenodd" />
              </svg>
            </motion.a>
            {/* GitHub */}
            <motion.a
              href="https://www.github.com/shaamiilll"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </motion.a>
            {/* Email */}
            <motion.a
              href="mailto:shamilamiyan@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-red-500"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Content Container with AnimatePresence for smooth transitions */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activePage === "home" ? (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full"
              >
                {/* About Section with Bullet Points */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-6 sm:mt-8"
                >
                  <h2 className="font-semibold text-base sm:text-lg">About</h2>
                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-gray-700 max-w-md leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Full stack Developer specializing in MERN stack </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>2+ years of professional experience building web applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        Worked with startups{" "}
                        <a
                          href="#"
                          className="text-blue-600 hover:underline font-medium"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "https://www.linkedin.com/in/shamilamiyan/details/experience/";
                          }}
                        >
                          Learn more
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Focused on creating intuitive, responsive user interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Continuously learning and exploring new technologies</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-4 sm:mt-6"
                >
                  <h2 className="font-semibold text-base sm:text-lg">Skills</h2>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["React", "Node.js", "MongoDB", "Express", "Next.js", "Tailwind CSS"].map((skill, index) => (
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

                {/* Contact Section */}
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
                    <p className="text-xs sm:text-sm text-gray-700">Phone: +91 9744676504</p>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              /* Projects Page Content */
              <motion.div
                key="projects"
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
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <h3 className="font-medium text-sm sm:text-base">Portfolio Website</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">A personal portfolio website built with Next.js and Tailwind CSS.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">Next.js</span>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">Tailwind</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="p-3 bg-gray-50 rounded-lg"
                  >
                    <h3 className="font-medium text-sm sm:text-base">E-Commerce Platform</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">A full-stack e-commerce application with MERN stack.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">MongoDB</span>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">Express</span>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">React</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}