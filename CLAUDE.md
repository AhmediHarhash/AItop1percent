# CLAUDE.md — Project Rules for AI Top 1% Book

## CRITICAL — MDX BUILD SAFETY (read this first)

All `.mdx` files are parsed by MDX which treats `{`, `}`, `<`, `>` as JSX syntax. Using ANY of these characters in prose **breaks the Vercel build**. This has caused repeated build failures.

**NEVER write in any .mdx file:**
- Curly braces: no JSON examples, no template variables, no `{"<"}` escape hacks
- Angle brackets: no HTML/XML tags, no comparison symbols
- Instead: describe everything in plain prose ("an object with name and email fields", "less than 500ms", "the tone placeholder")

**This rule applies to ALL agents writing .mdx content. Include it in every agent prompt.**

---

## Quick Start (if session crashed)
Say: "Read CLAUDE.md and continue writing section 2"

## Date Context
- Today: February 1, 2026
- All content must be current as of 2026. No outdated references.
- Reference current models: GPT-5, GPT-5.1, GPT-5.2, GPT-5-mini, GPT-5-nano, Codex-Max, Claude Opus 4.6, Claude Opus 4.5, Claude Sonnet 4.5, Claude Haiku 4.5, Gemini 2.5, Gemini 3 Pro/Flash/Deep Think, Llama 4 Scout, Llama 4 Maverick, DeepSeek V3.2, DeepSeek R1, Mistral Large 3, Mistral Small 3.1, Grok 3, Grok 4, Grok 4.1
- Reference current regulations: EU AI Act enforced, GPAI Code of Practice (July 2025), GPAI Q&A (Sep 2025), Aug 2 2026 compliance window for systemic risk
- Use "2024-2025" for recent history, "2026" for current state
- GPT-4o, Claude 3.5, Llama 3, Gemini 2 are previous-generation — reference only as historical context, never as current

---

## CRITICAL — KNOWLEDGE GAP: MUST SEARCH FOR 2026 (read this before writing ANY section)

**Claude's training data ends in early 2025. The book is set in 2026. This gap is dangerous.**

Without active research, Claude will:
- Frame 2024 techniques as "new" when they're standard by 2026
- Miss techniques that became mainstream in late 2025
- Include approaches that fell out of favor
- Have blind spots it doesn't know it has

**MANDATORY BEFORE WRITING ANY SECTION:**

1. **Web search the domain** — Before writing Section X, search for "[topic] best practices 2026", "[topic] new techniques 2025 2026", "[topic] state of the art"
2. **Search for specific techniques** — If covering fine-tuning, search "LoRA alternatives 2026", "FP8 training 2026", "PEFT methods 2026"
3. **Verify current state** — Is this technique still used? Is it now standard or deprecated? What replaced it?
4. **Check tool/framework status** — Is Axolotl still the standard? Did Unsloth take over? What's the current best practice?

**For EVERY technical section, ask:**
- "What are the top 10 techniques/tools in [domain] as of 2026?"
- "What changed in [domain] between 2024 and 2026?"
- "What did I learn in training that might be outdated?"

**This is not optional.** Writing from 2024 knowledge while claiming 2026 authority is misleading readers. Search first, write second.

---

## Agent Rules
- MAX 3 agents at a time (prefer 2-3). Never more than 5. VSCode crashes with too many.
- Do not rush. Write each subchapter fully and carefully before moving to the next.
- If session crashes, re-read this file first to restore all context.
- Agents must be given NO MORE than 3 files at a time to prevent token exhaustion.

## RULE #1 — FULLY TEACH EVERY CONCEPT. NO COMPRESSION. NO PADDING.

**There are no arbitrary limits.** You are free to use:
- **Any number of chapters** per section — 7, 11, 15, whatever the topic requires
- **Any number of subchapters** per chapter — 8, 12, 20, whatever covers the ground
- **Any number of lines** per file — 60, 120, 250, whatever fully teaches the concept

The structure follows the content, not the other way around.

**The only constraint is completeness without compression:**

"Fully teach" means every concept includes:
1. **The mechanism** — WHY it happens, not just THAT it happens
2. **Specific examples** — Dollar amounts, percentages, team sizes, timelines. Never vague.
3. **Detection methods** — How do you know you have this problem? What metric, what signal?
4. **Concrete mitigations** — What do you actually DO? Not "be careful" but specific actions.
5. **Failure consequences** — What breaks if you ignore this? Real damage, not vague warnings.

