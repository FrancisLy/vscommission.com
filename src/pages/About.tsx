import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { platformStats } from "@/data/stats";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionTitle from "@/components/common/SectionTitle";

const markets = [
  { flag: "🇺🇸", name: "United States", info: "Largest affiliate market with a diverse consumer base." },
  { flag: "🇬🇧", name: "United Kingdom", info: "Mature e-commerce and a strong publisher ecosystem." },
  { flag: "🇨🇦", name: "Canada", info: "High-value shoppers with strong cross-border buying." },
  { flag: "🇦🇺", name: "Australia", info: "A fast-growing digital commerce market." },
];

const values = [
  { icon: ShieldCheck, title: "Transparency", desc: "Full visibility into every click, conversion, and commission. No hidden fees, no black boxes." },
  { icon: TrendingUp, title: "Performance", desc: "We measure success by your results. Every decision is driven by data and ROI." },
  { icon: Handshake, title: "Partnership", desc: "We treat your growth as our own. Long-term relationships over short-term wins." },
  { icon: Lightbulb, title: "Innovation", desc: "Constantly evolving our technology to stay ahead of an ever-changing market." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-accent-400">
              About Us
            </div>
            <h1 className="text-display-lg text-white">
              Building the Future of <span className="text-gradient">Affiliate Marketing</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              We're on a mission to connect global brands with the world's best publishers,
              creating partnerships that drive real, measurable growth across English-speaking markets.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-wider text-accent-500">
                Our Story
              </div>
              <h2 className="text-display-md text-brand-700">
                From a simple idea to a global network
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  Founded in 2020, VSCommission started with a clear vision: make affiliate
                  marketing work better for everyone involved. We saw brands struggling to find
                  quality publishers and creators struggling to monetize their audiences effectively.
                </p>
                <p>
                  Today, we connect over 100 global brands with 10,000+ vetted publishers across
                  the US, UK, Canada, and Australia. Our smart matching technology, fraud prevention
                  systems, and dedicated team have driven over $50M in annual commissions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent-gradient opacity-10 blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-brand-700 p-6 text-white">
                    <div className="text-4xl font-extrabold text-accent-400">2020</div>
                    <div className="mt-1 text-sm text-brand-200">Founded</div>
                  </div>
                  <div className="rounded-2xl bg-accent-500 p-6 text-white">
                    <div className="text-4xl font-extrabold">100+</div>
                    <div className="mt-1 text-sm text-white/90">Brand Partners</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl bg-cloud p-6">
                    <div className="text-4xl font-extrabold text-brand-700">10K+</div>
                    <div className="mt-1 text-sm text-ink-soft">Publishers</div>
                  </div>
                  <div className="rounded-2xl bg-brand-600 p-6 text-white">
                    <div className="text-4xl font-extrabold text-accent-400">$50M+</div>
                    <div className="mt-1 text-sm text-brand-200">Annual Payouts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-brand-700 py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {platformStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-extrabold text-accent-400 md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 font-semibold text-white">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Our Purpose"
            title="Mission & Vision"
            subtitle="The principles that guide every decision we make."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-2xl border border-cloud-dark bg-cloud p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-brand-700">Our Mission</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                  To build the most trusted and transparent affiliate platform, empowering brands
                  and publishers to grow together through genuine, performance-driven partnerships.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="h-full rounded-2xl border border-cloud-dark bg-cloud p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                  <Eye className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-brand-700">Our Vision</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                  A world where every brand can reach its ideal customers through authentic
                  publisher relationships, and every creator can build a sustainable business.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <SectionTitle
            eyebrow="Our Markets"
            title="Serving the English-Speaking World"
            subtitle="One platform, four core markets with localized support and compliance."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((m) => (
              <ScrollReveal key={m.name}>
                <div className="h-full rounded-2xl bg-white p-6 text-center shadow-soft card-hover">
                  <div className="text-5xl">{m.flag}</div>
                  <h3 className="mt-4 text-lg font-bold text-brand-700">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.info}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="The core beliefs that shape our culture and our product."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <ScrollReveal key={v.title}>
                <div className="h-full rounded-2xl border border-cloud-dark p-6 card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-brand-700">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-700">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display-md text-white">Ready to grow with us?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-200">
              Whether you're a brand looking to scale or a publisher ready to earn more, we'd
              love to partner with you.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
