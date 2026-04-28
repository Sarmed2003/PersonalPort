/**
 * Simple Icons (https://simpleicons.org) via jsDelivr — brand colors.
 * Returns null when no known icon (caller shows text-only chip).
 */
const SLUGS: Record<string, { slug: string; color?: string }> = {
  python: { slug: "python", color: "3776AB" },
  java: { slug: "openjdk", color: "437291" },
  sql: { slug: "postgresql", color: "4169E1" },
  "c++": { slug: "cplusplus", color: "00599C" },
  cplusplus: { slug: "cplusplus", color: "00599C" },
  swift: { slug: "swift", color: "F05138" },
  react: { slug: "react", color: "61DAFB" },
  "next.js": { slug: "nextdotjs", color: "000000" },
  nextjs: { slug: "nextdotjs", color: "000000" },
  javascript: { slug: "javascript", color: "F7DF1E" },
  typescript: { slug: "typescript", color: "3178C6" },
  html: { slug: "html5", color: "E34F26" },
  css: { slug: "css3", color: "1572B6" },
  kotlin: { slug: "kotlin", color: "7F52FF" },
  qml: { slug: "qt", color: "41CD52" },
  docker: { slug: "docker", color: "2496ED" },
  jenkins: { slug: "jenkins", color: "D24939" },
  postman: { slug: "postman", color: "FF6C37" },
  render: { slug: "render", color: "46E3B7" },
  azure: { slug: "microsoftazure", color: "0078D4" },
  "spring boot": { slug: "springboot", color: "6DB33F" },
  spring: { slug: "spring", color: "6DB33F" },
  tableau: { slug: "tableau", color: "E97627" },
  kubernetes: { slug: "kubernetes", color: "326CE5" },
  redis: { slug: "redis", color: "DC382D" },
  ".net": { slug: "dotnet", color: "512BD4" },
  dotnet: { slug: "dotnet", color: "512BD4" },
  git: { slug: "git", color: "F05032" },
  github: { slug: "github", color: "181717" },
  aws: { slug: "amazonaws", color: "FF9900" },
  jupyter: { slug: "jupyter", color: "F37626" },
  jupyterlab: { slug: "jupyter", color: "F37626" },
  vercel: { slug: "vercel", color: "000000" },
  supabase: { slug: "supabase", color: "3ECF8E" },
  stripe: { slug: "stripe", color: "635BFF" },
  "scikit-learn": { slug: "scikitlearn", color: "F89939" },
  sklearn: { slug: "scikitlearn", color: "F89939" },
  obsidian: { slug: "obsidian", color: "7C3AED" },
  qt: { slug: "qt", color: "41CD52" },
  "qt 6": { slug: "qt", color: "41CD52" },
  selenium: { slug: "selenium", color: "43B02A" },
  mysql: { slug: "mysql", color: "4479A1" },
  cisco: { slug: "cisco", color: "1BA0D7" },
  pandora: { slug: "pandora", color: "224099" },
};

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/&/g, "and")
    .replace(/\+/g, "plus")
    .trim();
}

export function techIconUrlForLabel(label: string): string | null {
  const raw = label.trim();
  if (!raw) return null;
  // Direct key (full string lowercased)
  const direct = normalize(raw);
  const tryKeys = [direct, direct.split(/[|·,]/)[0].trim()];

  for (const k of tryKeys) {
    const n = k.replace(/\s+/g, " ");
    if (SLUGS[n]) {
      const { slug, color } = SLUGS[n];
      return `https://cdn.simpleicons.org/${slug}/${color ?? "888888"}`;
    }
  }

  for (const token of direct.split(/[\s/|·,]+/)) {
    if (SLUGS[token]) {
      const { slug, color } = SLUGS[token];
      return `https://cdn.simpleicons.org/${slug}/${color ?? "888888"}`;
    }
  }

  return null;
}
