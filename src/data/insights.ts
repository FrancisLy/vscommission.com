export interface Insight {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const insights: Insight[] = [
  {
    id: "affiliate-trends-2026",
    title: "5 Affiliate Marketing Trends Shaping 2026",
    category: "Industry Trends",
    excerpt: "From AI-powered matching to creator commerce, discover the trends redefining how brands and publishers collaborate for growth.",
    date: "June 15, 2026",
    readTime: "8 min read",
  },
  {
    id: "publisher-monetization-guide",
    title: "The Complete Publisher Monetization Guide",
    category: "Publisher Guide",
    excerpt: "Everything you need to know about maximizing earnings across coupon, content, influencer, and cashback channels.",
    date: "June 8, 2026",
    readTime: "12 min read",
  },
  {
    id: "cross-border-commerce",
    title: "Cross-Border Commerce: Expanding Across English Markets",
    category: "Strategy",
    excerpt: "How brands are leveraging the US, UK, Canada, and Australia as a unified English-speaking commerce corridor.",
    date: "May 28, 2026",
    readTime: "6 min read",
  },
  {
    id: "amazon-vs-independent",
    title: "Amazon vs. Independent Sites: Where Should Brands Invest?",
    category: "Analysis",
    excerpt: "A data-driven comparison of affiliate performance between Amazon Associates and independent publisher programs.",
    date: "May 20, 2026",
    readTime: "10 min read",
  },
  {
    id: "influencer-affiliate-roi",
    title: "Measuring Influencer Affiliate ROI: Beyond Vanity Metrics",
    category: "Measurement",
    excerpt: "Stop counting likes and start tracking revenue. Here's how top brands measure true influencer affiliate performance.",
    date: "May 12, 2026",
    readTime: "7 min read",
  },
  {
    id: "fraud-prevention",
    title: "Affiliate Fraud Prevention: A Brand's Complete Playbook",
    category: "Security",
    excerpt: "Learn how to identify, prevent, and eliminate the 7 most common types of affiliate fraud protecting your marketing budget.",
    date: "May 3, 2026",
    readTime: "9 min read",
  },
];
