"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconWorld,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandBehance,
  IconBrandLinkedin,
  IconMail,
  IconFileDownload,
} from "@tabler/icons-react";

interface DockItem {
  id: string;
  label: string;
  sublabel: string;
  bg: string;
  textColor?: string;
  icon: React.ComponentType<{ className?: string; size?: number | string; stroke?: number | string }>;
  href?: string;
  onClick?: () => void;
}

interface ResumeDockProps {
  onOpenResumeModal: () => void;
}

export default function ResumeDock({ onOpenResumeModal }: ResumeDockProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const dockItems: DockItem[] = [
    {
      id: "portfolio",
      label: "Main Website",
      sublabel: "abinvarghese.app",
      bg: "bg-[#10b981]",
      icon: IconWorld,
      href: "https://abinvarghese.app",
    },
    {
      id: "design",
      label: "UI/UX & Figma",
      sublabel: "Design Archives & Systems",
      bg: "bg-[#18181b]",
      icon: IconBrandFigma,
      href: "https://abinvarghese.app/about",
    },
    {
      id: "github",
      label: "GitHub",
      sublabel: "@AbinVarghexe",
      bg: "bg-[#ea580c]",
      icon: IconBrandGithub,
      href: "https://github.com/AbinVarghexe",
    },
    {
      id: "behance",
      label: "Behance",
      sublabel: "toabinvarghese",
      bg: "bg-[#09090b]",
      icon: IconBrandBehance,
      href: "https://www.behance.net/toabinvarghese",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      sublabel: "in/toabinvarghese",
      bg: "bg-[#0a66c2]",
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/toabinvarghese",
    },
    {
      id: "email",
      label: "Email",
      sublabel: "abinvarghesem04@gmail.com",
      bg: "bg-[#38bdf8]",
      icon: IconMail,
      href: "mailto:abinvarghesem04@gmail.com",
    },
    {
      id: "resume-action",
      label: "Download Developer CV",
      sublabel: "Official PDF Document",
      bg: "bg-[#4f46e5]",
      icon: IconFileDownload,
      onClick: onOpenResumeModal,
    },
  ];

  return (
    <div className="my-6 sm:my-10 flex justify-center w-full px-1">
      <div className="relative inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-neutral-300/80 bg-white/95 p-2 sm:p-2.5 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] backdrop-blur-md max-w-full">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isHovered = hoveredId === item.id;

          const content = (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.18, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className="relative flex cursor-pointer items-center justify-center focus:outline-none touch-manipulation"
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.92 }}
                    animate={{ opacity: 1, y: -44, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.92 }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute z-50 whitespace-nowrap rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-center shadow-xl hidden sm:block"
                  >
                    <p className="text-[11px] font-semibold text-white leading-tight">{item.label}</p>
                    <p className="text-[9px] text-neutral-400 leading-tight">{item.sublabel}</p>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-neutral-900 border-r border-b border-neutral-800" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Squircle App Icon */}
              <div
                className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl ${item.bg} ${item.textColor || "text-white"} shadow-[0_2px_8px_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-transform`}
                title={item.label}
              >
                <Icon size={20} stroke={2} className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </div>
            </motion.div>
          );

          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="focus:outline-none"
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              onClick={item.onClick}
              type="button"
              className="focus:outline-none"
            >
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
}
