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
  phase?: string;
  chapters?: Chapter[];
};

export const coreSections: CoreSection[] = [
  // Phase 1: Foundations
  {
    id: "01",
    path: "01-eval-strategy",
    title: "Eval Strategy & Operating Model",
    summary: "Defines how quality is measured and when it is safe to ship.",
    phase: "Foundations",
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
          { id: "2.6", title: "Multi-Turn Conversation Scoring", slug: "2-6" },
        ],
      },
      {
        id: "3",
        title: "Chapter 3",
        slug: "ch3",
        subchapters: [
          { id: "3.1", title: "Build a Task Taxonomy", slug: "3-1" },
          { id: "3.2", title: "Coverage Map", slug: "3-2" },
          { id: "3.3", title: "Sampling Strategy", slug: "3-3" },
          { id: "3.4", title: "Slice Strategy", slug: "3-4" },
          { id: "3.5", title: "Keeping Taxonomy Updated", slug: "3-5" },
          { id: "3.6", title: "Practical Coverage Math", slug: "3-6" },
          { id: "3.7", title: "Agentic Task Decomposition", slug: "3-7" },
        ],
      },
      {
        id: "4",
        title: "Chapter 4",
        slug: "ch4",
        subchapters: [
          { id: "4.1", title: "Ground Truth Per Task Type", slug: "4-1" },
          { id: "4.2", title: "Handling Ambiguity & Multiple Correct Answers", slug: "4-2" },
          { id: "4.3", title: "Source-of-Truth Rules", slug: "4-3" },
          { id: "4.4", title: "Gold Sets & Adjudication", slug: "4-4" },
          { id: "4.5", title: "Preventing Label Rot", slug: "4-5" },
          { id: "4.6", title: "Open-Ended & Creative Task Ground Truth", slug: "4-6" },
        ],
      },
      {
        id: "5",
        title: "Chapter 5",
        slug: "ch5",
        subchapters: [
          { id: "5.1", title: "Data Sources", slug: "5-1" },
          { id: "5.2", title: "Dataset Formats", slug: "5-2" },
          { id: "5.3", title: "Balancing & Difficulty", slug: "5-3" },
          { id: "5.4", title: "Splits & Holdouts", slug: "5-4" },
          { id: "5.5", title: "Privacy & Sanitization", slug: "5-5" },
          { id: "5.6", title: "De-duplication & Near-Duplicate Control", slug: "5-6" },
          { id: "5.7", title: "Dataset QA", slug: "5-7" },
          { id: "5.8", title: "Versioning, Lineage & Registry", slug: "5-8" },
          { id: "5.9", title: "Synthetic Data Generation", slug: "5-9" },
          { id: "5.10", title: "Multilingual & Cross-Cultural Datasets", slug: "5-10" },
          { id: "5.11", title: "Dataset Evolution & Maintenance", slug: "5-11" },
        ],
      },
      {
        id: "6",
        title: "Chapter 6 — Human Evaluation Systems",
        slug: "ch6",
        subchapters: [
          { id: "6.1", title: "When You Need Humans (and When You Don't)", slug: "6-1" },
          { id: "6.2", title: "Rater Selection & Expertise Matching", slug: "6-2" },
          { id: "6.3", title: "Calibration & Inter-Rater Agreement", slug: "6-3" },
          { id: "6.4", title: "Annotation Guidelines That Actually Work", slug: "6-4" },
          { id: "6.5", title: "Pairwise Comparison vs Absolute Scoring", slug: "6-5" },
          { id: "6.6", title: "Scaling Human Review Without Losing Quality", slug: "6-6" },
          { id: "6.7", title: "Rater Drift, Fatigue & Bias Control", slug: "6-7" },
          { id: "6.8", title: "Human-AI Hybrid Evaluation", slug: "6-8" },
          { id: "6.9", title: "Crowdsource vs In-House vs Expert Panels", slug: "6-9" },
          { id: "6.10", title: "Cost Management & Budget Allocation", slug: "6-10" },
        ],
      },
      {
        id: "7",
        title: "Chapter 7 — Automated Evaluation Systems",
        slug: "ch7",
        subchapters: [
          { id: "7.1", title: "Rule-Based & Heuristic Checks", slug: "7-1" },
          { id: "7.2", title: "LLM-as-Judge: Design & Prompt Engineering", slug: "7-2" },
          { id: "7.3", title: "LLM-as-Judge: Calibration & Bias Correction", slug: "7-3" },
          { id: "7.4", title: "Reference-Based Scoring (BLEU, ROUGE & Beyond)", slug: "7-4" },
          { id: "7.5", title: "Behavioral & Contract Testing", slug: "7-5" },
          { id: "7.6", title: "Confidence, Abstention & Escalation to Humans", slug: "7-6" },
          { id: "7.7", title: "Judge Agreement & Meta-Evaluation", slug: "7-7" },
          { id: "7.8", title: "Building an Automated Eval Pipeline", slug: "7-8" },
          { id: "7.9", title: "Custom Metric Design", slug: "7-9" },
          { id: "7.10", title: "Automated Eval for Safety & Policy Compliance", slug: "7-10" },
          { id: "7.11", title: "Red Teaming & Adversarial Suites", slug: "7-11" },
        ],
      },
      {
        id: "8",
        title: "Chapter 8 — Agent Evaluation",
        slug: "ch8",
        subchapters: [
          { id: "8.1", title: "Why Agent Evaluation Is Different", slug: "8-1" },
          { id: "8.2", title: "Trajectory & Action Trace Evaluation", slug: "8-2" },
          { id: "8.3", title: "Tool Use Correctness", slug: "8-3" },
          { id: "8.4", title: "Planning Quality & Goal Decomposition", slug: "8-4" },
          { id: "8.5", title: "Error Recovery & Robustness", slug: "8-5" },
          { id: "8.6", title: "Multi-Turn & Stateful Evaluation", slug: "8-6" },
          { id: "8.7", title: "Sandbox & Environment Design", slug: "8-7" },
          { id: "8.8", title: "Human-in-the-Loop Agent Evaluation", slug: "8-8" },
          { id: "8.9", title: "Agent Benchmarks & Leaderboards", slug: "8-9" },
          { id: "8.10", title: "Agent Safety & Guardrails", slug: "8-10" },
          { id: "8.11", title: "Agent Eval Maturity Model", slug: "8-11" },
        ],
      },
      {
        id: "9",
        title: "Chapter 9 — RAG Evaluation",
        slug: "ch9",
        subchapters: [
          { id: "9.1", title: "Why RAG Evaluation Is a Separate Discipline", slug: "9-1" },
          { id: "9.2", title: "Retrieval Quality Metrics", slug: "9-2" },
          { id: "9.3", title: "Generation & Faithfulness Evaluation", slug: "9-3" },
          { id: "9.4", title: "Attribution & Citation Accuracy", slug: "9-4" },
          { id: "9.5", title: "End-to-End RAG Evaluation", slug: "9-5" },
          { id: "9.6", title: "Chunking & Indexing Evaluation", slug: "9-6" },
          { id: "9.7", title: "Multi-Source & Hybrid Retrieval Evaluation", slug: "9-7" },
          { id: "9.8", title: "RAG Hallucination Detection & Prevention", slug: "9-8" },
          { id: "9.9", title: "RAG Evaluation in Production", slug: "9-9" },
          { id: "9.10", title: "RAG Eval Maturity & Best Practices", slug: "9-10" },
        ],
      },
      {
        id: "10",
        title: "Chapter 10 — Voice & Real-Time Evaluation",
        slug: "ch10",
        subchapters: [
          { id: "10.1", title: "Why Voice & Real-Time AI Evaluation Is Different", slug: "10-1" },
          { id: "10.2", title: "Latency & Response Time Evaluation", slug: "10-2" },
          { id: "10.3", title: "Speech Recognition (ASR) Evaluation", slug: "10-3" },
          { id: "10.4", title: "Speech Synthesis & Voice Quality Evaluation", slug: "10-4" },
          { id: "10.5", title: "Conversational Flow & Turn-Taking Evaluation", slug: "10-5" },
          { id: "10.6", title: "Voice-Specific Safety & Compliance Evaluation", slug: "10-6" },
          { id: "10.7", title: "Voice Testing Infrastructure & Methodology", slug: "10-7" },
          { id: "10.8", title: "Voice AI in Production: Monitoring & Quality Signals", slug: "10-8" },
          { id: "10.9", title: "Voice AI Eval Maturity & Best Practices", slug: "10-9" },
        ],
      },
      {
        id: "11",
        title: "Chapter 11 — Production Monitoring",
        slug: "ch11",
        subchapters: [
          { id: "11.1", title: "Why Production Monitoring Changes Everything", slug: "11-1" },
          { id: "11.2", title: "Quality Metrics in Production", slug: "11-2" },
          { id: "11.3", title: "Drift Detection: When Your AI Silently Degrades", slug: "11-3" },
          { id: "11.4", title: "Alert Design: Signal Without Noise", slug: "11-4" },
          { id: "11.5", title: "Production Sampling Strategies", slug: "11-5" },
          { id: "11.6", title: "User Feedback Integration", slug: "11-6" },
          { id: "11.7", title: "Incident Response for AI Quality Failures", slug: "11-7" },
          { id: "11.8", title: "Dashboards & Reporting: Making Quality Visible", slug: "11-8" },
          { id: "11.9", title: "Cost Monitoring in Production AI", slug: "11-9" },
          { id: "11.10", title: "Data Governance in Production Monitoring", slug: "11-10" },
          { id: "11.11", title: "Eval System Observability & Production Monitoring Maturity", slug: "11-11" },
        ],
      },
      {
        id: "12",
        title: "Chapter 12 — Regression Testing & Release Gates",
        slug: "ch12",
        subchapters: [
          { id: "12.1", title: "Golden Sets for Regression Testing", slug: "12-1" },
          { id: "12.2", title: "Regression Detection Methods", slug: "12-2" },
          { id: "12.3", title: "Release Gate Design: When Is It Safe to Ship?", slug: "12-3" },
          { id: "12.4", title: "CI/CD Integration for AI Quality", slug: "12-4" },
          { id: "12.5", title: "Canary & Shadow Deployment", slug: "12-5" },
          { id: "12.6", title: "Rollback Triggers & Automated Recovery", slug: "12-6" },
          { id: "12.7", title: "Multi-Model Regression Testing", slug: "12-7" },
          { id: "12.8", title: "Prompt Change Regression Testing", slug: "12-8" },
          { id: "12.9", title: "Data & Context Change Regression Testing", slug: "12-9" },
          { id: "12.10", title: "Release Documentation & Quality Evidence", slug: "12-10" },
          { id: "12.11", title: "Compliance, Audit Evidence & Regression Testing Maturity", slug: "12-11" },
        ],
      },
    ],
  },
  // Phase 2: Core Building Blocks
  {
    id: "02",
    path: "20-model-selection-routing",
    title: "Model Selection & Routing",
    summary: "Chooses the right model for each task and tier.",
    phase: "Core Building Blocks",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "03",
    path: "21-prompt-tool-architecture",
    title: "Prompt & Tool Architecture",
    summary: "Structures prompts and tools for reliability and control.",
    phase: "Core Building Blocks",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "04",
    path: "22-memory-context-management",
    title: "Memory & Context Management",
    summary: "Balances recall, privacy, and context budgets.",
    phase: "Core Building Blocks",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  // Phase 3: Data & Human Systems
  {
    id: "05",
    path: "02-ground-truth",
    title: "Ground Truth & What Good Looks Like",
    summary: "Clarifies what correctness means and how to agree on it.",
    phase: "Data & Human Systems",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "06",
    path: "03-dataset-design",
    title: "Dataset Design",
    summary: "Builds the evaluation datasets that make quality visible.",
    phase: "Data & Human Systems",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "07",
    path: "04-labeling-annotation",
    title: "Labeling & Annotation",
    summary: "Creates reliable labels and resolves ambiguity at scale.",
    phase: "Data & Human Systems",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "08",
    path: "05-quality-metrics",
    title: "Quality Dimensions & Metrics",
    summary: "Turns quality into measurable dimensions and thresholds.",
    phase: "Data & Human Systems",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "09",
    path: "06-human-evals",
    title: "Human Evaluation Systems",
    summary: "Designs expert reviews that are consistent and defensible.",
    phase: "Data & Human Systems",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "10",
    path: "07-automated-evals",
    title: "Automated Evaluation Systems",
    summary: "Scales evaluation with reliable automated checks.",
    phase: "Data & Human Systems",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  // Phase 4: Production Engineering
  {
    id: "11",
    path: "23-reliability-failure-recovery",
    title: "Reliability & Failure Recovery",
    summary: "Designs fallbacks and resilience for production systems.",
    phase: "Production Engineering",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "12",
    path: "11-production-monitoring",
    title: "Production Monitoring",
    summary: "Detects regressions and failures after release.",
    phase: "Production Engineering",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "13",
    path: "12-regression-testing",
    title: "Regression Testing",
    summary: "Prevents quality from degrading when models or prompts change.",
    phase: "Production Engineering",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "14",
    path: "13-release-gates",
    title: "Release Gates",
    summary: "Defines quality thresholds required to ship.",
    phase: "Production Engineering",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "15",
    path: "25-deployment-runtime-control",
    title: "Deployment & Runtime Control",
    summary: "Controls rollouts, configs, and runtime safeguards.",
    phase: "Production Engineering",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  // Phase 5: Specialized Modalities
  {
    id: "16",
    path: "08-agent-evals",
    title: "Agent Evaluation",
    summary: "Measures multi-step agent performance and failure modes.",
    phase: "Specialized Modalities",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "17",
    path: "09-rag-evals",
    title: "RAG Evaluation",
    summary: "Validates retrieval quality and grounding behavior.",
    phase: "Specialized Modalities",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "18",
    path: "10-voice-realtime-evals",
    title: "Voice & Real-Time Evaluation",
    summary: "Ensures low latency and reliable conversation under pressure.",
    phase: "Specialized Modalities",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "19",
    path: "14-red-teaming",
    title: "Red-Teaming & Adversarial Testing",
    summary: "Finds the failures users and attackers will exploit.",
    phase: "Specialized Modalities",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  // Phase 6: Scale & Economics
  {
    id: "20",
    path: "18-scaling-evals",
    title: "Scaling Evals",
    summary: "Expands evaluation coverage without losing signal.",
    phase: "Scale & Economics",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "21",
    path: "15-cost-quality-tradeoffs",
    title: "Cost vs Quality Tradeoffs",
    summary: "Optimizes quality without destroying margins or latency.",
    phase: "Scale & Economics",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "22",
    path: "26-system-cost-engineering",
    title: "System Cost Engineering",
    summary: "Keeps inference cost aligned with business reality.",
    phase: "Scale & Economics",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  // Phase 7: Enterprise & Leadership
  {
    id: "23",
    path: "24-security-abuse-prevention",
    title: "Security & Abuse Prevention",
    summary: "Defends against prompt injection and tool abuse.",
    phase: "Enterprise & Leadership",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "24",
    path: "16-multi-tenant-evals",
    title: "Multi-Tenant / Customer-Specific Evals",
    summary: "Adapts evaluation to customer-specific expectations.",
    phase: "Enterprise & Leadership",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "25",
    path: "17-enterprise-governance",
    title: "Enterprise Governance & Compliance",
    summary: "Connects evals to policy, audit, and risk controls.",
    phase: "Enterprise & Leadership",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
  {
    id: "26",
    path: "19-eval-org-design",
    title: "Eval Team & Org Design",
    summary: "Designs ownership, workflows, and accountability.",
    phase: "Enterprise & Leadership",
    chapters: [
      { id: "1", title: "Chapter 1", slug: "ch1" },
    ],
  },
];
