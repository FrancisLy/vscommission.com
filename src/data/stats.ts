export interface Stat {
  value: string;
  label: string;
  description: string;
}

export const platformStats: Stat[] = [
  {
    value: "100+",
    label: "Global Brands",
    description: "Trusted advertisers across diverse verticals",
  },
  {
    value: "10,000+",
    label: "Active Publishers",
    description: "Vetted partners across 10 publisher types",
  },
  {
    value: "$50M+",
    label: "Annual Commissions",
    description: "Paid out to our publisher network yearly",
  },
  {
    value: "4.8%",
    label: "Avg. Conversion Rate",
    description: "Across all campaigns and verticals",
  },
];

export const homeStats: Stat[] = [
  {
    value: "120M+",
    label: "Monthly Reach",
    description: "Consumers reached across our network",
  },
  {
    value: "2.4M",
    label: "Annual Transactions",
    description: "Sales driven through our platform",
  },
  {
    value: "$50M+",
    label: "Annual Commissions",
    description: "Paid to publishers each year",
  },
  {
    value: "4",
    label: "Core Markets",
    description: "US, UK, Canada & Australia",
  },
];

export const advertiserBenefits = [
  {
    icon: "Target",
    title: "Precision Publisher Matching",
    description: "Our AI-powered matching engine connects your brand with the right publishers based on audience fit, vertical expertise, and historical performance data.",
  },
  {
    icon: "ShieldCheck",
    title: "Fraud Prevention",
    description: "Advanced multi-layer fraud detection blocks bot traffic, brand bidding, and cookie stuffing before they impact your budget. Real-time monitoring, 24/7.",
  },
  {
    icon: "BarChart3",
    title: "Deep Analytics",
    description: "Granular reporting on every click, conversion, and commission. Track performance by publisher, channel, geography, and creative down to the dollar.",
  },
  {
    icon: "Globe",
    title: "Global Reach",
    description: "One integration unlocks publishers across the US, UK, Canada, and Australia. Localized compliance, payments, and support in every market.",
  },
  {
    icon: "Zap",
    title: "Fast Onboarding",
    description: "Get your program live in under 48 hours. Our team handles technical setup, tracking implementation, and publisher recruitment from day one.",
  },
  {
    icon: "Handshake",
    title: "Dedicated Management",
    description: "Every advertiser gets a dedicated account manager who actively recruits publishers, optimizes campaigns, and grows your program month over month.",
  },
];

export const publisherBenefits = [
  {
    icon: "DollarSign",
    title: "Higher Commissions",
    description: "Access exclusive rates from 100+ premium brands. Our publishers earn 15-25% more than industry average through negotiated deals and bonus structures.",
  },
  {
    icon: "Layers",
    title: "10 Partnership Types",
    description: "Whether you run a coupon site, content blog, or TikTok account, we have a monetization model that fits your audience and content style perfectly.",
  },
  {
    icon: "CalendarClock",
    title: "Reliable Payments",
    description: "Net-30 payments guaranteed. Get paid via PayPal, wire transfer, or ACH in USD, GBP, CAD, or AUD. No minimum threshold for established publishers.",
  },
  {
    icon: "Rocket",
    title: "Growth Resources",
    description: "Free access to conversion tools, link generators, product feeds, and a knowledge base packed with growth strategies from top-earning publishers.",
  },
];
