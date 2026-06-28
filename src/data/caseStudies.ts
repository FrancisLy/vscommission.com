export interface CaseStudy {
  id: string;
  brand: string;
  category: string;
  title: string;
  summary: string;
  results: { label: string; value: string }[];
  challenge: string;
  solution: string;
  outcome: string;
  duration: string;
  publisherTypes: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "anker-global-expansion",
    brand: "Anker",
    category: "Electronics",
    title: "Anker Scales Global Revenue by 320% Across 4 Markets",
    summary: "How VSCommission helped Anker expand their affiliate program across US, UK, Canada, and Australia using a diversified publisher mix.",
    results: [
      { label: "Revenue Growth", value: "+320%" },
      { label: "New Publishers", value: "850+" },
      { label: "Conversion Rate", value: "4.8%" },
      { label: "ROAS", value: "12.5x" },
    ],
    challenge: "Anker needed to scale their affiliate presence beyond Amazon into DTC channels while maintaining brand consistency across four English-speaking markets with different consumer behaviors.",
    solution: "We deployed a multi-channel strategy combining Content publishers for SEO authority, Influencers for social proof, and Cashback platforms for conversion. Our smart matching engine paired Anker with 850+ vetted publishers across all four regions.",
    outcome: "Within 6 months, Anker saw a 320% revenue increase through affiliate channels, with a 4.8% conversion rate and 12.5x ROAS. The diversified publisher mix reduced dependency on any single channel by 60%.",
    duration: "6 months",
    publisherTypes: ["Content", "Influencer", "Cashback", "PPC"],
  },
  {
    id: "trueclassic-creator-program",
    brand: "True Classic",
    category: "Apparel",
    title: "True Classic's Creator Program Drives 5x ROAS",
    summary: "A DTC apparel brand leveraged influencer partnerships to build authentic social proof and drive record-breaking sales.",
    results: [
      { label: "ROAS", value: "5.2x" },
      { label: "Creator Content", value: "1,200+ posts" },
      { label: "Engagement Rate", value: "8.7%" },
      { label: "Revenue", value: "$2.4M" },
    ],
    challenge: "True Classic wanted to stand out in a crowded menswear market by building genuine creator partnerships that went beyond one-off sponsored posts.",
    solution: "We built a tiered influencer program connecting True Classic with 200+ creators across Instagram, TikTok, and YouTube. Our platform handled tracking, payments, and performance analytics for every partnership.",
    outcome: "The program generated 1,200+ pieces of authentic content, achieved 5.2x ROAS, and drove $2.4M in attributable revenue in the first quarter alone.",
    duration: "3 months",
    publisherTypes: ["Influencer", "Content", "Email"],
  },
  {
    id: "hexclad-content-strategy",
    brand: "Hexclad",
    category: "Cookware",
    title: "Hexclad Cooks Up 280% Growth with Content Strategy",
    summary: "Premium cookware brand Hexclad partnered with content publishers and review sites to dominate search and build trust.",
    results: [
      { label: "Revenue Growth", value: "+280%" },
      { label: "Organic Traffic", value: "+450%" },
      { label: "Avg. Order Value", value: "$187" },
      { label: "Top Rankings", value: "50+ keywords" },
    ],
    challenge: "Hexclad needed to build authority in the competitive cookware space and capture shoppers researching premium pans before purchase.",
    solution: "We orchestrated a content syndication strategy with top-tier review sites, cooking blogs, and comparison publishers. Our team created a comprehensive buying guide program that positioned Hexclad in high-intent search moments.",
    outcome: "The content-first approach drove 280% revenue growth, increased organic traffic by 450%, and secured top-3 rankings for 50+ commercial keywords including 'best hybrid cookware' and 'non-stick stainless pans'.",
    duration: "8 months",
    publisherTypes: ["Content", "Media Buying", "Display"],
  },
  {
    id: "roborock-launch",
    brand: "Roborock",
    category: "Smart Home",
    title: "Roborock Launches Q-Revo Series to Record Sales",
    summary: "A coordinated multi-publisher launch strategy helped Roborock's newest robot vacuum line achieve market-leading performance.",
    results: [
      { label: "Launch Revenue", value: "$1.8M" },
      { label: "Units Sold", value: "12,000+" },
      { label: "Brand Awareness", value: "+340%" },
      { label: "Publisher Reach", value: "15M+ audience" },
    ],
    challenge: "Roborock needed to make a splash with their Q-Revo launch in a market dominated by established competitors with larger budgets.",
    solution: "We synchronized a launch campaign across 6 publisher types simultaneously: Influencers for unboxing content, Content sites for reviews, Cashback for conversion, Email for warm audiences, and PPC for intent capture.",
    outcome: "The synchronized launch generated $1.8M in revenue, sold 12,000+ units, and reached 15M+ consumers across all channels in the first 30 days.",
    duration: "1 month",
    publisherTypes: ["Influencer", "Content", "Cashback", "Email", "PPC", "Media Buying"],
  },
  {
    id: "myprotein-subscription",
    brand: "Myprotein",
    category: "Health & Fitness",
    title: "Myprotein Boosts Repeat Orders by 190% with Loyalty Strategy",
    summary: "A strategic cashback and loyalty integration transformed one-time buyers into repeat customers for the supplement giant.",
    results: [
      { label: "Repeat Orders", value: "+190%" },
      { label: "Customer LTV", value: "+65%" },
      { label: "Active Affiliates", value: "1,500+" },
      { label: "Monthly Revenue", value: "$3.2M" },
    ],
    challenge: "Myprotein struggled with customer retention in a highly commoditized supplement market where shoppers frequently switched brands for the best deal.",
    solution: "We integrated Myprotein's program with top cashback platforms and built a tiered commission structure that rewarded publishers for driving repeat purchases, not just first-time conversions.",
    outcome: "The loyalty-focused strategy increased repeat orders by 190%, boosted customer lifetime value by 65%, and grew the active affiliate base to 1,500+ publishers generating $3.2M monthly.",
    duration: "5 months",
    publisherTypes: ["Cashback", "Content", "Email", "Mobile"],
  },
  {
    id: "aiper-niche-expansion",
    brand: "Aiper",
    category: "Smart Home",
    title: "Aiper Captures Niche Pool Care Market with Targeted Affiliates",
    summary: "An emerging smart pool cleaner brand used hyper-targeted publisher partnerships to dominate a niche category.",
    results: [
      { label: "Market Share", value: "32%" },
      { label: "Revenue Growth", value: "+410%" },
      { label: "Niche Sites", value: "120+" },
      { label: "Avg. Conversion", value: "6.2%" },
    ],
    challenge: "Aiper needed to reach a very specific audience—pool owners—in a market with limited traditional advertising channels.",
    solution: "We identified and partnered with 120+ niche publishers including pool maintenance blogs, home improvement forums, and seasonal content sites. Our team created custom landing pages for each publisher segment.",
    outcome: "Aiper captured 32% market share in the robotic pool cleaner category, achieved 410% revenue growth, and maintained a 6.2% conversion rate through hyper-relevant publisher partnerships.",
    duration: "7 months",
    publisherTypes: ["Content", "Influencer", "PPC", "Display"],
  },
];
