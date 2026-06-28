import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Target, Lightbulb, TrendingUp } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import ScrollReveal from "@/components/common/ScrollReveal";

const contentSections = [
  { key: "challenge", icon: Target, label: "The Challenge" },
  { key: "solution", icon: Lightbulb, label: "Our Solution" },
  { key: "outcome", icon: TrendingUp, label: "The Outcome" },
];

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find((c) => c.id === id);

  if (!study) {
    return (
      <section className="bg-hero-gradient pt-32 pb-20 md:pb-32">
        <div className="container text-center">
          <h1 className="text-display-md text-white">Case Study Not Found</h1>
          <p className="mx-auto mt-4 max-w-md text-brand-200">
            We couldn't find the case study you're looking for.
          </p>
          <Link to="/case-studies" className="btn-primary mt-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>
      </section>
    );
  }

  const related = caseStudies.filter((c) => c.id !== study.id).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
        <div className="container relative">
          <Link
            to="/case-studies"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Case Studies
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-lg bg-accent-500 px-3 py-1 text-sm font-bold text-white">
              {study.brand}
            </span>
            <span className="rounded-lg bg-white/10 px-3 py-1 text-sm font-medium text-brand-200">
              {study.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-brand-200">
              <Clock className="h-4 w-4" />
              {study.duration}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-display-md text-white">{study.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
            {study.summary}
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {study.results.map((r) => (
              <div key={r.label} className="rounded-2xl bg-cloud p-6 text-center">
                <div className="text-3xl font-extrabold text-accent-500 md:text-4xl">
                  {r.value}
                </div>
                <div className="mt-2 text-sm font-medium text-ink-soft">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 md:pb-20">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {contentSections.map((sec) => {
              const Icon = sec.icon;
              return (
                <ScrollReveal key={sec.key}>
                  <div>
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="text-2xl font-bold text-brand-700">{sec.label}</h2>
                    </div>
                    <p className="text-lg leading-relaxed text-ink-soft">
                      {study[sec.key as "challenge" | "solution" | "outcome"]}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Publisher Types */}
          <div className="mt-12 rounded-2xl border border-cloud-dark bg-cloud p-6 md:p-8">
            <h3 className="text-lg font-bold text-brand-700">Publisher Types Used</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.publisherTypes.map((p) => (
                <span
                  key={p}
                  className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-brand-700 shadow-soft"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Cases */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-brand-700 md:text-4xl">
            More Case Studies
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((cs) => (
              <Link
                key={cs.id}
                to={`/case-studies/${cs.id}`}
                className="block rounded-2xl bg-white p-6 shadow-soft card-hover"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">
                    {cs.brand}
                  </span>
                  <span className="rounded-lg bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-600">
                    {cs.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-700">{cs.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{cs.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent-500">
                  Read Case Study <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