**The completeness test:** After reading a subchapter, can a practitioner:
- Explain the concept to a colleague?
- Detect when they have this problem?
- Fix it on Monday?

If yes → the file is complete, regardless of line count.
If no → something is missing, regardless of line count.

**What is NOT allowed:**
- **Compression**: Concepts mentioned but not explained. Ideas gestured at but not taught. Mechanisms skipped.
- **Padding**: Sentences that restate previous points. Filler like "this cannot be overstated." Extra examples that make the same point already made.
- **Arbitrary limits**: Never stop writing because you hit a line count. Never keep writing because you haven't hit a line count.

**ONLY rewrite a file if:** (1) concepts are compressed — mentioned but not fully taught, (2) content is outdated — old models, old dates, pre-2026 practices, (3) a key concept for that topic is missing entirely. Never rewrite because of line count.

---

## CRITICAL — ANTI-MONOTONY AND VARIETY (read this second)

**WARNING: The single biggest tell that a book was written by AI is monotonous structure.** If every subchapter opens the same way, uses the same rhythm, follows the same pattern — the reader stops trusting the author within 20 pages. This book must feel like it was written by a human expert with range, personality, and creative instinct. Every section should have its own charisma. Every chapter should feel fresh. The reader must stay hooked — not because we use tricks, but because the writing itself is alive, varied, and impossible to predict.

**This is a premium book. AI slop is the enemy. Variety is the weapon.**

### Opening Variety (MANDATORY)
No more than 40% of subchapters in any section should open with the "In [date], a [company type]..." story pattern. The rest MUST use different openers. Here are the approved opening styles — use ALL of them across a section:

- **Failure story** (~35-40%): "In mid-2025, a healthcare company..." — the classic. Specific dates, dollars, team sizes. But vary the sentence structure. Don't always start with "In."
- **Sharp principle** (~15-20%): Lead with a bold, memorable claim. "Fine-tuning does not fix bad data. It amplifies it." "The cheapest model that meets your quality bar is the right model. Every other choice is waste."
- **Contrast or provocation** (~10-15%): Challenge an assumption. "Most teams think the hard part is training. They are wrong." "Everyone talks about data quality. Almost nobody measures it."
- **Rhetorical question** (~10%): Ask, then immediately answer. "Why do most fine-tuning projects never reach production? Because they skip the one step that matters."
- **Scene without date** (~5-10%): Drop into a moment. "The team had everything right — clean data, correct format, solid eval suite — and the model still degraded in production."
- **Direct teaching** (~5-10%): No preamble, straight into the concept. "The learning rate controls how aggressively the model updates its weights during training. Get it wrong and nothing else matters."
- **The anti-pattern lead** (~5%): Name the mistake upfront. "The copy-paste pipeline is the most common and most dangerous pattern in synthetic data generation."

### Section-Level Personality Cards
Each section has its own energy, primary craft techniques, and tone. Agents writing a section MUST read its personality card first. The mentor voice stays consistent (second person, authoritative, no hedging), but the energy and texture shift to match the domain.

**Section 01 — AI Product Reality and Risk Tiers** | Energy: grounding, reality-check, "before you build anything" | Primary techniques: reframes (flip assumptions about what AI products are), contrarian confidence ("most AI projects fail because..."), zoom-in-then-zoom-out | Tone: experienced product leader who has seen a hundred launches, half of which failed

**Section 02 — Problem Framing and Task Taxonomy** | Energy: architectural, precise, "get this right or nothing else matters" | Primary techniques: deep "why" explanations, story-principle-action, named frameworks | Tone: systems architect who refuses to let you skip the design phase

**Section 03 — Evaluation Strategy and Operating Model** | Energy: analytical, measurement-obsessed, scientific | Primary techniques: reframes, dense principle passages, contrarian confidence | Tone: the person who asks "how do you know it's working?" until you have a real answer

**Section 04 — Ground Truth and What Good Looks Like** | Energy: philosophical but practical, "what does correct even mean?" | Primary techniques: reframes (challenge assumptions about correctness), no-clean-answer honesty, deep "why" | Tone: epistemologist who also ships product

