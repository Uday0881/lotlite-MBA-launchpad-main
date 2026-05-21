import { SiteContent } from "../types/cms";

export const initialSiteContent: SiteContent = {
  globalSettings: {
    links: [
      { name: "Programs", url: "/programs/mba-real-estate" },
      { name: "Incubation", url: "/incubation" },
      { name: "Outcomes", url: "/outcomes" },
      { name: "Contact", url: "/contact" }
    ],
    logoUrl: "/lotlite-logo.svg",
    topBannerAlert: "Founding Cohort - Now Open for Applications",
  },
  hero: {
    mainHeading: "Master Real Estate & Entrepreneurship",
    subHeading: "India's First Hands-On 24-Month Residential Program.",
    ctaText: "Apply Now",
    ctaUrl: "/apply",
    backgroundMediaUrl: "/hero-background.jpg",
  },
  partners: [
    { id: "1", name: "WeWork", logoUrl: "/logos/wework.png" },
    { id: "2", name: "DLF", logoUrl: "/logos/dlf.png" }
  ],
  stats: [
    { id: "1", label: "Average CTC", value: "18L+" },
    { id: "2", label: "First-Day Employment", value: "100%" },
  ],
  features: [
    { id: "1", title: "Fleet Access", description: "24/7 access to our fleet of vehicles for site visits.", icon: "Car" },
    { id: "2", title: "Field Immersion", description: "Learn on real construction sites.", icon: "Map" },
  ],
  sandbox: {
    timeline: [
      { id: "1", timeframe: "Week 12", description: "Market Research Phase" },
      { id: "2", timeframe: "Week 24", description: "Demo Day Pitch" }
    ],
    portfolios: [
      { id: "1", title: "PropTech App", tags: ["Tech", "Funding"], description: "A new way to buy homes.", imageUrl: "/sandbox1.jpg" }
    ],
  },
  curriculum: [
    { id: "1", title: "Semester 1", topics: ["Introduction to Real Estate", "Microeconomics"] },
    { id: "2", title: "Semester 2", topics: ["Construction Tech", "Finance"] }
  ],
  schedule: [
    { id: "1", time: "08:00 AM", activity: "Breakfast & Briefing" },
    { id: "2", time: "09:00 AM", activity: "Site Visit" },
  ],
  pillars: [
    { id: "1", title: "Practical Learning", description: "Theory meets practice." },
    { id: "2", title: "Industry Mentorship", description: "Learn from the best." }
  ],
  outcomes: [
    { id: "1", role: "Asset Manager", salary: "₹22 LPA" },
    { id: "2", role: "PropTech Founder", salary: "Self-Employed" }
  ],
  testimonials: [
    { id: "1", quote: "Lotlite gave me the tools to succeed.", name: "Rahul S.", cohort: "Founding Cohort" }
  ],
  admissions: [
    { id: "1", title: "Application", description: "Submit your online application." },
    { id: "2", title: "Diagnostic Evaluation", description: "Take our unique assessment." }
  ],
  blogs: [
    { id: "1", title: "The Rise of PropTech", category: "PropTech", snippet: "How AI is changing real estate.", imageUrl: "/blog1.jpg", link: "/blog/rise-of-proptech" }
  ],
  faqs: [
    { id: "1", question: "Is this a degree program?", answer: "This is a 24-month immersive residential program." }
  ],
};
