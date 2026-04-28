"use client";

import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between px-5 pb-2 text-[12px] font-semibold text-white/90">
      <span className="tabular-nums">{time}</span>
      <div className="flex items-center gap-1.5 pr-0.5" aria-hidden>
        <span className="text-[11px] text-white/80">5G</span>
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 10"
          className="text-white/90"
        >
          <rect x="0" y="6" width="3" height="4" rx="0.5" fill="currentColor" />
          <rect x="5" y="4" width="3" height="6" rx="0.5" fill="currentColor" />
          <rect x="10" y="2" width="3" height="8" rx="0.5" fill="currentColor" />
          <rect x="15" y="0" width="3" height="10" rx="0.5" fill="currentColor" />
        </svg>
        <div className="relative h-3 w-[22px] rounded border border-white/40">
          <div className="m-0.5 h-2 w-[70%] rounded-sm bg-white" />
        </div>
      </div>
    </div>
  );
}
