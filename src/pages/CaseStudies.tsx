import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import ScrollReveal from "@/components/common/ScrollReveal";

const categories = [
  "All",
  "Electronics",
  "Apparel",
  "Smart Home",
  "Cookware",
  "Health & Fitness",
];

export default function CaseStudies() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === selected);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-accent-400">
              Case Studies
            </div>
            <h1 className="text-display-lg text-white">
              Real Results from <span className="text-gradient">Real Brands</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              Discover how leading brands across electronics, apparel, smart home, and more
              have driven measurable growth through our affiliate network.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-cloud-dark bg-cloud">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  selected === cat
                    ? "bg-brand-700 text-white shadow-soft"
                    : "bg-white text-ink-soft hover:bg-brand-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Grid */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cs) => (
              <ScrollReveal key={cs.id}>
                <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft card-hover">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-lg bg-brand-50 px-3 py-1 text-sm font-bold text-brand-700">
                      {cs.brand}
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                      {cs.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-brand-700">
                    {cs.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {cs.summary}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-cloud p-4">
                    {cs.results.slice(0, 2).map((r) => (
                      <div key={r.label}>
                        <div className="text-xl font-extrabold text-accent-500">
                          {r.value}
                        </div>
                        <div className="text-xs text-ink-muted">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${cs.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-colors hover:text-accent-500"
                  >
                    Read Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
