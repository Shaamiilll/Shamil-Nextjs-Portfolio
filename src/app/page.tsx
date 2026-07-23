"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import ProjectsPage from "@/components/ProjectsPage";

export default function Home() {
  const pageTitle = "Shamil A | Shamil Amiyan | Software Engineer & Entrepreneur";

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <main className="h-[100dvh] overflow-hidden flex flex-col items-center pt-12 sm:pt-16 px-4 sm:px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-2xl w-full flex flex-col h-full min-h-0"
        >
          {/* Static top: navigation + name/header */}
          <Navigation activePage={activePage} setActivePage={setActivePage} />
          <Header />

          {/* Scrollable content area with fade edges */}
          <div className="fade-scroll-y flex-1 min-h-0 overflow-y-auto no-scrollbar pt-2 pb-10">
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
    </>
  );
}
