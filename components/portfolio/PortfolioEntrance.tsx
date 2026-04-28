"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/content/profile";
import { PortfolioShell } from "./PortfolioShell";
import { TypewriterIntro } from "./TypewriterIntro";

/**
 * Name + headline left, headshot right; sits above the context panel.
 */
function RightColumnHeader() {
  return (
    <div className="mb-2 w-full min-w-0 sm:mb-3">
      <div className="flex w-full min-w-0 items-start justify-end gap-2 sm:gap-3 md:gap-4">
        <div className="min-w-0 flex-1 pl-0 text-left sm:pl-0">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300/90">
            Sarmed Mahmood
          </p>
          <h1 className="mt-1 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
            {profile.portfolio.headline}
          </h1>
        </div>
        <div className="relative h-52 w-[9.5rem] shrink-0 self-start overflow-hidden rounded-2xl border border-white/15 bg-slate-900/40 shadow-md ring-1 ring-white/5 sm:h-60 sm:w-48 sm:ml-1 md:h-64 md:w-52">
          <Image
            src="/headshot.png"
            alt="Sarmed Mahmood"
            width={280}
            height={364}
            className="h-full w-full object-cover object-top"
            sizes="(min-width: 768px) 13rem, (min-width: 640px) 12rem, 9.5rem"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export function PortfolioEntrance() {
  const [introComplete, setIntroComplete] = useState(false);
  const onIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <div className="ua-page-bg min-h-dvh w-full">
      <AnimatePresence mode="wait">
        {!introComplete ? (
          <motion.div
            key="intro"
            className="min-h-dvh w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <TypewriterIntro onComplete={onIntroComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 88,
              damping: 22,
              mass: 0.85,
            }}
          >
            <PortfolioShell
              compactTop
              rightColumnTop={<RightColumnHeader />}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
