"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IconFileText, 
  IconPalette, 
  IconDownload, 
  IconExternalLink, 
  IconX, 
  IconSparkles, 
  IconCheck 
} from "@tabler/icons-react";

interface ResumeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDownloadModal({ isOpen, onClose }: ResumeDownloadModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const resumes = [
    {
      id: "developer",
      title: "Developer Resume",
      subtitle: "Full-Stack, React, Next.js & Systems",
      badge: "Tech & Engineering",
      icon: IconFileText,
      pdfUrl: "/resume/Abin_Varghese_Resume.pdf",
      filename: "Abin_Varghese_Resume.pdf",
    },
    {
      id: "designer",
      title: "Designer Portfolio Deck",
      subtitle: "UI/UX, Visual Systems & Motion",
      badge: "Creative & Design",
      icon: IconPalette,
      pdfUrl: "/resume/Abin-Varghese-Portfolio.pdf",
      filename: "Abin_Varghese_Designer_Portfolio.pdf",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-300 bg-[#fcfbf9] p-6 shadow-2xl sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
              aria-label="Close modal"
            >
              <IconX size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-2xs">
                <IconSparkles size={14} className="text-black" />
                <span>Document Archives</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
                Official Documents &amp; Portfolios
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Select an official PDF to download or preview directly in your browser.
              </p>
            </div>

            {/* Resume Options */}
            <div className="space-y-3.5">
              {resumes.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group relative flex flex-col justify-between gap-4 rounded-xl border border-neutral-200/90 bg-white p-4 transition-all hover:border-black hover:shadow-2xs sm:flex-row sm:items-center"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-white shadow-2xs">
                        <Icon size={20} stroke={2} className="text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                          <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500">{item.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800 transition hover:bg-neutral-100 hover:text-black"
                        title="Preview in new tab"
                      >
                        <IconExternalLink size={14} className="text-black" />
                        <span>Preview</span>
                      </a>
                      <a
                        href={item.pdfUrl}
                        download={item.filename}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-black px-3 py-1.5 text-xs font-medium text-white shadow-2xs transition hover:bg-neutral-800"
                      >
                        <IconDownload size={14} className="text-white" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Notice */}
            <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4 text-[11px] text-neutral-500">
              <span>Updated 2026 · Abin Varghese</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("https://resume.abinvarghese.app");
                  setCopied("link");
                  setTimeout(() => setCopied(null), 2000);
                }}
                className="inline-flex items-center gap-1 font-medium text-neutral-700 transition hover:text-black"
              >
                {copied === "link" ? (
                  <>
                    <IconCheck size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied Link</span>
                  </>
                ) : (
                  <span>Copy Page Link</span>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
