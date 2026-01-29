export type SubChapter = {
  id: string;
  title: string;
  slug: string;
};

export type Chapter = {
  id: string;
  title: string;
  slug: string;
  subchapters?: SubChapter[];
};

export type CoreSection = {
  id: string;
  path: string;
  title: string;
  summary: string;
  chapters?: Chapter[];
};

export const coreSections: CoreSection[] = [
  {
    id: "01",
    path: "01-eval-strategy",
    title: "Eval Strategy & Operating Model",
    summary: "Defines how quality is measured and when it is safe to ship.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
      {
        id: "2",
        title: "Chapter 2",
        slug: "ch2",
        subchapters: [
          { id: "2.1", title: "Task-Specific Definitions of \"Good\"", slug: "2-1" },
          { id: "2.2", title: "Rubrics Humans Can Score Consistently", slug: "2-2" },
          { id: "2.3", title: "Good vs Bad Patterns", slug: "2-3" },
          { id: "2.4", title: "Uncertainty, Refusal & Safety Scoring", slug: "2-4" },
          { id: "2.5", title: "Enterprise Scorecards", slug: "2-5" },
        ],
      },
      {
        id: "3",
        title: "Chapter 3",
        slug: "ch3",
        subchapters: [
          { id: "3.1", title: "Build a Task Taxonomy", slug: "3-1" },
          { id: "3.2", title: "Coverage Map", slug: "3-2" },
        ],
      },
    ],
  },
  {
    id: "02",
    path: "02-ground-truth",
    title: "Ground Truth & What Good Looks Like",
    summary: "Clarifies what correctness means and how to agree on it.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "03",
    path: "03-dataset-design",
    title: "Dataset Design",
    summary: "Builds the evaluation datasets that make quality visible.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "04",
    path: "04-labeling-annotation",
    title: "Labeling & Annotation",
    summary: "Creates reliable labels and resolves ambiguity at scale.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "05",
    path: "05-quality-metrics",
    title: "Quality Dimensions & Metrics",
    summary: "Turns quality into measurable dimensions and thresholds.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "06",
    path: "06-human-evals",
    title: "Human Evaluation Systems",
    summary: "Designs expert reviews that are consistent and defensible.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "07",
    path: "07-automated-evals",
    title: "Automated Evaluation Systems",
    summary: "Scales evaluation with reliable automated checks.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "08",
    path: "08-agent-evals",
    title: "Agent Evaluation",
    summary: "Measures multi-step agent performance and failure modes.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "09",
    path: "09-rag-evals",
    title: "RAG Evaluation",
    summary: "Validates retrieval quality and grounding behavior.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "10",
    path: "10-voice-realtime-evals",
    title: "Voice & Real-Time Evaluation",
    summary: "Ensures low latency and reliable conversation under pressure.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "11",
    path: "11-production-monitoring",
    title: "Production Monitoring",
    summary: "Detects regressions and failures after release.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "12",
    path: "12-regression-testing",
    title: "Regression Testing",
    summary: "Prevents quality from degrading when models or prompts change.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "13",
    path: "13-release-gates",
    title: "Release Gates",
    summary: "Defines quality thresholds required to ship.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "14",
    path: "14-red-teaming",
    title: "Red-Teaming & Adversarial Testing",
    summary: "Finds the failures users and attackers will exploit.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "15",
    path: "15-cost-quality-tradeoffs",
    title: "Cost vs Quality Tradeoffs",
    summary: "Optimizes quality without destroying margins or latency.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "16",
    path: "16-multi-tenant-evals",
    title: "Multi-Tenant / Customer-Specific Evals",
    summary: "Adapts evaluation to customer-specific expectations.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "17",
    path: "17-enterprise-governance",
    title: "Enterprise Governance & Compliance",
    summary: "Connects evals to policy, audit, and risk controls.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "18",
    path: "18-scaling-evals",
    title: "Scaling Evals",
    summary: "Expands evaluation coverage without losing signal.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "19",
    path: "19-eval-org-design",
    title: "Eval Team & Org Design",
    summary: "Designs ownership, workflows, and accountability.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "20",
    path: "20-model-selection-routing",
    title: "Model Selection & Routing",
    summary: "Chooses the right model for each task and tier.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "21",
    path: "21-prompt-tool-architecture",
    title: "Prompt & Tool Architecture",
    summary: "Structures prompts and tools for reliability and control.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "22",
    path: "22-memory-context-management",
    title: "Memory & Context Management",
    summary: "Balances recall, privacy, and context budgets.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "23",
    path: "23-reliability-failure-recovery",
    title: "Reliability & Failure Recovery",
    summary: "Designs fallbacks and resilience for production systems.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "24",
    path: "24-security-abuse-prevention",
    title: "Security & Abuse Prevention",
    summary: "Defends against prompt injection and tool abuse.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "25",
    path: "25-deployment-runtime-control",
    title: "Deployment & Runtime Control",
    summary: "Controls rollouts, configs, and runtime safeguards.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "26",
    path: "26-system-cost-engineering",
    title: "System Cost Engineering",
    summary: "Keeps inference cost aligned with business reality.",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
];
