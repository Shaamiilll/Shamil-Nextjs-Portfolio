"use client";
import Image from "next/image";

export default function ForHer() {
  const images = [
    "/images/3.1.png",
    "/images/3.2.png",

  ];

  return (
    <div className="relative w-full h-screen overflow-y-scroll no-scrollbar bg-black">
      {/* Scrollable full-screen images */}
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full h-screen flex items-center justify-center snap-start"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Final video (responsive, muted, YouTube-like fit) */}
      <div className="relative w-full flex items-center justify-center snap-start">
        <div className="w-full max-w-3xl aspect-video">
          <video
            src="/videos/anniversary.mp4"
            className="w-full h-full object-contain "
            controls
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
