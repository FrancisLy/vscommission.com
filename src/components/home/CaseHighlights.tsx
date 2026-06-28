import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionTitle from "@/components/common/SectionTitle";
import { caseStudies } from "@/data/caseStudies";

export default function CaseHighlights() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Success Stories"
          title="Results That Speak for Themselves"
          subtitle="See how leading brands have scaled revenue and expanded globally with VSCommission."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {featured.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 120}>
              <Link
                to={`/case-studies/${study.id}`}
                className="card-hover group flex h-full flex-col rounded-2xl border border-cloud-dark bg-white p-8 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-brand-700">{study.brand}</span>
                  <span className="rounded-full bg-cloud px-3 py-1 text-xs font-semibold text-ink-soft">
                    {study.category}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-brand-700 transition-colors group-hover:text-accent-500">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{study.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
