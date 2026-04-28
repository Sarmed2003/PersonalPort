export const profile = {
  name: "Sarmed Mahmood",
  title:
    "Technical Specialist · Software Development Student Assistant · Senior, The University of Akron",
  tagline:
    "Senior at The University of Akron studying Computer Information Systems with a concentration in Software Development. I am a quick-learning scholar interested in building long-lasting relationships and striving for excellence during my undergraduate years.",
  location: "Akron, OH",
  email: "sarmedmahmood91903@gmail.com",
  phone: "330-255-9569",
  /** Right-column headline (detail lives in apps and context panel) */
  portfolio: {
    headline: "Software Engineer: Builder, Connector, Relentlessly Curious",
  },
  /** Served from /public — update when you replace the file */
  resumePdfUrl: "/resume.pdf",
  /** First-page preview (e.g. regenerate: qlmanage on macOS or export from PDF) */
  resumePreviewImage: "/resume-preview.png",
  /** About me: personal + professional bullet-style lines */
  about: {
    twinAndSports:
      "I’m an identical twin born and raised in Akron, Ohio! I am goal-driven and enjoy asking questions to understand the different aspects of problem-solving. I am a huge Basketball/Soccer fan, my dad got me on the field early, and it’s been part of me ever since.",
    /** Curiosity / problem-solving + early degree */
    curiosityAndPath:
      "I earned my associate degree at 19 from The University of Akron. I'm a very curious, creative person who loves being a problem solver and enjoys understanding the different aspects of problem-solving.",
    background:
      "I have led in Agile, shipped agentic and full-stack work (KHE OnePromptAI, ZipsMarket for campus), and do undergraduate research on mixture-of-experts models and practical ML.",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/sarmed-mahmood-b8212b259",
    github: "https://github.com/Sarmed2003",
  },
  linkedInLearning: [
    {
      name: "Cybersecurity at Work",
      provider: "LinkedIn Learning",
      issued: "Nov 2023",
      badgeImage: "/community/linkedin-learning.png" as const,
      badgeAlt: "LinkedIn Learning",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/6d0f3f439e57c6cd5ce43c630fd784e6eaa6f23ded47558497056ee40be1c1de?trk=public_profile_certification-title",
    },
  ],
  volunteering: [
    {
      id: "seiberling",
      organization: "Seiberling CLC (Seiberling Elementary School, Akron, OH)",
      role: "Volunteer — Teaching Assistant",
      focus: "Children · education",
      start: "2019-09",
      end: "2021-11",
      approxDuration:
        "About 2 years, 3 months (with a break during the pandemic; invited to return when safe)",
      summary:
        "Volunteer TA at my old elementary: classroom and after-school support; paused for COVID, then invited to return when it was safe.",
      storyShort:
        "Spent time at Seiberling CLC—where I went to school: helped mentor students on math and science homework after class, and crafted steady routines for students. I’m honored for the opportunity to help at my alma mater, as they have been a big contribution to my success and who I am as a person.",
      logoImage: "/community/seiberling-clc.png" as const,
      logoAlt: "Seiberling CLC",
    },
    {
      id: "food-bank",
      organization: "Akron-Canton Regional Food Bank",
      role: "Volunteer",
      focus: "Food packaging · distribution",
      start: "2023",
      end: "2024",
      approxDuration: "Volunteer shifts",
      summary:
        "Packaged and helped distribute donated food for families across the Akron-Canton region.",
      storyShort:
        "I volunteered at the Akron-Canton Regional Food Bank—packaging donated goods, organizing inventory, and helping move and distribute food so families across the community could access what they needed. Hands-on work that kept donations flowing from warehouse to families.",
      logoImage: "/community/akron-canton-food-bank.png" as const,
      logoAlt: "Akron-Canton Regional Food Bank",
    },
  ],
  education: {
    school: "The University of Akron",
    location: "Akron, OH",
    degree: "Bachelor of Science in Computer Information Systems — Software Development",
    expected: "May 2026",
    associate: {
      title: "Associate of Arts and Sciences",
      date: "May 2021",
    },
    highlights: [
      "KHE 2026 Solo Hackathon Winner (OnePromptAI — 1st place, solo track)",
    ],
    certifications: [
      "CIS Software Development",
      "Certified Scrum Master (CSM)",
      "Data Analytics and Management",
      "CompTIA Security+",
    ],
    activities:
      "Akron early college graduate; STEM science fair project winner; Technology chair in the Coding Club; Dean's List 2025; University of Akron Robotics team member 2025–2026; Akron Guarantee Scholar; CITA — Team Member",
    coursework: [
      "Client/Server Programming",
      "System Design",
      "Database Management",
      "Discrete Math",
      "Linear Algebra",
      "Data Science",
    ],
  },
  skills: {
    languages: [
      "Python",
      "Java",
      "SQL",
      "C++",
      "Swift",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Kotlin",
      "QML",
    ],
    tools: [
      "Cursor",
      "Jenkins",
      "Docker",
      "Postman",
      "Render",
      "Azure",
      "Spring Boot",
      "Tableau",
      "Kubernetes",
      "Redis",
      ".NET",
      "Git",
      "GitHub",
      "AWS (Bedrock, DynamoDB, CI/CD)",
      "Ollama",
      "JupyterLab",
      "Vercel",
      "Supabase / PostgreSQL",
      "Obsidian",
      "Stripe",
      "scikit-learn",
      "PIL & scikit-image",
    ],
  },
  skillsFromWork: [
    "MobileGenius & service workflow tooling (queued sessions, diagnostics, documentation)",
    "iOS, device triage, Concierge for technical cases",
    "Ollama & REST APIs (Qwen3, integration testing on 13+ endpoints)",
    "Postman, Postman Runner, Python (stress and reliability tests)",
    "Ubuntu Linux, NVIDIA L4, grant-funded GPU server operations",
    "C++ (mentoring memory management) & handoff documentation",
    "Microsoft AutoPilot, Azure AD, Microsoft 365 provisioning, PowerShell scripts",
    "LLM / MoE evaluation (Qwen, GPT, LLaMA), tokens/sec & tool-call benchmarking",
    "Selenium, Python, legacy mainframe & SACWIS reporting flows",
    "MySQL (indexes, query tuning, subquery → JOIN rewrites)",
    "Epic EHR, Tier-1 help desk, Cisco router deployment (75+)",
    "Customer floor & team metrics: reviews, TAT, attach rate, cross-department work",
  ],
  skillsFromProjects: [
    "Asyncio, Rich CLI / TUI, task merge queues, agent orchestration (OnePromptAI)",
    "AWS Bedrock, DynamoDB, GitPython, CI commits & pipelines",
    "C++, Qt 6, Qwen2.5, Ollama API, agentic tool-chaining, JSON streaming",
    "JupyterLab, SVC, GridSearchCV, PIL, scikit-image, image prep",
    "JavaScript, Supabase, Stripe (manual-capture escrow), RLS, Vercel, CI on main",
    "TypeScript / Next.js (apps & sites)",
  ],
  experience: [
    {
      id: "apple",
      role: "Technical Specialist",
      company: "Apple",
      localLogo: "/experience/apple.png",
      logoDomain: "apple.com",
      location: "Akron, OH",
      start: "2024-06",
      end: "present",
      bullets: [
        "Achieved 4.2 queued sessions per hour using MobileGenius, exceeding store targets by 30% to improve diagnostic and triage throughput.",
        "780+ five-star reviews by tailoring solutions to user needs; 97% Team Mate Score (TMS) collaborating with peers and educating customers on services.",
        "Used Concierge to complete technical documentation and diagnostics for the full product range, helping meet SLA and retention expectations.",
        "Mentored peers on best practices for system configuration and testing, and worked cross-functionally to enrich store culture and coach newer teammates on diagnostics and Apple services.",
      ],
    },
    {
      id: "ua-sda",
      role: "Software Development Student Assistant",
      company: "The University of Akron",
      localLogo: "/experience/uakron.png",
      logoDomain: "uakron.edu",
      location: "Akron, OH",
      start: "2025-05",
      end: "present",
      bullets: [
        "End-to-end deployment of a $6,000 grant-funded Ubuntu server with an NVIDIA L4 GPU running the Zippy AI / Ollama backend for 250+ students.",
        "Integration testing on 13+ REST endpoints to Qwen3 over Ollama; Postman work reduced API response time by about 24%.",
        "Automated reliability and stress runs with Postman Runner and Python against the GPU host to find failure thresholds and validate peak-hour stability.",
        "Mentored two junior developers on C++ memory management and RESTful API design; documented build, deployment, and handoff so they could ship in the first sprint.",
      ],
    },
    {
      id: "ua-lab",
      role: "Computer Lab Research Assistant",
      company: "The University of Akron",
      localLogo: "/experience/uakron.png",
      logoDomain: "uakron.edu",
      location: "Akron, OH",
      start: "2024-01",
      end: "2025-08",
      bullets: [
        "LLM research and evaluation on MoE models (Qwen, GPT, LLaMA) across tokens/sec and tool-call quality on university GPU hardware; delivered a full proof-of-concept readout.",
        "Deployed 90+ faculty devices with Microsoft Autopilot and Azure AD, automating M365 and RBAC with PowerShell scripts to cut multi-hour setups down sharply.",
      ],
    },
    {
      id: "ua-robotics",
      role: "Robotics Team Member",
      company: "The University of Akron",
      localLogo: "/experience/uakron.png",
      logoDomain: "uakron.edu",
      location: "Akron, OH",
      start: "2025-08",
      end: "2026-01",
      panelImage: "/leadership/melodee-lunabotics.png",
      bullets: [
        "Software team member on MELODEE (NASA Lunabotics): embedded C++ in ROS, autonomous navigation control routines, and autonomy pipeline work across algorithms, hardware interfacing, and communication with the electrical sub-team.",
        "Build, integration, and competition season including the annual NASA-hosted event in Florida (Aug 2025 – Jan 2026).",
      ],
    },
    {
      id: "stark",
      role: "System Administrator Intern",
      company: "Stark County JFS",
      localLogo: "/experience/stark.png",
      logoDomain: "ohio.gov",
      location: "Canton, OH",
      start: "2023-12",
      end: "2024-04",
      bullets: [
        "Selenium-based Python for 50+ SACWIS cases, scraping mainframe data and removing manual data entry; cut case-report processing time by about 30%.",
        "Tuned MySQL (composite indexes, JOINs instead of heavy subqueries) for 22% faster report jobs across state/federal compliance teams.",
      ],
    },
    {
      id: "summa",
      role: "Computer HelpDesk Analyst",
      company: "Summa Health",
      localLogo: "/experience/summa.png",
      logoDomain: "summahealth.org",
      location: "Akron, OH (on-site)",
      start: "2023-07",
      end: "2024-06",
      bullets: [
        "Tier-1 for 500+ staff and 600+ patients on Epic: resolved 86%+ of 400+ tickets (≈400) without escalation.",
        "Rolled out 75+ Cisco routers for device programs; hardware troubleshooting, software integration, and six hospital departments for faculty devices.",
      ],
    },
    {
      id: "dicks",
      role: "Team Sports Associate",
      company: "DICK'S Sporting Goods",
      localLogo: "/experience/dicks.png",
      logoDomain: "dickssportinggoods.com",
      location: "Cuyahoga Falls, OH (on-site)",
      start: "2020-11",
      end: "2022-09",
      bullets: [
        "Served customers with product knowledge, multitasking, and a focus on a welcoming experience across age groups, working with other departments.",
        "Drove a 48% attach rate to eligible protection and accessories (Asurion) and met/exceeded time-at-task (TAT) goals.",
      ],
    },
  ],
  projects: [
    {
      id: "onepromptai",
      name: "OnePromptAI — Multi-Agent Swarm",
      date: "2026-04",
      panelImage: "/projects/onepromptai.png",
      panelSummary:
        "Kent Hack Enough (KHE)–winning multi-agent system with a Rich TUI, AWS (Bedrock, DynamoDB, GitPython), and CI-driven workflows.",
      accolade: "1st Place — Solo Hack Winner",
      stack: [
        "Python",
        "AWS (Bedrock, DynamoDB, CI)",
        "TypeScript",
        "Obsidian",
        "GitPython",
        "Rich (TUI)",
        "asyncio",
      ],
      bullets: [
        "Architected 12+ async agents and a Rich CLI for an SDLC-style task merge queue with ~95% task completion in testing.",
        "Wired Bedrock, DynamoDB, and GitPython into automated CI so commits and merges could be driven from the pipeline.",
        "Instrumented merge rates, completion, and operational metrics in a TUI to visualize 12+ concurrent agents.",
        "Solo worktrees, scoped files, and git isolation to reduce total token use by about 35% on decomposed work.",
      ],
      liveUrl: "https://dinolab-7w4gx3c7f-sarmeds-projects-23b5fb42.vercel.app/",
      liveLabel: "Open Dinolab",
      /** Right context panel only; phone keeps panelImage */
      contextPanelImage: "/projects/onepromptai-context.png" as const,
    },
    {
      id: "zippy-ai",
      name: "Zippy AI — University of Akron",
      date: "2026-02",
      panelImage: "/projects/zippy-ai.png",
      panelSummary:
        "Campus LLM assistant with Ollama/Qwen, C++/Qt, and an Agile team of five; cited answers from university data.",
      accolade: "Institution-facing assistant",
      stack: ["C++", "Qt 6", "Ollama", "Qwen2.5", "Ubuntu"],
      bullets: [
        "Prompting and retrieval so 250+ users can query with cited, university-sourced information.",
        "Tool-chaining pipeline with JSON streaming; multi-step tasks solved in testing with 92% accuracy for benchmark prompts.",
        "On an Agile team of five, bi-weekly sprints, GitHub feature branches, and production-hardening.",
      ],
      githubUrl: "https://github.com/UofAkronCOBLabs/uakron-coblabs-zippyai",
      githubLabel: "GitHub Repo",
    },
    {
      id: "image-classification",
      name: "Image Classification Model",
      date: "2026-01",
      panelImage: "/projects/image-classification.png",
      panelSummary:
        "I trained an image classification model to classify images across three categories—cars, ice cream, and cricket balls—and achieved 88% accuracy.",
      stack: [
        "Python",
        "JupyterLab",
        "scikit-learn (SVC, Random Forest)",
        "GridSearchCV",
        "PIL",
        "scikit-image",
      ],
      bullets: [
        "I trained a supervised image classification model using scikit-learn. I used SVC with GridSearchCV for hyperparameter tuning and also experimented with Random Forest for improved robustness.",
        "I built a custom pipeline where I loaded images from labeled folders, resized and flattened them into numerical feature vectors, and trained the model on that data. I then evaluated performance using a train-test split and accuracy metrics, and saved the trained model for inference.",
      ],
    },
    {
      id: "zipsmarket",
      name: "ZipsMarket — UAkron Student Marketplace",
      date: "2026-03",
      panelImage: "/projects/zipsmarket.png",
      panelSummary:
        "Akron's first student-exclusive marketplace: trust, goods, services, and campus community—Stripe manual-capture escrow, Supabase, Vercel.",
      accolade: "Full-stack · student-only marketplace",
      stack: [
        "JavaScript",
        "Stripe (manual-capture escrow)",
        "Supabase (PostgreSQL + RLS)",
        "Vercel",
        "CI on main",
      ],
      bullets: [
        "Built the full-stack marketplace to give students a trusted place to buy, sell, and connect on campus—newsletter drove 45+ registered users at launch.",
        "Stripe with manual-capture escrow; PostgreSQL schema with row-level security on sensitive tables; deployed on Vercel with CI on every push to main.",
      ],
      liveUrl: "https://zipsmarket.vercel.app/",
      liveLabel: "ZipsMarket live",
    },
    {
      id: "melodee-lunabotics",
      name: "MELODEE — NASA Lunabotics (UA Robotics)",
      date: "2025-08",
      panelImage: "/leadership/melodee-lunabotics.png",
      panelSummary:
        "Embedded C++ and ROS on UA's NASA Lunabotics robot MELODEE: autonomy pipeline, navigation routines, and hardware–software integration for competition.",
      accolade: "NASA Lunabotics · software sub-team",
      stack: ["C++", "ROS", "Embedded systems", "Python", "Electrical integration"],
      bullets: [
        "Software team member on MELODEE: ROS-based autonomous control, navigation routines, and autonomy pipeline work with algorithms, hardware interfacing, and protocols alongside the electrical sub-team.",
        "Competition build and integration including the annual NASA-hosted Lunabotics event in Florida (Aug 2025 – Jan 2026).",
      ],
    },
    {
      id: "premier-league-ml",
      name: "PremierLeagueML",
      date: "2025-12",
      panelImage: "/projects/premier-league-ml.png",
      panelSummary:
        "Senior project: Premier League–themed experience with ML and a sports-focused web UI.",
      accolade: "Senior project",
      stack: ["TypeScript", "Next.js", "Python", "scikit-learn", "Jupyter", "Vercel"],
      bullets: [
        "End-to-end capstone with a marketing-style landing, navigation, and football-themed visual system.",
        "Machine learning and data features aligned with Premier League interest and senior coursework goals.",
        "Emphasis on clear IA, search, and presentation of league-related content for users.",
      ],
    },
  ],
  leadership: [
    {
      id: "cita",
      org: "CITA — Center of Information Technology and Analytics",
      role: "Chair Member",
      start: "2022-09",
      end: "2024-12",
      listImage: "/leadership/cita.png" as const,
      listImageAlt: "CITA — Center for IT and Analytics",
      detail:
        "Chaired through Sept 2022 – Dec 2024: community between analytics, student tech groups, and the department, plus coding-club/STEM visibility.",
    },
    {
      id: "robotics",
      org: "University of Akron Robotics",
      role: "Team Member",
      start: "2025-08",
      end: "2026-01",
      listImage: "/leadership/ua-robotics.png" as const,
      listImageAlt: "UA NASA Robotics",
      detailPanelImage: "/leadership/melodee-lunabotics.png" as const,
      detailPanelImageAlt: "MELODEE — NASA Lunabotics robot",
      detail:
        "As a software team member on MELODEE — UA's NASA Lunabotics competition robot — I contributed to embedded C++ development within the ROS (Robot Operating System) framework, working on autonomous control routines responsible for navigation. I contributed to MELODEE's autonomy pipeline across algorithm design, hardware interfacing, and communication protocols between software and the electrical sub-team. Experience working alongside such a talented group of friends gave me a systems-thinking perspective I use in my work.",
    },
  ],
} as const;

