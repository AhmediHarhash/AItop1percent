export type CoreSection = {
  id: string;
  path: string;
  title: string;
  summary: string;
};

export const coreSections: CoreSection[] = [
  {
    id: "01",
    path: "01-eval-strategy",
    title: "Eval Strategy & Operating Model",
    summary: "Defines how quality is measured and when it is safe to ship."
  },
  {
    id: "02",
    path: "02-ground-truth",
    title: "Ground Truth & What Good Looks Like",
    summary: "Clarifies what correctness means and how to agree on it."
  },
  {
    id: "03",
    path: "03-dataset-design",
    title: "Dataset Design",
    summary: "Builds the evaluation datasets that make quality visible."
  },
  {
    id: "04",
    path: "04-labeling-annotation",
    title: "Labeling & Annotation",
    summary: "Creates reliable labels and resolves ambiguity at scale."
  },
  {
    id: "05",
    path: "05-quality-metrics",
    title: "Quality Dimensions & Metrics",
    summary: "Turns quality into measurable dimensions and thresholds."
  },
  {
    id: "06",
    path: "06-human-evals",
    title: "Human Evaluation Systems",
    summary: "Designs expert reviews that are consistent and defensible."
  },
  {
    id: "07",
    path: "07-automated-evals",
    title: "Automated Evaluation Systems",
    summary: "Scales evaluation with reliable automated checks."
  },
  {
    id: "08",
    path: "08-agent-evals",
    title: "Agent Evaluation",
    summary: "Measures multi-step agent performance and failure modes."
  },
  {
    id: "09",
    path: "09-rag-evals",
    title: "RAG Evaluation",
    summary: "Validates retrieval quality and grounding behavior."
  },
  {
    id: "10",
    path: "10-voice-realtime-evals",
    title: "Voice & Real-Time Evaluation",
    summary: "Ensures low latency and reliable conversation under pressure."
  },
  {
    id: "11",
    path: "11-production-monitoring",
    title: "Production Monitoring",
    summary: "Detects regressions and failures after release."
  },
  {
    id: "12",
    path: "12-regression-testing",
    title: "Regression Testing",
    summary: "Prevents quality from degrading when models or prompts change."
  },
  {
    id: "13",
    path: "13-release-gates",
    title: "Release Gates",
    summary: "Defines quality thresholds required to ship."
  },
  {
    id: "14",
    path: "14-red-teaming",
    title: "Red-Teaming & Adversarial Testing",
    summary: "Finds the failures users and attackers will exploit."
  },
  {
    id: "15",
    path: "15-cost-quality-tradeoffs",
    title: "Cost vs Quality Tradeoffs",
    summary: "Optimizes quality without destroying margins or latency."
  },
  {
    id: "16",
    path: "16-multi-tenant-evals",
    title: "Multi-Tenant / Customer-Specific Evals",
    summary: "Adapts evaluation to customer-specific expectations."
  },
  {
    id: "17",
    path: "17-enterprise-governance",
    title: "Enterprise Governance & Compliance",
    summary: "Connects evals to policy, audit, and risk controls."
  },
  {
    id: "18",
    path: "18-scaling-evals",
    title: "Scaling Evals",
    summary: "Expands evaluation coverage without losing signal."
  },
  {
    id: "19",
    path: "19-eval-org-design",
    title: "Eval Team & Org Design",
    summary: "Designs ownership, workflows, and accountability."
  },
  {
    id: "20",
    path: "20-model-selection-routing",
    title: "Model Selection & Routing",
    summary: "Chooses the right model for each task and tier."
  },
  {
    id: "21",
    path: "21-prompt-tool-architecture",
    title: "Prompt & Tool Architecture",
    summary: "Structures prompts and tools for reliability and control."
  },
  {
    id: "22",
    path: "22-memory-context-management",
    title: "Memory & Context Management",
    summary: "Balances recall, privacy, and context budgets."
  },
  {
    id: "23",
    path: "23-reliability-failure-recovery",
    title: "Reliability & Failure Recovery",
    summary: "Designs fallbacks and resilience for production systems."
  },
  {
    id: "24",
    path: "24-security-abuse-prevention",
    title: "Security & Abuse Prevention",
    summary: "Defends against prompt injection and tool abuse."
  },
  {
    id: "25",
    path: "25-deployment-runtime-control",
    title: "Deployment & Runtime Control",
    summary: "Controls rollouts, configs, and runtime safeguards."
  },
  {
    id: "26",
    path: "26-system-cost-engineering",
    title: "System Cost Engineering",
    summary: "Keeps inference cost aligned with business reality."
  }
];
