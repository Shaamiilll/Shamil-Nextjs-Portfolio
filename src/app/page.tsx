"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import ProjectsPage from "@/components/ProjectsPage";

export default function Home() {
  const pageTitle = "Shamil A | Shamil Amiyan | Full Stack Developer & MERN Specialist";
  const pageDescription =
    "Official website of Shamil A (Shamil Amiyan) - Full Stack Developer & Entrepreneur. 2+ years experience in MERN stack, Next.js, and modern web development.";
  const keywords =
    "Shamil, Shamil A, Shamil Amiyan, Shamil Info, Shamil Developer, Shamil MERN, Full Stack Developer, MERN Stack, React Developer, Node.js Developer, Web Developer, MongoDB, Express, React, Next.js, Tailwind CSS";

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shamil A",
    alternateName: ["Shamil", "Shamil Amiyan"],
    url: "https://shamil-amiyan.vercel.app",
    image: "https://shamil-amiyan.vercel.app/profile.jpg",
    jobTitle: "Full Stack Developer & Entrepreneur",
    birthDate: "2004-09-13",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      addressCountry: "India",
    },
    worksFor: {
      "@type": "Organization",
      name: "Independent Professional",
    },
    knowsAbout: [
      "MERN Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Next.js",
      "Tailwind CSS",
      "Web Development",
      "AWS",
      "Software Engineering"
    ],
    sameAs: [
      "https://www.linkedin.com/in/shamilamiyan/",
      "https://github.com/shaamiilll",
      "https://instagram.com/your-instagram",
      "https://twitter.com/your-twitter",
      "https://www.youtube.com/@your-channel"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
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
