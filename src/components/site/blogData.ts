export type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
};

export const blogData: BlogPost[] = [
  {
    id: 1,
    category: "PropTech AI",
    title: "The Future of Automated Property Valuation",
    excerpt:
      "How machine learning models are predicting micro-market price movements with 94% accuracy, outperforming traditional appraisal methods.",
    date: "May 10, 2026",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: "CRM Intelligence",
    title: "Beyond the Rolodex: Data-Driven Real Estate CRM",
    excerpt:
      "Building a centralized data stack to track buyer intent, automate follow-ups, and forecast capital flow using spatial data.",
    date: "Apr 22, 2026",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "FinTech & Blockchain",
    title: "Tokenizing the Skyline: Fractional Ownership",
    excerpt:
      "Breaking down barriers for retail investors to own premium commercial real estate in tier-1 cities via blockchain ledgers.",
    date: "Apr 8, 2026",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: "Smart Infrastructure",
    title: "IoT in Eco-Smart Urban Townships",
    excerpt:
      "Integrating IoT-driven energy grids and automated rainwater harvesting into 50-acre mixed-use developments.",
    date: "Mar 18, 2026",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
  },
];
