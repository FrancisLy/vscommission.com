import { Link } from "react-router-dom";
import {
  ArrowRight,
  Store,
  Package,
  ShoppingCart,
  Boxes,
  Globe,
  CreditCard,
  Code2,
  Server,
  Check,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionTitle from "@/components/common/SectionTitle";

const timeline = [
  {
    period: "Day 1",
    title: "Application & Discovery Call",
    detail: "A 30-minute call to understand your goals, vertical, and audience. We map out your program structure and commission strategy.",
  },
  {
    period: "Day 1-2",
    title: "Technical Setup & Tracking Installation",
    detail: "Our engineers install tracking pixels, configure conversion events, and validate data flow end to end.",
  },
  {
    period: "Day 2",
    title: "Publisher Recruitment Begins",
    detail: "Your dedicated manager starts hand-picking publishers that match your audience and performance targets.",
  },
  {
    period: "Week 1",
    title: "First Conversions",
    detail: "Early publishers go live. You'll see your first tracked clicks and conversions within days of launch.",
  },
  {
    period: "Week 2-4",
    title: "Campaign Optimization",
    detail: "We analyze performance, test commission rates and creatives, then double down on what's working.",
  },
  {
    period: "Month 2+",
    title: "Scale & Expand",
    detail: "Add new publisher types, enter new markets, and unlock bonus structures to accelerate growth.",
  },
];

const integrations: { name: string; desc: string; icon: LucideIcon }[] = [
  { name: "Shopify", desc: "One-click app install", icon: Store },
  { name: "WooCommerce", desc: "WordPress plugin", icon: Package },
  { name: "Amazon", desc: "Amazon Associates API", icon: ShoppingCart },
  { name: "Magento", desc: "Native extension", icon: Boxes },
  { name: "BigCommerce", desc: "App marketplace", icon: Globe },
  { name: "Stripe", desc: "Checkout & payments", icon: CreditCard },
  { name: "Custom API", desc: "REST endpoints", icon: Code2 },
  { name: "Server-to-Server", desc: "S2S postbacks", icon: Server },
];

const requirements = [
  {
    title: "Live Website",
    desc: "A working e-commerce or product site with a checkout or conversion flow.",
  },
  {
    title: "Product Feed",
    desc: "A catalog or feed (CSV/XML/API) so publishers can promote your offers accurately.",
  },
  {
    title: "Payment Method",
    desc: "A valid payment method on file to fund your commission payouts.",
  },
];

export default function AdvertisersHowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-accent-400">
              Onboarding
            </span>
            <h1 className="mt-6 text-display-lg text-white">
              Launch Your Program in{" "}
              <span className="text-gradient">48 Hours</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              No long integrations or guessing games. Our team handles setup,
              tracking, and recruitment so you can start driving sales fast.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Start Onboarding <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/advertisers"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                Advertiser Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="The Timeline"
            title="Your path to first sale"
            subtitle="A clear, milestone-driven rollout from kickoff to scale."
          />
          <div className="mx-auto mt-16 max-w-3xl">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* line */}
                  {i < timeline.length - 1 && (
                    <span className="absolute left-[1.4rem] top-12 h-[calc(100%-3rem)] w-0.5 bg-cloud-dark" />
                  )}
                  <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-white text-sm font-bold text-accent-500">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block rounded-full bg-accent-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-600">
                      {item.period}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-brand-700">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <SectionTitle
            eyebrow="Integrations"
            title="Works with your stack"
            subtitle="Plug into the platforms you already use. Custom builds welcome."
          />
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {integrations.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 60}>
                <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-700">{item.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="What You Need"
            title="Three things to get started"
            subtitle="Keep it simple — if you have these, we can launch."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {requirements.map((req, i) => (
              <ScrollReveal key={req.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-cloud-dark bg-white p-8 shadow-soft card-hover">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-brand-700">
                    {req.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {req.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <div className="rounded-3xl bg-hero-gradient px-8 py-14 text-center md:px-16 md:py-20">
            <h2 className="text-display-md text-white">
              Let's get you live this week
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-200">
              Book your discovery call today and watch your program go from
              zero to converting in just 48 hours.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Book a Call <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/publishers"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore Publishers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
