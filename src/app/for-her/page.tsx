"use client";
import Image from "next/image";

export default function ForHer() {
  const images = [
    "/images/3.1.png",

  ];

  return (
    <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-black">
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
      <div className="relative w-full h-screen flex items-center justify-center snap-start bg-black px-2">
        <div className="w-full max-w-3xl aspect-video">
          <video
            src="/videos/anniversary.mp4"
            className="w-full h-full rounded-xl object-contain bg-black"
            controls
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