/** School app: work-style list rows, then item detail (UA = full “record”) */
export const educationAppList = [
  {
    id: "uakron-main",
    listTitle: "The University of Akron",
    listSubtitle:
      "Bachelor of Science in Computer Information Systems — Software Development (expected May 2026) · Associate of Arts and Sciences (May 2021)",
    listImage: "/experience/uakron.png" as const,
    listImageAlt: "The University of Akron",
  },
  {
    id: "cert-cis",
    listTitle: "CIS Software Development",
    listSubtitle: "CIS program certification",
    listImage: "/experience/uakron.png" as const,
    listImageAlt: "The University of Akron",
    detailLines: [
      "Completed the CIS Software Development program concentration at UA—aligned with the degree path and the technical bars I set for my coursework and project work.",
    ] as const,
  },
  {
    id: "cert-csm",
    listTitle: "Certified Scrum Master (CSM)",
    listSubtitle: "Scrum Alliance",
    listImage: "/school/csm.png" as const,
    listImageAlt: "Scrum Alliance Certified Scrum Master (CSM)",
    detailLines: [
      "Scrum Alliance Certified Scrum Master (CSM). I use the sprint mindset, backlog clarity, and team rituals in class projects and in collaborative builds.",
    ] as const,
  },
  {
    id: "cert-data",
    listTitle: "Data Analytics and Management",
    listSubtitle: "Academic & professional credential",
    listImage: "/experience/uakron.png" as const,
    listImageAlt: "The University of Akron",
    detailLines: [
      "Data analytics and management credential in my profile—paired with SQL, reports, and coursework that treats data as something you can ship, not just read.",
    ] as const,
  },
  {
    id: "cert-comptia",
    listTitle: "CompTIA Security+",
    listSubtitle: "Industry IT security certification",
    listImage: "/school/comptia-security-plus.png" as const,
    listImageAlt: "CompTIA Security+",
    detailLines: [
      "CompTIA Security+ to anchor how I think about system hardening, user trust, and responsible access—especially in retail and help-desk-style contexts.",
    ] as const,
  },
  {
    id: "cert-linkedin-sec",
    listTitle: "Cybersecurity at Work",
    listSubtitle: "LinkedIn Learning · issued Nov 2023",
    listImage: "/community/linkedin-learning.png" as const,
    listImageAlt: "LinkedIn Learning",
    detailLines: [
      "Completed LinkedIn Learning: Cybersecurity at Work (Nov 2023) with official credential—relevant to safe practices in retail, campus, and help-desk settings.",
    ] as const,
  },
] as const;

