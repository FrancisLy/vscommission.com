import { Link } from "react-router-dom";
import { Store, UserCheck, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function CTASection() {
  return (
    <section className="section-padding bg-cloud">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Advertisers Card */}
          <ScrollReveal>
            <div className="card-hover relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-soft md:p-10">
              <div className="absolute left-0 top-0 h-1.5 w-full bg-accent-500"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                <Store className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-brand-700 md:text-3xl">
                Drive Sales with Affiliates
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Launch your affiliate program in 48 hours. Tap into 10,000+ vetted publishers and scale
                revenue across four global markets.
              </p>
              <Link to="/contact" className="btn-primary mt-8">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Publishers Card */}
          <ScrollReveal delay={120}>
            <div className="card-hover relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-soft md:p-10">
              <div className="absolute left-0 top-0 h-1.5 w-full bg-brand-700"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <UserCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-brand-700 md:text-3xl">
                Earn More Commission
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Access exclusive offers from 100+ premium brands. Get reliable net-30 payments and earn
                15-25% more than the industry average.
              </p>
              <Link to="/contact" className="btn-secondary mt-8">
                Sign Up
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
