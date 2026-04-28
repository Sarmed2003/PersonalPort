"use client";

import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const INTRO_TEXT =
  "Hi! My name is Sarmed Mahmood, a senior at the University of Akron majoring in Computer Information Systems - Software Development!";

const LINES = [INTRO_TEXT] as const;

const CHAR_MS = 22;
const AFTER_TYPING_MS = 800;

type Props = {
  onComplete: () => void;
};

export function TypewriterIntro({ onComplete }: Props) {
  const reduce = useReducedMotion();
  const [charIndex, setCharIndex] = useState(0);
  const [allTyped, setAllTyped] = useState(false);
  const finish = useCallback(() => onComplete(), [onComplete]);
  const line = LINES[0] ?? "";

  // Reduced motion: show full text briefly, then continue
  useEffect(() => {
    if (!reduce) return;
    const t = setTimeout(finish, 1400);
    return () => clearTimeout(t);
  }, [reduce, finish]);

  // After typing finishes, wait then hand off
  useEffect(() => {
    if (!allTyped || reduce) return;
    const t = setTimeout(finish, AFTER_TYPING_MS);
    return () => clearTimeout(t);
  }, [allTyped, reduce, finish]);

  useEffect(() => {
    if (reduce || allTyped) return;
    if (charIndex < line.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setAllTyped(true), 300);
    return () => clearTimeout(t);
  }, [reduce, allTyped, charIndex, line.length]);

  const showFull = reduce;
  const displayText = showFull ? line : line.slice(0, charIndex);
  const showCursor = !reduce && !allTyped;

  return (
    <div
      className="flex min-h-dvh w-full items-center justify-center px-4 py-12 sm:px-6"
      role="status"
      aria-live="polite"
      aria-label="Introduction"
    >
      <div className="w-full max-w-4xl">
        <div className="ua-hero-scrim rounded-2xl px-3 py-4 sm:px-4 sm:py-5">
          <p
            className="ua-hero-text text-left text-lg font-semibold leading-[1.42] tracking-[-0.02em] sm:text-2xl md:text-[1.65rem] md:leading-[1.48] lg:text-3xl font-[family-name:var(--font-syne),ui-sans-serif]"
          >
            {displayText}
            {showCursor ? (
              <span className="ml-0.5 inline-block animate-pulse font-light text-slate-200/90">
                |
              </span>
            ) : null}
          </p>
        </div>
        {reduce ? (
          <p className="mt-4 text-center text-xs text-slate-400/90">Loading portfolio…</p>
        ) : null}
      </div>
    </div>
  );
}
