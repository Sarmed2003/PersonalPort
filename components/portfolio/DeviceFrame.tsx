"use client";

import type { ReactNode } from "react";

/**
 * Decorative device-style frame. Aspect ~19.2:9; scales with viewport height.
 */
export function DeviceFrame({
  children,
  statusBar,
}: {
  children: ReactNode;
  statusBar: ReactNode;
}) {
  return (
    <div className="relative mx-auto flex shrink-0 select-none justify-center">
      <div
        className="portfolio-device-shell relative rounded-[2.4rem] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 p-[9px] shadow-[0_28px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10"
      >
        <div className="pointer-events-none absolute -left-[2px] top-24 h-14 w-[3px] rounded-l bg-zinc-700/90" />
        <div className="pointer-events-none absolute -left-[2px] top-40 h-9 w-[3px] rounded-l bg-zinc-700/90" />
        <div className="pointer-events-none absolute -right-[2px] top-32 h-16 w-[3px] rounded-r bg-zinc-700/90" />

        <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[1.85rem] bg-slate-950 ring-1 ring-white/5">
          <div className="relative z-10 flex min-h-0 flex-1 flex-col bg-gradient-to-b from-slate-900 to-slate-950 pt-1.5">
            {statusBar}
            <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
