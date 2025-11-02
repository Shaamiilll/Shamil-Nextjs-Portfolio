"use client";
import { useState } from "react";
import Image from "next/image";

export default function ForHer() {
  const [authenticated, setAuthenticated] = useState(false);
  const [date, setDate] = useState("");

  const images = ["/images/3.1.png", "/images/3.2.png", "/images/3.3.png"];
  const PASSWORD = "2022-10-30"; // YYYY-MM-DD format for date input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date === PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect date!");
      setDate("");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
        <h1 className="mb-4 text-xl font-bold">Select the Date</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 rounded text-black"
          />
          <button type="submit" className="px-4 py-2 mt-2 bg-white text-black rounded">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-y-scroll no-scrollbar bg-black">
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

      <div className="relative w-full flex items-center justify-center snap-start">
        <div className="w-full max-w-3xl aspect-video">
          <video
            src="/videos/anniversary.mp4"
            className="w-full h-full object-contain"
            controls
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