export type EducationItemId = (typeof educationAppList)[number]["id"];

export const skillScreenCategories: {
  id: SkillCategoryId;
  shortLabel: string;
  blurb: string;
}[] = [
  {
    id: "languages",
    shortLabel: "Languages & UI",
    blurb: "Coursework, jobs, and shipped apps (Python through QML/JS).",
  },
  {
    id: "dev-tools",
    shortLabel: "Engineering tools",
    blurb: "CI/CD, cloud, data, and day-to-day engineering tooling.",
  },
  {
    id: "work-tech",
    shortLabel: "From work & internships",
    blurb: "What shows up in retail, campus, county, and hospital roles.",
  },
  {
    id: "project-tech",
    shortLabel: "From projects",
    blurb: "Stacks and services used in hack and capstone work.",
  },
];

export type SkillCategoryId =
  | "languages"
  | "dev-tools"
  | "work-tech"
  | "project-tech";

export function getSkillCategoryItems(
  id: SkillCategoryId,
): readonly string[] {
  switch (id) {
    case "languages":
      return profile.skills.languages;
    case "dev-tools":
      return profile.skills.tools;
    case "work-tech":
      return profile.skillsFromWork;
    case "project-tech":
      return profile.skillsFromProjects;
    default:
      return [];
  }
}

