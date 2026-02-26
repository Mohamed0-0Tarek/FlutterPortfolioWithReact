import {
  Smartphone,
  BarChart3,
  Brain,
  Layers,
  Flame,
  Code2,
  Database,
  GitBranch,
  Github,
  Globe,
  Cpu,
  Zap,
  BookOpen,
  Blocks,
  Rocket,
  Timer,
  Network,
} from 'lucide-react';

const GITHUB_URL = 'https://github.com/Mohamed0-0Tarek';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Difference', href: '#difference' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
];

export const differenceCards = [
  {
    icon: Smartphone,
    title: 'Mobile Expertise',
    description:
      'Crafting high-performance, pixel-perfect Flutter applications for both iOS and Android platforms.',
    color: 'primary',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Mindset',
    description:
      'Leveraging analytical thinking from data science to make informed product and architecture decisions.',
    color: 'accent',
  },
  {
    icon: Brain,
    title: 'Logic-Focused Applications',
    description:
      'Building complex, logic-heavy features that go beyond simple UI — algorithms, state machines, and smart flows.',
    color: 'purple',
  },
  {
    icon: Layers,
    title: 'Clean Architecture',
    description:
      'Writing maintainable, testable code with separation of concerns and SOLID principles at the core.',
    color: 'pink',
  },
];

export const techStack = [
  { name: 'Flutter', icon: Smartphone, color: '#42A5F5' },
  { name: 'Dart', icon: Code2, color: '#29B6F6' },
  { name: 'React', icon: Globe, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: Zap, color: '#38BDF8' },
  { name: 'Firebase', icon: Flame, color: '#FFCA28' },
  { name: 'Git', icon: GitBranch, color: '#F07167' },
  { name: 'GitHub', icon: Github, color: '#6e7681' },
  { name: 'DSA', icon: Cpu, color: '#AB47BC' },
];

export const projects = [
  {
    title: 'NeoFinance Wallet',
    tags: ['Flutter', 'Fintech'],
    tagColors: ['primary', 'blue'],
    problem:
      'Users needed a seamless way to manage digital transactions with real-time financial data.',
    solution:
      'Built a comprehensive digital wallet with secure transaction layers and optimized chart rendering for real-time WebSocket data updates.',
    features: [
      'Real-time transaction tracking',
      'Interactive financial charts',
      'Secure payment gateway',
      'Biometric authentication',
    ],
    learned:
      'Deep understanding of WebSocket integration, complex state management with BLoC pattern, and performance optimization for real-time data rendering.',
    github: GITHUB_URL,
    demo: null,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
  {
    title: 'MediConnect',
    tags: ['Dart', 'Healthcare'],
    tagColors: ['primary', 'green'],
    problem:
      'Patients in remote areas needed reliable access to specialist consultations.',
    solution:
      'Developed a telemedicine platform with offline-first architecture and complex video call state management.',
    features: [
      'HD video consultations',
      'Offline appointment scheduling',
      'Medical records sync',
      'Push notification system',
    ],
    learned:
      'Advanced offline-first architecture patterns, WebRTC integration in Flutter, and managing complex async workflows.',
    github: GITHUB_URL,
    demo: null,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    title: 'TaskFlow Pro',
    tags: ['Flutter', 'Productivity'],
    tagColors: ['primary', 'orange'],
    problem:
      'Teams lacked a mobile-first project management tool with smart task prioritization.',
    solution:
      'Created an intelligent task manager that uses data-driven algorithms to suggest priorities and deadlines.',
    features: [
      'AI-powered prioritization',
      'Team collaboration boards',
      'Analytics dashboard',
      'Calendar integration',
    ],
    learned:
      'Algorithm design for task scoring, Firebase real-time database architecture, and building responsive data visualizations.',
    github: GITHUB_URL,
    demo: null,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
  },
];

export const learningTopics = [
  {
    title: 'Advanced Flutter State Management',
    description: 'Mastering BLoC, Riverpod, and reactive patterns',
    icon: Blocks,
    progress: 75,
  },
  {
    title: 'Clean Architecture',
    description: 'Domain-driven design and hexagonal architecture',
    icon: Layers,
    progress: 60,
  },
  {
    title: 'Performance Optimization',
    description: 'Profiling, rendering pipelines, and memory management',
    icon: Rocket,
    progress: 50,
  },
  {
    title: 'Async Programming in Dart',
    description: 'Streams, isolates, and concurrent computing',
    icon: Timer,
    progress: 70,
  },
  {
    title: 'System Design Fundamentals',
    description: 'Scalable architectures and distributed systems',
    icon: Network,
    progress: 40,
  },
];

export const aboutStats = [
  { value: '4+', label: 'Years Experience', color: 'primary' },
  { value: '20+', label: 'Projects Delivered', color: 'accent' },
];
