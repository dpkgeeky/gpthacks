# Questions for AWS Developer Experience Sessions
## October 23-24, 2025

---

## Session 1: DevOps Culture (Oct 23, 9:00-10:00 AM)
### Speakers: Ali Maaz (Sr Manager, DevOps GTM), Ben Coburn (Principal NGDE GTM Specialist)

### Question 1: Observability & Reliability Framework
**Context:** Organizations struggle with defining clear service level objectives that balance velocity with reliability. Google's SRE model introduced [error budgets](https://sre.google/sre-book/embracing-risk/) to quantify acceptable risk, while Netflix pioneered [chaos engineering](https://netflixtechblog.com/tagged/chaos-engineering) to proactively test resilience under failure conditions.

**Question:** How do leading organizations structure their observability framework to balance developer velocity with reliability? What patterns have proven most effective for defining SLIs, SLOs, and error budgets that empower development teams rather than constrain them?

---

### Question 2: Security & Compliance in CI/CD
**Context:** Security is often a deployment bottleneck. GitHub's "[shift-left security](https://github.blog/security/)" approach embeds scanning early in development. Shopify published their [approach to secrets detection](https://shopify.engineering/securing-software-supply-chain) across 50,000+ repositories, while Netflix open-sourced tools like [Security Monkey](https://github.com/Netflix/security_monkey) for continuous security monitoring.

**Question:** What best practices embed security, compliance, and policy enforcement directly into CI/CD pipelines without creating friction? How can secret scanning, dependency checks, and IAM policy automation be implemented as seamless guardrails that developers trust rather than circumvent?

---

### Question 3: SDLC Standardization vs. Developer Autonomy
**Context:** Spotify's [engineering culture](https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1/) emphasizes squad autonomy with aligned standards, while Netflix's "[Freedom and Responsibility](https://jobs.netflix.com/culture)" model trusts teams with minimal process. The challenge is avoiding both chaos and bureaucracy.

**Question:** How can organizations standardize critical SDLC aspects (CI/CD templates, infrastructure patterns, policy-as-code) while preserving developer autonomy and innovation? What governance models track deviations without becoming bureaucratic gatekeepers?

---

