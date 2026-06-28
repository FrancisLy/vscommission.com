import { Link } from "react-router-dom";
import {
  Target,
  ShieldCheck,
  BarChart3,
  Globe,
  Zap,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionTitle from "@/components/common/SectionTitle";
import { advertiserBenefits } from "@/data/stats";

const iconMap: Record<string, LucideIcon> = {
  Target,
  ShieldCheck,
  BarChart3,
  Globe,
  Zap,
  Handshake,
};

const steps = [
  {
    title: "Apply & Get Approved",
    description:
      "Submit your application and get approved by our partnerships team within 24 hours.",
  },
  {
    title: "Set Your Commissions",
    description:
      "Choose your pricing model and rates. We benchmark competitive payouts for your vertical.",
  },
  {
    title: "We Recruit Publishers",
    description:
      "Our team hand-picks publishers that match your audience, vertical, and performance goals.",
  },
  {
    title: "Track & Optimize",
    description:
      "Monitor every click and conversion in real time, then optimize with your account manager.",
  },
];

const pricingModels = [
  {
    name: "CPA",
    full: "Cost Per Action",
    description:
      "Pay a fixed amount for each completed action — a sale, signup, or download.",
    bestFor: "Lead generation, app installs, subscription signups",
  },
  {
    name: "CPS",
    full: "Cost Per Sale",
    description:
      "Pay a percentage or flat fee for every confirmed sale driven by a publisher.",
    bestFor: "E-commerce, retail, DTC brands, marketplaces",
  },
  {
    name: "CPL",
    full: "Cost Per Lead",
    description:
      "Pay for qualified leads that match your target customer profile and intent.",
    bestFor: "B2B services, finance, insurance, education",
  },
  {
    name: "CPC",
    full: "Cost Per Click",
    description:
      "Pay for quality traffic sent to your site, filtered by our fraud-detection layer.",
    bestFor: "Content sites, brand awareness, comparison shopping",
  },
];

export default function Advertisers() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-accent-400">
              For Advertisers
            </span>
            <h1 className="mt-6 text-display-lg text-white">
              Grow Your Brand with{" "}
              <span className="text-gradient">Performance Marketing</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              Pay only for results. Tap into 10,000+ vetted publishers across
              four markets and scale your sales with fraud-protected,
              fully-managed affiliate programs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Start Your Program <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/advertisers/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <SectionTitle
            eyebrow="Why VSCommission"
            title="Everything you need to scale"
            subtitle="A fully-managed platform built to grow your brand safely, transparently, and profitably."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advertiserBenefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <ScrollReveal key={benefit.title}>
                  <div className="h-full rounded-2xl bg-white p-8 shadow-soft card-hover">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-brand-700">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="How It Works"
            title="From signup to first sale in days"
            subtitle="A guided, done-for-you launch so you can focus on your brand while we build your program."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className="relative text-center md:text-left">
                  {i < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+2rem)] top-6 hidden h-0.5 w-[calc(100%-2rem)] bg-cloud-dark md:block" />
                  )}
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-white shadow-glow md:mx-0">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-700">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <SectionTitle
            eyebrow="Pricing Models"
            title="Pay for the results that matter"
            subtitle="Choose the model that fits your goals. Mix and match across campaigns anytime."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pricingModels.map((model) => (
              <ScrollReveal key={model.name}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-soft card-hover">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-brand-700 px-3 py-1 text-sm font-bold text-white">
                      {model.name}
                    </span>
                    <h3 className="text-lg font-bold text-brand-700">
                      {model.full}
                    </h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    {model.description}
                  </p>
                  <div className="mt-5 border-t border-cloud-dark pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Best for
                    </span>
                    <p className="mt-1 text-sm font-medium text-brand-700">
                      {model.bestFor}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="rounded-3xl bg-hero-gradient px-8 py-14 text-center md:px-16 md:py-20">
            <h2 className="text-display-md text-white">
              Ready to launch your program?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-200">
              Join 100+ brands scaling on VSCommission. Get live in 48 hours
              with a dedicated team behind you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