**Section 05 — Quality Dimensions and Metrics** | Energy: precise, metric-design obsessed, dashboard-level | Primary techniques: dense principle passages, deep "why," zoom-in-then-zoom-out | Tone: data scientist who can explain p-values to a VP and mean it

**Section 06 — Prompt and Tool Architecture** | Energy: engineering-forward, code-adjacent (but no actual code), systems thinking | Primary techniques: story-principle-action, named anti-patterns, deep "why" | Tone: senior engineer reviewing your prompt architecture at a design review

**Section 07 — RAG Foundations and Evaluation** | Energy: pipeline-obsessed, "every component can fail silently" | Primary techniques: zoom-in-then-zoom-out, deep "why," story-principle-action | Tone: infrastructure engineer who has debugged retrieval failures at 3am

**Section 08 — Agent Architecture and Evaluation** | Energy: frontier, high-stakes, "autonomy requires control" | Primary techniques: reframes, no-clean-answer honesty, contrarian confidence | Tone: the person responsible when an agent takes a wrong action with real consequences

**Section 09 — Model Selection and Routing** | Energy: pragmatic, comparison-driven, "show me the numbers" | Primary techniques: dense principle passages, story-principle-action, reframes | Tone: engineering manager who has evaluated every model on the market and has opinions

**Section 10 — Memory and Context Management** | Energy: architectural, state-management obsessed, "what does the model remember and why" | Primary techniques: deep "why," reframes, zoom-in-then-zoom-out | Tone: distributed systems engineer applying state management to AI

**Section 11 — Fine-Tuning and Model Adaptation** | Energy: workshop-like, hands-dirty, practitioner-to-practitioner | Primary techniques: story-principle-action, no-clean-answer honesty, deep "why" | Tone: the person who has actually fine-tuned 20 models and knows what breaks

**Section 12 — Dataset Engineering and Pipelines** | Energy: infrastructure-first, data-as-product, pipeline thinking | Primary techniques: story-principle-action, named anti-patterns, zoom-in-then-zoom-out | Tone: data engineer who treats datasets like production services with SLAs

**Section 13 — Labeling and Annotation Operations** | Energy: operations-focused, people-management, quality-obsessed | Primary techniques: story-principle-action, no-clean-answer honesty, reframes | Tone: ops leader who manages 200 annotators and has seen every quality failure mode

**Section 14 — Human Review Infrastructure** | Energy: UX-meets-ops, scaling human judgment | Primary techniques: story-principle-action, zoom-in-then-zoom-out | Tone: product manager for internal tools who cares about reviewer experience

**Section 15 — Automated Eval Pipelines** | Energy: CI/CD-like, automation-first, "trust but verify" | Primary techniques: story-principle-action, named patterns, deep "why" | Tone: platform engineer building the eval system everyone depends on

**Section 16 — AI Security** | Energy: urgent, adversarial, "the attacker is already inside" | Primary techniques: contrarian confidence, reframes, zoom-in-then-zoom-out | Tone: red teamer who thinks like an attacker and builds like a defender

**Section 17 — Production Monitoring and Observability** | Energy: ops-war-room, alerting, "it broke at 2am" | Primary techniques: story-principle-action, named anti-patterns, zoom-in-then-zoom-out | Tone: SRE who has been paged for silent AI degradation

**Section 18 — Regression Testing and Release Gates** | Energy: quality-gate obsessed, "nothing ships without evidence" | Primary techniques: story-principle-action, dense principle passages | Tone: release engineer who has blocked a bad deploy and saved the company

**Section 19 — Deployment and Runtime Control** | Energy: infrastructure, reliability, "it works at scale or it doesn't work" | Primary techniques: deep "why," story-principle-action, no-clean-answer honesty | Tone: platform lead who has scaled from 100 to 10M requests

**Section 20 — Reliability, Failure, and Recovery** | Energy: incident-response, resilience, "what happens when everything goes wrong" | Primary techniques: zoom-in-then-zoom-out, no-clean-answer honesty, named frameworks | Tone: incident commander who has managed cascading AI failures

**Section 21 — Voice and Real-Time Systems** | Energy: latency-obsessed, UX-sensitive, "milliseconds matter" | Primary techniques: deep "why," story-principle-action, reframes | Tone: voice AI engineer who knows the difference between 200ms and 400ms response time