### Question 4: Fast Feedback Loops at Scale
**Context:** Build performance directly impacts developer flow state. Shopify [reduced build times to under 5 minutes](https://shopify.engineering/successfully-merging-work-200-engineers-daily) for monorepos with 2,800+ engineers. Uber shared their [journey optimizing](https://www.uber.com/blog/go-monorepo-bazel/) Go monorepo builds using Bazel, achieving 10x improvements.

**Question:** What technical strategies ensure fast, consistent local development and CI/CD feedback loops when scaling to thousands of engineers? How do organizations optimize build times, test execution, and deployment pipelines while maintaining correctness?

---

## Session 2: AgentCore (Oct 23, 10:00-11:00 AM)
### Speaker: Amanda Lester (Sr GenAI Specialist, GTM)

### Question 5: Multi-Agent Orchestration & Failure Prevention
**Context:** Multi-agent systems face unique challenges: infinite loops, hallucinations, and tool misuse. OpenAI's [function calling best practices](https://platform.openai.com/docs/guides/function-calling) and Anthropic's work on [Constitutional AI](https://www.anthropic.com/constitutional-ai-harmlessness-from-ai-feedback) address agent reliability. Companies are building orchestration layers similar to how [Uber built Cadence](https://cadenceworkflow.io/) for workflow orchestration.

**Question:** What architectural patterns and frameworks effectively orchestrate multiple AI agents in production? How should organizations handle state management, cross-agent coordination, and prevent common failure modes like tool misuse, infinite loops, and hallucinated responses?

---

### Question 6: Agent Security & Policy Control
**Context:** AI agents with tool-calling capabilities pose security risks. Anthropic's [Claude for Enterprise](https://www.anthropic.com/enterprise) implements fine-grained access controls and audit logging. Financial institutions require [PII redaction patterns](https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html) and complete audit trails for regulatory compliance.

**Question:** What security frameworks enable fine-grained policy control for AI agents that invoke tools or APIs? How can organizations implement robust PII redaction, content filtering, and audit logging without degrading agent performance or utility?

---

### Question 7: Agent Observability & Cost Management
**Context:** Debugging AI agents differs fundamentally from traditional software. [LangSmith](https://www.langchain.com/langsmith) provides tracing for LLM applications. [Weights & Biases](https://wandb.ai/site/solutions/llmops) offers LLMOps observability. Cost control is critical—OpenAI published [token optimization strategies](https://platform.openai.com/docs/guides/optimizing-llm-accuracy) showing 50-90% cost reductions.

**Question:** What observability and debugging capabilities are essential for multi-agent systems in production? How should organizations implement centralized tracing, performance dashboards, and cost tracking to enable engineers to understand agent behavior and optimize spend?

---

## Session 3: AI in Software Development Lifecycle (Oct 23, 11:15 AM-12:15 PM)
### Speaker: Emil Lerch (Principal Builder Exp GTM)

### Question 8: Autonomous Code Operations
**Context:** AI is moving from code completion to autonomous operations. [Anthropic's Claude](https://www.anthropic.com/claude) and [Devin AI](https://www.cognition.ai/blog/introducing-devin) demonstrate agents handling complex tasks like migrations and refactoring. GitLab's [AI Impact Dashboard](https://about.gitlab.com/blog/2024/01/25/gitlab-ai-impact-dashboard/) shows 25% cycle time reduction with AI-assisted development.

**Question:** How are organizations implementing autonomous AI agents that perform complex end-to-end tasks—code migration, automated refactoring, fixing build errors—with appropriate human oversight? What guardrails and approval workflows ensure quality and prevent AI-introduced technical debt?

---

### Question 9: AI-Powered Deployment Automation
**Context:** Companies are applying AI to deployment decisions. [Harness](https://www.harness.io/blog/continuous-verification-ai-ml) uses ML for automated canary analysis. [LaunchDarkly](https://launchdarkly.com/blog/progressive-delivery-ai/) applies AI to feature flag rollouts. The challenge is balancing automation with production safety.

**Question:** What patterns enable AI integration into CI/CD for automated production releases, including intelligent canary analysis, automated rollback decisions, and release scheduling? How can organizations balance deployment automation with risk management?

---

### Question 10: Cultural Transformation for AI-First Development
**Context:** AI-driven development requires cultural transformation. Microsoft Research's study "[The Impact of AI on Developer Productivity](https://www.microsoft.com/en-us/research/project/ai-for-software-engineering/)" shows productivity gains require process changes. [Anthropic's usage patterns](https://www.anthropic.com/research) reveal developers evolving from code writers to AI orchestrators.

**Question:** What cultural transformations and skill shifts are required for an "AI-First Developer Experience"? How can organizations reskill developers, evolve engineering practices, and measure whether AI tools genuinely improve satisfaction, code quality, and system understanding—not just velocity?

---

## Session 4: Executive Meeting - Developer Experience (Oct 24, 10:00-11:00 AM)
### Speaker: Ali Maaz (Sr Manager, DevOps GTM)

### Question 11: Platform Engineering vs. Developer Experience
**Context:** Organizations structure platform teams differently. Some have separate teams ([Spotify's Platform](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/)), others combine functions. The [Team Topologies](https://teamtopologies.com/) model emphasizes platform as a product.

**Question:** How should organizations structure their platform capabilities? What are the distinctions between Platform Engineering and Developer Experience functions, and how should they collaborate to maximize developer productivity and satisfaction?

---

### Question 12: Measuring Developer Experience ROI
**Context:** The [SPACE framework](https://queue.acm.org/detail.cfm?id=3454124) (Satisfaction, Performance, Activity, Communication, Efficiency) from GitHub, Microsoft, and University of Victoria provides research-backed metrics. LinkedIn's [Developer Productivity Report](https://engineering.linkedin.com/blog/2023/developer-productivity-at-linkedin) connects DX metrics to business outcomes.

**Question:** What metrics and measurement frameworks effectively quantify developer experience and demonstrate business impact? How can organizations establish baselines, track improvements, and prove ROI for developer experience investments to secure executive buy-in?

---

### Question 13: Internal Developer Portals & Self-Service
**Context:** [Spotify's Backstage](https://backstage.io/) (now CNCF) enables self-service infrastructure through software catalogs and templates. [Airbnb's Optica](https://medium.com/airbnb-engineering/how-airbnb-achieved-metric-consistency-at-scale-6b50fd0a93ec) and Lyft's platform reduce ticket-driven operations by 70%. The goal is empowering developers while maintaining compliance.

**Question:** What capabilities should internal developer portals provide to meaningfully improve developer experience? How can organizations enable autonomous provisioning of complete environments (infrastructure + services) while maintaining security, compliance, and cost controls?

---

### Question 14: Cognitive Load & Developer Experience
**Context:** The [cognitive load theory](https://queue.acm.org/detail.cfm?id=3454124) applied to DevOps suggests developers are overwhelmed by complexity. Heroku pioneered "convention over configuration." [Vercel](https://vercel.com/blog/developer-experience) and [Netlify](https://www.netlify.com/blog/2021/03/16/developer-experience-at-netlify/) optimize for zero-config deployments while maintaining flexibility.

**Question:** What DevOps practices and platform abstractions most effectively reduce cognitive load and context switching? How can organizations balance abstraction (reducing complexity) with transparency (enabling debugging and understanding) without oversimplifying?

---

### Question 15: Autonomous Pipeline Remediation
**Context:** Pipeline failures consume significant engineering time. [Buildkite](https://buildkite.com/blog/reducing-flaky-tests) documented approaches to flaky test detection. Companies are exploring AI agents that diagnose failures and suggest fixes—similar to how [Meta's Sapienz](https://engineering.fb.com/2018/05/02/developer-tools/sapienz-intelligent-automated-software-testing-at-scale/) automated test generation.

**Question:** What capabilities would enable autonomous agents to monitor CI/CD pipeline failures, diagnose root causes, and suggest or apply fixes automatically? What safety mechanisms ensure agents improve reliability rather than introducing cascading failures?

---

### Question 16: Developer Experience Investment Priorities
**Context:** Organizations face competing DX investments. [Google's DevOps Research and Assessment (DORA)](https://dora.dev/) identified key metrics. [DX](https://getdx.com/research/) analyzed 500+ engineering organizations finding build times and documentation have outsized impact on satisfaction.

**Question:** Which categories of developer experience improvements provide the highest ROI—faster builds, improved tooling, better documentation, or self-service platforms? How should organizations prioritize limited resources to maximize developer velocity, satisfaction, and retention?

---

### Question 17: Agent-Based System Developer Experience
**Context:** Agent-based architectures require new mental models. [LangChain](https://python.langchain.com/docs/concepts/agents/) and [CrewAI](https://www.crewai.com/) provide frameworks, but developer experience is still emerging. The transition is similar to microservices adoption—requiring new debugging approaches and architectural patterns.

**Question:** How should agent orchestration frameworks and APIs be designed to provide intuitive developer experience? What abstractions, debugging capabilities, and visibility mechanisms enable developers—especially those new to agent systems—to be productive while maintaining control over system behavior?

---

## Summary

These **17 curated questions** consolidate your team's input and are designed to:
- Extract actionable insights for accelerating development at your organization
- Understand proven patterns from industry leaders (with reference links)
- Cover both technical implementation and cultural/organizational considerations
- Focus on practical applicability rather than vendor-specific solutions
- Enable strategic discussions between you, your Group CIO, and the AWS team

Each question includes real-world examples with reference links to:
- Published engineering blogs and research papers
- Open-source tools and frameworks
- Industry best practices and case studies
- Quantified outcomes and metrics

This positions you to have highly productive, evidence-based discussions that can drive transformational change in your organization's developer experience.
