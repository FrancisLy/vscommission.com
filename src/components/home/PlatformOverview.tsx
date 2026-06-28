import { Users, BarChart3, ShieldCheck, type LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionTitle from "@/components/common/SectionTitle";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Smart Publisher Matching",
    description:
      "Our AI-powered engine pairs your brand with the right publishers based on audience fit, vertical expertise, and historical performance data.",
  },
  {
    icon: BarChart3,
    title: "Transparent Tracking",
    description:
      "Real-time attribution and granular reporting on every click, conversion, and commission—across publisher, channel, and geography.",
  },
  {
    icon: ShieldCheck,
    title: "Global Compliance",
    description:
      "Multi-region compliance built in. Localized tax, privacy, and disclosure handling across the US, UK, Canada, and Australia.",
  },
];

export default function PlatformOverview() {
  return (
    <section className="section-padding bg-cloud">
      <div className="container">
        <SectionTitle
          eyebrow="Why VSCommission"
          title="Built for Performance Marketers"
          subtitle="Everything you need to launch, manage, and scale a high-performing affiliate program across global markets."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 120}>
              <div className="card-hover h-full rounded-2xl bg-white p-8 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-700">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