**Section 22 — Red-Teaming and Adversarial Testing** | Energy: adversarial, creative destruction, "find the failure before users do" | Primary techniques: contrarian confidence, zoom-in-then-zoom-out, reframes | Tone: ethical hacker who breaks AI systems to make them stronger

**Section 23 — Internationalization and Multilingual** | Energy: global perspective, cultural sensitivity, "one size never fits all" | Primary techniques: reframes, no-clean-answer honesty, zoom-in-then-zoom-out | Tone: localization expert who has seen culturally-blind AI deployments fail

**Section 24 — System Cost Engineering** | Energy: spreadsheet-driven, ROI-obsessed, "every token has a price" | Primary techniques: dense principle passages, story-principle-action, contrarian confidence | Tone: finance-savvy engineer who can calculate cost-per-query in their sleep

**Section 25 — Cost-Quality Tradeoffs** | Energy: pragmatic, Pareto-obsessed, "good enough is a strategy" | Primary techniques: reframes, no-clean-answer honesty, dense principle passages | Tone: engineering leader who balances budget reality with quality ambition

**Section 26 — Scaling Evaluation Systems** | Energy: growth-stage, "what worked at 100 breaks at 10,000" | Primary techniques: zoom-in-then-zoom-out, story-principle-action, named frameworks | Tone: staff engineer who has scaled eval from startup to enterprise

**Section 27 — Global Infrastructure and Kubernetes** | Energy: deep infrastructure, distributed systems, cloud-native | Primary techniques: deep "why," story-principle-action, dense principle passages | Tone: principal SRE who designs for multi-region, multi-cloud from day one

**Section 28 — Multi-Tenant and Customer-Specific Evals** | Energy: B2B-focused, isolation-obsessed, per-customer thinking | Primary techniques: story-principle-action, reframes, no-clean-answer honesty | Tone: platform architect who serves 500 enterprise customers from one system

**Section 29 — Enterprise Governance, Org Design, and Compliance** | Energy: organizational, people-first, leadership-oriented | Primary techniques: no-clean-answer honesty, reframes, zoom-in-then-zoom-out | Tone: VP of Engineering who has built AI governance from scratch at a Fortune 500

**Section 30 — Pricing, Packaging, and Unit Economics** | Energy: business-strategy, margin-obsessed, "AI costs are your COGS" | Primary techniques: dense principle passages, story-principle-action, contrarian confidence | Tone: product-minded CFO who understands both models and margins

### Engagement Without Gimmicks
The reader must stay hooked. Modern readers have low attention spans. But we don't use tricks — we use craft:
- **Vary paragraph length.** A single short sentence after three long paragraphs creates emphasis.
- **Vary section length.** Not every H2 needs to be the same depth. Some points need one paragraph. Some need six.
- **Use tension.** Set up a problem before revealing the solution. Let the reader feel the pain before showing the fix.
- **Name the stakes.** "If you get this wrong, your model memorizes patient records" hits harder than "this is important."
- **Surprise with specificity.** The more precise and unexpected a detail, the more the reader trusts you.
- **Bridge forward.** End subchapters with a sentence that makes the reader want the next one.

### What Monotony Looks Like (NEVER DO THIS)
- Every subchapter starts with "In [month] [year], a [company type]..."
- Every opening story follows the exact same arc: deploy, fail, cost money, learn lesson
- Every H2 section is exactly 3-4 paragraphs long
- Every subchapter has exactly the same number of H2 sections
- Every paragraph starts with "The" or "This" or "Your"
- Every bridge sentence uses the same formula
- The prose has the same rhythm and cadence for 300 pages straight

**If an agent produces a batch of files that all read the same way, those files must be rewritten with variety before moving on.**

---

## CRITICAL — NO FABRICATION. ZERO TOLERANCE. (read this third)

**This book will be read by thousands of professionals worldwide — beginners to 20-year veterans. They will fact-check claims. Fabricated data destroys credibility instantly and permanently.**

### What counts as fabrication
- Citing a study, report, or paper that does not exist ("A 2025 study found that 8% of fine-tuned models...")
- Attributing specific numbers to vague research ("Research from 2024 showed..." with precise percentages)
- Inventing statistics and presenting them as industry findings
- Creating fake benchmarks, fake survey results, or fake performance numbers attributed to external sources

