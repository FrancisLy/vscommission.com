import { Link } from "react-router-dom";
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
  ArrowRight,
  Sparkles,
  Target,
  ShieldCheck,
  TrendingUp,
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

const matchingFeatures = [
  {
    icon: Target,
    title: "Audience Fit Scoring",
    desc: "We analyze your traffic, vertical, and engagement to surface brands your audience will actually convert on.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-First Network",
    desc: "Every brand is vetted for reliability, fair tracking, and on-time payments before it reaches you.",
  },
  {
    icon: TrendingUp,
    title: "Performance Signals",
    desc: "Offers are ranked by real conversion data, EPC, and payout history so you pick proven winners.",
  },
];

export default function PublishersNetwork() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-accent-400">
              Publisher Network
            </span>
            <h1 className="mt-6 text-display-lg text-white">
              10 Ways to{" "}
              <span className="text-gradient">Monetize Your Audience</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              Whatever your channel or content style, there's a partnership type
              built for it. Explore all ten and find your best fit.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Join the Network <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/publishers"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                Publisher Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publisher Types */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Partnership Types"
            title="Find your monetization model"
            subtitle="Ten distinct publisher types, each with its own earning profile and ideal audience."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {publisherTypes.map((type, i) => {
              const Icon = iconMap[type.icon];
              return (
                <ScrollReveal key={type.type} delay={(i % 2) * 100}>
                  <div className="h-full overflow-hidden rounded-2xl bg-white shadow-soft card-hover">
                    <div
                      className={`flex items-center gap-4 bg-gradient-to-br ${type.gradient} px-6 py-5`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                        {Icon && <Icon className="h-6 w-6 text-white" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wide text-white/80">
                          {type.type}
                        </span>
                        <h3 className="text-xl font-extrabold text-white">
                          {type.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="leading-relaxed text-ink-soft">
                        {type.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-cloud-dark pt-4">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                            Avg. Earning
                          </span>
                          <p className="font-bold text-accent-600">
                            {type.avgEarning}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {type.bestFor.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-cloud px-3 py-1 text-xs font-medium text-brand-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smart Matching */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <SectionTitle
            eyebrow="Smart Matching"
            title="We match you with the right brands"
            subtitle="Stop guessing which offers will convert. Our matching engine does the heavy lifting."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {matchingFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-soft card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-accent-400">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-700">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-8 py-14 text-center md:px-16 md:py-20">
            <Sparkles className="mx-auto h-10 w-10 text-accent-400" />
            <h2 className="mt-4 text-display-md text-white">
              Find your perfect brand matches
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-200">
              Create a free account and let our smart matching connect you with
              brands your audience will love to buy from.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Matched Free <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/advertisers"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                For Brands
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
