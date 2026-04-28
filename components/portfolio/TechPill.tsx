"use client";

import Image from "next/image";
import { useState } from "react";
import { techIconUrlForLabel } from "@/lib/techIcons";

export function TechPill({ label }: { label: string }) {
  const url = techIconUrlForLabel(label);
  const [hide, setHide] = useState(!url);

  return (
    <li className="flex max-w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-sm text-white/90 sm:px-3.5 sm:py-2 sm:text-base">
      {!hide && url ? (
        <span className="relative h-5 w-5 shrink-0 sm:h-6 sm:w-6">
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