### What is NOT fabrication (and is encouraged)
- **Anonymized company stories** with specific numbers: "A fintech startup spent $340,000 over seven months..." — these are teaching tools based on real patterns. They don't need citations because they're presented as anonymized case studies, not as published research.
- **General industry observations**: "Industry experience consistently shows that..." or "Teams that skip this step typically find..."
- **Technical facts**: "LoRA adds trainable low-rank matrices to each attention layer" — this is verifiable technical knowledge.
- **Directional claims without fake precision**: "Fine-tuned models memorize training data at higher rates than base models" — true and verifiable without needing a fake percentage.

### Real sources are gold — use them when you can
If a real, verifiable source exists — use it. Real sources add massive credibility. They don't need to be hyper-specific academic papers. Any of these count:
- **Real company incidents** that were publicly reported: "Samsung's 2023 ChatGPT data leak," "the 2024 Air Canada chatbot lawsuit"
- **Real reports from known firms**: "McKinsey's 2025 State of AI report," "Gartner's 2025 Hype Cycle"
- **Real regulatory milestones**: "The EU AI Act's August 2025 GPAI compliance deadline"
- **Real model releases and their documented capabilities**: "When Anthropic released Claude 3.5 Sonnet in June 2024..."
- **Real open-source projects and tools**: "Axolotl," "Hugging Face TRL," "vLLM"
- **Well-known industry patterns** that are broadly documented, even without a single source

You do not need a footnote or URL. Just name the source naturally in prose. The reader can verify it with a search. The point is: if something real exists that supports your teaching, reference it. It makes the book more trustworthy than anonymized stories alone.

### The rule
**Never write "Research from [year] showed [specific number]" or "A study found [precise percentage]" unless you are certain that research exists.** When in doubt, rewrite the claim as a general industry observation or an anonymized company story. But when a real, verifiable source exists, prefer it over anonymized examples. The book's authority comes from its practical depth AND from grounding claims in reality.

---

## CRITICAL — AUDIENCE AND STANDARD (read this fourth)

This book is sold to real people paying real money. The audience spans:
- **Complete beginners** building their first AI product
- **Mid-career engineers** transitioning into AI
- **Senior practitioners** with 10-20 years of experience
- **Technical leaders** making architecture and hiring decisions
- **People worldwide** — not just Silicon Valley, not just English-first speakers

The writing must work for all of them simultaneously. That means:
- **No assumed context.** Define terms when introduced, but don't be patronizing about it.
- **No insider jargon without explanation.** If you use "FSDP" or "QLoRA," explain what it means the first time.
- **Accessible but never dumbed down.** A beginner should learn. A veteran should nod and find new angles.
- **Globally relevant.** Don't assume US-only regulations, US-only cloud providers, or US-only business culture.
- **Worth re-reading.** The best subchapters teach something new on the second read.

The standard is not "good enough to publish." The standard is "so good that readers recommend it to colleagues." Every subchapter should make the reader feel like they just had a conversation with the smartest, most experienced person in the room — someone who respects their time and never wastes a sentence.

---

## CRITICAL — THE IDENTITY OF THIS BOOK (read this fifth)

### What this book is
This is the definitive practitioner encyclopedia for AI engineering in 2026. It is to AI what "Designing Data-Intensive Applications" is to distributed systems, what Harrison's Principles is to internal medicine, what "The Pragmatic Programmer" is to software craft. It is a comprehensive reference that also happens to be genuinely engaging to read cover to cover. It teaches the full landscape — evaluation, fine-tuning, security, cost, team design, deployment, governance — with the depth that someone building real systems needs and the clarity that someone entering the field deserves.

This is NOT a power-strategy book. It is NOT a self-help book. It is NOT a collection of hot takes. It is a serious, modern, technical education that respects the reader enough to be thorough and respects their time enough to never waste a sentence. The tone is that of the most experienced practitioner you've ever worked with — someone who has seen every mistake, built every system, and can explain exactly what you need to know without making you feel small for not knowing it yet.

### How it works at scale (30 sections, hundreds of chapters, thousands of subchapters)
At this volume, the biggest risk is not bad writing — it is sameness. The reader who opens Section 3 should feel a different energy than Section 18. The reader 400 pages in should still be learning things that surprise them. The way to achieve this at scale:

