"use client";

import React from "react";
import Image from "next/image";

interface ResumePaperLayoutProps {
  children: React.ReactNode;
}

export default function ResumePaperLayout({ children }: ResumePaperLayoutProps) {
  return (
    <div className="relative min-h-screen w-full selection:bg-neutral-900 selection:text-white">
      {/* ── 1. Fixed High-Quality Cutting Mat Desk Background ── */}
      <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden pointer-events-none">
        <Image
          src="/desk-bg.jpg"
          alt="Cutting Mat Desk Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        {/* Subtle ambient lighting vignette overlay */}
        <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
      </div>

      {/* ── 2. Scrollable Viewport Container ── */}
      <div className="relative z-10 min-h-screen w-full px-2.5 py-4 sm:px-6 sm:py-10 md:py-16 lg:py-20 flex justify-center">
        {/* ── 3. Centered Expansive Physical Paper Document (Responsive Layout) ── */}
        <div className="relative w-full max-w-5xl lg:max-w-[1060px] xl:max-w-[1100px] overflow-hidden rounded-xl sm:rounded-3xl border border-[#e5e1d3] bg-[#faf8f4] p-4 sm:p-10 md:p-14 lg:p-20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45),0_10px_24px_-5px_rgba(0,0,0,0.25)] ring-1 ring-black/5 backdrop-blur-2xs">
          {/* Paper Texture: Tactile Fiber Noise Overlay */}
          <div 
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.065] mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
            }}
          />

          {/* Paper Grid: Fine Notebook Drafting Grid on the paper */}
          <div 
            className="pointer-events-none absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Subtle Inner Paper Edge Glow / Bevel */}
          <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl sm:rounded-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.05)]" />

          {/* Document Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
