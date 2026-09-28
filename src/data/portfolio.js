export const portfolioData = {
  name: "Anubrat Sahoo",
  headline: "AI Engineer — Model Training, Evaluation & Agent Systems",
  tagline:
    "I build AI applications and run model experiments. My work spans OCR research, small-model training and sandbox-based evaluation. My technical focus includes reinforcement learning and post-training—training objectives, reward design and how we measure whether a model actually improves.",
  links: [
    { label: "GitHub", href: "https://github.com/anxbt" },
    { label: "LinkedIn", href: "https://linkedin.com/in/anubrat-sahoo" },
    { label: "Email", href: "mailto:anubrat23@gmail.com" },
  ],
  aiProjects: [
    {
      title: "MiniGPT Optimizer Benchmark",
      problem:
        "Built seed-matched, single-GPU experiments comparing AdamW and Hybrid Muon on small GPT models. The public report shows validation-loss and throughput tradeoffs, with the benchmark's limits stated.",
      stack: ["Python", "PyTorch", "MiniGPT", "Model Evaluation"],
      github: "https://github.com/anxbt/minigpt-optimizer-benchmark",
    },
    {
      title: "Safety-Calibrated OCR Detection",
      problem:
        "Built a proof of concept to detect cancelled handwriting before OCR. The repository documents detector comparisons, confidence calibration and cases where the system should abstain. It is not deployed.",
      stack: ["Python", "PyTorch", "RF-DETR", "Evaluation"],
      github: "https://github.com/anxbt/ocr",
    },
    {
      title: "Docker-Based AI Agent Sandbox",
      problem:
        "Built a bounded tool loop that runs Python tasks in Docker. The public repository shows a prototype and its execution flow; it does not claim a security audit or production scale.",
      stack: ["TypeScript", "Docker", "Agent Tools"],
      github: "https://github.com/anxbt/ai-agent-sandboxing",
    },
  ],
  supportingProjects: [
    {
      title: "OnyxAI",
      problem:
        "Built a multimodal AI workspace with model routing, visual learning outputs and a multi-step research mode.",
      stack: ["React Native", "Python", "VLMs"],
      github: "https://github.com/anxbt/onyx-ai",
    },
    {
      title: "S3Finder",
      problem:
        "Built an S3 desktop browser with resumable SSH/SFTP transfers and tests for interruption and restart recovery.",
      stack: ["Electron", "Node.js", "AWS S3", "SFTP"],
      github: "https://github.com/anxbt/s3finder",
    },
  ],
  web3Projects: [
    {
      title: "OG / iSentinel Application",
      badge: "Foundry",
      problem:
        "Full-stack application with Solidity contracts acting as the system of record. Contract logic is tested with Foundry.",
      stack: ["Solidity", "Foundry", "Full-stack dApp"],
      github: "https://github.com/anxbt/OG-Bounty-project",
    },
    {
      title: "Upgradeable Protocol Core",
      badge: "Diamond Architecture · EIP-2535",
      problem:
        "Modular protocol core using the Diamond Standard — facets for access control and execution logic, strict storage layout conventions to prevent slot collisions across upgrades.",
      stack: ["Solidity", "Foundry", "EIP-2535", "Storage Layout"],
      github: "https://github.com/anxbt/Blokathon-Foundry",
    },
    {
      title: "L3 → L2 Cross-Layer Mapping",
      badge: "Cross-layer",
      problem:
        "Smart contracts reasoning about state and interactions across L3 and L2 layers. Focused on cross-layer assumptions, state consistency, and correct execution semantics.",
      stack: ["Solidity", "Foundry", "L2/L3 Architecture"],
      github: "https://github.com/anxbt/Arbritrium-Rollup-Hack25",
    },
  ],
  technicalFocus: [
    "Reinforcement learning and post-training: training objectives, reward design and measuring whether a model improves",
    "Model training and evaluation, including controlled small-model experiments",
    "OCR and computer vision, including confidence calibration and abstention",
    "Agent tools and sandboxed execution",
  ],
  faq: [
    {
      q: "What does Anubrat work on?",
      a: "AI applications, model experiments, OCR research, evaluation and agent systems. His technical focus also includes reinforcement learning and post-training.",
    },
    {
      q: "What is his reinforcement learning experience?",
      a: "Reinforcement learning and post-training are technical focus areas. The portfolio links to model training and evaluation work; it does not claim a completed RL system.",
    },
    {
      q: "Which tools does he use?",
      a: "Python, PyTorch, TypeScript, Node.js, Docker, React, PostgreSQL and AWS, as shown across the linked projects.",
    },
    {
      q: "How can I contact Anubrat?",
      a: "Email anubrat23@gmail.com or connect on LinkedIn at linkedin.com/in/anubrat-sahoo.",
    },
  ],
  skills: {
    Languages: ["Python", "TypeScript", "JavaScript", "Solidity", "SQL"],
    "AI & Machine Learning": [
      "Model Training",
      "Model Evaluation",
      "Reinforcement Learning",
      "Post-Training",
      "Computer Vision",
      "OCR",
      "PyTorch",
    ],
    Frontend: ["React", "React Native", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
    "Cloud & Infra": ["Docker", "AWS (S3, RDS, Fargate)"],
    Web3: ["Solidity", "EVM", "Foundry", "Smart Contracts"],
  },
};
