import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Central data — keep facts in one place so page copy + structured data match.
// ---------------------------------------------------------------------------
const PROFILE = {
  name: "Shamil A",
  fullName: "Shamil Amiyan",
  alternateNames: ["Shamil", "Shamil A", "Shamil Amiyan"],
  jobTitle: "Software Engineer & Full Stack Developer",
  tagline: "Building scalable, high-performance software systems.",
  location: "Malappuram, Kerala, India",
  email: "connect@shamil.info",
  url: "https://shamil.info",
  aboutUrl: "https://shamil.info/about",
  // NOTE: add your real photo at public/images/shamil-amiyan.jpg (recommended 1200x1200).
  image: "/images/shamil-amiyan.jpg",
  imageAbsolute: "https://shamil.info/images/shamil-amiyan.jpg",
  sameAs: [
    "https://www.linkedin.com/in/shamilamiyan/",
    "https://github.com/shaamiilll",
    "https://www.instagram.com/shaamiilll",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "AWS",
    "System Design",
    "REST APIs",
    "Microservices",
  ],
};

// ---------------------------------------------------------------------------
// Page-specific metadata (App Router). This is what Google actually reads.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "About Shamil A (Shamil Amiyan) — Software Engineer",
  description:
    "Learn about Shamil A (Shamil Amiyan), a Software Engineer & Full Stack Developer from Malappuram, Kerala, India. Read his story, skills, experience, and how to get in touch.",
  keywords: [
    "About Shamil",
    "About Shamil A",
    "About Shamil Amiyan",
    "Who is Shamil A",
    "Who is Shamil Amiyan",
    "Shamil developer",
    "Shamil software engineer",
    "Shamil Kerala",
  ],
  alternates: {
    canonical: "https://shamil.info/about",
  },
  openGraph: {
    title: "About Shamil A (Shamil Amiyan) — Software Engineer",
    description:
      "Learn about Shamil A (Shamil Amiyan), a Software Engineer & Full Stack Developer from Malappuram, Kerala, India.",
    type: "profile",
    url: "https://shamil.info/about",
    images: [
      {
        url: PROFILE.image,
        width: 1200,
        height: 1200,
        alt: "Shamil A (Shamil Amiyan) — Software Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shamil A (Shamil Amiyan) — Software Engineer",
    description:
      "Learn about Shamil A (Shamil Amiyan), a Software Engineer & Full Stack Developer from Kerala, India.",
    images: [PROFILE.image],
  },
};

// ---------------------------------------------------------------------------
// Visible FAQ content (kept in sync with FAQPage structured data below).
// ---------------------------------------------------------------------------
const FAQS = [
  {
    q: "Who is Shamil A?",
    a: "Shamil A (full name Shamil Amiyan) is a Software Engineer and Full Stack Developer based in Malappuram, Kerala, India. He builds scalable, high-performance web applications and SaaS products using the MERN stack, Next.js, and cloud technologies like AWS.",
  },
  {
    q: "What does Shamil Amiyan do?",
    a: "Shamil Amiyan designs and develops full stack web applications — from front-end interfaces in React and Next.js to back-end APIs, databases, and cloud infrastructure. He specializes in system design, REST APIs, microservices, and building products that scale.",
  },
  {
    q: "Where is Shamil A from?",
    a: "Shamil A is from Malappuram, Kerala, India, and works with clients and teams worldwide as a remote software engineer.",
  },
  {
    q: "How can I contact Shamil A?",
    a: "You can reach Shamil A by email at connect@shamil.info, or connect on LinkedIn and GitHub linked on this page.",
  },
];

export default function AboutPage() {
  // -------------------------------------------------------------------------
  // Structured data: ProfilePage + Person + BreadcrumbList + FAQPage.
  // Rich, accurate JSON-LD is the single biggest lever for a Knowledge Panel
  // and for Google understanding "Shamil A = Shamil Amiyan".
  // -------------------------------------------------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${PROFILE.aboutUrl}#profilepage`,
        url: PROFILE.aboutUrl,
        name: "About Shamil A (Shamil Amiyan)",
        isPartOf: { "@id": `${PROFILE.url}#website` },
        about: { "@id": `${PROFILE.url}#person` },
        primaryImageOfPage: PROFILE.imageAbsolute,
      },
      {
        "@type": "WebSite",
        "@id": `${PROFILE.url}#website`,
        url: PROFILE.url,
        name: "Shamil A (Shamil Amiyan)",
        publisher: { "@id": `${PROFILE.url}#person` },
      },
      {
        "@type": "Person",
        "@id": `${PROFILE.url}#person`,
        name: PROFILE.fullName,
        alternateName: PROFILE.alternateNames,
        jobTitle: PROFILE.jobTitle,
        description:
          "Software Engineer & Full Stack Developer specializing in MERN stack, Next.js, SaaS, and scalable web systems.",
        url: PROFILE.url,
        image: PROFILE.imageAbsolute,
        email: `mailto:${PROFILE.email}`,
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
        knowsAbout: PROFILE.skills,
        sameAs: PROFILE.sameAs,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PROFILE.aboutUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: PROFILE.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: PROFILE.aboutUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PROFILE.aboutUrl}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-4 sm:px-6 pt-10 sm:pt-16 pb-16">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-2xl w-full">
        {/* Breadcrumb (visible + crawlable) */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs sm:text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-800 font-medium" aria-current="page">
              About
            </li>
          </ol>
        </nav>

        {/* Hero: photo + name */}
        <header className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-gray-100">
            <Image
              src={PROFILE.image}
              alt="Shamil A (Shamil Amiyan) — Software Engineer & Full Stack Developer from Kerala, India"
              fill
              sizes="(max-width: 640px) 112px, 144px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              About Shamil A
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-700">
              Also known as <strong>Shamil Amiyan</strong> — {PROFILE.jobTitle}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              {PROFILE.location}
            </p>
          </div>
        </header>

        {/* Intro */}
        <section className="mt-10">
          <p className="text-sm sm:text-base leading-relaxed text-gray-800">
            Hi, I&apos;m <strong>Shamil A</strong>, also known as{" "}
            <strong>Shamil Amiyan</strong>. I&apos;m a{" "}
            <strong>Software Engineer</strong> and{" "}
            <strong>Full Stack Developer</strong> from {PROFILE.location}, focused
            on building scalable, high-performance software systems. I work across
            the entire stack — designing clean user interfaces, architecting
            reliable back-end services, and deploying to the cloud.
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            Over the years, Shamil Amiyan has built SaaS platforms, e-commerce
            systems, and social applications used in production. I care deeply
            about system design, performance, and writing software that&apos;s
            reliable and built to scale.
          </p>
        </section>

        {/* What I do */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg sm:text-xl">What I Do</h2>
          <ul className="mt-3 space-y-2 text-sm sm:text-base text-gray-800 leading-relaxed">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              <span>
                Full stack web development with the <strong>MERN stack</strong>,{" "}
                <strong>Next.js</strong>, and <strong>TypeScript</strong>.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              <span>
                Designing scalable back-end systems — REST APIs, microservices,
                caching, and distributed architectures.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              <span>
                Building and shipping SaaS and e-commerce products on{" "}
                <strong>AWS</strong> cloud infrastructure.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              <span>
                Optimizing performance and handling large-scale traffic.
              </span>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg sm:text-xl">Skills &amp; Technologies</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {PROFILE.skills.map((skill) => (
              <li
                key={skill}
                className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ (visible, matches FAQ schema) */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg sm:text-xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-5">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="font-medium text-sm sm:text-base text-gray-900">
                  {f.q}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact + links */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg sm:text-xl">Get in Touch</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-800">
            Email:{" "}
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-blue-600 hover:underline"
            >
              {PROFILE.email}
            </a>
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            {PROFILE.sameAs.map((href) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {new URL(href).hostname.replace("www.", "")}
              </a>
            ))}
          </div>
        </section>

        {/* Internal link back */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}
