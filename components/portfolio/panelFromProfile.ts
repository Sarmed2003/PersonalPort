import {
  educationAppList,
  getSkillCategoryItems,
  getTopicCopy,
  homeApps,
  profile,
  skillScreenCategories,
  type AppId,
  type EducationItemId,
  type ExperienceId,
  type LeadershipId,
  type ProjectId,
  type SkillCategoryId,
  type TopicChipId,
} from "@/content/profile";
import type { PanelState } from "./ContextPanel";

export type PanelSource =
  | { type: "default" }
  | { type: "chip"; id: TopicChipId }
  | { type: "app"; id: AppId }
  | { type: "item"; app: AppId; itemId: string };

export function panelFromSource(source: PanelSource): PanelState {
  if (source.type === "default") {
    return { kind: "welcome" };
  }

  if (source.type === "chip") {
    const c = getTopicCopy(source.id);
    return {
      kind: "content",
      title: c.title,
      body: c.body,
      badge: "For recruiters",
    };
  }

  if (source.type === "app") {
    return panelForApp(source.id);
  }

  return panelForItem(source.app, source.itemId);
}

function panelForApp(id: AppId): PanelState {
  switch (id) {
    case "about":
      return {
        kind: "content",
        title: "About me",
        subtitle: `${profile.location} · CIS — Software Development`,
        badge: "Hello",
        body: [
          profile.tagline,
          profile.about.twinAndSports,
          profile.about.curiosityAndPath,
          profile.about.background,
          profile.education.highlights[0] ?? "",
        ].filter(Boolean),
        links: [
          { label: "LinkedIn", href: profile.links.linkedin },
          { label: "GitHub", href: profile.links.github },
        ],
      };
    case "experience":
      return {
        kind: "content",
        title: "Work experience",
        subtitle:
          "Tap a role for full bullets (Apple, UA—including Robotics / Lunabotics software—Stark, Summa, and earlier retail).",
        badge: "Career",
        body: [
          "Seven roles: current Apple technical specialist; three UA positions (Software Developer SA, lab research, and Robotics Team Member on NASA Lunabotics); Stark County JFS; Summa Health; earlier DICK'S Sporting Goods retail.",
          "Common threads: API and GPU testing, deployment automation, diagnostics, embedded C++/ROS when applicable, and clear documentation for the next person on the team.",
        ],
      };
    case "education":
      return {
        kind: "content",
        title: "Education & credentials",
        subtitle: profile.education.school,
        badge: "Academics",
        body: [
          "Tap The University of Akron to open the full record—degree, associate, coursework, activities, and the certification names together.",
          "Tap any other row to open that certificate with a short line on how I use it.",
        ],
      };
    case "projects":
      return {
        kind: "content",
        title: "Projects",
        subtitle: "Select a build for the full story",
        badge: "Portfolio work",
        body: profile.projects.map(
          (p) => `${p.name} — ${p.stack.join(", ")}`,
        ),
      };
    case "skills":
      return {
        kind: "content",
        title: "Skills",
        subtitle: "Languages, tools, and how they show up at work vs. in projects",
        badge: "Toolkit",
        body: [
          "Browse categories in the app: core languages, engineering tools, technologies from my roles, and stacks I have shipped in projects.",
          "This is intentionally more granular than a single tag cloud—recruiters can see where each skill is exercised.",
        ],
      };
    case "leadership":
      return {
        kind: "content",
        title: "Leadership experience",
        subtitle: "Campus organizations",
        badge: "Orgs",
        body: profile.leadership.map(
          (l) => `${l.org} — ${l.role} (${formatRange(l.start, l.end)}).`,
        ),
      };
    case "community":
      return {
        kind: "content",
        title: "Community & volunteering",
        subtitle: "Schools & regional service",
        badge: "Service",
        body: profile.volunteering.map((v) => v.storyShort),
      };
    case "contact":
      return {
        kind: "content",
        title: "Connect",
        subtitle: "Reach out anytime",
        badge: "Hello",
        body: [
          profile.email,
          profile.location,
          "Links down below!",
        ],
        links: [
          { label: "Email", href: `mailto:${profile.email}` },
          { label: "LinkedIn", href: profile.links.linkedin },
          { label: "GitHub", href: profile.links.github },
        ],
      };
    case "resume":
      return {
        kind: "content",
        title: "Résumé",
        subtitle: "Sarmed Mahmood · 2026",
        badge: "PDF",
        body: ["Click one of these buttons to view my resume!"],
        links: [
          { label: "Open PDF", href: profile.resumePdfUrl },
          { label: "Download", href: profile.resumePdfUrl, download: "Sarmed-Mahmood-Resume-2026.pdf" },
        ],
      };
    default:
      return { kind: "welcome" };
  }
}