**Each section has its own identity.** Not just topic — personality. A section on evaluation feels precise, measurement-driven, almost scientific. A section on fine-tuning feels workshop-like, hands-dirty, practitioner-to-practitioner. A section on security feels adversarial, high-stakes, "the attacker is already inside." A section on cost feels pragmatic, spreadsheet-backed, ROI-obsessed. A section on team design feels organizational, people-first, leadership-oriented. The mentor voice is constant, but the energy shifts with the domain.

**Each chapter within a section has a clear arc.** It starts with foundations, builds through techniques, and lands on the hard problems. The reader should feel the chapter escalating — not repeating the same depth for twelve straight subchapters.

**Each subchapter is self-contained.** Someone can open to any subchapter and walk away with something usable. No subchapter requires reading the previous one. If someone shares a single subchapter with a colleague, it should make sense on its own and make them want the rest.

### How to teach AI to every kind of person
The reader who is a complete beginner reads a subchapter and learns the concept, the key vocabulary, and the most important mistakes to avoid. The mid-career engineer transitioning into AI reads the same subchapter and picks up the decision frameworks, the trade-offs, and the "how to think about this" layer. The 20-year veteran reads it and finds the one reframe they hadn't considered — the edge case they've been solving wrong, the organizational pattern they've never tried, the metric they've been ignoring. All three readers get value from the same prose. This is the hardest craft requirement and the most important one.

How to achieve it: **lead with the concept clearly enough for a beginner, then immediately deepen it with practitioner nuance.** Don't separate "basic" and "advanced" — weave them together. A sentence that defines a term can also contain the insight that surprises a veteran: "Catastrophic forgetting is what happens when fine-tuning overwrites capabilities the base model already had — and the insidious part is that your task-specific eval will improve even as the model loses the general abilities your users depend on."

### Named concepts that become vocabulary
When you introduce a framework, pattern, or anti-pattern, give it a name that readers will use in conversation. "The Drift Problem." "The Golden Set." "The Alternatives Ladder." "The Eval Gap." "The Maintenance Tax." Named concepts spread through organizations. Unnamed concepts are forgotten by Friday. Not every H2 section needs a named concept — but every chapter should introduce at least one or two that a reader could explain to a colleague by name.

### The two-story pattern
Across a chapter, the reader should see both paths: the team that got it wrong (and what it cost) AND the team that got it right (and what they gained). Not every subchapter needs both — some teach through failure, some through success, some through pure framework. But across a full chapter, the reader should see enough of both that they understand the consequences of each approach. The failure stories create urgency. The success stories create confidence. Together they create understanding.

### The five laws of teaching that transforms (CORE CRAFT)
These are non-negotiable. Every subchapter must follow these. They are what separates a book people finish from a book people recommend.

**Law 1 — Hook before lesson.** Never teach first, then illustrate. Always illustrate first, then teach. Open with the story, the surprise, the question, the scene — then deliver the principle. The reader's brain needs a container before it can hold the idea. A principle without a hook slides off. A hook without a principle entertains but doesn't educate. You need both, hook first.

**Law 2 — One idea per subchapter.** Not three ideas. Not "and also here's another thing." One core concept, explored fully. The reader should be able to tell a colleague what they learned in one sentence. If they can't, the subchapter tried to do too much. Supporting points are fine — but they all serve the one idea.

**Law 3 — Teach the mechanism, not just the rule.** Don't just say "always build an eval suite before fine-tuning." Explain what happens when you skip it — what breaks in the model, what the team experiences six weeks later, what the production metrics look like. Rules create followers. Mechanisms create practitioners. When the reader understands *why*, they can adapt the rule to situations the book never covered.

**Law 4 — Create a before-and-after in the reader's mind.** Every subchapter should shift how the reader thinks. Before reading: "I thought X." After reading: "Now I see Y." The shift can be subtle — "I used to think dataset size was the main variable, now I see it's dataset diversity." But if the reader's mental model is identical before and after, the subchapter failed.

**Law 5 — Anchor every concept in something concrete.** Abstract knowledge evaporates. Concrete knowledge sticks. "Catastrophic forgetting" is abstract. "Your model used to answer in French, Spanish, and German — after fine-tuning on English contract data, it can barely form a sentence in French" is concrete. The reader remembers the French example. The principle rides along for free. Every concept needs its concrete anchor — a specific scenario the reader can picture.

