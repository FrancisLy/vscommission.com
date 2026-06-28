import { Link } from "react-router-dom";
import {
  DollarSign,
  Layers,
  CalendarClock,
  Rocket,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionTitle from "@/components/common/SectionTitle";
import { publisherBenefits } from "@/data/stats";

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Layers,
  CalendarClock,
  Rocket,
};

const earningTiers = [
  {
    name: "Starter",
    range: "$500 - $2K/mo",
    desc: "New publishers finding their footing with a few active brand partnerships.",
    highlight: false,
  },
  {
    name: "Growing",
    range: "$2K - $10K/mo",
    desc: "Established publishers with optimized funnels and multiple active campaigns.",
    highlight: true,
  },
  {
    name: "Pro",
    range: "$10K - $50K+/mo",
    desc: "Top performers running scaled campaigns across channels and markets.",
    highlight: false,
  },
];

const growthTiers = [
  {
    name: "Bronze",
    req: "0 - $1K/mo",
    perks: ["Access to 40+ brands", "Standard commission rates", "Email support"],
    gradient: "from-amber-500 to-orange-700",
  },
  {
    name: "Silver",
    req: "$1K - $5K/mo",
    perks: ["Access to 80+ brands", "Bonus commissions", "Priority support"],
    gradient: "from-slate-300 to-slate-500",
  },
  {
    name: "Gold",
    req: "$5K - $20K/mo",
    perks: ["All 100+ brands", "Exclusive offers", "Dedicated manager"],
    gradient: "from-yellow-400 to-amber-600",
  },
  {
    name: "Platinum",
    req: "$20K+/mo",
    perks: ["Custom rates", "Early offer access", "VIP concierge"],
    gradient: "from-cyan-400 to-blue-600",
  },
];

const joinSteps = [
  {
    title: "Create Your Account",
    desc: "Sign up free and tell us about your audience, channels, and traffic sources.",
  },
  {
    title: "Get Matched With Brands",
    desc: "Our smart matching suggests brands that fit your audience and content style.",
  },
  {
    title: "Start Earning",
    desc: "Grab your links, publish, and get paid reliably every 30 days.",
  },
];

export default function Publishers() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-accent-400">
              For Publishers
            </span>
            <h1 className="mt-6 text-display-lg text-white">
              Turn Your Audience Into{" "}
              <span className="text-gradient">Income</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              Promote 100+ premium brands and earn commissions on every sale you
              drive. Higher rates, reliable payments, and tools to grow faster.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Become a Publisher <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/publishers/network"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                See Monetization Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Why Join"
            title="Built for publishers who want more"
            subtitle="Better rates, more options, and the support to scale your earnings."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {publisherBenefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <ScrollReveal key={benefit.title}>
                  <div className="h-full rounded-2xl bg-cloud p-8 card-hover">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 text-white">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-brand-700">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <SectionTitle
            eyebrow="Earnings Potential"
            title="What you could earn"
            subtitle="Realistic ranges based on active publishers across our network."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {earningTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 100}>
                <div
                  className={`relative h-full rounded-2xl p-8 card-hover ${
                    tier.highlight
                      ? "bg-brand-700 text-white shadow-card"
                      : "bg-white shadow-soft"
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute right-6 top-6 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`text-sm font-bold uppercase tracking-wide ${
                      tier.highlight ? "text-accent-400" : "text-accent-500"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-2 text-3xl font-extrabold ${
                      tier.highlight ? "text-white" : "text-brand-700"
                    }`}
                  >
                    {tier.range}
                  </p>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      tier.highlight ? "text-brand-200" : "text-ink-soft"
                    }`}
                  >
                    {tier.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Path */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Growth Path"
            title="Climb the tier ladder"
            subtitle="Unlock richer rewards as your monthly earnings grow."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {growthTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 100}>
                <div className="h-full overflow-hidden rounded-2xl bg-white shadow-soft card-hover">
                  <div
                    className={`bg-gradient-to-r ${tier.gradient} px-6 py-5`}
                  >
                    <h3 className="text-xl font-extrabold text-white">
                      {tier.name}
                    </h3>
                    <p className="text-sm font-medium text-white/80">
                      {tier.req}
                    </p>
                  </div>
                  <ul className="space-y-3 p-6">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2 text-sm text-ink-soft"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <SectionTitle
            eyebrow="How to Join"
            title="Three steps to your first commission"
            subtitle="Free to join. No minimums to start."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {joinSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-xl font-bold text-white shadow-glow">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-700">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Join Free Today <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
