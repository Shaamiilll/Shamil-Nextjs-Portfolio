import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shamil | Portfolio - Software Engineer & Entrepreneur",
  description:
    "Shamil is a skilled Software Engineer & Entrepreneur specializing in full-stack development, SaaS solutions, and e-commerce platforms.",
  keywords:
    "Software Engineer, Full-Stack Developer, SaaS Developer, Web Developer, Entrepreneur, JavaScript, React, Next.js, Node.js, PostgreSQL",
  author: "Shamil",
  openGraph: {
    title: "Shamil | Portfolio - Software Engineer & Entrepreneur",
    description:
      "Shamil is a skilled Software Engineer & Entrepreneur specializing in full-stack development, SaaS solutions, and e-commerce platforms.",
    type: "website",
    url: "https://shamil-amiyan.vercel.app/", // Update with your actual domain
    image: "https://yourdomain.com/og-image.jpg", // Update with an actual image for better preview
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamil | Portfolio - Software Engineer & Entrepreneur",
    description:
      "Shamil is a skilled Software Engineer & Entrepreneur specializing in full-stack development, SaaS solutions, and e-commerce platforms.",
    image: "https://yourdomain.com/twitter-card.jpg", // Update with an actual image
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="canonical" href="https://shamil-amiyan.vercel.app/" />
        <title>{metadata.title}</title>
      </head>
      <body className={`${inter.className} bg-white text-black`}>{children}</body>
    </html>
  );
}
