import ScrollReveal from "@/components/common/ScrollReveal";
import { homeStats } from "@/data/stats";

export default function StatsBar() {
  return (
    <section className="border-b border-cloud-dark bg-white py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {homeStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center md:text-left">
                <div className="text-4xl font-display font-extrabold text-brand-700 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg font-semibold text-ink">{stat.label}</div>
                <p className="mt-1 text-sm text-ink-muted">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
