"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Layers, 
  FileText, 
  Palette, 
  Sparkles, 
  Download,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import ResumePaperLayout from "@/components/ResumePaperLayout";
import ResumeDock from "@/components/ResumeDock";
import ResumeDownloadModal from "@/components/ResumeDownloadModal";

export default function ResumePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ResumePaperLayout>
      {/* ── 1. Top Navigation Pill ── */}
      <div className="flex justify-center">
        <motion.a
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://abinvarghese.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/80 px-3.5 py-1 text-xs font-medium text-neutral-600 shadow-2xs backdrop-blur-xs transition hover:border-neutral-400 hover:text-neutral-900"
        >
          <span className="flex h-2 w-2 rounded-full bg-neutral-300 ring-2 ring-neutral-200 group-hover:bg-neutral-800 transition" />
          <span className="text-[10px] text-neutral-400">▶</span>
          <span>abinvarghese.app</span>
        </motion.a>
      </div>

      {/* ── 2. Profile Avatar & Name ── */}
      <div className="mt-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_8px_25px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
        >
          <Image
            src="/abin-varghese.png"
            alt="Abin Varghese"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-3.5 text-sm font-medium tracking-tight text-neutral-500"
        >
          Abin Varghese
        </motion.p>

        {/* ── 3. Giant Hero Headline with Stacked Inline Glyphs ── */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 max-w-xl text-balance text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-[1.15] text-center"
        >
          Full-stack{" "}
          <span className="inline-flex items-center align-middle mx-1 -mt-1 p-1 rounded-lg bg-neutral-100 border border-neutral-200/80 shadow-2xs">
            <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
          </span>{" "}
          engineer <br className="hidden sm:inline" />
          &amp; creative designer
        </motion.h1>
      </div>

      {/* ── 4. Floating iOS-Style App Icon Dock ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <ResumeDock onOpenResumeModal={() => setIsModalOpen(true)} />
      </motion.div>

      {/* ── 5. Secondary Divider Pill ── */}
      <div className="my-6 flex justify-center sm:my-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/70 px-3 py-1 text-[11px] font-medium text-neutral-500 shadow-2xs backdrop-blur-xs">
          <span className="flex h-1.5 w-1.5 rounded-full bg-neutral-400" />
          <span className="text-[9px] text-neutral-400">▶</span>
          <span>chronicles &amp; credentials</span>
        </div>
      </div>

      {/* ── 6. Editorial Resume Prose / Narrative ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-neutral-700 max-w-xl mx-auto font-normal"
      >
        <p className="font-medium text-neutral-900">
          Hi there 👋 <span className="font-mono text-neutral-500">ʕ•ᴥ•ʔ</span>
        </p>

        <p>
          I&apos;m a full-stack front-end engineer and UI/UX designer studying Computer Science &amp; Engineering (with a Minor in VLSI) at{" "}
          <a
            href="https://www.amaljyothi.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
          >
            Amal Jyothi College of Engineering
          </a>{" "}
          (2023–Present).
        </p>

        <p>
          Over the past years, I&apos;ve engineered production web applications, architected robust design systems, and built custom client solutions using{" "}
          <span className="font-medium text-neutral-900">React</span>,{" "}
          <span className="font-medium text-neutral-900">Next.js</span>,{" "}
          <span className="font-medium text-neutral-900">TypeScript</span>,{" "}
          <span className="font-medium text-neutral-900">Tailwind CSS</span>, and{" "}
          <span className="font-medium text-neutral-900">Figma</span>.
        </p>

        <p>
          My project recognitions and hackathon achievements include:
        </p>

        {/* Hackathon Highlights List */}
        <div className="my-4 space-y-2.5 rounded-xl border border-neutral-200/90 bg-white/70 p-4 sm:p-5 backdrop-blur-xs">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
              ★
            </span>
            <div>
              <span className="font-semibold text-neutral-900">NASA Space Apps Challenge 2025:</span>{" "}
              <span className="text-neutral-600">Won Best Mission Concept Award (Senior Category, Kanjirappally Chapter).</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
              1
            </span>
            <div>
              <span className="font-semibold text-neutral-900">ACM AJCE UI/UX Hackathon:</span>{" "}
              <span className="text-neutral-600">Won 1st Place out of 150 competing engineering teams.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              ✓
            </span>
            <div>
              <span className="font-semibold text-neutral-900">Kochi Hackathon 2025:</span>{" "}
              <span className="text-neutral-600">Shortlisted finalist from 900+ participants in the 36-hour hackathon.</span>
            </div>
          </div>
        </div>

        <p>
          I specialize in turning complex requirements into fast, accessible digital experiences. Beyond engineering, I produce motion graphics, 3D interactive assets, and brand identities that stand out.
        </p>

        {/* ── 7. Instant Download Quick Action Cards ── */}
        <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
          <a
            href="/resume/Abin_Varghese_Resume.pdf"
            download="Abin_Varghese_Resume.pdf"
            className="group flex items-center justify-between rounded-xl border border-neutral-200/90 bg-white/90 p-3.5 shadow-2xs transition hover:border-neutral-400 hover:shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-2xs">
                <FileText className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-neutral-900 leading-tight">Developer CV</p>
                <p className="text-[11px] text-neutral-500">PDF · Code &amp; Systems</p>
              </div>
            </div>
            <Download className="h-4 w-4 text-neutral-400 group-hover:text-neutral-900 transition" />
          </a>

          <a
            href="/resume/Abin-Varghese-Portfolio.pdf"
            download="Abin_Varghese_Designer_Portfolio.pdf"
            className="group flex items-center justify-between rounded-xl border border-neutral-200/90 bg-white/90 p-3.5 shadow-2xs transition hover:border-neutral-400 hover:shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500 text-white shadow-2xs">
                <Palette className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-neutral-900 leading-tight">Designer Deck</p>
                <p className="text-[11px] text-neutral-500">PDF · UI/UX &amp; Motion</p>
              </div>
            </div>
            <Download className="h-4 w-4 text-neutral-400 group-hover:text-neutral-900 transition" />
          </a>
        </div>

        {/* ── 8. Footer Outbound Connect Links ── */}
        <div className="pt-6 border-t border-neutral-200/80">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
            Let&apos;s connect
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600">
            <a
              href="https://t.me/toabinvarghese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium hover:text-neutral-900 transition"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>Telegram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/toabinvarghese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium hover:text-neutral-900 transition"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/AbinVarghexe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium hover:text-neutral-900 transition"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.behance.net/toabinvarghese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium hover:text-neutral-900 transition"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>Behance</span>
            </a>
            <a
              href="mailto:abinvarghesem04@gmail.com"
              className="inline-flex items-center gap-1 font-medium hover:text-neutral-900 transition"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── 9. Interactive Download Modal ── */}
      <ResumeDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </ResumePaperLayout>
  );
}