function panelForItem(app: AppId, itemId: string): PanelState {
  if (app === "experience") {
    const job = profile.experience.find((e) => e.id === (itemId as ExperienceId));
    if (!job) return { kind: "welcome" };
    const panelImg =
      "panelImage" in job && typeof (job as { panelImage?: string }).panelImage === "string"
        ? (job as { panelImage: string }).panelImage
        : undefined;
    return {
      kind: "content",
      title: job.role,
      subtitle: `${job.company} · ${formatRange(job.start, job.end)}`,
      badge: job.company,
      body: [...job.bullets],
      footnote: job.location,
      imageSrc: panelImg,
      imageAlt: `${job.role} — ${job.company}`,
    };
  }
  if (app === "projects") {
    const p = profile.projects.find((x) => x.id === (itemId as ProjectId));
    if (!p) return { kind: "welcome" };
    const projectLinks: { label: string; href: string }[] = [];
    if ("liveUrl" in p && p.liveUrl) {
      projectLinks.push({
        label: "liveLabel" in p && p.liveLabel ? p.liveLabel : "Live site",
        href: p.liveUrl,
      });
    }
    if ("githubUrl" in p && p.githubUrl) {
      projectLinks.push({
        label:
          "githubLabel" in p && p.githubLabel ? p.githubLabel : "GitHub",
        href: p.githubUrl,
      });
    }
    return {
      kind: "content",
      title: p.name,
      subtitle: p.stack.join(" · "),
      badge: "accolade" in p ? p.accolade : "Project",
      imageSrc:
        "contextPanelImage" in p && p.contextPanelImage
          ? p.contextPanelImage
          : p.panelImage,
      imageAlt: p.name,
      imageSrcSecondary:
        "contextPanelImageSecondary" in p && p.contextPanelImageSecondary
          ? p.contextPanelImageSecondary
          : undefined,
      imageAltSecondary: p.name,
      lead: p.panelSummary,
      body: [...p.bullets],
      footnote: `Updated ${p.date}`,
      links: projectLinks.length ? projectLinks : undefined,
    };
  }
  if (app === "leadership") {
    const l = profile.leadership.find((x) => x.id === (itemId as LeadershipId));
    if (!l) return { kind: "welcome" };
    return {
      kind: "content",
      title: l.org,
      subtitle: `${l.role} · ${formatRange(l.start, l.end)}`,
      badge: "Leadership",
      imageSrc:
        "detailPanelImage" in l && l.detailPanelImage ? l.detailPanelImage : undefined,
      imageAlt:
        "detailPanelImageAlt" in l && l.detailPanelImageAlt
          ? l.detailPanelImageAlt
          : l.org,
      body: [l.detail],
    };
  }
  if (app === "skills") {
    const id = itemId as SkillCategoryId;
    if (!getSkillCategoryItems(id).length) return { kind: "welcome" };
    const meta = skillScreenCategories.find((c) => c.id === id);
    return {
      kind: "content",
      title: meta?.shortLabel ?? "Skills",
      subtitle: meta?.blurb,
      badge: "Skills",
      body: [...getSkillCategoryItems(id)],
    };
  }
  if (app === "education") {
    const eid = itemId as EducationItemId;
    if (eid === "uakron-main") {
      return {
        kind: "content",
        title: "The University of Akron",
        subtitle: "Degree & full academic record",
        badge: "Academics",
        body: [
          `${profile.education.degree} — expected ${profile.education.expected}. ${profile.education.associate.title} (${profile.education.associate.date}).`,
          `Certifications: ${profile.education.certifications.join(", ")}. LinkedIn Learning: ${profile.linkedInLearning.map((c) => `${c.name} (${c.issued}, ${c.provider})`).join("; ")}.`,
          `Relevant coursework: ${profile.education.coursework.join(", ")}.`,
          `Activities: ${profile.education.activities}. See the Community app for volunteering and the LinkedIn credential link.`,
        ],
      };
    }
    const row = educationAppList.find((r) => r.id === eid);
    if (!row) return { kind: "welcome" };
    return {
      kind: "content",
      title: row.listTitle,
      subtitle: row.listSubtitle,
      badge: "Academics",
      body: "detailLines" in row && row.detailLines ? [...row.detailLines] : [],
    };
  }
  return { kind: "welcome" };
}

function formatRange(start: string, end: string) {
  const left = formatMonth(start);
  if (end === "present") return `${left} – Present`;
  return `${left} – ${formatMonth(end)}`;
}

function formatMonth(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  const d = new Date(y, (m ?? 1) - 1);
  return d.toLocaleString(undefined, { month: "short", year: "numeric" });
}

export function appLabel(id: AppId) {
  return homeApps.find((a) => a.id === id)?.label ?? id;
}

export function itemScreenTitle(app: AppId, itemId: string): string {
  if (app === "skills") {
    return (
      skillScreenCategories.find((c) => c.id === (itemId as SkillCategoryId))
        ?.shortLabel ?? "Skills"
    );
  }
  if (app === "education") {
    return (
      educationAppList.find((r) => r.id === (itemId as EducationItemId))?.listTitle ?? "School"
    );
  }
  return "Detail";
}
