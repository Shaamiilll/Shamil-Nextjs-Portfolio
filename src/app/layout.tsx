import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shamil Amiyan | Full Stack Developer & Entrepreneur",
  description:
    "Shamil Amiyan is a skilled Full Stack Developer & Entrepreneur specializing in MERN stack development, SaaS solutions, and e-commerce platforms.",
  keywords:
    "Shamil, Shamil A, Shamil Amiyan, Full Stack Developer, MERN Stack, Software Engineer, Entrepreneur, JavaScript, React, Next.js, Node.js, MongoDB, Express, Kerala Developer",
  author: "Shamil Amiyan",
  alternates: {
    canonical: "https://shamil-amiyan.vercel.app/",
  },
  openGraph: {
    title: "Shamil Amiyan | Full Stack Developer & Entrepreneur",
    description:
      "Shamil Amiyan is a skilled Full Stack Developer & Entrepreneur specializing in MERN stack development, SaaS solutions, and e-commerce platforms.",
    type: "website",
    url: "https://shamil-amiyan.vercel.app/",
    images: [
      {
        url: "https://shamil-amiyan.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shamil Amiyan - Full Stack Developer"
      }
    ],
    siteName: "Shamil Amiyan Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamil Amiyan | Full Stack Developer & Entrepreneur",
    description:
      "Shamil Amiyan is a skilled Full Stack Developer & Entrepreneur specializing in MERN stack development, SaaS solutions, and e-commerce platforms.",
    images: ["https://shamil-amiyan.vercel.app/og-image.jpg"],
    creator: "@YourTwitterHandle" // Add if you have one
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

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