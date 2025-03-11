// File: app/page.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import ProjectsPage from "@/components/ProjectsPage";
import { AnimatePresence } from "framer-motion";

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
        <Navigation activePage={activePage} setActivePage={setActivePage} />
        <Header />

        {/* Content Container with AnimatePresence for smooth transitions */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activePage === "home" ? (
              <HomePage key="home" />
            ) : (
              <ProjectsPage key="projects" />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}