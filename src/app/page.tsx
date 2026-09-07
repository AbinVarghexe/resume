"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  IconStack2,
  IconArrowUpRight,
  IconFileText,
  IconPalette,
  IconDownload,
  IconBriefcase,
  IconCode,
  IconCertificate,
  IconTrophy,
  IconUsers,
  IconSchool,
  IconExternalLink,
  IconMail,
  IconPhone,
  IconMapPin
} from "@tabler/icons-react";
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
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/90 px-4 py-1.5 text-xs font-semibold text-neutral-600 shadow-2xs backdrop-blur-xs transition hover:border-neutral-500 hover:text-neutral-900"
        >
          <span className="flex h-2 w-2 rounded-full bg-neutral-400 ring-2 ring-neutral-200 group-hover:bg-neutral-900 transition" />
          <span className="text-[10px] text-neutral-400">▶</span>
          <span>abinvarghese.app</span>
        </motion.a>
      </div>

      {/* ── 2. Profile Avatar & Identity ── */}
      <div className="mt-8 sm:mt-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.14)] ring-1 ring-black/10 bg-neutral-100"
        >
          <Image
            src="/abin-varghese.png"
            alt="Abin Varghese"
            fill
            priority
            className="object-cover object-top"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 text-center leading-[1.15]"
        >
          Abin Varghese
        </motion.h1>

        {/* ── 3. Sub-header / Role (Scaled Down) ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-2 text-base sm:text-lg md:text-xl font-medium text-neutral-600 text-center flex items-center justify-center flex-wrap gap-1.5"
        >
          <span>Aspiring Software Engineer</span>
          <span className="inline-flex items-center align-middle p-0.5 rounded bg-neutral-100 border border-neutral-300">
            <IconStack2 size={16} stroke={2.2} className="text-black" />
          </span>
          <span>Full-Stack Builder</span>
        </motion.p>

        {/* Quick Contact Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-neutral-600 font-medium"
        >
          <a href="mailto:abinnnvarghese@gmail.com" className="hover:text-neutral-900 transition flex items-center gap-1">
            <IconMail size={14} className="text-black" />
            <span>abinnnvarghese@gmail.com</span>
          </a>
          <span className="text-neutral-300">•</span>
          <a href="tel:+916282824259" className="hover:text-neutral-900 transition flex items-center gap-1">
            <IconPhone size={14} className="text-black" />
            <span>+91 6282824259</span>
          </a>
          <span className="text-neutral-300">•</span>
          <span className="flex items-center gap-1">
            <IconMapPin size={14} className="text-black" />
            <span>Kerala, India</span>
          </span>
        </motion.div>
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
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/80 px-3.5 py-1 text-[11px] font-medium text-neutral-600 shadow-2xs backdrop-blur-xs">
          <span className="flex h-1.5 w-1.5 rounded-full bg-black" />
          <span className="text-[9px] text-neutral-400">▶</span>
          <span>curriculum vitae &amp; background</span>
        </div>
      </div>

      {/* ── 6. Full Structured Resume Document (Clean Line Breakers, No Boxes) ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="space-y-8 text-[15px] leading-relaxed text-neutral-700 max-w-3xl mx-auto"
      >
        {/* ── SECTION: Summary ── */}
        <section className="space-y-2.5">
          <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Summary
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-neutral-800 pt-1">
            Final-year Computer Science student with experience in <strong>Full Stack Development</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>Firebase</strong>, and <strong>AWS</strong>. Built multilingual web platforms, admin dashboards, and client-facing applications through freelancing and professional work. Passionate about creating scalable digital products with strong user experience and performance optimization.
          </p>
        </section>

        {/* Line Breaker */}
        <hr className="border-neutral-200/90" />

        {/* ── SECTION: Education ── */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
            <IconSchool size={16} className="text-black" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Education
            </h2>
          </div>
          <div className="pt-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-bold text-neutral-900 text-[16px]">B.Tech in Computer Science &amp; Engineering</h3>
              <span className="text-xs font-semibold text-neutral-500">2023 – Present</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mt-0.5">
              <p className="text-sm text-neutral-700 font-medium">
                Amal Jyothi College of Engineering (Autonomous), Kanjirappally
              </p>
              <span className="text-xs font-bold text-neutral-900">CGPA: 7.39</span>
            </div>
          </div>
        </section>

        {/* Line Breaker */}
        <hr className="border-neutral-200/90" />

        {/* ── SECTION: Work Experience ── */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
            <IconBriefcase size={16} className="text-black" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6 pt-1">
            {/* INCIAL */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-bold text-neutral-900 text-[16px]">INCIAL</h3>
                  <p className="text-xs font-semibold text-neutral-800">Frontend Developer &amp; UI/UX Designer</p>
                </div>
                <span className="text-xs font-medium text-neutral-500">Mar 2024 – Present</span>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700 list-disc list-outside pl-4 pt-1">
                <li>
                  Built and shipped full-stack web products for clients using React, Next.js, and Tailwind CSS, reducing design-to-dev handoff friction through Figma-aligned components.
                </li>
                <li>
                  Contributed to <a href="https://blaupunkt-ev.com" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline decoration-neutral-400 hover:decoration-neutral-900">Blaupunkt EV (blaupunkt-ev.com)</a> — a multilingual production platform with localized routing, animation, and email workflows.
                </li>
              </ul>
            </div>

            {/* Subtle Sub-divider */}
            <div className="border-t border-dashed border-neutral-200/80" />

            {/* FREELANCE */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-bold text-neutral-900 text-[16px]">Freelance</h3>
                  <p className="text-xs font-semibold text-neutral-800">Frontend Developer</p>
                </div>
                <span className="text-xs font-medium text-neutral-500">2023 – Present</span>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700 list-disc list-outside pl-4 pt-1">
                <li>
                  Developed and launched 5+ web applications with a 90% client satisfaction rate across diverse domains.
                </li>
                <li>
                  Managed full project lifecycle from requirements and design to deployment and client handoff.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Line Breaker */}
        <hr className="border-neutral-200/90" />

        {/* ── SECTION: Technical Projects ── */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
            <IconCode size={16} className="text-black" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-6 pt-1">
            {/* Project 1: Blaupunkt EV */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-neutral-900 text-[16px]">Blaupunkt EV</h3>
                  <span className="text-xs text-neutral-500 font-medium">(INCIAL)</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <a 
                    href="https://blaupunkt-main.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 font-semibold text-neutral-900 hover:underline"
                  >
                    <span>Live Demo</span>
                    <IconExternalLink size={13} className="text-black" />
                  </a>
                  <span className="text-neutral-400">2025</span>
                </div>
              </div>
              <p className="text-sm text-neutral-700">
                Built a localization-ready product catalog and contact platform serving international markets with Resend-powered email workflows.
              </p>
              <p className="text-xs text-neutral-500 pt-0.5">
                <strong className="text-neutral-800">Tech Stack:</strong> Next.js, React, Tailwind CSS, next-intl, Framer Motion, PDF-lib.
              </p>
            </div>

            {/* Subtle Sub-divider */}
            <div className="border-t border-dashed border-neutral-200/80" />

            {/* Project 2: LightSuvara */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-neutral-900 text-[16px]">LightSuvara — Educational Admin Dashboard</h3>
                  <span className="text-xs text-neutral-500 font-medium">(Team Project)</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <a 
                    href="https://light-suvara-web-app.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 font-semibold text-neutral-900 hover:underline"
                  >
                    <span>Live Demo</span>
                    <IconExternalLink size={13} className="text-black" />
                  </a>
                  <span className="text-neutral-400">2026</span>
                </div>
              </div>
              <p className="text-sm text-neutral-700">
                Built the Web Admin Panel managing 1,000+ users across schools, animators, and admins with role-based access, event workflows, grading, and PDF report generation.
              </p>
              <p className="text-xs text-neutral-500 pt-0.5">
                <strong className="text-neutral-800">Tech Stack:</strong> React, TypeScript, Tailwind CSS, Firebase, Vite, Shadcn UI, Recharts.
              </p>
            </div>

            {/* Subtle Sub-divider */}
            <div className="border-t border-dashed border-neutral-200/80" />

            {/* Project 3: Intern-Hub */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-neutral-900 text-[16px]">Intern-Hub — Centralized Internship Platform</h3>
                  <span className="text-xs text-neutral-500 font-medium">(INCIAL)</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <a 
                    href="https://intern-hub-sable.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 font-semibold text-neutral-900 hover:underline"
                  >
                    <span>Live Demo</span>
                    <IconExternalLink size={13} className="text-black" />
                  </a>
                  <span className="text-neutral-400">2024</span>
                </div>
              </div>
              <p className="text-sm text-neutral-700">
                Built a centralized internship hub for TBI AJCE students, onboarding 100+ users on launch.
              </p>
              <p className="text-xs text-neutral-500 pt-0.5">
                <strong className="text-neutral-800">Tech Stack:</strong> HTML, CSS, JavaScript.
              </p>
            </div>
          </div>
        </section>

        {/* Line Breaker */}
        <hr className="border-neutral-200/90" />

        {/* ── SECTION: Technical Skills ── */}
        <section className="space-y-3.5">
          <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Skills &amp; Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-1 text-sm">
            <div>
              <span className="font-bold text-neutral-900 block mb-1">Languages &amp; Frameworks:</span>
              <p className="text-neutral-700">React, Next.js, JavaScript, TypeScript, Tailwind CSS, Python, C</p>
            </div>
            <div>
              <span className="font-bold text-neutral-900 block mb-1">Design &amp; Creative:</span>
              <p className="text-neutral-700">Figma, UI/UX Design, Photoshop, Illustrator, Blender, Canva, Adobe Suite</p>
            </div>
            <div>
              <span className="font-bold text-neutral-900 block mb-1">Dev Tools &amp; Cloud:</span>
              <p className="text-neutral-700">Git, Docker, AWS, Firebase, Vercel, Vite, Postman</p>
            </div>
            <div>
              <span className="font-bold text-neutral-900 block mb-1">Specializations:</span>
              <p className="text-neutral-700">AI/ML Integration, Graphic Design, Motion Graphics, 3D Modeling, Multilingual Systems</p>
            </div>
          </div>
        </section>

        {/* Line Breaker */}
        <hr className="border-neutral-200/90" />

        {/* ── SECTION: Internships ── */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
            <IconBriefcase size={16} className="text-black" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Internships
            </h2>
          </div>

          <div className="space-y-5 pt-1">
            {/* NeST */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-bold text-neutral-900 text-[15px]">DevOps with AI – Industry Immersion Program</h3>
                  <p className="text-xs text-neutral-600 font-medium">NeST Digital Academy, Kochi</p>
                </div>
                <span className="text-xs font-medium text-neutral-500">Feb 2026</span>
              </div>
              <ul className="space-y-1 text-sm text-neutral-700 list-disc list-outside pl-4 pt-1">
                <li>Gained hands-on experience with AWS cloud services and Docker containerization for building deployment pipelines.</li>
                <li>Explored AI-integrated DevOps tooling and end-to-end CI/CD workflows.</li>
              </ul>
            </div>

            {/* Subtle Sub-divider */}
            <div className="border-t border-dashed border-neutral-200/80" />

            {/* Luminar */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-bold text-neutral-900 text-[15px]">Data Science &amp; Deep Learning Intern</h3>
                  <p className="text-xs text-neutral-600 font-medium">Luminar Technolab, Kochi</p>
                </div>
                <span className="text-xs font-medium text-neutral-500">Jun 2025 · 1 Month</span>
              </div>
              <ul className="space-y-1 text-sm text-neutral-700 list-disc list-outside pl-4 pt-1">
                <li>Built and optimized ANNs and CNNs using TensorFlow for image classification, achieving improved accuracy on Food 101 dataset through data augmentation.</li>
                <li>Designed and deployed a custom deep learning model on Kaggle, completing the full end-to-end AI pipeline from preprocessing to evaluation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Line Breaker */}
        <hr className="border-neutral-200/90" />

        {/* ── SECTION: Achievements & Awards ── */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
            <IconTrophy size={16} className="text-black" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Honors &amp; Hackathon Awards
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm text-neutral-700 list-disc list-outside pl-4 pt-1">
            <li>
              <strong className="text-neutral-900">Best Mission Concept Award (Senior Category):</strong>{" "}
              NASA Space Apps Challenge 2025, Kanjirappally Local Chapter; built an AI model to classify exoplanets from satellite/telescope data as Team Blankspace.
            </li>
            <li>
              <strong className="text-neutral-900">1st Place (out of 150 teams):</strong>{" "}
              UI/UX Hackathon by ACM AJCE, 2025.
            </li>
            <li>
              <strong className="text-neutral-900">Selected for Smart India Hackathon (SIH):</strong>{" "}
              Institutional Level Finalist, 2024.
            </li>
          </ul>
        </section>

        {/* Line Breaker */}
        <hr className="border-neutral-200/90" />

        {/* ── SECTION: Certifications & Leadership ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-1">
          {/* Certifications */}
          <section className="space-y-2.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
              <IconCertificate size={16} className="text-black" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Certifications
              </h2>
            </div>
            <ul className="space-y-1.5 text-sm text-neutral-700 list-disc list-outside pl-4 pt-1">
              <li><strong>DevOps with AI</strong> — NeST Digital Academy</li>
              <li><strong>Google UX Design</strong> — Coursera</li>
              <li><strong>Meta Front-End</strong> — Coursera</li>
              <li><strong>Data Science</strong> — Coursera</li>
            </ul>
          </section>

          {/* Volunteering */}
          <section className="space-y-2.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300/90">
              <IconUsers size={16} className="text-black" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Leadership &amp; Community
              </h2>
            </div>
            <ul className="space-y-1.5 text-sm text-neutral-700 list-disc list-outside pl-4 pt-1">
              <li><strong>Web Team Lead</strong> — GDG on Campus AJCE</li>
              <li><strong>Chief Creative Officer (CCO)</strong> — IEDC AJCE</li>
              <li><strong>Tech Lead</strong> — Blankspace</li>
            </ul>
          </section>
        </div>

        {/* Line Breaker */}
        <hr className="border-neutral-200/90" />

        {/* ── SECTION: Instant PDF Download Actions ── */}
        <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
          <a
            href="/resume/Abin_Varghese_Resume.pdf"
            download="Abin_Varghese_Resume.pdf"
            className="group flex items-center justify-between rounded-2xl border border-neutral-300/90 bg-white/95 p-4.5 shadow-2xs transition hover:border-black hover:shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white shadow-2xs">
                <IconFileText size={22} stroke={2} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-neutral-900 leading-tight">Download Developer CV</p>
                <p className="text-xs text-neutral-500 mt-0.5">Official PDF · Code &amp; Systems</p>
              </div>
            </div>
            <IconDownload size={20} className="text-neutral-500 group-hover:text-black transition" />
          </a>

          <a
            href="/resume/Abin-Varghese-Portfolio.pdf"
            download="Abin_Varghese_Designer_Portfolio.pdf"
            className="group flex items-center justify-between rounded-2xl border border-neutral-300/90 bg-white/95 p-4.5 shadow-2xs transition hover:border-black hover:shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white shadow-2xs">
                <IconPalette size={22} stroke={2} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-neutral-900 leading-tight">Download Design Deck</p>
                <p className="text-xs text-neutral-500 mt-0.5">Official PDF · UI/UX &amp; Motion</p>
              </div>
            </div>
            <IconDownload size={20} className="text-neutral-500 group-hover:text-black transition" />
          </a>
        </div>

        {/* ── SECTION: Outbound Links ── */}
        <div className="pt-6 border-t border-neutral-300/90">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
            Connect &amp; Profiles
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-700">
            <a
              href="https://github.com/AbinVarghexe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold hover:text-black transition"
            >
              <IconArrowUpRight size={16} className="text-black" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/toabinvarghese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold hover:text-black transition"
            >
              <IconArrowUpRight size={16} className="text-black" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.behance.net/toabinvarghese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold hover:text-black transition"
            >
              <IconArrowUpRight size={16} className="text-black" />
              <span>Behance</span>
            </a>
            <a
              href="https://t.me/toabinvarghese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold hover:text-black transition"
            >
              <IconArrowUpRight size={16} className="text-black" />
              <span>Telegram</span>
            </a>
            <a
              href="mailto:abinnnvarghese@gmail.com"
              className="inline-flex items-center gap-1 font-semibold hover:text-black transition"
            >
              <IconArrowUpRight size={16} className="text-black" />
              <span>Email</span>
            </a>
            <a
              href="tel:+916282824259"
              className="inline-flex items-center gap-1 font-semibold hover:text-black transition"
            >
              <IconArrowUpRight size={16} className="text-black" />
              <span>+91 6282824259</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── 7. Interactive Download Modal ── */}
      <ResumeDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </ResumePaperLayout>
  );
}