### Craft techniques by section type
Not every section uses every technique. Match the craft to the domain:
- **Reframes** (flip what the reader assumed): Best for evaluation, fine-tuning decisions, model selection — anywhere conventional wisdom is wrong
- **No-clean-answer honesty** (admit when trade-offs have no perfect solution): Best for cost trade-offs, team design, governance, security — organizational chapters
- **Story-then-principle-then-action** (what happened, why, what to do Monday): Best for infrastructure, deployment, production ops — practical chapters
- **Contrarian confidence** (bold claim the reader initially resists, then prove it): Best for opening chapters of each section, decision frameworks
- **Dense principle passages** (every sentence carries weight, highlightable): Best for framework definitions, pattern catalogs, principle summaries
- **Deep "why" explanations** (trace the mechanism from cause to consequence): Best for technical deep-dives — fine-tuning methods, RAG architecture, agent design
- **Zoom-in-then-zoom-out** (start with one specific team, one specific model, one specific failure — then pull back to show the universal pattern): Best for opening stories, case studies, any time you need the reader to feel the human scale before seeing the system scale

### Every sentence earns its place
If a sentence does not teach something new, illustrate something concrete, or reframe how the reader thinks — delete it. An 80-line subchapter where every line hits is worth more than a 200-line subchapter with filler. The reader's time is sacred. They chose this book over dozens of others. Respect that choice on every page.

### The "I need to remember this" test
Every subchapter should contain at least one moment where the reader pauses. A named principle they want to bring to their next team meeting. A number that changes their mental model. A reframe that makes them see their own system differently. A mistake they realize they're making right now. If a subchapter doesn't have that moment, it needs one.

### Pacing across a section
A section is not a flat sequence. It has shape:
- **Opening chapters** establish foundations — define the domain, set the stakes, introduce core vocabulary
- **Middle chapters** go deep — techniques, patterns, decision frameworks, detailed case studies
- **Late chapters** handle the hard stuff — edge cases, organizational challenges, governance, maturity models
- **The final chapter** synthesizes — operating models, maturity frameworks, or the "putting it all together" view

Within this shape, vary intensity. Follow a dense technical chapter with a strategic one. Follow a heavy failure case study with a constructive framework. The reader should feel the section building toward mastery, not grinding through repetition.

---

## CRITICAL — PLAIN LANGUAGE (read this sixth)

**This book is written in plain English. Period.** The reader should never need a dictionary, never need to re-read a sentence three times, and never feel like the author is showing off vocabulary instead of teaching. The smartest experts in any field explain complex ideas in simple words. That is the standard here.

### The rules
- **Short words over long words.** "Use" not "utilize." "Start" not "commence." "Show" not "demonstrate." "Break" not "decompose." "Fix" not "remediate." If a simpler word exists and means the same thing, use the simpler word.
- **Short sentences mixed with medium sentences.** Vary length for rhythm, but default to clear and direct. If a sentence has three commas and a semicolon, split it.
- **No academic tone.** This is not a research paper. No "it can be observed that" or "the aforementioned approach" or "a non-trivial consideration." Write like you're explaining to a sharp colleague over coffee.
- **Jargon is allowed — but always explained on first use.** Technical terms are necessary. "LoRA," "DP-SGD," "catastrophic forgetting," "FSDP" — these are real vocabulary the reader needs. But the first time a term appears, explain it in plain words. After that, use it freely.
- **No Latin, no French, no unnecessary foreign phrases.** Write "that is" not "i.e." Write "for example" not "e.g." Write "in itself" not "per se." The reader should never stumble on a phrase because English is their second language.
- **Concrete over abstract.** "The model memorized 3% of patient records" is clearer than "the model exhibited non-trivial memorization behavior across a subset of the training distribution." Always prefer the version a human would actually say out loud.
- **Test: could a smart 18-year-old with no AI background follow the logic?** They might not know the terms yet, but after you explain them, can they follow the argument? If yes, the prose is at the right level. If no, simplify.

---

## ALL WRITING RULES