export type ExperienceEntry = (typeof profile.experience)[number];

/** Local `/public/experience/*.png` when present; otherwise use Clearbit in CompanyMark. */
export function experienceLocalLogo(entry: ExperienceEntry): string | undefined {
  if (
    "localLogo" in entry &&
    typeof (entry as { localLogo?: string }).localLogo === "string"
  ) {
    return (entry as { localLogo: string }).localLogo;
  }
  return undefined;
}

export type ExperienceId = (typeof profile.experience)[number]["id"];
export type ProjectId = (typeof profile.projects)[number]["id"];
export type LeadershipId = (typeof profile.leadership)[number]["id"];

export type AppId =
  | "about"
  | "experience"
  | "education"
  | "projects"
  | "skills"
  | "leadership"
  | "community"
  | "contact"
  | "resume";

export const homeApps: {
  id: AppId;
  label: string;
  icon: string;
  tint: string;
}[] = [
  { id: "about", label: "About me", icon: "👤", tint: "from-sky-500/90 to-blue-600/90" },
  { id: "experience", label: "Work", icon: "💼", tint: "from-amber-500/90 to-orange-600/90" },
  { id: "education", label: "School", icon: "🎓", tint: "from-violet-500/90 to-indigo-600/90" },
  { id: "projects", label: "Projects", icon: "💡", tint: "from-emerald-500/90 to-teal-600/90" },
  { id: "skills", label: "Skills", icon: "✨", tint: "from-fuchsia-500/90 to-pink-600/90" },
  { id: "leadership", label: "Leadership", icon: "🎯", tint: "from-rose-500/90 to-red-600/90" },
  { id: "community", label: "Community", icon: "🤝", tint: "from-lime-500/90 to-green-600/90" },
  { id: "contact", label: "Connect", icon: "📇", tint: "from-cyan-500/90 to-sky-600/90" },
  { id: "resume", label: "Resume", icon: "📄", tint: "from-orange-500/90 to-rose-600/90" },
];

