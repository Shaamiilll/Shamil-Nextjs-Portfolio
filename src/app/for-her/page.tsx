"use client";
import Image from "next/image";

export default function ForHer() {
  const images = [
    "/images/3.1.png",
    "/images/3.1.png",
    "/images/3.1.png",
  ];

  return (
    <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {/* Fullscreen scrollable images */}
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

      {/* Final video (landscape responsive) */}
      <div className="relative w-full h-screen flex items-center justify-center snap-start bg-black">
        <video
          src="/videos/anniversary.mp4"
          className="w-full h-full object-contain md:object-cover"
          controls
          playsInline
        />
      </div>
    </div>
  );
}