### A. FILE STRUCTURE (1-8)
1. Title: `# X.Y — Full Title Name`
2. Opens with a **varied opener** — see Anti-Monotony rules above for the seven approved styles. Failure stories are ONE option, not the default.
3. The opener transitions naturally into the subchapter's teaching
4. Body uses `##` H2 sections (5-12 per subchapter)
5. Ends with **bridge sentence** naming the next subchapter's topic
6. Length: no limits — write until the concept is fully taught (mechanism, examples, detection, mitigation, consequences). A complete 70-line file is correct. A complete 200-line file is correct. An incomplete file of any length is wrong.
7. Chapter intro pages (ch1/page.mdx) are short: title, brief thesis, `---`, bulleted list of subchapters, `---`, closing italicized teaser line
8. No frontmatter, no imports, no JSX components — pure markdown only

### B. OPENING RULES (9-18)
9. **When using a failure story:** Use specific dates, name company type (never real names), include specific numbers ($, team sizes, timelines), show failure first then root cause, root cause is always conceptual (not a technical bug), past tense, 1-3 paragraphs max, anonymized real patterns
10. **When using a principle opener:** Lead with a bold, definitive claim in 1-2 sentences. Then immediately ground it with a concrete example or scenario.
11. **When using a contrast/provocation:** State the common belief, then demolish it with evidence. The reader should feel their assumption crumble.
12. **When using a rhetorical question:** Ask one sharp question. Answer it in the next sentence or paragraph. Never leave it hanging.
13. **When using a scene without date:** Drop into the middle of a situation. Use present tense for immediacy. Transition to past tense for the backstory.
14. **When using direct teaching:** Start with the concept's most important claim. No preamble, no setup. The first sentence teaches.
15. **When using an anti-pattern lead:** Name the mistake as a named pattern. Then show what it looks like in practice.
16. **Across a section**, no single opening style should exceed 40%. Aim for at least 4 different styles per chapter.
17. **Across a chapter**, never have three consecutive subchapters with the same opening style.
18. The opening — regardless of style — must transition naturally into the subchapter's core teaching within the first 3 paragraphs.

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
58. References real industry data — but **every named source with a specific number must be verified**. If citing "McKinsey's 2025 report" or "Gartner's 2025 report," the report and the number must actually exist. Unverified stats must be reworded as general industry trends: "industry surveys consistently show" or "analyst research from 2024-2025 indicates." Anonymized company stories don't need sources — they are teaching tools. Named reports with specific numbers need to be real.
59. References current 2026 model names (see Date Context above for full list). Previous-generation models (GPT-4o, Claude 3.5, Llama 3, Gemini 2) only for historical context.
60. References real regulations: GDPR, HIPAA, EU AI Act, SOX, HITECH
61. References real tools/platforms: VSCode, JetBrains, GitHub
62. Each subchapter teaches **ONE concept deeply**, not many concepts shallowly

### H. 2026 CONTEXT (63-67)
63. All information current as of January 2026
64. References 2026 AI landscape: model churn, pricing changes, EU AI Act enforced
65. Uses dates like "2024-2025" for recent history, "2026" for current state
66. Acknowledges model generations: GPT-4o/5/5.1/5.2, Claude 3.5/4/4.5/Opus 4.6, Llama 3/4, Gemini 2/2.5/3, Grok 3/4, DeepSeek V3/R1
67. No outdated references — no "in the future AI will..." — AI is here now

### I. MDX SAFETY (68-72)
68. No `<` or `>` characters in prose — MDX parses as JSX tags, causes build errors
69. No `{` or `}` characters in prose — MDX parses as JSX expressions, causes build errors
70. Reword comparisons: "less than 500ms" or "greater than 0.95" — never use symbols
71. Describe JSON/objects in prose: "an object with name and email fields" — never write out JSON with braces
72. Describe template variables in prose: "the tone placeholder" — never write curly-brace placeholders like the word tone wrapped in braces
73. No HTML tags, no JSX components, no imports, no `{"<"}` escape hacks

### J. WHAT TO NEVER DO (74-81)
74. Never generic advice: "it depends on your use case"
75. Never academic hedging: "it could be argued that..."
76. Never filler: "Let's dive in," "Without further ado"
77. Never "further reading" or external links
78. Never footnotes or endnotes
79. Never images, diagrams, or charts
80. Never a table of contents within subchapters (only in chapter intros)
81. Never compress — **fully teach every concept** (mechanism, examples, detection, mitigation, consequences)

