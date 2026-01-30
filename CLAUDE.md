# CLAUDE.md — Project Rules for AI Top 1% Book

## Quick Start (if session crashed)
Say: "Read CLAUDE.md and continue writing section 2"

## Date Context
- Today: January 30, 2026
- All content must be current as of 2026. No outdated references.
- Reference current models: GPT-4o, GPT-4.5, Claude 3.5/4, Llama 3, Gemini 2
- Reference current regulations: EU AI Act enforced, GPAI obligations live
- Use "2024-2025" for recent history, "2026" for current state

## Agent Rules
- MAX 3 agents at a time (prefer 2-3). Never more than 5. VSCode crashes with too many.
- Do not rush. Write each subchapter fully and carefully before moving to the next.
- If session crashes, re-read this file first to restore all context.

---

## ALL 78 WRITING RULES

### A. FILE STRUCTURE (1-8)
1. Title: `# X.Y — Full Title Name`
2. Opens with a **concrete failure story** — named company type, specific date, dollar amounts, team sizes
3. Story reveals the root cause, transitions into the lesson
4. Body uses `##` H2 sections (5-12 per subchapter)
5. Ends with **bridge sentence** naming the next subchapter's topic
6. Length: ~150-200 lines, 2000-3000 words
7. Chapter intro pages (ch1/page.mdx) are short: title, brief thesis, `---`, bulleted list of subchapters, `---`, closing italicized teaser line
8. No frontmatter, no imports, no JSX components — pure markdown only

### B. OPENING STORY RULES (9-18)
9. Use specific dates: "In early 2025," "By November 2024," "In mid-2024"
10. Name company type but never real company names: "a fintech startup," "a healthcare technology company," "a SaaS company"
11. Include specific numbers: "$2.3 million," "50 nurses," "seven months," "3,000-person financial services company"
12. Show the **failure first**, then diagnose the root cause
13. Root cause is always a conceptual mistake (not a technical bug)
14. The diagnosis transitions naturally into the subchapter's teaching
15. Some subchapters open with a principle instead of a story (like 3-2) — but most use stories
16. Stories use past tense
17. Stories are 1-3 paragraphs, never more than half a page
18. Stories are **anonymized real patterns**, not invented scenarios

### C. VOICE & TONE (19-28)
19. Second person "you" — mentor to practitioner
20. Also uses "your team," "your system," "your stakeholders"
21. Names roles directly: "Product," "Engineering," "Legal," "Domain Experts," "Trust & Safety"
22. Authoritative, definitive statements — not hedged
23. Present tense for principles, past tense for stories
24. Contractions fine: "don't," "you'll," "isn't," "can't"
25. No emojis, no exclamation marks, no hype words ("amazing," "revolutionary," "game-changing")
26. Uses rhetorical questions then immediately answers them
27. First person "I" used very sparingly (maybe once per 5 subchapters)
28. Firm opinions stated as facts: "this is professional negligence," "this is not optional"

### D. PARAGRAPH & PROSE (29-38)
29. **Long-form prose paragraphs** — the primary unit, not bullets
30. Each H2 section is 3-8 paragraphs
31. Paragraphs are 3-8 sentences, fully developed thoughts
32. Repeats key concepts with slight variation for emphasis
33. Uses concrete paired examples: "Instead of X, write Y"
34. Anti-patterns get **named explicitly**: "spread-too-thin anti-pattern," "model-coupled criteria"
35. Frameworks get **named explicitly**: "The Three-Level Framework," "The Priority Matrix"
36. Key terms bolded on first introduction only: `**Baseline** is where you are today.`
37. After first intro, terms used unbolded
38. No filler: never "In this section we will discuss..." — just start teaching

### E. LISTS & STRUCTURE (39-44)
39. Bullet lists used **sparingly** — maybe 1-2 per subchapter, never as main structure
40. When bullets appear, they're embedded in prose context with intro sentence
41. Prefer prose enumeration: "First... Second... Third..." over bullet lists
42. Bold-labeled items (`**Value-based thresholding**` followed by prose) used for frameworks with 3-6 options
43. No numbered lists unless showing a sequence/process
44. No tables, no callout boxes, no blockquotes

