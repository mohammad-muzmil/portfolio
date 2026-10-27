/**
 * Central portfolio data — Shaik Mohammad Muzmil.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shaik Mohammad Muzmil',
  displayName: 'Shaik Mohammad Muzmil',
  firstName: 'SHAIK',
  seriesTag: "SHAIK'S SERIES",
  originalLabel: 'A NETROFUSION ORIGINAL',
  role: 'Senior Full Stack Engineer',
  tagline: ['Full Stack Engineer', 'AI Systems Architect', 'Founder · NetroFusion Labs'],
  intro:
    'Senior Full Stack Engineer with 5+ years expertise architecting scalable Angular, React & Node.js systems and cross-platform React Native solutions. Currently shipping enterprise AI platforms at Infobell IT Solutions while embedded in IBM Cloud Pak & AIOps ecosystems. Founder of NetroFusion Labs — creator of SMA PostDesk, NetroTrack, and Vivah.AI.',
  location: 'Bangalore, India',
  email: 'mohammadmuzmil.shaik@gmail.com',
  phone: '+91 83175 13201',
  links: {
    linkedin: 'https://www.linkedin.com/in/shaik-mohammad-muzmil-51b0a3161/',
    github: 'https://github.com/MohammadMuzmil',
    website: 'https://netrofusion.in',
  },
  resumePdf: '',
  portrait: {
    src: '/assets/muzmil-portrait-800.png',
    srcSet: '/assets/muzmil-portrait-400.png 400w, /assets/muzmil-portrait-800.png 800w, /profile_picture.png 1200w',
    alt: 'Portrait of Shaik Mohammad Muzmil',
  },
  interests: ['Edge Compute & Serverless', 'AI Agentic Systems', 'Field Workforce SaaS', 'Mobile Systems'],
};

export const education = [
  {
    school: 'Madanapalle Institute of Technology & Science',
    place: 'Angallu, India',
    degree: 'Bachelor of Technology – Computer Science and Engineering',
    period: '2017 – 2021',
    score: 'B.Tech CSE',
  },
];

export const experience = [
  {
    company: 'Infobell IT Solutions Pvt. Ltd',
    role: 'Senior Software Engineer – Full Stack & Application Developer',
    place: 'Bangalore, India',
    period: 'Aug 2023 – Present',
    points: [
      'Architected Angular 18 modules implementing code-splitting & lazy loading, measurably reducing load times and boosting Core Web Vitals.',
      'Engineered and maintained 25+ Node.js/Express.js REST APIs deployed on AWS (EC2, Lambda) across 5+ CI/CD pipelines.',
      'Built AI-powered incident resolution dashboard (Resolution Assistant) integrating IBM Watson & IBM Cloud Pak for Watson AIOps.',
      'Refactored frontend architectures with reactive RxJS design streams, reducing complexity and accelerating feature delivery.',
      'Mentored 5+ developers through structured code reviews and pair programming sessions, establishing team coding standards.',
    ],
  },
  {
    company: 'Knowledge Lens Pvt. Ltd. (A Rockwell Automation Company)',
    role: 'Senior Software Engineer – Full Stack Developer',
    place: 'Bangalore, India',
    period: 'Jan 2021 – Aug 2023',
    points: [
      'Developed full-stack web applications using Angular, Node.js, Express.js, and Python/FastAPI for DAHS and GLens industrial platforms.',
      'Optimized Apache/NGINX server configurations with gzip compression and caching strategies across 10+ projects.',
      'Delivered full-stack Angular solutions across 10+ client projects serving 50K+ users with 98% client satisfaction.',
      'Resolved 150+ technical issues across projects in active collaboration with PMs, QA, and enterprise clients.',
      'Trained 8+ developers in JS, TS, Angular, RxJS & Node.js, establishing standards that reduced technical debt over successive sprints.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'sma-postdesk',
    title: 'SMA PostDesk — Multi-Tenant Social Media SaaS',
    year: '2026',
    genre: 'SaaS • Edge Compute • Next.js 16',
    logline: 'Cloud-native multi-tenant social media scheduling & asset management platform deployed on Cloudflare Workers and Neon Serverless Postgres.',
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Cloudflare Workers', 'Neon Postgres', 'Prisma 7', 'Cloudflare R2', 'Razorpay'],
    build: [
      'Compiled full-stack Next.js app onto Cloudflare Workers via OpenNext for global sub-second responses and zero container hosting costs.',
      'Engineered serverless database layer using Prisma 7 and @prisma/adapter-neon over WebSockets with WebAssembly query compilation.',
      'Built multi-platform scheduling (Facebook Graph API 90-day token fan-out & WhatsApp Cloud API), R2 Digital Asset Vault, and zero-dependency Razorpay billing.',
    ],
    features: [
      'Multi-platform Facebook & WhatsApp scheduling',
      'Cloudflare R2 Digital Asset Vault (DAM)',
      'Prisma 7 + Neon Postgres WebSocket driver',
      'Razorpay multi-tier subscription engine',
      'Zero-downtime Google Sheets data migration',
    ],
    metrics: [
      { value: '0ms', label: 'server maintenance' },
      { value: '<10ms', label: 'edge cold start' },
    ],
    live: 'https://sma.netrofusion.in',
    palette: ocean,
    motif: 'shield',
  },
  {
    id: 'netrotrack',
    title: 'NetroTrack — Field Workforce Management SaaS',
    year: '2026',
    genre: 'SaaS • Mobile • React Native',
    logline: 'Enterprise offline-first field workforce management & live tracking platform with MMKV sync and Socket.IO/Redis location streaming.',
    stack: ['React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Socket.IO', 'Zustand', 'MMKV', 'Docker'],
    build: [
      'Engineered atomic MMKV sync queue allowing field executives to mark attendance, log visits, and capture orders in zero-connectivity environments.',
      'Implemented low-power background location polling on React Native with Socket.IO and Redis Pub/Sub for real-time manager route playback.',
      'Optimized cloud media storage throughput by 80% via presigned Cloudflare R2/S3 upload URLs for inspection photo proofing.',
    ],
    features: [
      'Offline-first MMKV data synchronization engine',
      'Geofenced selfie & biometric punch-in',
      'Real-time GPS tracking with Socket.IO & Redis',
      'Direct-to-cloud presigned R2/S3 image uploads',
      'Multi-tenant RBAC (Agents, Managers, Admins)',
    ],
    metrics: [
      { value: '100%', label: 'offline core features' },
      { value: '<300ms', label: 'sync speed' },
      { value: '80%', label: 'less server memory' },
    ],
    palette: jade,
    motif: 'flow',
  },
  {
    id: 'vivah-ai',
    title: 'Vivah.AI — Voice-First AI Matrimony Platform',
    year: '2026',
    genre: 'AI • Speech NLP • Mobile',
    logline: 'Voice-first React Native matrimony platform with speech-to-text (STT) onboarding and real-time AI matchmaking UI.',
    stack: ['React.js', 'React Native', 'Speech-to-Text', 'NLP', 'Node.js', 'Express.js'],
    build: [
      'Built a voice-first React Native matrimony platform enabling users to create profiles, onboard, and interact through conversational NLP.',
      'Developed real-time matchmaking and profile recommendation UI with React.js, supporting multilingual accessibility for diverse user bases.',
    ],
    features: [
      'Voice-first STT profile onboarding',
      'Conversational NLP interaction',
      'Real-time AI matchmaking UI',
      'Multilingual accessibility support',
    ],
    metrics: [
      { value: 'Voice-1st', label: 'onboarding flow' },
      { value: 'Real-time', label: 'matchmaking' },
    ],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'resolution-assistant',
    title: 'Resolution Assistant — AIOps Incident Platform',
    year: '2025',
    genre: 'AIOps • Enterprise • Angular',
    logline: 'AI-powered incident resolution dashboard integrating IBM Watson & IBM Cloud Pak for Watson AIOps for real-time alert correlation.',
    stack: ['Angular', 'IBM Watson', 'IBM Cloud Pak AIOps', 'RxJS', 'TypeScript'],
    build: [
      'Built an AI-powered incident resolution dashboard using Angular integrating IBM Watson and IBM Cloud Pak for Watson AIOps.',
      'Surfaced correlated alerts, recommended resolutions, and incident timelines, streamlining SRE triage workflows.',
    ],
    features: [
      'Real-time alert correlation & visualization',
      'IBM Watson AIOps integration',
      'Recommended resolution workflows',
      'Interactive SRE timeline dashboards',
    ],
    metrics: [
      { value: 'Real-time', label: 'alert correlation' },
      { value: 'AIOps', label: 'triage acceleration' },
    ],
    palette: violet,
    motif: 'tenants',
  },
  {
    id: 'convogene',
    title: 'ConvoGene — Enterprise AI Agentic Platform',
    year: '2024',
    genre: 'AI • Agentic • Enterprise',
    logline: 'High-performance AI orchestration dashboard with drag-and-drop Agent Builder and RAG integration for enterprise knowledge bases.',
    stack: ['Angular 18', 'Node.js', 'Python', 'LangChain', 'Redis', 'RAG', 'SSE'],
    build: [
      'Architected high-performance AI orchestration dashboard with sub-200ms UI responsiveness for real-time LLM inference.',
      'Engineered drag-and-drop Agent Builder with Angular and RxJS integrating RAG for private enterprise knowledge bases.',
      'Implemented Server-Sent Events (SSE) streaming with D3.js GPU/token usage monitoring.',
    ],
    features: [
      'Drag-and-drop Agent Builder with RAG',
      'Sub-200ms UI responsiveness',
      'RxJS Server-Sent Events (SSE) streaming',
      'GPU & token usage D3.js dashboards',
    ],
    metrics: [
      { value: '<200ms', label: 'UI responsiveness' },
      { value: '40%', label: 'less LLM streaming lag' },
    ],
    live: 'https://convogene.ai',
    palette: violet,
    motif: 'shield',
  },
  {
    id: 'dsir-india',
    title: 'DSIR India — R&D Advisory & Technical SEO',
    year: '2025',
    genre: 'Web • Technical SEO • GEO / AI SEO',
    logline: 'Corporate R&D advisory portal with advanced technical SEO, Schema markup, and LLM-ready AI search optimization (llms.txt).',
    stack: ['HTML5/SCSS', 'JavaScript', 'Technical SEO', 'Schema.org', 'llms.txt', 'Google Analytics'],
    build: [
      'Designed and developed corporate website for R&D advisory, establishing brand credibility and consultation inquiry pathways.',
      'Implemented Technical SEO (Search Console, sitemaps, robots.txt, Schema) and AI Search Optimization (llms.txt for LLM discoverability).',
    ],
    features: [
      'Corporate website architecture & UX',
      'Technical SEO & Schema markup',
      'AI Search Optimization (GEO & llms.txt)',
      'Consultation & lead capture workflows',
    ],
    metrics: [
      { value: '100%', label: 'Search & LLM indexed' },
    ],
    live: 'https://dsirindia.com',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'pariposa-seeds',
    title: 'Pariposa Seeds — AgTech Catalog & Marketing',
    year: '2025',
    genre: 'Web • AgTech • Digital Marketing',
    logline: 'Agricultural seed product catalog & digital lead generation portal connecting farmers, dealers, and distribution partners.',
    stack: ['Web Development', 'On-Page SEO', 'Lead Generation', 'Digital Marketing', 'Facebook Ads'],
    build: [
      'Developed digital presence and product catalog for vegetable & field-crop seeds.',
      'Executed farmer-focused digital marketing and call-oriented Facebook lead generation campaigns.',
    ],
    features: [
      'Product catalog with search & categories',
      'Dealer & distributor inquiry workflows',
      'Agricultural marketing & social campaign design',
    ],
    metrics: [
      { value: 'Direct', label: 'farmer lead gen' },
    ],
    live: 'https://pariposa.in',
    palette: jade,
    motif: 'tenants',
  },
  {
    id: 'vvk-foundation',
    title: 'VVK Foundation — Social Impact Platform',
    year: '2024',
    genre: 'Web • Non-Profit • Social Impact',
    logline: 'Digital platform showcasing grassroots education, healthcare, and community empowerment initiatives in Karnataka.',
    stack: ['Responsive Web', 'Information Architecture', 'Impact Reporting', 'Volunteer Management'],
    build: [
      'Built a professional digital presence uniting mission, community impact, annual reports, photo galleries, and volunteer pathways.',
    ],
    features: [
      'Mission-focused homepage & program details',
      'Annual reports & photo gallery',
      'Volunteer engagement & donation pathways',
    ],
    metrics: [
      { value: 'Centralized', label: 'social impact hub' },
    ],
    live: 'https://www.vvkfoundation.in',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'unifytwin',
    title: 'UnifyTwin — Industrial IoT Digital Twin',
    year: '2023',
    genre: 'IoT • Digital Twin • Mobile',
    logline: 'Digital twin platform with real-time camera feeds, pollution tracking, and React Native mobile app for field engineers.',
    stack: ['Angular 14', 'React Native', 'Node.js', 'MongoDB', 'Redis'],
    build: [
      'Directed development of a digital twin platform supporting real-time machine monitoring and environmental pollution tracking.',
      'Developed React Native mobile app (Google Play published) for field engineers to view sensor telemetry and predictive alerts.',
    ],
    features: [
      'Real-time camera & IoT sensor telemetry',
      'React Native field engineer app',
      'Predictive maintenance alerts',
    ],
    metrics: [
      { value: '30%', label: 'efficiency improvement' },
    ],
    live: 'https://unifytwin.com',
    palette: jade,
    motif: 'shield',
  },
  {
    id: 'upturn',
    title: 'Upturn — Stock Advisor Platform (US)',
    year: '2024',
    genre: 'Fintech • MEAN Stack • WebSockets',
    logline: 'AI-powered stock advisory platform with RxJS and WebSocket market data streaming for US retail investors.',
    stack: ['Angular 18', 'RxJS', 'Node.js', 'Express.js', 'WebSocket'],
    build: [
      'Re-architected an AI stock advisory platform using Angular 18, RxJS, and Node.js/Express.js (MEAN stack).',
      'Implemented real-time market data streaming via RxJS & WebSockets for live Buy/Sell signals and Robo-Portfolios.',
    ],
    features: [
      'AI stock recommendations & Robo-Portfolios',
      'Real-time WebSocket market data streaming',
      'RxJS reactive state management',
    ],
    metrics: [
      { value: '20%', label: 'performance gain' },
      { value: '15%', label: 'engagement boost' },
    ],
    live: 'https://upturn.io',
    palette: ocean,
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'spot-award',
    title: 'SPOT Award Recipient',
    org: 'Infobell IT Solutions',
    detail: 'Awarded SPOT Award at Infobell IT Solutions for on-time delivery while mastering new technology stacks under tight deadlines.',
    laurel: 'Excellence',
  },
  {
    id: 'netrofusion-founder',
    title: 'Founder & Architect',
    org: 'NetroFusion Labs',
    detail: 'Founded NetroFusion Labs (netrofusion.in) — architecting and shipping production SaaS products like SMA PostDesk, NetroTrack, DSIR India, Pariposa, and VVK Foundation.',
    laurel: 'Founder',
  },
  {
    id: 'mits-web-club',
    title: 'Founder — MITS Web Club',
    org: '300+ Students Trained',
    detail: 'Founded MITS Web Club, training 300+ students in Angular, Node.js, and modern full-stack web development.',
    laurel: 'Leadership',
  },
  {
    id: 'lemon-coffeelove',
    title: '15-Member Lead Engineer',
    org: 'Lemon Companies BVBA (Belgium)',
    detail: 'Led a 15-member team delivering the CoffeeLove project for Lemon Companies BVBA — a live MEAN stack geolocation web app.',
    laurel: 'Global Lead',
  },
  {
    id: 'getmeenabled',
    title: 'Performance Appreciation',
    org: 'GETMEENABLED',
    detail: 'Received appreciation certificate from GETMEENABLED for critical e-commerce application performance upgrades.',
    laurel: 'Performance',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Infobell', name: 'SPOT Award Recipient for High Engineering Delivery' },
  { issuer: 'Udacity', name: 'Front-End Web Developer Nanodegree' },
  { issuer: 'IBM / Watson', name: 'IBM Cloud Pak for Watson AIOps Integration' },
  { issuer: 'NetroFusion', name: 'Founder & Systems Architect — NetroFusion Labs' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Angular, React & Next.js 16',
    skills: [
      { name: 'Angular (8–18)', mono: 'Ng', note: 'Primary' },
      { name: 'React.js / Next.js 16', mono: 'Re' },
      { name: 'React Native', mono: 'RN' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'RxJS / NgRx', mono: 'Rx' },
      { name: 'Tailwind CSS v4', mono: 'Tw' },
      { name: 'Zustand & TanStack Query', mono: 'Zt' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Edge',
    subtitle: 'Node.js, Express & Cloudflare Workers',
    skills: [
      { name: 'Node.js & Express.js', mono: 'No' },
      { name: 'Python / FastAPI', mono: 'Py' },
      { name: 'Cloudflare Workers / OpenNext', mono: 'Cf' },
      { name: 'RESTful APIs', mono: 'Api' },
      { name: 'WebSockets & Socket.IO', mono: 'Ws' },
      { name: 'SSE (Server-Sent Events)', mono: 'Ss' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'AWS, GCP, Docker & Serverless',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', mono: 'Aws' },
      { name: 'Cloudflare (R2, KV, Edge)', mono: 'R2' },
      { name: 'Google Cloud Platform (GCP)', mono: 'Gcp' },
      { name: 'Docker & Kubernetes', mono: 'Dk' },
      { name: 'CI/CD (GitHub Actions)', mono: 'Ci' },
      { name: 'NGINX & Apache', mono: 'Nx' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & ORM',
    subtitle: 'PostgreSQL, MongoDB & Redis',
    skills: [
      { name: 'PostgreSQL & Neon Serverless', mono: 'Pg' },
      { name: 'Prisma 7 ORM', mono: 'Pr' },
      { name: 'MongoDB & Mongoose', mono: 'Mg' },
      { name: 'Redis DB & Pub/Sub', mono: 'Rd' },
      { name: 'MMKV (Fast Local Storage)', mono: 'Mk' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Emerging',
    subtitle: 'Watson AIOps, LangChain & Speech NLP',
    skills: [
      { name: 'IBM Watson & AIOps', mono: 'Wat' },
      { name: 'LangChain & RAG', mono: 'Lc' },
      { name: 'Speech-to-Text & NLP', mono: 'Stt' },
      { name: 'Razorpay Edge Payments', mono: 'Rz' },
    ],
  },
  {
    id: 'interests',
    title: "What's Next",
    subtitle: 'The next arc of NetroFusion',
    skills: [
      { name: 'Edge-Native SaaS Platforms', mono: 'Edge' },
      { name: 'AI / Agentic Orchestration', mono: 'AI' },
      { name: 'Field Mobile Operations', mono: 'Mobile' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Angular (8–18)': ['Infobell IT Solutions', 'Knowledge Lens', 'Resolution Assistant', 'Upturn'],
  'React.js / Next.js 16': ['SMA PostDesk', 'Vivah.AI', 'ConvoGene AI'],
  'React Native': ['NetroTrack', 'Vivah.AI', 'SpeechAid', 'UnifyTwin'],
  TypeScript: ['Infobell IT Solutions', 'SMA PostDesk', 'NetroTrack'],
  'Node.js & Express.js': ['SMA PostDesk', 'NetroTrack', 'Infobell IT Solutions'],
  'Cloudflare Workers / OpenNext': ['SMA PostDesk'],
  'PostgreSQL & Neon Serverless': ['SMA PostDesk', 'NetroTrack'],
  'Prisma 7 ORM': ['SMA PostDesk', 'NetroTrack'],
  'AWS (EC2, S3, Lambda)': ['Infobell IT Solutions', 'NetroTrack'],
  MongoDB: ['UnifyTwin', 'NextZEN ERP', 'TaskForz'],
  Redis: ['SMA PostDesk', 'NetroTrack', 'ConvoGene AI'],
  'LangChain & RAG': ['ConvoGene AI Agentic Platform'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Origin & Education',
    period: '2017 – 2021',
    synopsis: 'Mastering Computer Science Engineering at MITS, founding MITS Web Club, and building initial full-stack platforms.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Computer Science Foundation',
        description: 'Earned B.Tech in CSE at Madanapalle Institute of Technology & Science (MITS). Mastered web platform fundamentals.',
        tags: ['B.Tech CSE', 'MITS', 'Web Fundamentals'],
        runtime: '2017 – 2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'MITS Web Club & Global Lead',
        description: 'Founded MITS Web Club training 300+ students. Led 15-member team delivering CoffeeLove for Lemon Companies BVBA (Belgium).',
        tags: ['MITS Web Club', '300+ Students', 'CoffeeLove'],
        runtime: '2019 – 2021',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Knowledge Lens (Rockwell)',
    period: '2021 – 2023',
    synopsis: 'Senior Software Engineer at Knowledge Lens — DAHS & GLens platforms, 50K+ users, 98% satisfaction.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Enterprise Developer',
        description: 'Joined Knowledge Lens (a Rockwell Automation company). Engineered full-stack solutions with Angular, React, Node.js & FastAPI.',
        tags: ['Angular', 'Node.js', 'FastAPI', 'GLens'],
        runtime: 'Jan 2021',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Scaler & Mentor',
        description: 'Delivered 10+ projects serving 50K+ users with 98% client satisfaction. Resolved 150+ technical issues and trained 8+ developers.',
        tags: ['50K+ Users', '98% Satisfaction', '150+ Issues'],
        runtime: '2021 – 2023',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Enter: Infobell & IBM AIOps',
    period: '2023 – Present',
    synopsis: 'Senior Software Engineer at Infobell IT Solutions — building AI apps and embedded in IBM Cloud Pak & Watson AIOps.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Infobell & SPOT Award',
        description: 'Architected Angular 18 modules, engineered 25+ Node.js REST APIs on AWS, and earned SPOT Award for high delivery.',
        tags: ['Angular 18', '25+ APIs', 'AWS', 'SPOT Award'],
        runtime: 'Aug 2023',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Resolution Assistant & Watson AIOps',
        description: 'Built Resolution Assistant — AI incident platform integrating IBM Watson & Cloud Pak for Watson AIOps for real-time alert triage.',
        tags: ['IBM Watson', 'AIOps', 'Incident Platform'],
        runtime: '2025 – 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'The Founder Arc: NetroFusion Labs',
    period: '2024 – Present',
    synopsis: 'Architecting and launching NetroFusion Labs SaaS products and client portals (netrofusion.in).',
    episodes: [
      {
        code: 'S04 E01',
        title: 'SMA PostDesk — Edge Social SaaS',
        description: 'Shipped SMA PostDesk — Next.js 16 on Cloudflare Workers edge runtime with Neon Postgres and Razorpay monetization.',
        tags: ['SMA PostDesk', 'Next.js 16', 'Cloudflare Workers', 'Neon'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'NetroTrack & Vivah.AI',
        description: 'Architected NetroTrack offline-first workforce SaaS and Vivah.AI voice-first matrimony platform.',
        tags: ['NetroTrack', 'Vivah.AI', 'React Native', 'Socket.IO'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'Client Portals & Advisory',
        description: 'Delivered DSIR India (Technical SEO & llms.txt GEO), Pariposa Seeds, and VVK Foundation under NetroFusion Labs.',
        tags: ['DSIR India', 'Pariposa', 'VVK Foundation'],
        runtime: '2024 – 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now Streaming',
    synopsis: 'Scaling NetroFusion Labs, expanding edge-native architectures, and building next-gen AI systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Edge & AI Horizon',
        description: 'Pushing the boundary of Cloudflare Workers, Neon Serverless Postgres, and Agentic AI workflows.',
        tags: ['Edge Compute', 'AI Systems', 'NetroFusion'],
        runtime: 'In Production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Edge SaaS 2026', title: 'SMA PostDesk', detail: 'Cloudflare Workers • Next.js 16 • Neon', palette: ocean },
  { label: 'Workforce SaaS', title: 'NetroTrack', detail: 'React Native • MMKV • Socket.IO', palette: jade },
  { label: 'Primary Framework', title: 'Angular (8–18)', detail: '5 years • Infobell & IBM AIOps', palette: amber },
  { label: 'Founder Lab', title: 'NetroFusion Labs', detail: 'netrofusion.in • SaaS & Portals', palette: violet },
  { label: 'Award', title: 'SPOT Award', detail: 'Infobell IT Solutions', palette: crimson },
  { label: 'IBM Chapter', title: 'Resolution Assistant', detail: 'IBM Watson & Cloud Pak AIOps', palette: ocean },
  { label: 'Voice AI 2026', title: 'Vivah.AI', detail: 'Voice-First • Speech NLP • React Native', palette: crimson },
  { label: 'Education', title: 'B.Tech CSE', detail: 'MITS (2017–2021) • Founder Web Club', palette: amber },
  { label: 'API Win', title: '25+ AWS APIs', detail: 'Node.js / Express • 30% speedup', palette: jade },
  { label: 'Technical SEO', title: 'DSIR India', titleVal: 'dsirindia.com', detail: 'Schema & llms.txt AI SEO', palette: ocean } as any,
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Full Stack Engineer.',
    lines: ['5+ years architecting scalable web & mobile systems', 'Bangalore, India · Founder of NetroFusion Labs'],
    chips: ['Angular 18', 'React', 'Next.js 16', 'Node.js'],
  },
  {
    kicker: 'Frontend & Mobile',
    title: 'Angular & React Native.',
    lines: ['Angular 8–18 · React 19 · Next.js 16 · React Native', 'RxJS · NgRx · Zustand · Tailwind v4 · TypeScript'],
    chips: ['Angular', 'React Native', 'Next.js', 'TypeScript'],
  },
  {
    kicker: 'Backend & Edge',
    title: 'Cloudflare Workers & Node.js.',
    lines: ['Cloudflare Workers · Node.js · Python/FastAPI · Socket.IO', 'Neon Serverless Postgres · Prisma 7 · Cloudflare R2'],
    chips: ['Cloudflare', 'Neon Postgres', 'Node.js', 'AWS'],
  },
  {
    kicker: 'Flagship SaaS',
    title: 'SMA PostDesk & NetroTrack.',
    lines: [
      'SMA PostDesk — edge social SaaS (sma.netrofusion.in)',
      'NetroTrack — offline-first field workforce SaaS',
      'Vivah.AI — voice-first matrimony platform',
    ],
  },
  {
    kicker: 'Enterprise & IBM',
    title: 'Watson AIOps & Infobell.',
    lines: ['SPOT Award recipient at Infobell IT Solutions', 'Resolution Assistant for IBM Watson & Cloud Pak AIOps', 'Code splitting & Core Web Vitals optimization'],
  },
  {
    kicker: 'Founder Arc',
    title: 'NetroFusion Labs.',
    lines: ['Founder & Systems Architect (netrofusion.in)', 'Shipped DSIR India, Pariposa Seeds & VVK Foundation', '300+ students trained via MITS Web Club'],
    chips: ['NetroFusion', 'SMA PostDesk', 'DSIR India', 'NetroTrack'],
  },
];

export type ProfileId = 'muzmil' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'muzmil',
    name: 'Muzmil',
    blurb: 'The full series, in order',
    color: '#FF5C3A',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Work history, skills & projects first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Full Stack & Founder', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2021–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the career', palette: jade },
  skills: { nav: 'Skills', card: 'My Stack', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Work History • View', palette: violet },
};
