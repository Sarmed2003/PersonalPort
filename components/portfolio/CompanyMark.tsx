"use client";

import Image from "next/image";
import { useState } from "react";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type Stage = "local" | "clearbit" | "favicon" | "fail";

export function CompanyMark({
  company,
  domain,
  localLogo,
  size = 48,
  className = "",
}: {
  company: string;
  domain: string;
  localLogo?: string | null;
  size?: number;
  className?: string;
}) {
  const [stage, setStage] = useState<Stage>(localLogo ? "local" : "clearbit");
  const clearbit = `https://logo.clearbit.com/${encodeURIComponent(domain)}`;
  const favicon = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;

  if (stage === "fail") {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/30 text-[10px] font-bold uppercase text-amber-100/95 ring-1 ring-white/15 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {initials(company.replace(/['’].*$/, ""))}
      </div>
    );
  }

  if (stage === "local" && localLogo) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-2xl bg-white/95 p-0.5 ring-1 ring-white/20 ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={localLogo}
          alt=""
          width={size}
          height={size}
          unoptimized
          className="h-full w-full object-contain"
          onError={() => setStage("clearbit")}
        />
      </div>
    );
  }

  if (stage === "clearbit") {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-2xl bg-white/95 p-0.5 ring-1 ring-white/20 ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={clearbit}
          alt=""
          width={size}
          height={size}
          unoptimized
          onError={() => setStage("favicon")}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  if (stage === "favicon") {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-2xl bg-white/95 p-0.5 ring-1 ring-white/20 ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={favicon}
          alt=""
          width={size}
          height={size}
          unoptimized
          onError={() => setStage("fail")}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return null;
}
