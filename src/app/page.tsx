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
    url: "https://shamil.info",
    image: "https://shamil.info/profile.jpg",
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
        <link rel="canonical" href="https://shamil.info" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shamil.info" />
        <meta
          property="og:image"
          content="https://shamil.info"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://shamil.info/og-image.jpg"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        {/* Animated gradient background - Ultra light theme with moving colors */}
        <div className="absolute inset-0 animate-gradient-xy bg-gradient-to-br from-orange-25 via-amber-25 to-pink-25"
          style={{
            background: 'linear-gradient(-45deg, #fffaf7, #fffcf5, #fdf2f8, #fffdf2, #fefefe)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 20s ease infinite'
          }}>
        </div>

        {/* Moving color overlay - Ultra subtle */}
        <div className="absolute inset-0 opacity-15"
          style={{
            background: 'linear-gradient(45deg, #fef3e2, #fefce8, #fce7f3, #f8fafc, #fef2f2)',
            backgroundSize: '300% 300%',
            animation: 'gradientShift 25s ease infinite reverse'
          }}>
        </div>

        {/* Floating animated orbs - Ultra light and slow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-50/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-amber-50/20 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-50/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-5 pointer-events-none"></div>

        {/* CSS Animation Styles */}
        <style jsx>{`
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}</style>

        {/* Main content with higher z-index */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative z-10 max-w-xl w-full"
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

        {/* Bottom gradient fade - Light theme */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
      </main>
    </>
  );
}
