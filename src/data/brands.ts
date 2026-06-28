export interface Brand {
  name: string;
  category: string;
  type: "independent" | "amazon";
  description: string;
  commissionRate: string;
  cookieDuration: string;
  color: string;
}

export const brands: Brand[] = [
  {
    name: "Alibaba",
    category: "B2B Marketplace",
    type: "independent",
    description: "The world's largest B2B wholesale marketplace connecting global buyers with suppliers.",
    commissionRate: "Up to 7%",
    cookieDuration: "30 days",
    color: "#FF6A00",
  },
  {
    name: "AliExpress",
    category: "E-commerce",
    type: "independent",
    description: "Global retail marketplace offering millions of products at unbeatable prices.",
    commissionRate: "Up to 9%",
    cookieDuration: "30 days",
    color: "#E62E04",
  },
  {
    name: "Anker",
    category: "Electronics",
    type: "independent",
    description: "Leading consumer electronics brand known for premium charging and audio products.",
    commissionRate: "Up to 8%",
    cookieDuration: "30 days",
    color: "#0FA958",
  },
  {
    name: "eufy",
    category: "Smart Home",
    type: "independent",
    description: "Smart home solutions including security cameras, robot vacuums, and home automation.",
    commissionRate: "Up to 10%",
    cookieDuration: "30 days",
    color: "#0078D4",
  },
  {
    name: "True Classic",
    category: "Apparel",
    type: "independent",
    description: "Premium men's basics and tees designed for fit, comfort, and everyday wear.",
    commissionRate: "Up to 12%",
    cookieDuration: "45 days",
    color: "#1A1A2E",
  },
  {
    name: "Our Place",
    category: "Home & Kitchen",
    type: "independent",
    description: "Beautifully designed cookware and kitchen essentials for the modern home.",
    commissionRate: "Up to 10%",
    cookieDuration: "30 days",
    color: "#D4661F",
  },
  {
    name: "Hexclad",
    category: "Cookware",
    type: "independent",
    description: "Hybrid stainless steel non-stick cookware trusted by professional chefs worldwide.",
    commissionRate: "Up to 8%",
    cookieDuration: "30 days",
    color: "#2C3E50",
  },
  {
    name: "Roborock",
    category: "Smart Home",
    type: "independent",
    description: "Advanced robot vacuums and smart cleaning solutions for modern homes.",
    commissionRate: "Up to 9%",
    cookieDuration: "30 days",
    color: "#0066CC",
  },
  {
    name: "Aiper",
    category: "Smart Home",
    type: "independent",
    description: "Cordless robotic pool cleaners making pool maintenance effortless and eco-friendly.",
    commissionRate: "Up to 11%",
    cookieDuration: "30 days",
    color: "#00B4D8",
  },
  {
    name: "Myprotein",
    category: "Health & Fitness",
    type: "independent",
    description: "Europe's leading online sports nutrition brand offering premium supplements.",
    commissionRate: "Up to 12%",
    cookieDuration: "45 days",
    color: "#D6001C",
  },
];

export const brandCategories = [
  "All",
  "Electronics",
  "Smart Home",
  "Apparel",
  "Home & Kitchen",
  "Cookware",
  "Health & Fitness",
  "E-commerce",
  "B2B Marketplace",
];