### F. CODE, MATH, TECHNICAL (45-52)
45. **No real code** — no functions, imports, classes, executable code
46. Fenced code blocks only for **pseudo-schema specs** — rarely (1 out of 65 files)
47. No language tags on code blocks (just plain ` ``` `)
48. **No math formulas, no LaTeX, no math symbols** (no special symbols)
49. Math written as inline prose: "0.94 times 0.89 equals 78%"
50. Percentages, dollars, thresholds always inline in sentences
51. Metrics named in prose: "precision at 88%, recall at 78%"
52. Technical concepts described in prose, never shown as implementations

### G. CONTENT DEPTH (53-62)
53. Every claim backed by concrete example or scenario
54. Covers both "what to do" AND "what goes wrong if you don't"
55. Case studies are multi-paragraph deep dives with specific numbers and timelines
56. Decomposition shown iteratively: "first pass... second pass... third pass..."
57. Cross-references other sections: "we will explore in Section 5"
58. References real industry data: "Gartner's 2025 report," "McKinsey's 2025 report," "PwC's 2026 survey"
59. References real model names: GPT-4, GPT-4o, GPT-4.5, Claude 3.5 Sonnet, Llama 3, Gemini 2
60. References real regulations: GDPR, HIPAA, EU AI Act, SOX, HITECH
61. References real tools/platforms: VSCode, JetBrains, GitHub
62. Each subchapter teaches **ONE concept deeply**, not many concepts shallowly

### H. 2026 CONTEXT (63-67)
63. All information current as of January 2026
64. References 2026 AI landscape: model churn, pricing changes, EU AI Act enforced
65. Uses dates like "2024-2025" for recent history, "2026" for current state
66. Acknowledges model generations: GPT-4/4o/4.5, Claude 3/3.5/4, Llama 3, Gemini 2
67. No outdated references — no "in the future AI will..." — AI is here now

### I. MDX SAFETY (68-70)
68. No `<` characters in prose — MDX parses as JSX tags, causes build errors
69. Escape or reword: use "under $0.01" not the less-than symbol with $0.01, use "less than" not the symbol
70. No HTML tags, no JSX components, no imports

### J. WHAT TO NEVER DO (71-78)
71. Never generic advice: "it depends on your use case"
72. Never academic hedging: "it could be argued that..."
73. Never filler: "Let's dive in," "Without further ado"
74. Never "further reading" or external links
75. Never footnotes or endnotes
76. Never images, diagrams, or charts
77. Never a table of contents within subchapters (only in chapter intros)
78. Never compress — **expand everything into full prose**

---

## Section 2 Status (02-problem-framing)

### Missing Subchapters to Write
- 4-9: The Success Criteria Review: Getting Sign-Off Before Building
- 4-10: Failure Impact Analysis: What Breaks If Wrong, by Tier
- 5-5: Output Quality Dimensions per Task Type
- 5-6: Handling Uncertainty in Outputs
- 5-11: Locale and Language Specs: Formats, Tone, Policy Differences, Fallback
- 6-6: The Task Complexity Matrix
- 6-11: Security Review in the Framing Handoff
- 6-12: Instrumentation Plan: Events and Logs for Eval and Monitoring

### Completed Subchapters (for reference)
- Ch1 (1-1 through 1-12): All done
- Ch2 (2-1 through 2-11): All done
- Ch3 (3-1 through 3-10): All done
- Ch4 (4-1 through 4-8): Done, missing 4-9 and 4-10
- Ch5 (5-1 through 5-4, 5-7 through 5-10): Done, missing 5-5, 5-6, 5-11
- Ch6 (6-1 through 6-5, 6-7 through 6-10): Done, missing 6-6, 6-11, 6-12
