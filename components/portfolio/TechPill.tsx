"use client";

import Image from "next/image";
import { useState } from "react";
import { techIconUrlForLabel } from "@/lib/techIcons";

export function TechPill({ label }: { label: string }) {
  const url = techIconUrlForLabel(label);
  const [hide, setHide] = useState(!url);

  return (
    <li className="flex max-w-full items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-white/90 sm:px-2.5 sm:py-1.5 sm:text-sm">
      {!hide && url ? (
        <span className="relative h-4 w-4 shrink-0 sm:h-5 sm:w-5">
          <Image
            src={url}
            alt=""
            width={24}
            height={24}
            unoptimized
            className="h-full w-full object-contain"
            onError={() => setHide(true)}
          />
        </span>
      ) : null}
      <span className="min-w-0 break-words leading-snug">{label}</span>
    </li>
  );
}