export type TopicChipId =
  | "why-software"
  | "open-to-roles"
  | "stack-focus"
  | "impact-results"
  | "new-grad-intern"
  | "healthcare-it"
  | "apis-reliability"
  | "mentorship-delivery"
  | "agile-sprints"
  | "software-value";

export const topicChips: { id: TopicChipId; label: string }[] = [
  { id: "why-software", label: "Why software?" },
  { id: "new-grad-intern", label: "New-grad" },
  { id: "software-value", label: "My Impact" },
  { id: "mentorship-delivery", label: "Mentorship" },
  { id: "agile-sprints", label: "Agile & sprints" },
  { id: "apis-reliability", label: "APIs & quality" },
  { id: "healthcare-it", label: "Health IT" },
  { id: "stack-focus", label: "Stack" },
  { id: "open-to-roles", label: "Open to roles" },
];

export function getTopicCopy(id: TopicChipId): {
  title: string;
  body: string[];
} {
  switch (id) {
    case "why-software":
      return {
        title: "Why software engineering?",
        body: [
          "My path into software engineering started in high school, watching my older cousin navigate the field and answering every question I threw at him.",
          "That early exposure allowed me to adopt a creative problem-solver's instinct into a deliberate direction. I have been chasing that same clarity ever since, driven by work where the impact is measurable. I give my full effort in anything I do.",
        ],
      };
    case "open-to-roles":
      return {
        title: "What I am looking for",
        body: [
          "New-grad and internship software engineering roles with code review, mentorship, and the chance to own a slice of the product or platform.",
          "Open to hybrid in Northeast Ohio; willing to consider relocation for the right team and product.",
        ],
      };
    case "stack-focus":
      return {
        title: "How I like to build",
        body: [
          "TypeScript, React, and Next.js for the web; Python and Postman for services, tests, and load-style checks; C++/Qt and Java when the work is close to class or systems problems.",
          "I lean on CI, clear branch strategy, and written handoffs so teammates are not blocked after I context-switch.",
        ],
      };
    case "impact-results":
      return {
        title: "Engineering mindset: outcomes you can measure",
        body: [
          "~24% lower API response time (Postman tuning) on a GPU-powered campus LLM service; 30% faster case reporting (automation) at a county JFS; 4.2 queued sessions/hr at target +30% vs goal at Apple.",
          "Awards and proof: KHE 2026 hackathon 1st place (solo, OnePromptAI), plus 780+ five-star service interactions in a high-volume store.",
        ],
      };
    case "new-grad-intern":
      return {
        title: "My Story as a New-Grad",
        body: [
          "I ship Agile with planned sprints, GitHub feature branching, Postman, integration suites, Docker containerization, and CI/CD pipelines that trigger from every push to main. I've owned these workflows from start to finish.",
          "I am used to being thrown into new stacks and owning them, and making them shippable with tests and documentation.",
        ],
      };
    case "healthcare-it":
      return {
        title: "Enterprise and healthcare experience",
        body: [
          "At Summa: Tier-1 for staff and patients on Epic; 86%+ of tickets closed without escalation; 75+ Cisco device rollouts in a hospital system.",
          "I understand uptime expectations, change discipline, and explaining technical steps to people under stress—skills that map to fintech, health, and any regulated org.",
        ],
      };
    case "apis-reliability":
      return {
        title: "APIs, performance, and reliability",
        body: [
          "Integration and stress work on 13+ REST endpoints (Postman, Python) against a campus AI backend; I treat failure limits and p95s as part of the story, not a footnote.",
          "MySQL and query work for reporting pipelines; I also use CI and version control patterns that keep main healthy when multiple contributors land changes.",
        ],
      };
    case "mentorship-delivery":
      return {
        title: "How I work with a team",
        body: [
          "Mentored two junior devs on C++ and API design; documented runbooks and deployment so a sprint-1 handoff was possible; 97% team collaboration score in a high-feedback retail environment.",
          "I treat mentoring, code clarity, and calm incident handling as part of delivery, not an extra.",
        ],
      };
    case "agile-sprints":
      return {
        title: "Agile, integration, and sprint rhythm",
        body: [
          "I am a Certified Scrum Master: I work the way I say I do—sprint goals, backlog visibility, and clear “done” criteria when multiple people are landing changes together.",
          "On Zippy AI I was on a five-person Agile team with two-week sprints, GitHub feature branches, and steady integration of client, backend, and campus stakeholders—same cadence I bring when a team needs predictability, not thrash.",
        ],
      };
    case "software-value":
      return {
        title: "My impact: metrics and ownership",
        body: [
          "Integration and reliability work on 13+ REST endpoints against a real GPU-backed LLM stack, with Postman and Python; roughly 24% faster API response times from tuning and test discipline—not a slide, a number from production-style runs.",
          "I ship under constraints: 1st place (solo) at KHE 2026 for an agentic build, about 35% lower token use on decomposed work in that stack, 250+ users in scope for the campus service, and MoE/LLM research on school hardware. That is the kind of SWE I am: metrics, code paths, and ownership, not just tickets closed.",
        ],
      };
    default:
      return { title: "", body: [] };
  }
}
