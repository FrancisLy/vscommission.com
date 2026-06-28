import {
  Ticket,
  Wallet,
  Megaphone,
  MousePointerClick,
  Star,
  FileText,
  Mail,
  LayoutGrid,
  Smartphone,
  AppWindow,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionTitle from "@/components/common/SectionTitle";
import { publisherTypes } from "@/data/publisherTypes";

const iconMap: Record<string, LucideIcon> = {
  Ticket,
  Wallet,
  Megaphone,
  MousePointerClick,
  Star,
  FileText,
  Mail,
  LayoutGrid,
  Smartphone,
  AppWindow,
};

export default function PublisherTypes() {
  return (
    <section className="section-padding bg-brand-700">
      <div className="container">
        <SectionTitle
          light
          eyebrow="Diverse Network"
          title="10 Ways to Monetize Your Audience"
          subtitle="From coupon sites to influencers, our network spans every publisher type—each optimized for different audiences and conversion models."
        />

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {publisherTypes.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.type} delay={index * 60}>
                <div className="group flex h-full flex-col items-center rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    {Icon && <Icon className="h-7 w-7 text-white" />}
                  </div>
                  <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-200">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
