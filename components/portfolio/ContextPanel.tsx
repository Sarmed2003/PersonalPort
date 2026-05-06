"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
export type PanelState =
  | { kind: "welcome" }
  | {
      kind: "content";
      title: string;
      subtitle?: string;
      body: string[];
      footnote?: string;
      links?: { label: string; href: string; download?: string }[];
      badge?: string;
      /** Project (or other) visual shown above the text block */
      imageSrc?: string;
      imageAlt?: string;
      /** One line under the image, before the title list */
      lead?: string;
    };

const e = { type: "spring" as const, stiffness: 400, damping: 34 };

export function ContextPanel({ state }: { state: PanelState }) {
  const reduce = useReducedMotion();

  return (
    <motion.aside
      className="ua-themed-scrollbar mx-auto flex h-auto w-full min-h-0 max-h-[min(72dvh,640px)] max-w-[min(100%,20rem)] flex-col justify-start overflow-y-auto rounded-xl border border-white/10 bg-slate-950/88 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md md:max-w-[22rem] md:p-5 lg:max-w-[23rem]"
      aria-live="polite"
      initial={false}
      animate={reduce ? { y: 0 } : { y: [0, -6, -2, -6, 0] }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.55, 0.8, 1] }
      }
    >
      <AnimatePresence mode="wait">
        {state.kind === "welcome" ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={e}
            className="space-y-2 sm:space-y-2.5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400/90 sm:text-[11px]">
              Context
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              Tap an app or a topic chip.
            </h2>
            <p className="text-[11px] leading-relaxed text-slate-200/80 sm:text-xs md:text-sm">
              The device is a quick map of who I am. This panel adds depth —
              impact, tools, and the story behind each tap.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={state.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={e}
            className="space-y-3 sm:space-y-3.5"
          >
            {state.imageSrc ? (
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 ring-0">
                <div className="relative aspect-[16/9] w-full sm:max-h-40 sm:min-h-0">
                  <Image
                    src={state.imageSrc}
                    alt={state.imageAlt ?? state.title}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 24rem) 100vw, 20rem"
                    unoptimized
                  />
                </div>
              </div>
            ) : null}
            {state.lead ? (
              <p className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-slate-200/90 sm:px-2.5 sm:py-2 sm:text-xs">
                {state.lead}
              </p>
            ) : null}
            <header className="space-y-1">
              {state.badge ? (
                <span className="inline-flex rounded-lg bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-slate-200 sm:px-2 sm:py-1 sm:text-[11px]">
                  {state.badge}
                </span>
              ) : null}
              <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {state.title}
              </h2>
              {state.subtitle ? (
                <p className="text-[11px] text-slate-200/80 sm:text-xs md:text-sm">{state.subtitle}</p>
              ) : null}
            </header>
            <div className="space-y-2 sm:space-y-2.5">
              {state.body.map((line) => (
                <p
                  key={line}
                  className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-white/90 sm:px-2.5 sm:py-2 sm:text-xs"
                >
                  {line}
                </p>
              ))}
            </div>
            {state.links?.length ? (
              <motion.div
                className="flex flex-wrap gap-1.5 pt-0.5 sm:gap-2"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...e, delay: 0.05 }}
              >
                {state.links.map((l) => (
                  <a
                    key={`${l.label}-${l.href}`}
                    href={l.href}
                    download={l.download}
                    target={l.download ? undefined : "_blank"}
                    rel={l.download ? undefined : "noopener noreferrer"}
                    className="rounded-lg border border-white/15 bg-white/8 px-2 py-1 text-[11px] font-medium text-slate-100/95 transition hover:bg-white/12 sm:px-2.5 sm:py-1.5 sm:text-xs"
                  >
                    {l.label}
                  </a>
                ))}
              </motion.div>
            ) : null}
            {state.footnote ? (
              <p className="border-t border-white/8 pt-2.5 text-[10px] leading-snug text-slate-200/50 sm:pt-3 sm:text-[11px] md:text-xs">
                {state.footnote}
              </p>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
