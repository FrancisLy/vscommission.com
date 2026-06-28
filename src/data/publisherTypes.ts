export interface PublisherType {
  type: string;
  title: string;
  icon: string;
  description: string;
  avgEarning: string;
  bestFor: string[];
  gradient: string;
}

export const publisherTypes: PublisherType[] = [
  {
    type: "Coupon",
    title: "Coupon Sites",
    icon: "Ticket",
    description: "Deal-hunting destinations where price-conscious shoppers find the best discounts and promo codes before checkout.",
    avgEarning: "$2,500 - $8,000/month",
    bestFor: ["Retail brands", "DTC stores", "Consumer goods"],
    gradient: "from-orange-400 to-red-500",
  },
  {
    type: "Cashback",
    title: "Cashback Platforms",
    icon: "Wallet",
    description: "Loyalty-driven portals that reward shoppers with a percentage of their purchase back, driving high-intent conversions.",
    avgEarning: "$5,000 - $20,000/month",
    bestFor: ["Large retailers", "Marketplaces", "Subscription services"],
    gradient: "from-green-400 to-teal-500",
  },
  {
    type: "Media Buying",
    title: "Media Buying",
    icon: "Megaphone",
    description: "Performance marketers running paid campaigns across display, native, and social channels at scale.",
    avgEarning: "$8,000 - $50,000/month",
    bestFor: ["High-AOV brands", "Lead gen", "App installs"],
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    type: "PPC",
    title: "PPC Specialists",
    icon: "MousePointerClick",
    description: "Search engine marketing experts bidding on commercial keywords to capture high-intent traffic at the moment of decision.",
    avgEarning: "$3,000 - $15,000/month",
    bestFor: ["Comparison products", "Service businesses", "Local brands"],
    gradient: "from-purple-400 to-pink-500",
  },
  {
    type: "Influencer",
    title: "Influencers",
    icon: "Star",
    description: "Content creators with engaged audiences across Instagram, TikTok, YouTube, and emerging social platforms.",
    avgEarning: "$1,500 - $30,000/month",
    bestFor: ["Beauty & fashion", "Lifestyle brands", "Consumer tech"],
    gradient: "from-pink-400 to-rose-500",
  },
  {
    type: "Content",
    title: "Content Publishers",
    icon: "FileText",
    description: "Bloggers, reviewers, and editorial sites creating in-depth buying guides and product comparisons that rank.",
    avgEarning: "$2,000 - $12,000/month",
    bestFor: ["SaaS products", "Electronics", "Financial services"],
    gradient: "from-amber-400 to-orange-500",
  },
  {
    type: "Email",
    title: "Email Marketers",
    icon: "Mail",
    description: "Newsletter operators and email list owners reaching highly engaged, segmented subscriber audiences.",
    avgEarning: "$3,000 - $18,000/month",
    bestFor: ["DTC brands", "Course creators", "Subscription boxes"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    type: "Display",
    title: "Display Networks",
    icon: "LayoutGrid",
    description: "Programmatic advertising networks with premium publisher inventory and advanced retargeting capabilities.",
    avgEarning: "$5,000 - $25,000/month",
    bestFor: ["Brand awareness", "Retargeting", "Mid-funnel"],
    gradient: "from-violet-400 to-purple-500",
  },
  {
    type: "Mobile",
    title: "Mobile Publishers",
    icon: "Smartphone",
    description: "Mobile-first content sites and apps optimized for on-the-go shoppers and in-app purchase experiences.",
    avgEarning: "$2,500 - $14,000/month",
    bestFor: ["Mobile apps", "Gaming", "Quick commerce"],
    gradient: "from-emerald-400 to-green-500",
  },
  {
    type: "App",
    title: "App Developers",
    icon: "AppWindow",
    description: "Application developers integrating affiliate offers natively into shopping, reward, and cashback apps.",
    avgEarning: "$4,000 - $22,000/month",
    bestFor: ["Reward apps", "Shopping apps", "Fintech"],
    gradient: "from-fuchsia-400 to-pink-500",
  },
];
