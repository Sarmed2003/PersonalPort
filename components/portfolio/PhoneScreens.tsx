"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  educationAppList,
  experienceLocalLogo,
  getSkillCategoryItems,
  homeApps,
  profile,
  skillScreenCategories,
  topicChips,
  type AppId,
  type SkillCategoryId,
  type TopicChipId,
} from "@/content/profile";
import { appLabel, itemScreenTitle } from "./panelFromProfile";
import { CompanyMark } from "./CompanyMark";
import { TechPill } from "./TechPill";

type Screen =
  | { view: "home" }
  | { view: "app"; app: AppId }
  | { view: "item"; app: AppId; itemId: string };

const sp = { type: "spring" as const, stiffness: 400, damping: 34, mass: 0.7 };
const screenIn = { opacity: 0, x: 22, scale: 0.99 };
const screenOn = { opacity: 1, x: 0, scale: 1 };
export function PhoneScreens({
  screen,
  onOpenApp,
  onOpenItem,
  onBack,
  onChip,
  activeChip,
}: {
  screen: Screen;
  onOpenApp: (id: AppId) => void;
  onOpenItem: (app: AppId, itemId: string) => void;
  onBack: () => void;
  onChip: (id: TopicChipId) => void;
  activeChip: TopicChipId | null;
}) {
  return (
    <div className="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      <div className="shrink-0 border-b border-white/6 bg-slate-950/40 px-1.5 py-1">
        <p className="px-0.5 pb-0.5 text-[8px] font-medium uppercase tracking-wider text-slate-500">
          Scroll through these tiles to learn more!
        </p>
        <div className="flex flex-wrap gap-1 sm:flex-nowrap sm:overflow-x-auto sm:pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden">
          {topicChips.map((c) => {
            const on = activeChip === c.id;
            return (
              <motion.button
                key={c.id}
                type="button"
                onClick={() => onChip(c.id)}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                transition={sp}
                className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-medium transition sm:px-2 sm:py-1 sm:text-[11px] ${
                  on
                    ? "bg-white/12 text-white ring-1 ring-white/18"
                    : "bg-white/6 text-white/90 hover:bg-white/10"
                }`}
              >
                {c.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {screen.view === "home" ? (
            <motion.div
              key="home"
              initial={screenIn}
              animate={screenOn}
              exit={{ opacity: 0, x: -18 }}
              transition={sp}
              className="ua-themed-scrollbar absolute inset-0 overflow-y-auto overscroll-contain px-3 pb-6 pt-5 sm:pt-6"
            >
              <div className="mb-4 text-center sm:mb-5">
                <p className="text-xs font-semibold text-white sm:text-sm">
                  {profile.name.split(" ")[0]}&apos;s portfolio
                </p>
                <p className="mt-0.5 text-[11px] text-white/50 sm:text-xs">
                  Scroll and tap an app
                </p>
              </div>
              <motion.div
                className="grid grid-cols-3 gap-x-2 gap-y-3 sm:gap-x-2.5 sm:gap-y-4"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
                  },
                }}
              >
                {homeApps.map((app) => (
                  <motion.div
                    key={app.id}
                    variants={{
                      hidden: { opacity: 0, y: 12, scale: 0.9 },
                      show: { opacity: 1, y: 0, scale: 1, transition: sp },
                    }}
                    className="flex justify-center"
                  >
                    <motion.button
                      type="button"
                      onClick={() => onOpenApp(app.id)}
                      whileTap={{ scale: 0.94 }}
                      whileHover={{ scale: 1.02 }}
                      transition={sp}
                      className="group flex flex-col items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-xl"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br text-[1rem] shadow-md ring-1 ring-white/10 sm:h-11 sm:w-11 sm:text-[1.2rem] ${app.tint}`}
                      >
                        <span className="drop-shadow-sm" aria-hidden>
                          {app.icon}
                        </span>
                      </div>
                      <span className="max-w-[5.25rem] text-center text-[0.68rem] font-medium leading-snug text-white/90 sm:max-w-[6rem] sm:text-[0.78rem]">
                        {app.label}
                      </span>
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : screen.view === "app" ? (
            <motion.div
              key={`app-${screen.app}`}
              initial={screenIn}
              animate={screenOn}
              exit={{ opacity: 0, x: -20 }}
              transition={sp}
              className="absolute inset-0 flex min-h-0 flex-col bg-slate-950/90"
            >
              <header className="flex shrink-0 items-center gap-2 border-b border-white/5 px-2.5 py-2">
                <motion.button
                  type="button"
                  onClick={onBack}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg px-2 py-1 text-xs font-medium text-slate-200/95 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 sm:text-sm"
                >
                  ‹ Back
                </motion.button>
                <h1 className="flex-1 truncate pr-10 text-center text-sm font-semibold text-white sm:text-base">
                  {appLabel(screen.app)}
                </h1>
              </header>
              <div className="ua-themed-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-2.5">
                <AppList app={screen.app} onOpenItem={onOpenItem} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`item-${screen.app}-${screen.itemId}`}
              initial={screenIn}
              animate={screenOn}
              exit={{ opacity: 0, x: -16 }}
              transition={sp}
              className="absolute inset-0 flex min-h-0 flex-col bg-slate-950/95"
            >
              <header className="flex shrink-0 items-center gap-2 border-b border-white/5 px-2.5 py-2">
                <motion.button
                  type="button"
                  onClick={onBack}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg px-2 py-1 text-xs font-medium text-slate-200/95 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 sm:text-sm"
                >
                  ‹ Back
                </motion.button>
                <h1 className="flex-1 truncate pr-10 text-center text-sm font-semibold text-white sm:text-base">
                  {itemScreenTitle(screen.app, screen.itemId)}
                </h1>
              </header>
              <div className="ua-themed-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3 sm:px-4">
                <ItemDetail app={screen.app} itemId={screen.itemId} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function AppList({
  app,
  onOpenItem,
}: {
  app: AppId;
  onOpenItem: (app: AppId, itemId: string) => void;
}) {
  if (app === "experience") {
    return (
      <ul className="space-y-2.5">
        {profile.experience.map((job, idx) => {
          return (
            <motion.li
              key={job.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...sp, delay: idx * 0.04 }}
            >
              <motion.button
                type="button"
                onClick={() => onOpenItem("experience", job.id)}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                transition={sp}
                className="flex w-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-left transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 sm:gap-3 sm:px-3 sm:py-2.5"
              >
                <CompanyMark
                  company={job.company}
                  domain={job.logoDomain}
                  localLogo={experienceLocalLogo(job)}
                  size={42}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white sm:text-[15px]">
                    {job.company}
                  </p>
                  <p className="text-xs text-white/65 sm:text-sm">{job.role}</p>
                </div>
              </motion.button>
            </motion.li>
          );
        })}
      </ul>
    );
  }
  if (app === "education") {
    return (
      <ul className="space-y-2.5">
        {educationAppList.map((row, idx) => {
          const isRemote = row.listImage.startsWith("https://");
          const useContain =
            isRemote || row.id === "cert-linkedin-sec" || row.id === "cert-comptia";
          return (
            <motion.li
              key={row.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...sp, delay: idx * 0.04 }}
            >
              <motion.button
                type="button"
                onClick={() => onOpenItem("education", row.id)}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                transition={sp}
                className="flex w-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-left transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 sm:gap-3 sm:px-3 sm:py-2.5"
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/8 bg-slate-900/80 sm:h-12 sm:w-12">
                  {useContain ? (
                    <Image
                      src={row.listImage}
                      alt={row.listImageAlt}
                      width={56}
                      height={56}
                      unoptimized
                      className="h-full w-full object-contain p-1.5"
                    />
                  ) : (
                    <Image
                      src={row.listImage}
                      alt={row.listImageAlt}
                      width={56}
                      height={56}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-sm font-semibold text-white sm:text-[15px]">
                    {row.listTitle}
                  </p>
                  <p className="text-left text-xs leading-snug text-white/65 sm:text-sm">
                    {row.listSubtitle}
                  </p>
                </div>
              </motion.button>
            </motion.li>
          );
        })}
      </ul>
    );
  }
  if (app === "projects") {
    return (
      <ul className="space-y-2.5">
        {profile.projects.map((p, idx) => {
          const thumb = p.panelImage;
          const oneLine = p.panelSummary;
          return (
            <motion.li
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...sp, delay: idx * 0.04 }}
            >
              <motion.button
                type="button"
                onClick={() => onOpenItem("projects", p.id)}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                className="flex w-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-left sm:gap-3 sm:px-3 sm:py-2.5"
              >
                {thumb ? (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/8 bg-slate-900/80 sm:h-12 sm:w-12">
                    <Image
                      src={thumb}
                      alt=""
                      width={56}
                      height={56}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-10 w-10 shrink-0 rounded-lg border border-white/8 bg-slate-800/50 sm:h-12 sm:w-12" />
                )}
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-xs font-semibold text-white sm:text-sm">
                    {p.name}
                  </p>
                  <p className="line-clamp-1 text-[11px] text-slate-400/95 sm:text-xs sm:text-slate-300/90">
                    {oneLine}
                  </p>
                </div>
              </motion.button>
            </motion.li>
          );
        })}
      </ul>
    );
  }
  if (app === "leadership") {
    return (
      <ul className="space-y-2.5">
        {profile.leadership.map((l, idx) => (
          <motion.li
            key={l.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sp, delay: idx * 0.04 }}
          >
            <motion.button
              type="button"
              onClick={() => onOpenItem("leadership", l.id)}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-left sm:gap-3 sm:px-3 sm:py-2.5"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/8 bg-slate-900/80 sm:h-12 sm:w-12">
                <Image
                  src={l.listImage}
                  alt={l.listImageAlt}
                  width={64}
                  height={64}
                  unoptimized
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white sm:text-[15px]">{l.org}</p>
                <p className="text-xs text-white/65 sm:text-sm">{l.role}</p>
              </div>
            </motion.button>
          </motion.li>
        ))}
      </ul>
    );
  }
  if (app === "skills") {
    return (
      <ul className="space-y-2.5">
        {skillScreenCategories.map((c, idx) => (
          <motion.li
            key={c.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sp, delay: idx * 0.04 }}
          >
            <motion.button
              type="button"
              onClick={() => onOpenItem("skills", c.id)}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-left sm:px-3 sm:py-2.5"
            >
              <p className="text-sm font-semibold text-white sm:text-[15px]">
                {c.shortLabel}
              </p>
              <p className="text-xs text-white/55 sm:text-sm">{c.blurb}</p>
            </motion.button>
          </motion.li>
        ))}
      </ul>
    );
  }

  return <StaticAppBody app={app} />;
}

/** Full degree / coursework / activities (tap UA row in School app) */
function EducationRecordFull() {
  const lines = [
    `${profile.education.degree} (expected ${profile.education.expected}). ${profile.education.associate.title} — ${profile.education.associate.date}.`,
    `Certifications: ${profile.education.certifications.join(", ")}. LinkedIn Learning: ${profile.linkedInLearning.map((c) => `${c.name} (${c.issued}, ${c.provider})`).join("; ")}.`,
    `Coursework: ${profile.education.coursework.join(", ")}`,
    `Activities: ${profile.education.activities}`,
  ];
  return (
    <div className="space-y-2 sm:space-y-2.5">
      {lines.map((line) => (
        <p
          key={line}
          className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-white/90 sm:px-2.5 sm:py-2 sm:text-xs"
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function StaticAppBody({ app }: { app: AppId }) {
  if (app === "resume") {
    return (
      <div className="space-y-4 sm:space-y-5">
        <a
          href={profile.resumePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-orange-400/25 bg-slate-950/50 ring-1 ring-orange-400/15"
          aria-label="Open résumé PDF in a new tab (full preview) "
        >
          <div className="relative w-full">
            {/** 8.5×11" letter: full first page, scaled to fit; object-contain keeps entire page visible */}
            <div className="relative aspect-[8.5/11] w-full max-h-72 min-h-0 sm:max-h-80">
              <Image
                src={profile.resumePreviewImage}
                alt="Full preview of Sarmed Mahmood résumé"
                fill
                unoptimized
                className="object-contain object-top p-0.5 opacity-95 transition group-hover:opacity-100"
                sizes="(max-width: 28rem) 100vw, 18rem"
              />
            </div>
            <p className="bg-slate-950/70 px-2 py-1.5 text-center text-[10px] font-medium text-slate-200/95 sm:text-xs">
              Tap to open full PDF
            </p>
          </div>
        </a>
        <div className="flex flex-col gap-2.5 sm:gap-3">
          <a
            href={profile.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-orange-500/20 to-rose-600/20 py-1.5 text-center text-[11px] font-semibold text-white ring-1 ring-white/20 sm:py-2 sm:text-xs"
          >
            Open PDF
          </a>
          <a
            href={profile.resumePdfUrl}
            download="Sarmed-Mahmood-Resume-2026.pdf"
            className="rounded-xl border border-white/20 py-1.5 text-center text-[11px] font-medium text-white/95 sm:py-2 sm:text-xs"
          >
            Download copy
          </a>
        </div>
      </div>
    );
  }
  if (app === "community") {
    return (
      <div className="space-y-6">
        {profile.volunteering.map((v) => (
          <div key={v.id} className="space-y-4">
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/8 bg-slate-900/80 sm:h-12 sm:w-12">
                <Image
                  src={v.logoImage}
                  alt={v.logoAlt}
                  width={64}
                  height={64}
                  unoptimized
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Volunteering
                </p>
                <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                  {v.role} — {v.organization}
                </p>
                <p className="text-xs text-white/50 sm:text-sm">
                  {v.focus} · {v.approxDuration}
                </p>
              </div>
            </div>
            <p className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-white/90 sm:px-2.5 sm:py-2 sm:text-xs">
              {v.storyShort}
            </p>
          </div>
        ))}
      </div>
    );
  }

  const blocks: Record<AppId, string[]> = {
    about: [
      profile.tagline,
      profile.about.twinAndSports,
      profile.about.curiosityAndPath,
      profile.about.background,
      profile.education.highlights[0] ?? "",
    ],
    experience: [],
    education: [],
    projects: [],
    skills: [],
    leadership: [],
    community: [],
    contact: [profile.email, `Based in ${profile.location}.`],
    resume: [],
  };

  const lines = blocks[app].filter(Boolean);
  return (
    <div className="space-y-2 sm:space-y-2.5">
      {lines.map((line) => (
        <p
          key={line}
          className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-white/90 sm:px-2.5 sm:py-2 sm:text-xs"
        >
          {line}
        </p>
      ))}
      {app === "contact" ? (
        <div className="flex flex-col gap-2 pt-2 sm:gap-2.5">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl bg-white/9 py-1.5 text-center text-[11px] font-semibold text-white ring-1 ring-white/15 sm:py-2 sm:text-xs"
          >
            Email me
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 py-1.5 text-center text-[11px] font-medium text-white sm:py-2 sm:text-xs"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 py-1.5 text-center text-[11px] font-medium text-white sm:py-2 sm:text-xs"
          >
            GitHub
          </a>
        </div>
      ) : null}
    </div>
  );
}

function ItemDetail({ app, itemId }: { app: AppId; itemId: string }) {
  if (app === "education") {
    if (itemId === "uakron-main") {
      return <EducationRecordFull />;
    }
    const row = educationAppList.find((r) => r.id === itemId);
    if (!row) return null;
    const isRemote = row.listImage.startsWith("https://");
    const useContain = isRemote || itemId === "cert-linkedin-sec" || itemId === "cert-comptia";
    return (
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-start gap-3 sm:gap-3.5">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 sm:h-[4rem] sm:w-[4rem]">
            {useContain ? (
              <Image
                src={row.listImage}
                alt={row.listImageAlt}
                width={72}
                height={72}
                unoptimized
                className="h-full w-full object-contain p-1.5"
              />
            ) : (
              <Image
                src={row.listImage}
                alt={row.listImageAlt}
                width={72}
                height={72}
                unoptimized
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-white sm:text-lg">{row.listTitle}</h2>
            <p className="text-xs text-slate-200/90 sm:text-sm">{row.listSubtitle}</p>
          </div>
        </div>
        {"detailLines" in row && row.detailLines
          ? row.detailLines.map((line) => (
              <p
                key={line}
                className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-white/90 sm:px-2.5 sm:py-2 sm:text-xs"
              >
                {line}
              </p>
            ))
          : null}
        {itemId === "cert-linkedin-sec" && profile.linkedInLearning[0]?.credentialUrl ? (
          <a
            href={profile.linkedInLearning[0].credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white/10 px-2 py-1 text-[11px] font-medium text-white ring-1 ring-white/15 sm:px-2.5 sm:py-1.5 sm:text-xs"
          >
            Open credential
          </a>
        ) : null}
      </div>
    );
  }
  if (app === "experience") {
    const job = profile.experience.find((e) => e.id === itemId);
    if (!job) return null;
    const hero =
      "panelImage" in job && typeof (job as { panelImage?: string }).panelImage === "string"
        ? (job as { panelImage: string }).panelImage
        : null;
    return (
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-start gap-3 sm:gap-3.5">
          {hero ? (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 sm:h-14 sm:w-14">
              <Image
                src={hero}
                alt={`${job.role} — ${job.company}`}
                width={64}
                height={64}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <CompanyMark
              company={job.company}
              domain={job.logoDomain}
              localLogo={experienceLocalLogo(job)}
              size={48}
            />
          )}
          <div>
            <h2 className="text-base font-semibold text-white sm:text-lg">{job.role}</h2>
            <p className="text-xs text-slate-200/90 sm:text-sm">{job.company}</p>
            <p className="text-xs text-white/50 sm:text-sm">{job.location}</p>
          </div>
        </div>
        <ul className="space-y-2 sm:space-y-2.5">
          {job.bullets.map((b) => (
            <li
              key={b}
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-white/90 sm:px-2.5 sm:py-2 sm:text-xs"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (app === "projects") {
    const p = profile.projects.find((x) => x.id === itemId);
    if (!p) return null;
    return (
      <div className="space-y-3 sm:space-y-4">
        {p.panelImage ? (
          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={p.panelImage}
                alt={p.name}
                fill
                className="object-contain object-top"
                unoptimized
                sizes="(max-width: 480px) 100vw, 400px"
              />
            </div>
          </div>
        ) : null}
        {p.panelSummary ? (
          <p className="text-xs leading-relaxed text-slate-200/90 sm:text-sm">
            {p.panelSummary}
          </p>
        ) : null}
        <div>
          <h2 className="text-base font-semibold text-white sm:text-lg">{p.name}</h2>
          {"accolade" in p ? (
            <p className="text-xs font-medium text-slate-200/90 sm:text-sm">{p.accolade}</p>
          ) : null}
          <p className="text-xs text-slate-200/80 sm:text-sm">{p.stack.join(" · ")}</p>
          <p className="text-xs text-white/40 sm:text-sm">{p.date}</p>
        </div>
        {("liveUrl" in p && p.liveUrl) ||
        ("githubUrl" in p && p.githubUrl) ? (
          <div className="flex flex-col gap-2.5">
            {"liveUrl" in p && p.liveUrl ? (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/8 py-1.5 text-[11px] font-medium text-white/95 transition hover:bg-white/12 sm:py-2 sm:text-xs"
              >
                {"liveLabel" in p && p.liveLabel ? p.liveLabel : "Live site"}
              </a>
            ) : null}
            {"githubUrl" in p && p.githubUrl ? (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/8 py-1.5 text-[11px] font-medium text-white/95 transition hover:bg-white/12 sm:py-2 sm:text-xs"
              >
                {"githubLabel" in p && p.githubLabel ? p.githubLabel : "GitHub"}
              </a>
            ) : null}
          </div>
        ) : null}
        <ul className="space-y-2">
          {p.bullets.map((b) => (
            <li
              key={b}
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-white/90 sm:px-2.5 sm:py-2 sm:text-xs"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (app === "leadership") {
    const l = profile.leadership.find((x) => x.id === itemId);
    if (!l) return null;
    const hero =
      "detailPanelImage" in l && l.detailPanelImage ? (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={l.detailPanelImage}
              alt={
                "detailPanelImageAlt" in l && l.detailPanelImageAlt
                  ? l.detailPanelImageAlt
                  : l.org
              }
              fill
              className="object-contain object-center"
              unoptimized
              sizes="(max-width: 480px) 100vw, 400px"
            />
          </div>
        </div>
      ) : null;
    return (
      <div className="space-y-2.5 sm:space-y-3">
        {hero}
        <div className="flex items-start gap-3 sm:gap-3.5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 sm:h-14 sm:w-14">
            <Image
              src={l.listImage}
              alt={l.listImageAlt}
              width={64}
              height={64}
              unoptimized
              className="h-full w-full object-contain p-1.5"
            />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white sm:text-lg">{l.org}</h2>
            <p className="text-xs text-slate-200/90 sm:text-sm">{l.role}</p>
          </div>
        </div>
        <p className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] leading-snug text-white/90 sm:px-2.5 sm:py-2 sm:text-xs">
          {l.detail}
        </p>
      </div>
    );
  }
  if (app === "skills") {
    const cat = skillScreenCategories.find((c) => c.id === (itemId as SkillCategoryId));
    if (!cat) return null;
    const tags = getSkillCategoryItems(itemId as SkillCategoryId);
    return (
      <div className="space-y-2.5 sm:space-y-3">
        <p className="text-xs text-white/55 sm:text-sm">{cat.blurb}</p>
        <ul className="flex flex-wrap gap-2 sm:gap-2.5">
          {tags.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </ul>
      </div>
    );
  }
  return null;
}
