import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Percent } from "lucide-react";
import { brands } from "@/data/brands";
import ScrollReveal from "@/components/common/ScrollReveal";

const tabs = [
  { label: "All Brands", value: "all" },
  { label: "Independent Sites", value: "independent" },
  { label: "Amazon Sellers", value: "amazon" },
];

export default function Brands() {
  const [tab, setTab] = useState("all");

  const filtered = tab === "all" ? brands : brands.filter((b) => b.type === tab);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-accent-400">
              Our Partners
            </div>
            <h1 className="text-display-lg text-white">
              100+ Brands Trust <span className="text-gradient">VSCommission</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              From global marketplaces to fast-growing DTC labels, brands across every
              vertical rely on our network to scale revenue and reach new customers.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-cloud-dark bg-cloud">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setTab(t.value)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  tab === t.value
                    ? "bg-brand-700 text-white shadow-soft"
                    : "bg-white text-ink-soft hover:bg-brand-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="section-padding">
        <div className="container">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-ink-muted">
              No brands in this category yet. Check back soon!
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((b) => (
                <ScrollReveal key={b.name}>
                  <article className="overflow-hidden rounded-2xl bg-white shadow-soft card-hover">
                    <div className="h-2" style={{ backgroundColor: b.color }}></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-bold text-brand-700">{b.name}</h3>
                          <span className="text-sm font-medium text-accent-500">
                            {b.category}
                          </span>
                        </div>
                        <span className="rounded-lg bg-cloud px-2.5 py-1 text-xs font-semibold capitalize text-ink-soft">
                          {b.type}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                        {b.description}
                      </p>
                      <div className="mt-5 flex items-center gap-5 border-t border-cloud-dark pt-4">
                        <div className="flex items-center gap-1.5">
                          <Percent className="h-4 w-4 text-accent-500" />
                          <span className="text-sm font-bold text-brand-700">
                            {b.commissionRate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-accent-500" />
                          <span className="text-sm font-bold text-brand-700">
                            {b.cookieDuration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-brand-700 to-brand-600 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Don't see your brand?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-200">
              Join 100+ brands already growing with VSCommission. Get your affiliate
              program live in under 48 hours.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Join Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
