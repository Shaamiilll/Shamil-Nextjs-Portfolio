"use client";
import { useState } from "react";
import Image from "next/image";

export default function ForHer() {
  const [authenticated, setAuthenticated] = useState(false);
  const [date, setDate] = useState("");

  // const images = ["/images/3.1.png", "/images/3.2.png", "/images/3.3.png"];
  const images = ["/images/rose-1.png"];
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
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-rose-950 to-black text-white px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20 text-2xl leading-10">
          <div className="absolute top-6 left-6">🌹🌹🌹</div>
          <div className="absolute top-24 right-8">🌹🌹</div>
          <div className="absolute bottom-16 left-10">🌹🌹🌹🌹</div>
          <div className="absolute bottom-24 right-6">🌹🌹🌹</div>
        </div>

        <div className="relative z-10 w-full max-w-md rounded-2xl border border-rose-400/40 bg-black/60 backdrop-blur-md p-6 shadow-[0_0_30px_rgba(244,63,94,0.25)]">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-rose-200/80">Rose Day Special</p>
            <h1 className="mt-2 text-2xl font-bold">Happy Rose Day 🌹</h1>
            <p className="mt-2 text-sm text-rose-100/80">
              Enter the date that blooms our story.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
            <label className="text-xs uppercase tracking-widest text-rose-200/70">
              Our Special Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none ring-2 ring-transparent transition focus:ring-rose-400"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white transition hover:bg-rose-600"
            >
              Unlock the Roses
            </button>
            <p className="text-center text-xs text-rose-200/70">
              A little secret, just for her.
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-y-scroll no-scrollbar bg-black">
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-200/80">
            Rose Day
          </p>
          <h2 className="text-2xl font-bold text-rose-100">For Her 🌹</h2>
        </div>
        <div className="absolute top-12 left-6 text-2xl opacity-60">🌹</div>
        <div className="absolute top-32 right-10 text-3xl opacity-50">🌹</div>
        <div className="absolute bottom-24 left-10 text-3xl opacity-50">🌹</div>
        <div className="absolute bottom-10 right-8 text-2xl opacity-60">🌹</div>
      </div>
      <video
        // src="/videos/anniversary.mp4"
        src="/videos/rose-1.mp4"
        className="w-screen h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

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
            // src="/videos/anniversary.mp4"
            src="/videos/rose-day.mp4"
            className="w-full h-full object-contain "
            loop
            controls
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
