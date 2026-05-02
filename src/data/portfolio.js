export const portfolioData = {
  name: "Anubrat Sahoo",
  tagline: "Full-stack engineer building web applications and onchain protocols.",
  about: `I'm a third-year CS student at SOA University, Bhubaneswar. I've freelanced on production web applications handling everything from backend APIs and auth systems to cloud deployments on AWS. On the side, I build and deploy smart contracts, including a grant-backed dApp live on mainnet. I care about systems that are correct, predictable, and maintainable.`,
  links: [
    { label: "GitHub", href: "https://github.com/anxbt" },
    { label: "Twitter", href: "https://twitter.com/anxbrt" },
    { label: "LinkedIn", href: "https://linkedin.com/in/anubrat-sahoo" },
    { label: "Email", href: "mailto:anubrat23@gmail.com" },
  ],
  web2Projects: [
    {
      title: "Multi-Tenant RBAC Platform",
      problem:
        "Most auth setups bolt on permissions as an afterthought. I modeled tenant isolation, roles, and permissions at the database level from day one — so access control is a first-class concern, not a patch.",
      stack: ["PostgreSQL", "Express", "Next.js", "Clerk", "TypeScript"],
      github: "https://github.com/anxbt",
      live: null,
    },
    {
      title: "AI Resume Readiness Platform",
      problem:
        "Built a platform that evaluates job readiness by pulling resume data and GitHub contribution activity, then runs scoring logic to estimate market-aligned salary ranges. Deployed on AWS Fargate with PostgreSQL and S3.",
      stack: ["PERN Stack", "TypeScript", "AWS Fargate", "S3"],
      github: "https://github.com/anxbt/GitHub-AI-Talent-Analyzer",
      live: null,
    },
    {
      title: "Real-Time Online Clipboard",
      problem:
        "Instant text sharing across devices with WebSocket-based low-latency sync, room-based isolation for concurrent users, and graceful reconnection handling.",
      stack: ["WebSockets", "Node.js", "Express", "React"],
      github: "https://github.com/anxbt/chat-room",
      live: null,
    },
  ],
  web3Projects: [
    {
      title: "OG / iSentinel Application",
      badge: "Grant-backed · Mainnet",
      problem:
        "Full-stack Web3 application with Solidity contracts deployed on mainnet. Smart contracts are the system of record; frontend logic is fully constrained by on-chain state. Contract logic tested with Foundry. Received ecosystem grant support.",
      stack: ["Solidity", "Foundry", "Full-stack dApp", "Mainnet"],
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
  currentlyExploring: [
    "Uniswap V4 hooks and concentrated liquidity mechanics",
    "UUPS and Diamond upgrade patterns — storage layout management at depth",
    "Impermanent loss modeling (wrote a Twitter thread + animated YouTube explainer on this)",
  ],
  writingAndExplainers: [
    {
      title: "Concentrated Liquidity in Uniswap V4",
      description: "How Uniswap V4 prices assets within ranges and why it's capital efficient",
      link: "https://medium.com/@anubrat23/the-hook-uniswap-doesnt-talk-about-341c4f302286",
      thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?w=800&q=80",
      platform: "Medium"
    },
    {
      title: "From Infinite Liquidity to Concentrated Markets",
      description: "What Uniswap Actually Fixed and What It Didn't...",
      link: "https://x.com/anxbrt/status/2027033972770021479?s=20",
      thumbnail: "https://pbs.twimg.com/media/HCF1RbrbcAAzW0c.jpg",
      platform: "X (Twitter)"
    },
    {
      title: "What Uniswap V3 ACTUALLY Fixed",
      description: "Most people describe Uniswap V3 in two words: 'Concentrated Liquidity'. This visual breakdown explains what actually changed under the hood.",
      link: "https://youtu.be/EE1cAN5fhQ0",
      thumbnail: "https://img.youtube.com/vi/EE1cAN5fhQ0/mqdefault.jpg",
      platform: "YouTube"
    }
  ],
  faq: [
    {
      q: "Is Anubrat Sahoo available for hire?",
      a: "Yes. Anubrat Sahoo is actively open to work and looking for full-stack engineering, backend engineering, or Web3/Solidity development roles. He can be reached at anubrat23@gmail.com.",
    },
    {
      q: "What full-stack technologies does Anubrat Sahoo know?",
      a: "Anubrat Sahoo works with React, Next.js, Node.js, TypeScript, JavaScript, PostgreSQL, REST APIs, and AWS (S3, RDS, Fargate). He has shipped production web applications covering backend APIs, authentication systems, RBAC, and cloud deployments.",
    },
    {
      q: "What Web3 and blockchain experience does Anubrat Sahoo have?",
      a: "Anubrat Sahoo has built and deployed Solidity smart contracts to mainnet, including a grant-backed full-stack dApp. He works with Foundry, EIP-2535 Diamond Standard, upgradeable contracts, invariant testing, and fuzzing.",
    },
    {
      q: "What kind of developer roles is Anubrat Sahoo looking for?",
      a: "Anubrat Sahoo is open to full-stack engineering, backend engineering, and Web3/Solidity development positions. He is a third-year CS student at SOA University, Bhubaneswar, with freelance production experience and a mainnet-deployed project.",
    },
    {
      q: "Has Anubrat Sahoo shipped production software?",
      a: "Yes. He has freelanced on production web applications handling backend APIs, auth systems, and AWS cloud deployments. He also deployed a grant-backed smart contract dApp to mainnet with Foundry-tested contracts.",
    },
    {
      q: "How can I hire Anubrat Sahoo?",
      a: "Reach out directly at anubrat23@gmail.com or connect on LinkedIn at linkedin.com/in/anubrat-sahoo. He is actively looking for full-stack, backend, or Web3 engineering roles and responds quickly to serious enquiries.",
    },
    {
      q: "What is Anubrat Sahoo's availability for a new role?",
      a: "Immediately available. Open to full-time, part-time, contract, or internship roles in full-stack, backend, or Web3/Solidity engineering.",
    },
  ],
  skills: {
    Languages: ["TypeScript", "JavaScript", "Solidity", "SQL"],
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "REST APIs", "RBAC", "Webhooks"],
    "Smart Contracts": ["EVM", "Foundry", "Diamond Standard", "Invariant Testing", "Fuzzing"],
    "Cloud & Infra": ["Docker", "AWS (S3, RDS, Fargate)", "CI/CD", "PostgreSQL"],
    Architecture: ["Multi-Tenant Systems", "Upgradeable Contracts", "API Design"],
  },
};
