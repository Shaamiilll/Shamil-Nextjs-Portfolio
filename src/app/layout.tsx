import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://shamil.info"),
  title: {
    default: "Shamil A (Shamil Amiyan) | Software Engineer & Full Stack Developer",
    template: "%s | Shamil A (Shamil Amiyan)",
  },
  description:
    "Shamil A, also known as Shamil Amiyan, is a Software Engineer and Full Stack Developer from Kerala, India, specializing in MERN stack, Next.js, SaaS, and scalable web systems.",
  keywords: [
    "Shamil",
    "Shamil A",
    "Shamil Amiyan",
    "Shamil developer",
    "Shamil software engineer",
    "Shamil info",
    "Shamil Kerala",
    "Full Stack Developer",
    "MERN Stack",
    "Software Engineer",
    "Entrepreneur",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express",
    "Kerala Developer",
  ],
  authors: [{ name: "Shamil Amiyan", url: "https://shamil.info" }],
  creator: "Shamil Amiyan",
  publisher: "Shamil Amiyan",
  alternates: {
    canonical: "https://shamil.info",
  },
  openGraph: {
    title: "Shamil A (Shamil Amiyan) | Software Engineer & Full Stack Developer",
    description:
      "Official website of Shamil A (Shamil Amiyan) - Software Engineer & Full Stack Developer specializing in MERN stack, Next.js, SaaS, and scalable web systems.",
    type: "website",
    url: "https://shamil.info/",
    locale: "en_US",
    images: [
      {
        url: "/images/shamil-amiyan.jpg",
        width: 1200,
        height: 630,
        alt: "Shamil A (Shamil Amiyan) - Software Engineer & Full Stack Developer",
      },
    ],
    siteName: "Shamil A (Shamil Amiyan)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamil A (Shamil Amiyan) | Software Engineer & Full Stack Developer",
    description:
      "Official website of Shamil A (Shamil Amiyan) - Software Engineer & Full Stack Developer specializing in MERN stack, Next.js, SaaS, and scalable web systems.",
    images: ["/images/shamil-amiyan.jpg"],
    creator: "@shaamiilll",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XG1X1FP29B"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XG1X1FP29B', {
      page_path: window.location.pathname,
    });
  `}
        </Script>



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shamil Amiyan",
              alternateName: ["Shamil", "Shamil A"],
              jobTitle: "Full Stack Developer & Entrepreneur",
              url: "https://shamil.info",
              image: "https://shamil.info/profile.jpg",
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
                "Software Engineering",
              ],
              sameAs: [
                "https://www.linkedin.com/in/shamilamiyan/",
                "https://github.com/shaamiilll",
                "https://instagram.com/shaamiillll",
              ],
            }),
          }}
        />
      </head>

      <body className={`${inter.className} bg-white text-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}