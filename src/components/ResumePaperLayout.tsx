"use client";

import React from "react";

interface ResumePaperLayoutProps {
  children: React.ReactNode;
}

export default function ResumePaperLayout({ children }: ResumePaperLayoutProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#fbf9f4] text-[#171717] antialiased selection:bg-neutral-900 selection:text-white">
      {/* ── 1. Drafting / Graph Notebook Grid Overlay ── */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── 2. Macro Structural Grid Lines (every 5 cells) ── */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
        }}
      />

      {/* ── 3. Tactile Paper Fiber Noise Grain Filter ── */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* ── 4. Ambient Paper Perimeter Vignette ── */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.035)_100%)]" 
      />

      {/* ── 5. Main Content Container ── */}
      <div className="relative z-10 mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16 md:py-20">
        {children}
      </div>
    </div>
  );
}
