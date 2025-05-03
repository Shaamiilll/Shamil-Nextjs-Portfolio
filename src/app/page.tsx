"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import ProjectsPage from "@/components/ProjectsPage";

export default function Home() {
  const pageTitle = "Shamil A | Full Stack Developer | MERN Specialist";
  const pageDescription =
    "Shamil A is a skilled Full Stack Developer with 2+ years of experience specializing in MERN stack. View portfolio, projects, and contact information.";
  const keywords =
    "Shamil A, Shamil Amiyan, Full Stack Developer, MERN Stack, React Developer, Node.js Developer, Web Developer, MongoDB, Express, React, Next.js, Tailwind CSS";

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shamil A",
    url: "https://shamil-amiyan.vercel.app",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Independent Professional",
    },
    sameAs: [
      "https://www.linkedin.com/in/shamilamiyan/",
      "https://github.com/shaamiilll",
    ],
    knowsAbout: [
      "MERN Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Next.js",
      "Tailwind CSS",
      "Web Development",
    ],
  };

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Shamil A" />
        <link rel="canonical" href="https://shamil-amiyan.vercel.app" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shamil-amiyan.vercel.app" />
        <meta
          property="og:image"
          content="https://shamil-amiyan.vercel.app/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://shamil-amiyan.vercel.app/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-xl w-full"
        >
          <Navigation activePage={activePage} setActivePage={setActivePage} />
          <Header />
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
    </>
  );
}
