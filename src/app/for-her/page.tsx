"use client";
import { useState } from "react";

export default function ValentineForHer() {
  const [unlocked, setUnlocked] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);

  const bgGradient = "bg-gradient-to-br from-pink-950 via-rose-950 to-red-950";

  if (!unlocked) {
    return (
      <div className={`relative min-h-screen ${bgGradient} text-white flex items-center justify-center px-5 py-12 overflow-hidden`}>
        {/* Floating hearts background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 text-4xl select-none animate-pulse-slow">
          <div className="absolute top-10 left-10">💗</div>
          <div className="absolute top-32 right-16">💖</div>
          <div className="absolute bottom-20 left-20">💕</div>
          <div className="absolute bottom-32 right-12">🫶</div>
          <div className="absolute top-1/2 left-1/3">💞</div>
        </div>

        <div className="relative z-10 w-full max-w-lg">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200/60 font-light">
              February 14, 2026
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-rose-300 to-pink-200 bg-clip-text text-transparent">
              To My Everything
            </h1>
            <p className="mt-3 text-sm text-pink-200/70">
              I saved one tiny question, wrapped in all my love.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-pink-400/20 shadow-2xl shadow-rose-900/30">
            <div className="min-h-[140px] flex items-center justify-center text-center">
              <p className="text-xl md:text-2xl leading-relaxed text-pink-100/95 font-light">
                Will you be my Valentine? 💞
              </p>
            </div>

            <p className="text-center text-sm text-pink-200/60">
              Say yes and open the sweetest page.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <button
                onClick={() => setUnlocked(true)}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl py-4 text-lg font-medium text-white shadow-lg hover:from-pink-600 hover:to-rose-600 transition hover:scale-[1.02]"
              >
                Yes 💌
              </button>
              <button
                onClick={() => setShowNoMessage(true)}
                className="w-full bg-white/10 rounded-xl py-4 text-lg font-medium text-pink-100/80 border border-pink-400/30 hover:border-pink-300 hover:bg-white/15 transition"
              >
                No 🙈
              </button>
            </div>

            {showNoMessage && (
              <p className="text-center mt-6 text-sm text-pink-200/70">
                No is shy... it turns into yes after a hug.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── The big romantic reveal ──
  return (
    <div className={`relative min-h-screen ${bgGradient} text-white flex items-center justify-center px-6 py-16`}>
      <div className="absolute inset-0 pointer-events-none opacity-30 text-5xl select-none">
        <div className="absolute top-16 left-12 animate-float-slow">💗</div>
        <div className="absolute top-1/3 right-16 animate-float">💖</div>
        <div className="absolute bottom-24 left-20 animate-float-slow">💕</div>
        <div className="absolute bottom-1/3 right-12 animate-float">🫶</div>
      </div>

      <div className="relative z-10 max-w-2xl text-center space-y-10">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 bg-clip-text text-transparent leading-tight">
          Yes… forever yes.
        </h1>

        <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-pink-100/90 font-light">
          <p>
            Every silly question, every shy smile, every late-night voice note…
          </p>
          <p>
            Every time you laugh at my worst jokes, every time you support mee.. epppzhumm
          </p>
          <p className="text-3xl font-medium text-pink-300 mt-10 mb-6">
            It’s always been you.
          </p>
          <p>
            You’re my favorite notification, my best dream, my softest place to land.
          </p>
          <p className="italic text-pink-200/80 mt-12">
            So yes, baby…<br/>
            I’ll be your Valentine today,<br/>
            tomorrow,<br/>
            next February 14th,<br/>
            and every single day after that —<br/>
            until the stars forget how to shine.
          <br/>
            - korch saahithym koodyooo...??😂
          </p>
        </div>

        <div className="pt-12">
          <p className="text-4xl md:text-5xl font-serif text-pink-300 tracking-wide">
            I love you more than yesterday<br/>and less than tomorrow ♾️
          </p>
          <p className="mt-10 text-lg text-pink-200/70">
            Forever your boy,<br/>
            Shamil 💌
          </p>
        </div>
      </div>
    </div>
  );
}