export interface GlobalSettings {
  links: { name: string; url: string }[];
  logoUrl: string;
  topBannerAlert: string;
}

export interface HeroData {
  mainHeading: string;
  subHeading: string;
  ctaText: string;
  ctaUrl: string;
  backgroundMediaUrl: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SandboxTimelineItem {
  id: string;
  timeframe: string;
  description: string;
}

export interface SandboxPortfolio {
  id: string;
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
}

export interface SandboxData {
  timeline: SandboxTimelineItem[];
  portfolios: SandboxPortfolio[];
}

export interface CurriculumSemester {
  id: string;
  title: string;
  topics: string[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  activity: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
}

export interface Outcome {
  id: string;
  role: string;
  salary: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  cohort: string;
}

export interface AdmissionsStep {
  id: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  snippet: string;
  imageUrl: string;
  link: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SiteContent {
  globalSettings: GlobalSettings;
  hero: HeroData;
  partners: Partner[];
  stats: Stat[];
  features: Feature[];
  sandbox: SandboxData;
  curriculum: CurriculumSemester[];
  schedule: ScheduleItem[];
  pillars: Pillar[];
  outcomes: Outcome[];
  testimonials: Testimonial[];
  admissions: AdmissionsStep[];
  blogs: BlogPost[];
  faqs: FAQ[];
}
