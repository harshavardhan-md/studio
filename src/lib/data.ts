export type Startup = {
  id: string;
  name: string;
  logoUrl: string;
  tagline: string;
  industry: string;
  stage: 'Idea' | 'MVP' | 'Seed' | 'Growth';
  description: string;
  team: { name: string; role: string }[];
  traction: string;
  fundingSought: number;
};

export const startups: Startup[] = [
  {
    id: '1',
    name: 'FinTech Future',
    logoUrl: 'https://placehold.co/100x100.png',
    tagline: 'AI-powered personal finance for students.',
    industry: 'FinTech',
    stage: 'MVP',
    description: 'FinTech Future offers an AI-driven platform that helps students manage their finances, save money, and invest wisely. Our app provides personalized budgeting advice and simplifies investment choices.',
    team: [{ name: 'Alice Johnson', role: 'CEO' }, { name: 'Bob Williams', role: 'CTO' }],
    traction: '1,000+ beta users, 15% weekly growth.',
    fundingSought: 250000,
  },
  {
    id: '2',
    name: 'EduLearn',
    logoUrl: 'https://placehold.co/100x100.png',
    tagline: 'Personalized learning paths with AI.',
    industry: 'EdTech',
    stage: 'Seed',
    description: 'EduLearn uses AI to create customized learning experiences for K-12 students. We adapt to each student\'s pace and style, making learning more effective and engaging.',
    team: [{ name: 'Charlie Brown', role: 'CEO' }, { name: 'Diana Miller', role: 'Head of Pedagogy' }],
    traction: '10 schools piloting, $50k in ARR.',
    fundingSought: 500000,
  },
  {
    id: '3',
    name: 'HealthSphere',
    logoUrl: 'https://placehold.co/100x100.png',
    tagline: 'Remote patient monitoring for universities.',
    industry: 'HealthTech',
    stage: 'Idea',
    description: 'HealthSphere provides a wearable and app combo for university health centers to monitor student well-being remotely, focusing on mental and physical health indicators.',
    team: [{ name: 'Eve Davis', role: 'Founder' }],
    traction: 'Prototype developed, 2 university partnerships in discussion.',
    fundingSought: 100000,
  },
  {
    id: '4',
    name: 'GreenRoute',
    logoUrl: 'https://placehold.co/100x100.png',
    tagline: 'Optimizing urban logistics sustainably.',
    industry: 'Logistics',
    stage: 'Growth',
    description: 'GreenRoute is a SaaS platform that helps delivery companies reduce their carbon footprint and costs by optimizing delivery routes with a focus on sustainability and efficiency.',
    team: [{ name: 'Frank White', role: 'CEO' }, { name: 'Grace Lee', role: 'COO' }, { name: 'Heidi Chen', role: 'CTO' }],
    traction: '$1.2M in ARR, 50+ enterprise clients.',
    fundingSought: 5000000,
  },
];

export type Investor = {
  id: string;
  name: string;
  imageUrl: string;
  title: string;
  firm: string;
  focus: string[];
};

export const investors: Investor[] = [
  { id: '1', name: 'Olivia Chen', imageUrl: 'https://placehold.co/120x120.png', title: 'Managing Partner', firm: 'Momentum Ventures', focus: ['SaaS', 'FinTech'] },
  { id: '2', name: 'Benjamin Carter', imageUrl: 'https://placehold.co/120x120.png', title: 'Angel Investor', firm: 'Self-funded', focus: ['EdTech', 'Future of Work'] },
  { id: '3', name: 'Sophia Rodriguez', imageUrl: 'https://placehold.co/120x120.png', title: 'Principal', firm: 'Innovate Capital', focus: ['HealthTech', 'AI/ML'] },
  { id: '4', name: 'Liam Goldberg', imageUrl: 'https://placehold.co/120x120.png', title: 'Associate', firm: 'NextGen Investors', focus: ['Consumer', 'Marketplaces'] },
];

export type CoFounderProfile = {
  id: string;
  name: string;
  imageUrl: string;
  skills: string[];
  lookingFor: string;
  bio: string;
};

export const cofounders: CoFounderProfile[] = [
  { id: '1', name: 'Mark Chen', imageUrl: 'https://placehold.co/120x120.png', skills: ['Full-stack Dev', 'Python', 'React'], lookingFor: 'A business/marketing co-founder for a SaaS idea.', bio: 'Computer Science major with a passion for building scalable applications.' },
  { id: '2', name: 'Isabelle Dubois', imageUrl: 'https://placehold.co/120x120.png', skills: ['Marketing', 'Branding', 'Growth Hacking'], lookingFor: 'A technical co-founder to build the future of e-commerce.', bio: 'Business student with experience in launching and scaling D2C brands.' },
  { id: '3', name: 'Tom Schmidt', imageUrl: 'https://placehold.co/120x120.png', skills: ['Product Design', 'UI/UX', 'Figma'], lookingFor: 'A team for a mobile-first social networking app.', bio: 'Design student focused on creating intuitive and beautiful user experiences.' },
];

export type Resource = {
  id: string;
  title: string;
  category: 'Guide' | 'Template' | 'Article';
  description: string;
  href: string;
};

export const resources: Resource[] = [
  { id: '1', title: 'The Ultimate Pitch Deck Guide', category: 'Guide', description: 'Everything you need to know to create a compelling pitch deck that gets investors\' attention.', href: '#' },
  { id: '2', title: 'Financial Model Template for Startups', category: 'Template', description: 'A plug-and-play Excel template to forecast your revenue, costs, and cash flow.', href: '#' },
  { id: '3', title: 'How to Find Your First 100 Customers', category: 'Article', description: 'Actionable strategies for early-stage startups to acquire their first users.', href: '#' },
  { id: '4', title: 'Cap Table 101 for Founders', category: 'Guide', description: 'Understand equity, dilution, and how to manage your startup\'s capitalization table.', href: '#' },
];
